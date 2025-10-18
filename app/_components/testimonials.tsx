import CTA from '@/components/cta';
import { Reviews } from '@/components/reviews';
import Title from '@/components/title';

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='flex min-h-fit w-full scroll-m-24 flex-col justify-center text-center'
    >
      <Title>Real feedback from real users</Title>
      <CTA
        title="Teams are saving time and money with Linguolink's automated translation platform."
        description=''
      />
      <Reviews />
    </section>
  );
}
