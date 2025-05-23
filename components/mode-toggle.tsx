'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCallback } from 'react';

export function ModeToggle() {
  const { setTheme } = useTheme();

  const switchTheme = useCallback(
    (theme: string) => {
      // @ts-ignore -- View Transitions API may not be in current TypeScript DOM definitions
      if (document.startViewTransition) {
        // @ts-ignore -- View Transitions API may not be in current TypeScript DOM definitions
        document.startViewTransition(() => {
          setTheme(theme);
        });
      } else {
        setTheme(theme);
      }
    },
    [setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Toggle theme"
          variant="outline"
          size="icon"
          className="size-7 rounded-full"
        >
          <SunIcon className="dark:-rotate-90 size-4 rotate-0 scale-100 transition-all dark:scale-0" />
          <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
