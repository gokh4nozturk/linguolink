'use client';

import { useEffect } from 'react';
import { getCookiePreferences, hasConsented } from '@/lib/cookie-utils';

export function Analytics() {
  useEffect(() => {
    // Only load analytics if user has consented and enabled analytics
    const consented = hasConsented();
    if (!consented) return;

    const preferences = getCookiePreferences();
    if (!preferences.analytics) return;

    // Check if analytics is already loaded
    if (document.getElementById('vercel-analytics-script')) return;

    // Dynamically load Vercel Analytics
    const script = document.createElement('script');
    script.id = 'vercel-analytics-script';
    script.src = 'https://va.vercel-scripts.com/v1/script.debug.js';
    script.setAttribute('data-endpoint', '/api/_vercel/insights/vitals');
    script.async = true;

    script.onload = () => {
      console.log('Analytics loaded with user consent');
      // Track initial pageview
      if (typeof window !== 'undefined' && (window as Record<string, any>).va) {
        (window as Record<string, any>).va('pageview');
      }
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('vercel-analytics-script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
