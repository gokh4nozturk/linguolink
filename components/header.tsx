"use client";

import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Logo } from "./logo";

export function Header() {
	return (
		<header className="flex px-4 border-b items-center h-[50px]">
			<Logo />
			<nav className="flex-1 px-8 text-sm">
				<ul className="flex gap-4">
					{/* <li className="hidden sm:inline">
						<Link href="/">
							<h1>Projects</h1>
						</Link>
					</li> */}
					{/* <li className="hidden sm:inline">
						<Link href="/integrations">
							<h1>Integrations</h1>
						</Link>
					</li> */}
				</ul>
			</nav>
			<div className="flex gap-2 items-center">
				<ModeToggle />
			</div>
		</header>
	);
}
