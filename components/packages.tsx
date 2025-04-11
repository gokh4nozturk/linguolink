import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function Packages() {
	const packages = [
		{
			name: "Free",
			description: "For small projects and individual developers",
			price: 0,
			features: [
				"1 project",
				"10,000 characters/month",
				"1 user",
				"Basic dashboard",
			],
		},
		{
			name: "Growth",
			description: "For growing teams and startups",
			price: 19,
			features: [
				"5 projects",
				"100,000 characters/month",
				"Team access",
				"Webhook support",
				"Export functionality",
			],
		},
		{
			name: "Pro",
			description: "For professional teams",
			price: 79,
			features: [
				"Unlimited projects",
				"Unlimited characters",
				"API access",
				"Priority support",
				"Role management",
				"CI/CD integration",
			],
		},
	];

	return (
		<div className="flex flex-col gap-2 sm:flex-row">
			{packages.map((pkg, idx) => (
				<Card
					key={pkg.name}
					className={cn("text-left sm:w-80", idx === 1 && "sm:scale-110")}
				>
					<CardHeader className="space-y-4">
						<p className="font-semibold text-3xl">{pkg.name}</p>
						<p className="text-base text-foreground/60">{pkg.description}</p>
					</CardHeader>

					<CardContent className="flex flex-col justify-center space-y-4">
						<CardTitle className="text-left text-4xl">
							{pkg.price === 0 ? "Free" : `$${pkg.price}/mo`}
						</CardTitle>
						<Button>{pkg.price === 0 ? "Start Free" : "Subscribe"}</Button>
						{pkg.features.map((feature, index) => (
							<CardDescription
								key={index}
								className="flex items-center text-left text-sm"
							>
								<BadgeCheck className="mr-2 inline-block h-4 w-4" />
								{feature}
							</CardDescription>
						))}
					</CardContent>
				</Card>
			))}
		</div>
	);
}
