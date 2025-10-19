'use client';

import { useCallback } from 'react';

interface UseSmoothScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const { offset = 0, behavior = 'smooth', block = 'start' } = options;

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) {
        console.warn(`Element with id "${sectionId}" not found`);
        return;
      }

      // Get the element's position
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

      // Calculate the final scroll position with offset
      const scrollToPosition = elementTop - offset;

      // Use native scrollTo for better control over offset
      if (offset !== 0) {
        window.scrollTo({
          top: scrollToPosition,
          behavior,
        });
      } else {
        // Use scrollIntoView for default behavior
        element.scrollIntoView({
          behavior,
          block,
        });
      }
    },
    [offset, behavior, block],
  );

  const scrollToHash = useCallback(
    (hash: string) => {
      // Remove the # if present
      const sectionId = hash.replace('#', '');
      scrollToSection(sectionId);
    },
    [scrollToSection],
  );

  const handleHashClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, pathname: string) => {
      if (href.startsWith('/#') && pathname === '/') {
        e.preventDefault();
        const sectionId = href.replace('/#', '');
        scrollToSection(sectionId);
      }
    },
    [scrollToSection],
  );

  return {
    scrollToSection,
    scrollToHash,
    handleHashClick,
  };
}
