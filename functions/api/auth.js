/**
 * Cloudflare Pages Function — GitHub OAuth handler for Sveltia CMS
 *
 * Required environment variables (set in Cloudflare Pages dashboard):
 *   GITHUB_CLIENT_ID     — from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET — from your GitHub OAuth App
 *
 * GitHub OAuth App settings:
 *   Homepage URL:            https://<your-site>.pages.dev
 *   Authorization callback URL: https://<your-site>.pages.dev/api/auth
 */

function popupScript(message) {
  return `<!DOCTYPE html><html><body><script>
(function(){
  function receive(e){window.opener.postMessage('${message}',e.origin);}
  window.addEventListener('message',receive,false);
  window.opener.postMessage('authorizing:github','*');
})();
<\/script></body></html>`;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const provider = url.searchParams.get('provider') || 'github';

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return new Response('GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set in Cloudflare Pages environment variables.', { status: 500 });
  }

  // Step 1 — redirect to GitHub authorization
  if (!code) {
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
    authUrl.searchParams.set('scope', 'repo,user');
    authUrl.searchParams.set('redirect_uri', `${url.origin}/api/auth`);
    return Response.redirect(authUrl.toString(), 302);
  }

  // Step 2 — exchange code for access token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/auth`,
    }),
  });

  const data = await tokenRes.json();

  if (data.error || !data.access_token) {
    const msg = `authorization:github:error:${JSON.stringify({ error: data.error_description || data.error || 'OAuth failed' })}`;
    return new Response(popupScript(msg), { headers: { 'Content-Type': 'text/html' } });
  }

  const msg = `authorization:${provider}:success:${JSON.stringify({ token: data.access_token, provider })}`;
  return new Response(popupScript(msg), { headers: { 'Content-Type': 'text/html' } });
}
