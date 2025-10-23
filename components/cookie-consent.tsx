'use client';

import { CookieIcon, Settings } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CookiePreferencesDialog } from '@/components/shared/cookie-preferences-dialog';
import { Button } from '@/components/ui/button';
import {
  acceptAllCookies,
  acceptEssentialOnly,
  type CookiePreferences,
  getCookiePreferences,
  hasConsented,
  hasDeclined,
  loadAnalytics,
  setCookiePreferences,
} from '@/lib/cookie-utils';
import { cn } from '@/lib/utils';

interface CookieConsentProps {
  variant?: 'default' | 'small' | 'minimal';
  mode?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
}

export function CookieConsent({
  variant = 'default',
  mode = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
      loadAnalytics();
    }, 700);
    onAcceptCallback();
  };

  const handleDecline = () => {
    acceptEssentialOnly();
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  const handleSavePreferences = () => {
    setCookiePreferences(preferences);
    setShowPreferences(false);
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
      if (preferences.analytics) {
        loadAnalytics();
      }
    }, 700);
    onAcceptCallback();
  };

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return; // Essential cookies can't be disabled
    setPreferences((prev) => ({ ...prev, [category]: value }));
  };

  useEffect(() => {
    try {
      const consented = hasConsented();
      const declined = hasDeclined();

      if (!consented && !declined && !mode) {
        setIsOpen(true);
      } else {
        setHide(true);
        if (consented) {
          const currentPreferences = getCookiePreferences();
          if (currentPreferences.analytics) {
            loadAnalytics();
          }
        }
      }

      setPreferences(getCookiePreferences());
    } catch (error) {
      console.error('Error checking cookie consent:', error);
    }
  }, [mode]);

  return (
    <>
      {variant === 'minimal' && (
        <div
          className={cn(
            'fixed right-0 bottom-0 left-0 z-50 w-full p-4 duration-700 sm:bottom-4 sm:left-4 sm:max-w-[400px] sm:p-0',
            !isOpen
              ? 'translate-y-8 opacity-0 transition-[opacity,transform]'
              : 'translate-y-0 opacity-100 transition-[opacity,transform]',
            hide && 'hidden',
          )}
          role='dialog'
          aria-labelledby='cookie-consent-title'
          aria-describedby='cookie-consent-description'
        >
          <div className='m-0 rounded-lg border border-border bg-background shadow-lg sm:m-3 dark:bg-card'>
            <div className='flex items-center justify-between border-border border-b p-3'>
              <div className='flex items-center gap-2'>
                <CookieIcon className='h-3 w-3 sm:h-4 sm:w-4' />
                <span id='cookie-consent-title' className='font-medium text-xs sm:text-sm'>
                  Cookie Notice
                </span>
              </div>
            </div>
            <div className='p-3'>
              <p
                id='cookie-consent-description'
                className='text-[11px] text-muted-foreground sm:text-xs'
              >
                We use cookies to enhance your browsing experience and analyze site traffic.
              </p>
              <div className='mt-3 flex flex-col gap-2'>
                <div className='grid grid-cols-2 gap-2'>
                  <Button
                    onClick={handleAcceptAll}
                    variant='default'
                    className='w-full text-xs'
                    aria-label='Accept all cookies'
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant='ghost'
                    className='w-full text-xs'
                    aria-label='Decline optional cookies'
                  >
                    Essential Only
                  </Button>
                </div>
                <Button
                  onClick={() => setShowPreferences(true)}
                  variant='outline'
                  size='sm'
                  className='w-full text-xs'
                  aria-label='Customize cookie preferences'
                >
                  <Settings className='mr-1 h-3 w-3' />
                  Customize
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CookiePreferencesDialog
        isOpen={showPreferences}
        onOpenChange={setShowPreferences}
        preferences={preferences}
        onPreferenceChange={handlePreferenceChange}
        onSave={handleSavePreferences}
        onCancel={() => setShowPreferences(false)}
        useLabels={true}
      />
    </>
  );
}
