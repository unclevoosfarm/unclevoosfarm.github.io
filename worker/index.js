/**
 * Cloudflare Worker — GitHub OAuth proxy for Sveltia CMS
 *
 * Required secrets (set via `wrangler secret put` or the Cloudflare dashboard):
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 *
 * GitHub OAuth App:
 *   Homepage URL:              https://unclevoosfarm.github.io/web-page
 *   Authorization callback URL: https://<your-worker>.workers.dev/
 */

function popupHtml(message) {
  return `<!DOCTYPE html><html><body><script>
(function(){
  function receive(e){window.opener.postMessage('${message}',e.origin);}
  window.addEventListener('message',receive,false);
  window.opener.postMessage('authorizing:github','*');
})();
<\/script></body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const provider = url.searchParams.get('provider') || 'github';

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        },
      });
    }

    if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
      return new Response('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET secrets.', { status: 500 });
    }

    // Step 1 — no code yet, redirect to GitHub for authorization
    if (!code) {
      const authUrl = new URL('https://github.com/login/oauth/authorize');
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('scope', 'repo,user');
      authUrl.searchParams.set('redirect_uri', url.origin + '/');
      return Response.redirect(authUrl.toString(), 302);
    }

    // Step 2 — exchange the code for an access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: url.origin + '/',
      }),
    });

    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      const msg = `authorization:github:error:${JSON.stringify({ error: data.error_description || data.error || 'OAuth failed' })}`;
      return new Response(popupHtml(msg), { headers: { 'Content-Type': 'text/html' } });
    }

    const msg = `authorization:${provider}:success:${JSON.stringify({ token: data.access_token, provider })}`;
    return new Response(popupHtml(msg), { headers: { 'Content-Type': 'text/html' } });
  },
};
