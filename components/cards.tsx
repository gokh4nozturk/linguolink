"use client";

import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartSpline, Check, Cog, HandCoins, Lock, Rabbit } from "lucide-react";

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
			title: "Secure",
			description:
				"Advanced security measures to protect your data and ensure privacy.",
			icon: <Lock />,
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
			title: "Scalable",
			description:
				"Designed to grow with your needs, easily handling increasing workloads and users.",
			icon: <ChartSpline />,
		},
	];
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
			{cards.map((card, index) => (
				<Card key={index}>
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
