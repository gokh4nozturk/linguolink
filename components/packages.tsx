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
			name: "Basic",
			description: "Basic package",
			price: 0.99,
			features: [
				"Access to core features",
				"Up to 5 users",
				"Basic customer support",
			],
		},
		{
			name: "Pro",
			description: "Pro package",
			price: 4.99,
			features: [
				"All Basic features included",
				"Up to 20 users",
				"Priority customer support",
				"Advanced analytics and reporting",
			],
		},
		{
			name: "Enterprise",
			description: "Enterprise package",
			price: 9.99,
			features: [
				"All Pro features included",
				"Unlimited users",
				"Dedicated account manager",
				"Custom integrations and solutions",
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
						<CardTitle className="text-left text-4xl">$ {pkg.price}</CardTitle>
						<Button>Get Started</Button>
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
