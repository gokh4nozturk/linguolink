'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { EllipsisVertical } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import GithubButton from '@/components/ground/github-button';
import { Logo } from '@/components/logo';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/constants';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { cn } from '@/lib/utils';

// Simple debounce function to limit function call frequency
function debounce<Args extends unknown[]>(
  func: (...args: Args) => void,
  delay = 300,
): (...args: Args) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function debouncedFunction(...args: Args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function Header() {
  const [activeSection, setActiveSection] = React.useState('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const appRedirectionUrl = process.env.NEXT_PUBLIC_APP_REDIRECTION_URL;
  const { handleHashClick } = useSmoothScroll({ offset: 96 }); // Match scroll-m-24 (96px)

  React.useEffect(() => {
    const sections = document.querySelectorAll('section');
    if (sections.length === 0) return;

    // Use a debounced handler to reduce the frequency of state updates
    const updateActiveSection = debounce((entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          break; // Only set the first intersecting section
        }
      }
    }, 100);

    const observer = new IntersectionObserver(updateActiveSection, {
      threshold: 0.3, // Lower threshold for better performance
      rootMargin: '0px 0px -20% 0px', // Adjust the detection area
    });

    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      for (const section of sections) {
        observer.unobserve(section);
      }
      observer.disconnect();
    };
  }, []);

  // Check if a link is active based on URL
  const isLinkActive = React.useCallback(
    (href: string) => {
      // For home page sections
      if (href.startsWith('/#')) {
        // When on homepage, check by section id
        if (pathname === '/') {
          return `/#${activeSection}` === href;
        }

        // For standalone pages that match home page sections
        // Remove the hash and compare with current pathname
        // Example: href="/#pricing" should match pathname="/pricing"
        const sectionPath = `/${href.split('#')[1]}`;
        return pathname === sectionPath;
      }

      // For regular pages (comparing pathname directly)
      return pathname === href;
    },
    [activeSection, pathname],
  );

  // Memoize menu items to prevent unnecessary re-renders
  const navItems = React.useMemo(
    () =>
      LINKS.map(({ href, text }) => (
        <li key={href} className={cn('hidden sm:inline')}>
          <Link
            href={href}
            className={cn(
              'p-0 text-muted-foreground hover:text-foreground',
              isLinkActive(href) && 'text-foreground underline underline-offset-4',
            )}
            prefetch={true}
            onClick={(e) => handleHashClick(e, href, pathname)}
          >
            {text}
          </Link>
        </li>
      )),
    [isLinkActive, pathname, handleHashClick],
  );

  // Memoize mobile menu items
  const mobileNavItems = React.useMemo(
    () =>
      LINKS.map(({ href, text }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              'w-full p-0 text-muted-foreground text-sm hover:text-foreground',
              isLinkActive(href) && 'text-foreground underline underline-offset-4',
            )}
            onClick={(e) => {
              setIsMenuOpen(false);
              handleHashClick(e, href, pathname);
            }}
            prefetch={true}
          >
            {text}
          </Link>
        </li>
      )),
    [isLinkActive, pathname, handleHashClick],
  );

  return (
    <header className='fixed z-50 flex h-14 w-full items-center justify-between px-4 backdrop-blur-md dark:border-b dark:border-b-background/10'>
      <div className='w-48 sm:px-2'>
        <Logo />
      </div>
      <div className='hidden opacity-0 transition-[visibility,opacity] md:flex md:w-full md:items-center md:opacity-100'>
        <nav className='flex flex-1 items-center justify-center text-sm'>
          <ul className='flex items-center gap-4 rounded-full border bg-background/50 px-6 py-2 font-medium'>
            {navItems}
          </ul>
        </nav>
        <div className='flex w-48 items-center justify-end'>
          <div className='flex items-center gap-2 pl-3'>
            <ModeToggle />

            <GithubButton variant='link'>
              <a href={appRedirectionUrl} target='_blank' rel='noopener noreferrer'>
                Login
              </a>
            </GithubButton>
          </div>
        </div>
      </div>
      <div
        className={cn('transition-[visibility]', isMenuOpen ? 'visible' : 'invisible delay-500')}
      >
        <nav
          className={cn(
            'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100vw] opacity-0',
          )}
        >
          <ul
            className={cn(
              'flex h-[calc(90%_-_var(--navigation-height))] flex-col md:hidden md:flex-row md:items-center [&_li]:mx-2 [&_li]:border-grey-dark [&_li]:border-b md:[&_li]:border-none',
              'ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
              isMenuOpen && '[&_a]:translate-y-0',
            )}
          >
            {mobileNavItems}
          </ul>

          <div className='flex items-center justify-center px-2 md:hidden'>
            <Button asChild className='mt-10 w-full'>
              <a href={appRedirectionUrl} target='_blank' rel='noopener noreferrer'>
                Login
                <ArrowRightIcon className='ml-2 h-4 w-4' />
              </a>
            </Button>
          </div>
        </nav>
      </div>
      <div className='flex items-center gap-2 md:hidden'>
        <ModeToggle />
        <Button
          size='icon'
          variant='outline'
          className='size-7 rounded-full'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <EllipsisVertical
            className={cn(
              'h-4 w-4 transition-all delay-300',
              isMenuOpen ? 'rotate-90' : 'rotate-0',
            )}
          />
        </Button>
      </div>
    </header>
  );
}
