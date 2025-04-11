import Footer from '@/components/footer';
import { Header } from '@/components/header';
import { SubscriptionProvider } from '@/contexts/subscription-context';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'LinguoLink - Automate Your Translation Workflow',
  description: 'Effortlessly manage and automate your translation workflows with LinguoLink.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SubscriptionProvider>
            <Header />
            {children}
            <Footer />
          </SubscriptionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
