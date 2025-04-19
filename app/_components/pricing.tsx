import CTA from '@/components/cta';
import Packages from '@/components/packages';
import Title from '@/components/title';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="flex min-h-fit w-full scroll-m-24 flex-col justify-center text-center"
    >
      <Title>Simple, usage-based pricing that scales with you</Title>
      <CTA title="Simple pricing plans that grow with your needs. No hidden fees." description="" />
      <Packages />
    </section>
  );
}
