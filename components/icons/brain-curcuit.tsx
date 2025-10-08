'use client';

import type { AnimationControls, Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const variants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    scale: [0.5, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const BrainCircuitIcon = ({
  controls,
}: {
  controls?: AnimationControls;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-brain-circuit-icon lucide-brain-circuit"
    >
      <motion.path
        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
        variants={variants}
        animate={controls}
      />
      <motion.path d="M9 13a4.5 4.5 0 0 0 3-4" variants={variants} animate={controls} />
      <motion.path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" variants={variants} animate={controls} />
      <motion.path d="M3.477 10.896a4 4 0 0 1 .585-.396" variants={variants} animate={controls} />
      <motion.path d="M6 18a4 4 0 0 1-1.967-.516" variants={variants} animate={controls} />
      <motion.path d="M12 13h4" variants={variants} animate={controls} />
      <motion.path d="M12 18h6a2 2 0 0 1 2 2v1" variants={variants} animate={controls} />
      <motion.path d="M12 8h8" variants={variants} animate={controls} />
      <motion.path d="M16 8V5a2 2 0 0 1 2-2" variants={variants} animate={controls} />
      <circle cx="16" cy="13" r=".5" />
      <circle cx="18" cy="3" r=".5" />
      <circle cx="20" cy="21" r=".5" />
      <circle cx="20" cy="8" r=".5" />
    </svg>
  );
};

export { BrainCircuitIcon };
