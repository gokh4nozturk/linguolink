import Carousel from '@/components/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Banner() {
  return (
    <section
      id="banner"
      className="flex w-full flex-col items-center gap-10 overflow-hidden py-6 text-center"
    >
      <div className="w-full max-w-2xl px-4 text-foreground">
        <div className="py-4 text-center">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">
            Automate Your Translation Workflow — Instantly
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-foreground/60 text-sm sm:text-base">
            Linguolink helps dev teams localize faster and reduce costs with smart, scalable
            translation pipelines.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            <Button size="default" asChild>
              <Link href="/signup?plan=free">Get Started Free</Link>
            </Button>
            <Button size="default" variant="outline" asChild>
              <Link href="/demo">See it in Action</Link>
            </Button>
          </div>
          <p className="mt-2 text-foreground/60 text-xs">
            Backed by developers from leading tech companies
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
