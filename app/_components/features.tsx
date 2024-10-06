import Cards from "@/components/cards";
import CTA from "@/components/cta";
import Title from "@/components/title";

export default function Features() {
	return (
		<section id="features" className="min-h-dvh scroll-m-24 text-center">
			<Title>Features</Title>
			<CTA
				title="Why choose our service?"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			/>
			<Cards />
		</section>
	);
}
