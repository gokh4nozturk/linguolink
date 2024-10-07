import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
	return (
		<section
			id="get-started"
			className="relative min-h-dvh w-full scroll-m-24 text-center"
		>
			<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-screen bg-soft-blue px-10 py-20 sm:py-40">
				<CTA
					title="Ready to get started?"
					description="Sign up today and start managing translations effortlessly. Our platform is designed to streamline your workflow and make your life easier."
				/>
				<Button>Get Started</Button>
			</div>
		</section>
	);
}
