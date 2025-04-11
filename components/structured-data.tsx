'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Product' | 'Organization' | 'FAQPage' | 'BreadcrumbList' | 'WebSite';
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Create script element for JSON-LD
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');

    // Set content based on type
    const jsonLD = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    script.textContent = JSON.stringify(jsonLD);
    document.head.appendChild(script);

    // Clean up on unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [type, data]);

  // This component doesn't render anything visibly
  return null;
}
