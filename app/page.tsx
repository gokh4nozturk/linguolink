import type { Metadata } from 'next';
import StructuredData from '@/components/structured-data';
import Banner from './_components/banner';
import FAQ from './_components/faq';
import Features from './_components/features';
import GetStarted from './_components/get-started';
import Pricing from './_components/pricing';
import ProblemSolutions from './_components/problem-solutions';
import Testimonials from './_components/testimonials';

export const metadata: Metadata = {
  title: 'Linguolink - Automate Your Translation Workflow',
  description:
    'Linguolink helps development teams automate translation workflows, reduce costs, and scale localization with smart pipelines and developer-friendly tools.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main
      className='grid min-h-screen grid-cols-1 gap-20 p-4 pt-24 max-sm:gap-10 sm:p-24'
      itemScope
      itemType='https://schema.org/WebPage'
    >
      <Banner />
      <ProblemSolutions />
      <section
        itemScope
        itemType='https://schema.org/Product'
        className='grid grid-cols-1 gap-20 max-sm:gap-10'
      >
        <meta itemProp='name' content='Linguolink' />
        <meta
          itemProp='description'
          content='Translation workflow automation platform for developers'
        />
        <Features />
        <Pricing />
        <Testimonials />
      </section>
      <GetStarted />
      <FAQ />

      {/* Product structured data */}
      <StructuredData
        type='Product'
        data={{
          name: 'Linguolink',
          description: 'Translation workflow automation platform for developers',
          image: 'https://linguol.ink/logo.webp',
          brand: {
            '@type': 'Brand',
            name: 'Linguolink',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '0',
            highPrice: '99',
          },
          category: 'Software Development Tools',
          audience: {
            '@type': 'Audience',
            audienceType: 'Developers',
          },
        }}
      />

      {/* WebSite structured data */}
      <StructuredData
        type='WebSite'
        data={{
          name: 'Linguolink',
          url: 'https://linguol.ink',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://linguol.ink/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* Organization structured data */}
      <StructuredData
        type='Organization'
        data={{
          name: 'Linguolink',
          url: 'https://linguol.ink',
          logo: 'https://linguol.ink/logo.webp',
          sameAs: [
            'https://twitter.com/Linguolink',
            'https://github.com/Linguolink',
            'https://www.linkedin.com/company/Linguolink',
          ],
        }}
      />
    </main>
  );
}
