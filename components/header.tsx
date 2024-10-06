"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "next-view-transitions";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu";
import { LINKS } from "@/constants";

export function Header() {
	const [activeSection, setActiveSection] = React.useState("");

	React.useEffect(() => {
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{
				threshold: 0.75, // %75 görünürlük için tetiklenir
			},
		);
		for (const section of sections) {
			observer.observe(section);
		}
		return () => {
			for (const section of sections) {
				observer.unobserve(section);
			}
		};
	}, []);

	return (
		<header className="flex px-4 items-center justify-between h-16 container mx-auto fixed z-50 backdrop-blur-[12px]">
			<div className="w-44">
				<Logo />
			</div>
			<div className="hidden md:flex md:w-full md:items-center">
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
						className="rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-800"
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
			</div>
			<div className="md:hidden">
				<CommandMenu />
			</div>
		</header>
	);
}
