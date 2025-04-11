import CTA from "@/components/cta";
import { Reviews } from "@/components/reviews";
import Title from "@/components/title";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="min-h-dvh w-full scroll-m-24 text-center"
		>
			<Title>What Early Adopters Are Saying</Title>
			<CTA
				title="Real feedback from real users"
				description="Developers, product managers, and localization specialists are already saving time and money with Linguolink's automated translation management platform."
			/>
			<Reviews />
		</section>
	);
}
