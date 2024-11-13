"use client";

import type { AnimationControls, Transition, Variants } from "framer-motion";
import { motion } from "framer-motion";

const transition: Transition = {
	duration: 0.3,
	opacity: { delay: 0.15 },
};

const variants: Variants = {
	normal: {
		pathLength: 1,
		opacity: 1,
	},
	animate: (custom: number) => ({
		pathLength: [0, 1],
		opacity: [0, 1],
		transition: {
			...transition,
			delay: 0.1 * custom,
		},
	}),
};

const WorkflowIcon = ({
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
			<title>Synced</title>
			<motion.rect
				width="8"
				height="8"
				x="3"
				y="3"
				rx="2"
				variants={variants}
				animate={controls}
				custom={0}
			/>
			<motion.path
				d="M7 11v4a2 2 0 0 0 2 2h4"
				variants={variants}
				animate={controls}
				custom={3}
			/>
			<motion.rect
				width="8"
				height="8"
				x="13"
				y="13"
				rx="2"
				variants={variants}
				animate={controls}
				custom={0}
			/>
		</svg>
	);
};

export { WorkflowIcon };
