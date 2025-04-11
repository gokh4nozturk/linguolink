import { Button } from '@/components/ui/button';
import experience from '@/public/experience.svg';
import Image from 'next/image';

export default function Banner() {
  return (
    <section
      id="banner"
      className="flex min-h-dvh w-full scroll-m-24 flex-col items-center pt-1 pb-32 text-center"
    >
      <div className="max-w-4xl text-foreground">
        <div className="py-12 text-center">
          <h1 className="font-bold text-3xl sm:text-7xl">
            Automate Your Translation Workflow — Instantly
          </h1>
          <p className="mt-4 text-foreground/60 text-lg">
            LinguoLink helps dev teams localize faster and reduce costs with smart, scalable
            translation pipelines.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">Get Started Free</Button>
            <Button size="lg" variant="outline">
              See it in Action
            </Button>
          </div>
          <p className="mt-4 text-foreground/60 text-sm">
            Backed by developers from leading tech companies
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-5xl">
        <Image
          className="w-full"
          src={experience}
          alt="Translation workflow automation dashboard with team collaboration"
          priority
        />
      </div>
    </section>
  );
}
