"use client";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const LINKS = [
	{
		href: "#features",
		text: "Features",
		active: false,
	},
	{
		href: "#pricing",
		text: "Pricing",
		active: false,
	},
	{
		href: "#testimonials",
		text: "Testimonials",
		active: false,
	},
	{
		href: "#faq",
		text: "FAQ",
		active: false,
	},
];

export function Header() {
	return (
		<header className="flex px-4 items-center h-20 container mx-auto">
			<div className="w-44">
				<Logo />
			</div>
			<nav className="flex-1 text-sm justify-center items-center flex">
				<ul className="flex gap-4 py-3 px-6 rounded-3xl items-center border font-medium">
					{LINKS.map(({ href, text, active }) => (
						<li
							key={href}
							className={cn(
								"hidden sm:inline text-muted-foreground hover:text-foreground",
								active && "text-foreground",
							)}
						>
							<Link href={href}>
								<h1>{text}</h1>
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
