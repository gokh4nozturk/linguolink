import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Linguolink | Documentation',
  description:
    'Official documentation for Linguolink - Learn languages through authentic conversations.',
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='relative pt-14'>
      {/* Breadcrumbs */}
      <div className='border-b bg-muted/40'>
        <div className='container mx-auto px-4 py-3'>
          <nav className='flex' aria-label='Breadcrumb'>
            <ol className='flex items-center space-x-2 text-sm'>
              <li>
                <Link href='/' className='text-muted-foreground hover:underline'>
                  Home
                </Link>
              </li>
              <li className='flex items-center'>
                <span className='mx-2 text-muted-foreground'>/</span>
                <span className='font-medium'>Documentation</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
