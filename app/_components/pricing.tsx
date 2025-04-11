import CTA from "@/components/cta";
import Packages from "@/components/packages";
import Title from "@/components/title";

export default function Pricing() {
	return (
		<section id="pricing" className="min-h-dvh scroll-m-24 text-center">
			<Title>Transparent Pricing</Title>
			<CTA
				title="Simple, usage-based pricing that scales with you"
				description="Choose the plan that fits your needs now and easily upgrade as your translation requirements grow. No hidden fees, no surprises."
			/>
			<Packages />
		</section>
	);
}
