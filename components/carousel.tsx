'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
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
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: false positive
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='relative w-full max-w-3xl overflow-hidden px-4'>
      <AnimatePresence initial={false} mode='wait' custom={direction}>
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={springTransition}
          className='flex h-[180px] w-full items-center justify-center sm:h-[520px] lg:h-[340px]'
        >
          <Image
            className='max-h-[170px] w-full rounded-xl object-contain sm:max-h-[510px] lg:max-h-[330px]'
            src={carouselImages[currentImageIndex].src}
            alt={carouselImages[currentImageIndex].alt}
            width={700}
            height={330}
            loading={currentImageIndex === 0 || currentImageIndex === 1 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className='-translate-y-1/2 absolute top-1/2 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-xs hover:bg-primary/20'
        aria-label='Previous image'
        type='button'
      >
        <ChevronLeftIcon className='h-6 w-6' />
      </button>

      <button
        onClick={nextImage}
        className='-translate-y-1/2 absolute top-1/2 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-xs hover:bg-primary/20'
        aria-label='Next image'
        type='button'
      >
        <ChevronRightIcon className='h-6 w-6' />
      </button>

      <div className='-translate-x-1/2 absolute bottom-4 left-1/2 flex gap-2'>
        {carouselImages.map((image, i) => (
          <button
            key={image.src}
            type='button'
            className={`h-2 w-6 rounded-full ${
              i === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentImageIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
