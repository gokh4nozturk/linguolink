import StructuredData from '@/components/structured-data';
import type { Metadata } from 'next';
import Banner from './_components/banner';
import FAQ from './_components/faq';
import Features from './_components/features';
import GetStarted from './_components/get-started';
import Pricing from './_components/pricing';
import ProblemSolutions from './_components/problem-solutions';
import Testimonials from './_components/testimonials';

export const metadata: Metadata = {
  title: 'LinguoLink - Automate Your Translation Workflow',
  description:
    'LinguoLink helps development teams automate translation workflows, reduce costs, and scale localization with smart pipelines and developer-friendly tools.',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main
      className="grid min-h-screen grid-cols-1 gap-20 p-4 max-sm:gap-10 sm:p-24"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Banner />
      <ProblemSolutions />
      <section itemScope itemType="https://schema.org/Product">
        <meta itemProp="name" content="LinguoLink" />
        <meta
          itemProp="description"
          content="Translation workflow automation platform for developers"
        />
        <Features />
        <Pricing />
        <Testimonials />
      </section>
      <GetStarted />
      <FAQ />

      {/* Product structured data */}
      <StructuredData
        type="Product"
        data={{
          name: 'LinguoLink',
          description: 'Translation workflow automation platform for developers',
          image: 'https://linguolink.com/logo.webp',
          brand: {
            '@type': 'Brand',
            name: 'LinguoLink',
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
        type="WebSite"
        data={{
          name: 'LinguoLink',
          url: 'https://linguolink.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://linguolink.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* Organization structured data */}
      <StructuredData
        type="Organization"
        data={{
          name: 'LinguoLink',
          url: 'https://linguolink.com',
          logo: 'https://linguolink.com/logo.webp',
          sameAs: [
            'https://twitter.com/linguolink',
            'https://github.com/linguolink',
            'https://www.linkedin.com/company/linguolink',
          ],
        }}
      />
    </main>
  );
}
