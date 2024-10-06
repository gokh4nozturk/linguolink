"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Link, useTransitionRouter } from "next-view-transitions";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const LINKS = [
	{
		href: "#features",
		text: "Features",
	},
	{
		href: "#pricing",
		text: "Pricing",
	},
	{
		href: "#testimonials",
		text: "Testimonials",
	},
	{
		href: "#faq",
		text: "FAQ",
	},
];

export function Header() {
	const [activeSection, setActiveSection] = React.useState("");
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	React.useEffect(() => {
		if (!mounted) return;
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let closestSection = "";

			for (const section of sections) {
				const rect = section.getBoundingClientRect();

				if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 0) {
					closestSection = section.id;
				}
			}

			setActiveSection(closestSection);
		};

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [mounted]);

	return (
		<header className="flex px-4 items-center h-20 container mx-auto fixed bg-inherit">
			<div className="w-44">
				<Logo />
			</div>
			<nav className="flex-1 text-sm justify-center items-center flex">
				<ul className="flex gap-4 py-2 px-6 rounded-full items-center border font-medium">
					{LINKS.map(({ href, text }) => (
						<li key={href} className={cn("hidden sm:inline")}>
							<Link
								href={href}
								className={cn(
									"text-muted-foreground hover:text-foreground p-0",
									`#${activeSection}` === href &&
										"text-foreground underline underline-offset-4",
								)}
							>
								{text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex gap-2 items-center w-44 justify-end">
				<ModeToggle />

				<Button
					variant="link"
					asChild
					className="hover:bg-slate-100 rounded-3xl"
				>
					<a
						href="http://app.linguolink.gokhanozturk.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						Login
						<ArrowRightIcon className="w-4 h-4 ml-2" />
					</a>
				</Button>
			</div>
		</header>
	);
}
