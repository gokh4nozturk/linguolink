'use client';

import { CookieIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import type { CookiePreferences } from '@/lib/cookie-utils';

interface CookiePreferencesDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  preferences: CookiePreferences;
  onPreferenceChange: (category: keyof CookiePreferences, value: boolean) => void;
  onSave: () => void;
  onCancel: () => void;
  useLabels?: boolean;
}

export const CookiePreferencesDialog = ({
  isOpen,
  onOpenChange,
  preferences,
  onPreferenceChange,
  onSave,
  onCancel,
  useLabels = false,
}: CookiePreferencesDialogProps) => {
  const handlePreferenceChange = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'essential') return; // Essential cookies can't be disabled
    onPreferenceChange(category, value);
  };

  const renderCookieOption = (
    id: string,
    category: keyof CookiePreferences,
    title: string,
    description: string,
  ) => {
    const content = (
      <div className='space-y-1'>
        <h4 className='font-medium text-sm'>{title}</h4>
        <p className={`text-muted-foreground text-xs ${useLabels ? 'text-balance' : ''}`}>
          {description}
        </p>
      </div>
    );

    return (
      <div className='flex items-center justify-between rounded-lg border p-3'>
        {useLabels ? (
          <label htmlFor={id} className='w-5/6 cursor-pointer space-y-1'>
            {content}
          </label>
        ) : (
          <div className='space-y-1'>{content}</div>
        )}
        <Switch
          id={useLabels ? id : undefined}
          checked={preferences[category]}
          onCheckedChange={(checked) => handlePreferenceChange(category, checked)}
          aria-label={`Toggle ${title.toLowerCase()}`}
        />
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <CookieIcon className='h-5 w-5' />
            Cookie Preferences
          </DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <div className='space-y-3'>
            {renderCookieOption(
              'essential-cookies',
              'essential',
              'Essential Cookies',
              'Required for the website to function properly. Cannot be disabled.',
            )}

            {renderCookieOption(
              'analytics-cookies',
              'analytics',
              'Analytics Cookies',
              'Help us understand how visitors interact with our website.',
            )}

            {renderCookieOption(
              'marketing-cookies',
              'marketing',
              'Marketing Cookies',
              'Used to track visitors and display relevant ads.',
            )}
          </div>

          <div className='flex gap-2 pt-4'>
            <Button onClick={onSave} className='flex-1'>
              Save Preferences
            </Button>
            <Button onClick={onCancel} variant='outline' className='flex-1'>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
