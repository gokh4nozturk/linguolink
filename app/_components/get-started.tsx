import CTA from "@/components/cta";
import { Button } from "@/components/ui/button";

export default function GetStarted() {
	return (
		<section
			id="get-started"
			className="bg-soft-blue-foreground py-40 scroll-m-24 text-center w-full"
		>
			<CTA
				title="Ready to get started?"
				description="Sign up today and start managing translations effortlessly. Our platform is designed to streamline your workflow and make your life easier."
			/>
			<Button>Get Started</Button>
		</section>
	);
}
