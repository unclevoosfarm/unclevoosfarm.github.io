declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', eventName, params);
  }
}

export const analytics = {
  // ── Primary conversions ──────────────────────────────────────────
  // WhatsApp taps are the main lead channel for this business
  whatsappClick: (source: 'stay' | 'tour' | 'contact', itemName?: string) =>
    track('generate_lead', { method: 'whatsapp', source, item_name: itemName }),

  // Contact form submission
  contactFormSubmit: () =>
    track('generate_lead', { method: 'contact_form' }),

  // ── Engagement ───────────────────────────────────────────────────
  heroCTAClick: (slideId: string, ctaLabel: string, destination: string) =>
    track('hero_cta_click', { slide_id: slideId, cta_label: ctaLabel, destination }),

  navClick: (label: string, href: string) =>
    track('nav_click', { link_text: label, link_url: href }),

  languageChange: (from: string, to: string) =>
    track('language_change', { from_language: from, to_language: to }),

  productFilter: (category: string) =>
    track('select_content', { content_type: 'product_category', item_id: category }),

  stayDetailView: (stayName: string) =>
    track('view_item', { item_name: stayName, item_category: 'stay' }),

  contactInfoClick: (type: 'phone' | 'email', value: string) =>
    track('contact_click', { type, value }),

  socialClick: (platform: string) =>
    track('social_click', { platform }),
};
