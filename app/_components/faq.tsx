import CTA from '@/components/cta';
import Questions from '@/components/questions';

export default function FAQ() {
  return (
    <section
      id='faq'
      className='flex min-h-fit w-full scroll-m-24 flex-col justify-center pb-40 text-center'
    >
      <CTA
        title='Frequently asked questions'
        description='Have questions? We’ve got answers! Explore our FAQ section to find quick solutions and tips to make the most of our platform. Your success is just a click away!'
      />
      <Questions />
    </section>
  );
}
