'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Banner() {
  const router = useRouter();
  const storageBaseUrl = 'https://storage.linguol.ink/images';

  const carouselImages = [
    {
      src: `${storageBaseUrl}/cloud-docs.svg`,
      alt: 'Cloud document management interface',
    },
    {
      src: `${storageBaseUrl}/file-sync.svg`,
      alt: 'File synchronization across platforms',
    },
    {
      src: `${storageBaseUrl}/percentages.svg`,
      alt: 'Percentage of translation progress',
    },
    {
      src: `${storageBaseUrl}/pull-request.svg`,
      alt: 'Pull request for translation',
    },
    {
      src: `${storageBaseUrl}/real-time-sync.svg`,
      alt: 'Synchronization across devices and platforms',
    },
    {
      src: `${storageBaseUrl}/file-manager.svg`,
      alt: 'File management system for translations',
    },
    {
      src: `${storageBaseUrl}/speech-to-text.svg`,
      alt: 'Speech-to-text translation',
    },
    {
      src: `${storageBaseUrl}/time-management.svg`,
      alt: 'Time management for translations',
    },
    {
      src: `${storageBaseUrl}/typewriter.svg`,
      alt: 'Typewriter for translations',
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

  const handleGetStarted = () => {
    router.push('/signup?plan=Free');
  };

  const handleSeeAction = () => {
    router.push('/demo');
  };

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
            <Button size="default" onClick={handleGetStarted}>
              Get Started Free
            </Button>
            <Button size="default" variant="outline" onClick={handleSeeAction}>
              See it in Action
            </Button>
          </div>
          <p className="mt-2 text-foreground/60 text-xs">
            Backed by developers from leading tech companies
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-3xl overflow-hidden px-4">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
            className="flex h-[180px] w-full items-center justify-center sm:h-[220px] md:h-[250px]"
          >
            <Image
              className="max-h-[170px] w-full rounded-xl object-contain sm:max-h-[210px] md:max-h-[240px]"
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              width={700}
              height={300}
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
          {carouselImages.map((image, i) => (
            <button
              key={image.src}
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
