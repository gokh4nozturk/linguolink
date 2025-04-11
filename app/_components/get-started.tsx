'use client';

import CTA from '@/components/cta';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function GetStarted() {
  const router = useRouter();

  const handleStartFree = () => {
    router.push('/signup?plan=Free');
  };

  const handleBookDemo = () => {
    router.push('/demo');
  };

  return (
    <section id="get-started" className="relative min-h-dvh w-full scroll-m-24 text-center">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-screen bg-indigo-100 px-10 py-20 sm:py-40 dark:bg-indigo-950/40">
        <CTA
          title="Start translating smarter today"
          description="Join developers from around the world who are transforming their translation workflows and saving hours of manual work every week."
        />
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={handleStartFree}>
            Start Free
          </Button>
          <Button size="lg" variant="outline" onClick={handleBookDemo}>
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
