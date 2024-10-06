import { BadgeCheck } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

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
		<div className="flex gap-2">
			{packages.map((pkg, idx) => (
				<Card
					key={pkg.name}
					className={cn("w-80 text-left", idx === 1 && "scale-110")}
				>
					<CardHeader className="space-y-4">
						<p className="text-3xl font-semibold">{pkg.name}</p>
						<p className="text-base text-foreground/60">{pkg.description}</p>
					</CardHeader>

					<CardContent className="space-y-4 justify-center flex flex-col">
						<CardTitle className="text-4xl text-left">$ {pkg.price}</CardTitle>
						<Button>Get Started</Button>
						{pkg.features.map((feature, index) => (
							<CardDescription
								key={index}
								className="flex items-center text-sm text-left"
							>
								<BadgeCheck className="w-4 h-4 inline-block mr-2" />
								{feature}
							</CardDescription>
						))}
					</CardContent>
				</Card>
			))}
		</div>
	);
}
