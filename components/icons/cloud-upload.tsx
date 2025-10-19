/** biome-ignore-all lint/a11y/noStaticElementInteractions: false positive */
'use client';

import type { AnimationControls } from 'framer-motion';
import { motion } from 'framer-motion';

const CloudUploadIcon = ({ controls }: { controls?: AnimationControls }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path
        custom={1}
        animate={controls}
        variants={{
          normal: { pathLength: [1] },
          animate: {
            pathLength: [0, 1],
            transition: (custom: number) => ({ duration: 1, delay: custom * 0.1 }),
          },
        }}
        d='M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2'
      />
      <motion.g
        custom={2}
        animate={controls}
        variants={{
          normal: { y: 0 },
          animate: {
            y: [4, 0],
            transition: (custom: number) => ({ duration: 0.3, delay: custom * 0.1 }),
          },
        }}
        transition={{
          duration: 0.3,
          ease: [0.68, -0.6, 0.32, 1.6],
        }}
      >
        <path d='M12 13v8' />
        <path d='m8 17 4-4 4 4' />
      </motion.g>
    </svg>
  );
};

CloudUploadIcon.displayName = 'CloudUploadIcon';

export { CloudUploadIcon };
