import Banner from './_components/banner';
import FAQ from './_components/faq';
import Features from './_components/features';
import GetStarted from './_components/get-started';
import Pricing from './_components/pricing';
import ProblemSolutions from './_components/problem-solutions';
import Testimonials from './_components/testimonials';

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-1 gap-20 p-4 max-sm:gap-10 sm:p-24">
      <Banner />
      <ProblemSolutions />
      <Features />
      <Pricing />
      <Testimonials />
      <GetStarted />
      <FAQ />
    </main>
  );
}
