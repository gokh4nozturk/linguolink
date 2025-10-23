'use client';

import { Command, Monitor, MoonIcon, SunIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import * as React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { LINKS } from '@/constants';
import { Button } from './ui/button';

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Optimize navigation to prevent delays
  const handleOnClick = React.useCallback(
    (href: string) => {
      // Close the dialog first
      setOpen(false);

      // Use setTimeout to ensure dialog closes before navigation
      setTimeout(() => {
        router.push(href);
      }, 10);
    },
    [router],
  );

  // Memoize link items to avoid unnecessary re-renders
  const linkItems = React.useMemo(
    () =>
      LINKS.map(({ href, text, icon }) => (
        <CommandItem
          className='flex items-center gap-2'
          key={href}
          onSelect={() => handleOnClick(href)}
        >
          <span>{icon}</span>
          <span>{text}</span>
        </CommandItem>
      )),
    [handleOnClick],
  );

  return (
    <>
      <Button variant='outline' size='icon' className='' onClick={() => setOpen(true)}>
        <Command size={16} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Links'>{linkItems}</CommandGroup>
          <CommandGroup heading='Theme'>
            <CommandItem onSelect={() => setTheme('dark')}>
              <MoonIcon className='mr-2 size-4' />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => setTheme('light')}>
              <SunIcon className='mr-2 size-4' />
              Light
            </CommandItem>
            <CommandItem onSelect={() => setTheme('system')}>
              <Monitor className='mr-2 size-4' />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
