import Cards from '@/components/cards';
import Title from '@/components/title';
export default function Features() {
  return (
    <section
      id="features"
      className="flex min-h-fit w-full scroll-m-24 flex-col justify-center text-center"
    >
      <Title>Feature Highlights</Title>
      <Cards />
    </section>
  );
}
