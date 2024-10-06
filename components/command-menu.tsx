"use client";

import * as React from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";
import {
	Command,
	Menu,
	Monitor,
	MoonIcon,
	SearchCode,
	SunIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTransitionRouter } from "next-view-transitions";
import { LINKS } from "@/constants";
import { useTheme } from "next-themes";

export function CommandMenu() {
	const [open, setOpen] = React.useState(false);

	const { push } = useTransitionRouter();
	const { setTheme, resolvedTheme } = useTheme();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	function handleOnClick(href: string) {
		setOpen(false);
		push(href);
	}

	const icons = {
		features: <SearchCode size={16} />,
		pricing: <Monitor size={16} />,
		testimonials: <Monitor size={16} />,
		faq: <Monitor size={16} />,
	};

	return (
		<>
			<Button
				variant="outline"
				size="icon"
				className=""
				onClick={() => setOpen(true)}
			>
				<Command size={16} />
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Links">
						{LINKS.map(({ href, text, icon }) => (
							<CommandItem
								className="flex items-center gap-2"
								key={href}
								onSelect={() => {
									handleOnClick(href);
								}}
							>
								<span>{icon}</span>
								<span>{text}</span>
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading="Theme">
						<CommandItem onSelect={() => setTheme("dark")}>
							<MoonIcon className="mr-2 size-4" />
							Dark
						</CommandItem>
						<CommandItem onSelect={() => setTheme("light")}>
							<SunIcon className="mr-2 size-4" />
							Light
						</CommandItem>
						<CommandItem onSelect={() => setTheme("system")}>
							<Monitor className="mr-2 size-4" />
							System
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
