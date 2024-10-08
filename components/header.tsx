"use client";

import { LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { EllipsisVertical } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

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
		<header className="fixed z-50 flex h-14 w-full items-center justify-between px-4 backdrop-blur-md dark:border-b dark:border-b-background/10">
			<div className="w-48 px-2 ">
				<Logo />
			</div>
			<div className="invisible transition-[visibility] md:visible md:flex md:w-full md:items-center">
				<nav className="flex flex-1 items-center justify-center text-sm">
					<ul className="flex items-center gap-4 rounded-full border bg-background/50 px-6 py-2 font-medium">
						{LINKS.map(({ href, text }) => (
							<li key={href} className={cn("hidden sm:inline")}>
								<Link
									href={href}
									className={cn(
										"p-0 text-muted-foreground hover:text-foreground",
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
				<div className="flex w-48 items-center justify-end">
					<div className="flex items-center gap-2 pl-3">
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
								<ArrowRightIcon className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div className="md:hidden">
				<nav
					className={cn(
						"fixed top-14 left-0 z-50 h-dvh w-full border-t bg-background px-4 pt-4",
						isMenuOpen
							? "visible translate-x-0 opacity-100"
							: "invisible translate-x-[-100vw] opacity-0 delay-500",
					)}
				>
					<ul className=" space-y-4">
						{LINKS.map(({ href, text }) => (
							<li key={href}>
								<Link
									href={href}
									className={cn(
										"w-full p-0 text-muted-foreground hover:text-foreground",
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

					<Button asChild className="mt-10 w-full">
						<a
							href="http://app.linguolink.gokhanozturk.io"
							target="_blank"
							rel="noopener noreferrer"
						>
							Login
							<ArrowRightIcon className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</nav>
				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button
						size="icon"
						variant="outline"
						className="size-7 rounded-full"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<EllipsisVertical
							className={cn(
								"h-4 w-4 transition-all delay-300",
								isMenuOpen ? "rotate-90" : "rotate-0",
							)}
						/>
					</Button>
				</div>
			</div>
		</header>
	);
}
