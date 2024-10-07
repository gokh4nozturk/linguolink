import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
	return (
		<section
			id="get-started"
			className="scroll-m-24 text-center w-full relative min-h-dvh"
		>
			<div className="absolute bg-soft-blue-foreground w-screen py-20 sm:py-40 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<CTA
					title="Ready to get started?"
					description="Sign up today and start managing translations effortlessly. Our platform is designed to streamline your workflow and make your life easier."
				/>
				<Button>Get Started</Button>
			</div>
		</section>
	);
}
