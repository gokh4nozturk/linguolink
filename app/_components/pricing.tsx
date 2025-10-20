import CTA from '@/components/cta';
import Packages from '@/components/shared/packages';
import UsageBasedPackage from '@/components/shared/usage-based-package';
import Title from '@/components/title';

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='flex min-h-fit w-full scroll-m-24 flex-col justify-center text-center'
    >
      <Title>Simple, usage-based pricing that scales with you</Title>
      <CTA title='Simple pricing plan that grow with your needs. No hidden fees.' description='' />
      {/*<UsageBasedPackage />*/}
      <Packages />
    </section>
  );
}
