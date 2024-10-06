"use client";

import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader, X } from "lucide-react";

export default function Cards() {
	const cards = [
		{
			title: "Card Title",
			description: "Card Description",
			content: "Card Content",
			footer: "Card Footer",
			icon: <Loader />,
		},
		{
			title: "Card Title",
			description: "Card Description",
			content: "Card Content",
			footer: "Card Footer",
			icon: <X />,
		},
		{
			title: "Card Title",
			description: "Card Description",
			content: "Card Content",
			footer: "Card Footer",
			icon: <Loader />,
		},
	];
	return (
		<div className="grid grid-cols-2 gap-4">
			{cards.map((card, index) => (
				<Card key={index}>
					<CardHeader>{card.icon}</CardHeader>
					<CardContent>
						<CardTitle>{card.title}</CardTitle>
						<CardDescription>{card.description}</CardDescription>
						<p>{card.content}</p>
					</CardContent>
					<CardFooter>{card.footer}</CardFooter>
				</Card>
			))}
		</div>
	);
}
