'use client';

import { motion } from 'framer-motion';
import { CloudUpload } from 'lucide-react';

export function CloudIcon({ controls }: { controls?: any }) {
  return (
    <motion.div
      animate={controls}
      variants={{
        normal: {
          rotate: 0,
          scale: 1,
        },
        animate: {
          rotate: [0, -5, 5, 0],
          scale: [1, 1.1, 1],
        },
      }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
      }}
    >
      <CloudUpload className='size-6' />
    </motion.div>
  );
}
