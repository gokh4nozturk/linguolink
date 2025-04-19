import Footer from '@/components/footer';
import { Header } from '@/components/header';
import { SubscriptionProvider } from '@/contexts/subscription-context';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Linguolink - Automate Your Translation Workflow',
    template: '%s | Linguolink',
  },
  description:
    'Effortlessly manage and automate your translation workflows with Linguolink. Smart localization management for developers, streamlining translation pipelines.',
  keywords: [
    'Linguolink',
    'translation management',
    'localization',
    'localization management',
    'i18n',
    'translation automation',
    'translation workflow',
    'localization tools',
    'developer translation',
  ],
  authors: [{ name: 'Linguolink Team' }],
  creator: 'Linguolink',
  publisher: 'Linguolink',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linguol.ink',
    siteName: 'Linguolink',
    title: 'Linguolink - Automate Your Translation Workflow',
    description:
      'Smart localization management for developers. Streamline your translation pipelines and reduce costs.',
    images: [
      {
        url: 'https://linguol.ink/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linguolink - Localization Management for Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linguolink - Automate Your Translation Workflow',
    description:
      'Smart localization management for developers. Streamline your translation pipelines and reduce costs.',
    images: ['https://linguol.ink/og-image.png'],
    creator: '@Linguolink',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://linguol.ink'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  category: 'Technology',
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
        <Analytics />
      </body>
    </html>
  );
}
