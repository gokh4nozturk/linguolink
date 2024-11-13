"use client";

import {
	CheckIcon,
	CogIcon,
	CpuIcon,
	HandCoinsIcon,
	RabbitIcon,
	WorkflowIcon,
} from "@/components/icons";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAnimation } from "framer-motion";
import React from "react";

export default function Cards() {
	const controls = useAnimation();
	const cards = [
		{
			title: "Easy to use",
			description:
				"User-friendly interface designed to simplify complex tasks, making it easy for anyone to get started.",
			icon: <CogIcon />,
		},
		{
			title: "Reliable",
			description:
				"Built with stability in mind, ensuring consistent performance and minimizing downtime.",
			icon: <CheckIcon />,
		},
		{
			title: "Synced",
			description:
				"Seamless integration with other tools and platforms to streamline your workflow.",
			icon: <WorkflowIcon />,
		},
		{
			title: "Fast",
			description:
				"Optimized for speed to deliver quick responses and efficient processing.",
			icon: <RabbitIcon />,
		},
		{
			title: "Affordable",
			description:
				"Cost-effective solutions that provide high value without breaking the bank.",
			icon: <HandCoinsIcon />,
		},
		{
			title: "AI-powered",
			description:
				"Utilizes artificial intelligence and machine learning to enhance performance and accuracy.",
			icon: <CpuIcon />,
		},
	];

	return (
		<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{cards.map((card, index) => {
				const controls = useAnimation();

				return (
					<Card
						key={index}
						className="transition-all hover:scale-[1.015] hover:drop-shadow-lg dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
						onMouseEnter={() => controls.start("animate")}
						onMouseLeave={() => controls.start("normal")}
					>
						<CardHeader>
							{React.cloneElement(card.icon, { controls })}
						</CardHeader>
						<CardContent className="space-y-1 text-left">
							<CardTitle>{card.title}</CardTitle>
							<CardDescription>{card.description}</CardDescription>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
