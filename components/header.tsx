"use client";

import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "next-view-transitions";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { LINKS } from "@/constants";
import { Menu } from "lucide-react";

export function Header() {
	const [activeSection, setActiveSection] = React.useState("");
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
			<div className="invisible md:visible md:flex md:w-full md:items-center transition-[visibility]">
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
				<nav
					className={cn(
						"top-16 left-0 fixed backdrop-blur-[12px] w-full transition-all h-dvh bg-background z-50 px-4",
						isMenuOpen
							? "visible translate-x-0 opacity-100"
							: "invisible delay-500 translate-x-[-100vw] opacity-0",
					)}
				>
					<ul className=" space-y-4">
						{LINKS.map(({ href, text }) => (
							<li key={href}>
								<Link
									href={href}
									className={cn(
										"text-muted-foreground hover:text-foreground p-0 w-full",
									)}
									onClick={() => {
										setIsMenuOpen(!isMenuOpen);
									}}
								>
									{text}
								</Link>
							</li>
						))}
					</ul>

					<Button asChild className="w-full mt-10">
						<a
							href="http://app.linguolink.gokhanozturk.io"
							target="_blank"
							rel="noopener noreferrer"
						>
							Login
							<ArrowRightIcon className="w-4 h-4 ml-2" />
						</a>
					</Button>
				</nav>
				<div className="flex gap-2 items-center">
					<ModeToggle />
					<Button
						size="icon"
						variant="outline"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<Menu />
					</Button>
				</div>
			</div>
		</header>
	);
}
