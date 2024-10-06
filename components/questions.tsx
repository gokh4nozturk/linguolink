"use client";

import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
	const faq = [
		{
			question: "Is it easy to use?",
			answer:
				"Yes. The user-friendly interface ensures that anyone can start using it without a steep learning curve.",
		},
		{
			question: "Is it reliable?",
			answer:
				"Absolutely. It's designed to provide consistent performance and minimize any disruptions.",
		},
		{
			question: "Is it secure?",
			answer:
				"Yes. We implement top-tier security practices to protect your data and ensure privacy.",
		},
		{
			question: "Is it fast?",
			answer:
				"Yes. It's optimized for speed, ensuring quick loading times and smooth operation.",
		},
		{
			question: "Is it affordable?",
			answer:
				"Definitely. We offer competitive pricing that ensures high value for your investment.",
		},
		{
			question: "Is it scalable?",
			answer:
				"Yes. It's built to grow with your business, easily handling increased demand and users.",
		},
	];

	return (
		<Accordion type="single" collapsible>
			{faq.map((question, index) => (
				<AccordionItem key={index} value={`item-${index}`}>
					<AccordionTrigger>{question.question}</AccordionTrigger>
					<AccordionContent className="text-left">
						{question.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
