import CTA from "@/components/cta";
import Packages from "@/components/packages";
import Title from "@/components/title";

export default function Pricing() {
	return (
		<section id="pricing" className="min-h-dvh scroll-m-24 text-center w-full">
			<Title>Pricing</Title>
			<CTA
				title="A plan for every need"
				description="Find the perfect plan for your needs. Start today and scale with ease."
			/>
			<Packages />
		</section>
	);
}
