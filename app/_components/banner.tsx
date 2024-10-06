import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Banner() {
	return (
		<section id="banner" className="h-dvh scroll-m-24 text-center py-32">
			<div className="text-foreground">
				<div className="py-12 text-center">
					<h1 className="text-3xl sm:text-7xl font-bold">
						Welcome to our website
					</h1>
					<p className="text-lg mt-4 text-foreground/60">
						Proident sunt exercitation minim laborum enim laboris labore esse.
					</p>
				</div>
			</div>
		</section>
	);
}
