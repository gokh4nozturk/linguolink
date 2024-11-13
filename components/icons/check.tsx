"use client";

import type { AnimationControls, Variants } from "framer-motion";
import { motion } from "framer-motion";

const pathVariants: Variants = {
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

const CheckIcon = ({
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
		>
			<title>Reliable</title>
			<motion.path
				variants={pathVariants}
				initial="normal"
				animate={controls}
				d="M4 12 9 17L20 6"
			/>
		</svg>
	);
};

export { CheckIcon };
