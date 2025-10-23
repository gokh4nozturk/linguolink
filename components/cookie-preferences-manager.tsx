'use client';

import { CookieIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CookiePreferencesDialog } from '@/components/shared/cookie-preferences-dialog';
import { Button } from '@/components/ui/button';
import {
  type CookiePreferences,
  getCookiePreferences,
  hasConsented,
  loadAnalytics,
  setCookiePreferences,
} from '@/lib/cookie-utils';

interface CookiePreferencesManagerProps {
  className?: string;
}

export function CookiePreferencesManager({ className = '' }: CookiePreferencesManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [hasUserConsented, setHasUserConsented] = useState(false);

  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return; // Essential cookies can't be disabled
    setPreferences((prev) => ({ ...prev, [category]: value }));
  };

  const handleSavePreferences = () => {
    setCookiePreferences(preferences);
    setIsOpen(false);

    // Load analytics if user enabled it
    if (preferences.analytics) {
      loadAnalytics();
    }
  };

  useEffect(() => {
    const consented = hasConsented();
    setHasUserConsented(consented);
    if (consented) {
      setPreferences(getCookiePreferences());
    }
  }, []);

  // Don't show if user hasn't consented yet
  if (!hasUserConsented) {
    return null;
  }

  return (
    <>
      <Button
        size='sm'
        className={`text-xs ${className}`}
        aria-label='Manage cookie preferences'
        onClick={() => setIsOpen(true)}
      >
        <CookieIcon className='mr-1 h-3 w-3' />
        Cookie Preferences
      </Button>
      <CookiePreferencesDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        preferences={preferences}
        onPreferenceChange={handlePreferenceChange}
        onSave={handleSavePreferences}
        onCancel={() => setIsOpen(false)}
        useLabels={true}
      />
    </>
  );
}
