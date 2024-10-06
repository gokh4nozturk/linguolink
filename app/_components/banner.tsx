import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Banner() {
	return (
		<section id="banner" className="h-dvh scroll-m-24 text-center py-32">
			<Button>
				<Link href="/login">Login</Link>
			</Button>
			<CTA
				title="Welcome to our website"
				description="Proident sunt exercitation minim laborum enim laboris labore esse."
			/>
		</section>
	);
}
