'use client';

import { CookieConsent } from '@/components/cookie-consent';

export default function Cookie() {
  return (
    <CookieConsent
      variant='minimal'
      onAcceptCallback={() => {
        // Handle accept
      }}
      onDeclineCallback={() => {
        // Handle decline
      }}
    />
  );
}
