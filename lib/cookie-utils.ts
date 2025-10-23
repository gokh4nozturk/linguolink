export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const defaultCookiePreferences: CookiePreferences = {
  essential: true, // Always true, can't be disabled
  analytics: false,
  marketing: false,
};

export const COOKIE_CONSENT_NAME = 'linguolink-cookie-consent';
export const COOKIE_PREFERENCES_NAME = 'linguolink-cookie-preferences';

export const setCookie = (name: string, value: string, days = 365): void => {
  if (typeof document === 'undefined') return;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  const cookieString = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `expires=${expires.toUTCString()}`,
    'path=/',
    'SameSite=Lax',
  ].join('; ');

  try {
    // biome-ignore lint/suspicious/noDocumentCookie: Required for cookie consent functionality
    document.cookie = cookieString;
  } catch (error) {
    console.warn('Failed to set cookie:', error);
  }
};

export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;

  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string): void => {
  if (typeof document === 'undefined') return;

  const cookieString = [
    `${encodeURIComponent(name)}=`,
    'expires=Thu, 01 Jan 1970 00:00:00 UTC',
    'path=/',
  ].join('; ');

  try {
    // biome-ignore lint/suspicious/noDocumentCookie: Required for cookie management
    document.cookie = cookieString;
  } catch (error) {
    console.warn('Failed to delete cookie:', error);
  }
};

export const hasConsented = (): boolean => {
  return getCookie(COOKIE_CONSENT_NAME) === 'true';
};

export const hasDeclined = (): boolean => {
  return getCookie(COOKIE_CONSENT_NAME) === 'false';
};

export const getCookiePreferences = (): CookiePreferences => {
  const preferences = getCookie(COOKIE_PREFERENCES_NAME);
  if (!preferences) return defaultCookiePreferences;

  try {
    return { ...defaultCookiePreferences, ...JSON.parse(preferences) };
  } catch {
    return defaultCookiePreferences;
  }
};

export const setCookiePreferences = (preferences: CookiePreferences): void => {
  setCookie(COOKIE_PREFERENCES_NAME, JSON.stringify(preferences));
};

export const acceptAllCookies = (): void => {
  const preferences: CookiePreferences = {
    essential: true,
    analytics: true,
    marketing: true,
  };

  setCookie(COOKIE_CONSENT_NAME, 'true');
  setCookiePreferences(preferences);
};

export const acceptEssentialOnly = (): void => {
  setCookie(COOKIE_CONSENT_NAME, 'false');
  setCookiePreferences(defaultCookiePreferences);
};

export const loadAnalytics = (): void => {
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
    // Initialize analytics if available
    if ((window as any).va) {
      (window as any).va('pageview');
    }
  };

  document.head.appendChild(script);
};
