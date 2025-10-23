import type { Metadata } from 'next';
import { CookiePreferencesManager } from '@/components/cookie-preferences-manager';

export const metadata: Metadata = {
  title: 'Cookie Policy - Linguolink',
  description:
    'Learn about how Linguolink uses cookies to enhance your browsing experience and provide better services.',
  alternates: {
    canonical: '/privacy/cookies',
  },
};

export default function CookiePolicyPage() {
  return (
    <main className='container mx-auto max-w-4xl px-4 py-24'>
      <div className='space-y-8'>
        <div className='space-y-4 text-center'>
          <h1 className='font-bold text-4xl tracking-tight'>Cookie Policy</h1>
          <p className='text-muted-foreground text-xl'>
            How we use cookies to enhance your experience
          </p>
          <p className='text-muted-foreground text-sm'>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className='flex justify-center'>
          <CookiePreferencesManager />
        </div>

        <div className='prose prose-gray dark:prose-invert max-w-none space-y-8'>
          <section>
            <h2 className='mb-4 font-semibold text-2xl'>What are cookies?</h2>
            <p className='text-muted-foreground leading-relaxed'>
              Cookies are small text files that are stored on your device when you visit a website.
              They help websites remember information about your visit, which can make it easier to
              visit the site again and make the site more useful to you.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-semibold text-2xl'>How we use cookies</h2>
            <p className='mb-4 text-muted-foreground leading-relaxed'>
              Linguolink uses cookies to enhance your browsing experience and provide better
              services. We categorize our cookies into the following types:
            </p>

            <div className='space-y-6'>
              <div className='rounded-lg border p-6'>
                <h3 className='mb-2 font-medium text-green-600 text-lg'>Essential Cookies</h3>
                <p className='mb-3 text-muted-foreground'>
                  These cookies are necessary for the website to function properly and cannot be
                  disabled.
                </p>
                <ul className='list-inside list-disc space-y-1 text-muted-foreground text-sm'>
                  <li>Session management and authentication</li>
                  <li>Security and fraud prevention</li>
                  <li>Website functionality and navigation</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              <div className='rounded-lg border p-6'>
                <h3 className='mb-2 font-medium text-blue-600 text-lg'>Analytics Cookies</h3>
                <p className='mb-3 text-muted-foreground'>
                  These cookies help us understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </p>
                <ul className='list-inside list-disc space-y-1 text-muted-foreground text-sm'>
                  <li>Page views and user interactions</li>
                  <li>Traffic sources and referrals</li>
                  <li>Performance metrics and error tracking</li>
                  <li>User journey and behavior analysis</li>
                </ul>
                <p className='mt-2 text-muted-foreground text-xs'>
                  <strong>Third-party service:</strong> Vercel Analytics
                </p>
              </div>

              <div className='rounded-lg border p-6'>
                <h3 className='mb-2 font-medium text-lg text-purple-600'>Marketing Cookies</h3>
                <p className='mb-3 text-muted-foreground'>
                  These cookies are used to track visitors across websites to display relevant
                  advertisements and measure campaign effectiveness.
                </p>
                <ul className='list-inside list-disc space-y-1 text-muted-foreground text-sm'>
                  <li>Advertising personalization</li>
                  <li>Campaign performance tracking</li>
                  <li>Cross-site visitor tracking</li>
                  <li>Social media integration</li>
                </ul>
                <p className='mt-2 text-muted-foreground text-xs'>
                  <strong>Note:</strong> Currently not implemented on our website.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='mb-4 font-semibold text-2xl'>Cookie details</h2>
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse border border-gray-300 dark:border-gray-600'>
                <thead>
                  <tr className='bg-gray-50 dark:bg-gray-800'>
                    <th className='border border-gray-300 px-4 py-2 text-left dark:border-gray-600'>
                      Cookie Name
                    </th>
                    <th className='border border-gray-300 px-4 py-2 text-left dark:border-gray-600'>
                      Purpose
                    </th>
                    <th className='border border-gray-300 px-4 py-2 text-left dark:border-gray-600'>
                      Duration
                    </th>
                    <th className='border border-gray-300 px-4 py-2 text-left dark:border-gray-600'>
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-mono text-sm dark:border-gray-600'>
                      linguolink-cookie-consent
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Stores your cookie consent choice
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      1 year
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Essential
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-mono text-sm dark:border-gray-600'>
                      linguolink-cookie-preferences
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Stores your cookie category preferences
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      1 year
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Essential
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-300 px-4 py-2 font-mono text-sm dark:border-gray-600'>
                      _vercel_analytics_*
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Analytics and performance tracking
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Session
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-sm dark:border-gray-600'>
                      Analytics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className='mb-4 font-semibold text-2xl'>Managing your preferences</h2>
            <p className='mb-4 text-muted-foreground leading-relaxed'>
              You have full control over your cookie preferences. You can:
            </p>
            <ul className='mb-4 list-inside list-disc space-y-2 text-muted-foreground'>
              <li>Accept or decline optional cookies when you first visit our site</li>
              <li>Change your preferences at any time using the cookie preferences manager</li>
              <li>Clear cookies through your browser settings</li>
              <li>Use browser settings to block cookies entirely</li>
            </ul>
            <p className='text-muted-foreground text-sm'>
              <strong>Note:</strong> Disabling essential cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-semibold text-2xl'>Browser controls</h2>
            <p className='mb-4 text-muted-foreground leading-relaxed'>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
              <li>View and delete cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close the browser</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-4 font-semibold text-2xl'>Contact us</h2>
            <p className='text-muted-foreground leading-relaxed'>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href='mailto:privacy@linguol.ink' className='text-primary hover:underline'>
                privacy@linguol.ink
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
