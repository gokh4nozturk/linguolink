'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Banner() {
  const storageBaseUrl = 'https://storage.linguol.ink/images';

  const carouselImages = [
    {
      src: `${storageBaseUrl}/analytics.svg`,
      alt: 'Analytics dashboard showing translation metrics',
    },
    {
      src: `${storageBaseUrl}/cloud-docs.svg`,
      alt: 'Cloud document management interface',
    },
    {
      src: `${storageBaseUrl}/collaborating.svg`,
      alt: 'Team collaboration on translation projects',
    },
    {
      src: `${storageBaseUrl}/file-manager.svg`,
      alt: 'File management system for translations',
    },
    {
      src: `${storageBaseUrl}/file-sync.svg`,
      alt: 'File synchronization across platforms',
    },
    {
      src: `${storageBaseUrl}/in-sync.svg`,
      alt: 'Synchronization across devices and platforms',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const springTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    duration: 0.6,
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const [direction, setDirection] = useState(1);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      <div className="relative w-full max-w-5xl overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            className="flex h-[400px] w-full items-center justify-center"
          >
            <Image
              className="max-h-[400px] w-full rounded-2xl object-contain"
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              width={800}
              height={400}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="-translate-y-1/2 absolute top-1/2 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm hover:bg-primary/20"
          aria-label="Previous image"
          type="button"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={nextImage}
          className="-translate-y-1/2 absolute top-1/2 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm hover:bg-primary/20"
          aria-label="Next image"
          type="button"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        <div className="-translate-x-1/2 absolute bottom-4 left-1/2 flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={`image-${i}`}
              type="button"
              className={`h-2 w-2 rounded-full ${
                i === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              onClick={() => setCurrentImageIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
