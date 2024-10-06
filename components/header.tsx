"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { useTransitionRouter } from "next-view-transitions";
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
	const [currentHash, setCurrentHash] = React.useState("");

	const router = useTransitionRouter();

	function handleRoute(hash: string) {
		return () => {
			router.push(hash);
			setCurrentHash(hash);
		};
	}

	return (
		<header className="flex px-4 items-center h-20 container mx-auto fixed">
			<div className="w-44">
				<Logo />
			</div>
			<nav className="flex-1 text-sm justify-center items-center flex">
				<ul className="flex gap-4 py-3 px-6 rounded-3xl items-center border font-medium">
					{LINKS.map(({ href, text }) => (
						<li
							key={href}
							className={cn(
								"hidden sm:inline text-muted-foreground hover:text-foreground",
								currentHash === href && "text-foreground",
							)}
						>
							<h1
								className="cursor-pointer"
								onClick={handleRoute(href)}
								onKeyUp={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleRoute(href)();
									}
								}}
							>
								{text}
							</h1>
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
