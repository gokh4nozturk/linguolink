"use client";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";
import logoDark from "@/public/logo-dark@3x.svg";
import logo from "@/public/logo@3x.svg";
import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";
import Image from "next/image";
import * as React from "react";
import { Badge } from "./ui/badge";

export function Logo() {
	const [src, setSrc] = React.useState(logo);
	const { resolvedTheme } = useTheme();

	React.useEffect(() => {
		setSrc(resolvedTheme === "dark" ? logoDark : logo);
	}, [resolvedTheme]);

	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-fit w-fit items-center justify-center">
				<Link href="/" className="flex items-center gap-1">
					<Image
						loading="lazy"
						src={src}
						alt="logo"
						width={100}
						style={{
							maxWidth: "100%",
							height: "auto",
						}}
					/>
					<Badge variant="custom" className="h-6">
						Beta
					</Badge>
				</Link>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem inset>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset disabled>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>
							Save Page As...
							<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem>Create Shortcut...</ContextMenuItem>
						<ContextMenuItem>Name Window...</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Developer Tools</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked>
					Show Bookmarks Bar
					<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuRadioGroup value="pedro">
					<ContextMenuLabel inset>People</ContextMenuLabel>
					<ContextMenuSeparator />
					<ContextMenuRadioItem value="pedro">
						Pedro Duarte
					</ContextMenuRadioItem>
					<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	);
}
