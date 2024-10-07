"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartSpline,
	Check,
	Cog,
	Cpu,
	HandCoins,
	Lock,
	Rabbit,
	Workflow,
} from "lucide-react";

export default function Cards() {
	const cards = [
		{
			title: "Easy to use",
			description:
				"User-friendly interface designed to simplify complex tasks, making it easy for anyone to get started.",
			icon: <Cog />,
		},
		{
			title: "Reliable",
			description:
				"Built with stability in mind, ensuring consistent performance and minimizing downtime.",
			icon: <Check />,
		},
		{
			title: "Synced",
			description:
				"Seamless integration with other tools and platforms to streamline your workflow.",
			icon: <Workflow />,
		},
		{
			title: "Fast",
			description:
				"Optimized for speed to deliver quick responses and efficient processing.",
			icon: <Rabbit />,
		},
		{
			title: "Affordable",
			description:
				"Cost-effective solutions that provide high value without breaking the bank.",
			icon: <HandCoins />,
		},
		{
			title: "AI-powered",
			description:
				"Utilizes artificial intelligence and machine learning to enhance performance and accuracy.",
			icon: <Cpu />,
		},
	];
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{cards.map((card, index) => (
				<Card
					key={index}
					className="hover:drop-shadow-lg hover:scale-[1.015] dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all"
				>
					<CardHeader>{card.icon}</CardHeader>
					<CardContent className="text-left space-y-1">
						<CardTitle>{card.title}</CardTitle>
						<CardDescription>{card.description}</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
