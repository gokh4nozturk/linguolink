import Cards from "@/components/cards";
import CTA from "@/components/cta";
import Title from "@/components/title";

export default function Features() {
	return (
		<section id="features" className="min-h-dvh scroll-m-24 text-center">
			<Title>Features</Title>
			<CTA
				title="Why choose our service?"
				description="Manage translations effortlessly and save time! Grow your projects quickly with our platform, and collaborate instantly with your team."
			/>
			<Cards />
		</section>
	);
}
