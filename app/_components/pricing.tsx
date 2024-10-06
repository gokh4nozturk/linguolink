import CTA from "@/components/cta";
import Packages from "@/components/packages";
import Title from "@/components/title";

export default function Pricing() {
	return (
		<section id="pricing" className="h-dvh scroll-m-24 text-center">
			<Title>Pricing</Title>
			<CTA
				title="A plan for every need"
				description="Pariatur laborum dolor ea commodo sit aute aliquip qui et cillum excepteur."
			/>
			<Packages />
		</section>
	);
}
