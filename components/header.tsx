"use client";

import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Header() {
	return (
		<header className="flex px-4 items-center h-20 container mx-auto">
			<div className="w-44">
				<Logo />
			</div>
			<nav className="flex-1 text-sm justify-center items-center flex">
				<ul className="flex gap-4 py-3 px-6 rounded-3xl items-center border">
					<li className="hidden sm:inline">
						<Link href="#features">
							<h1>Features</h1>
						</Link>
					</li>
					<li className="hidden sm:inline">
						<Link href="#pricing">
							<h1>Pricing</h1>
						</Link>
					</li>
					<li className="hidden sm:inline">
						<Link href="#testimonials">
							<h1>Testimonials</h1>
						</Link>
					</li>
					<li className="hidden sm:inline">
						<Link href="#faq">
							<h1>FAQ</h1>
						</Link>
					</li>
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
