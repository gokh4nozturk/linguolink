import CTA from "@/components/cta";
import { Reviews } from "@/components/reviews";
import Title from "@/components/title";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="min-h-dvh scroll-m-24 text-center container mx-auto"
		>
			<Title>Testimonials</Title>
			<CTA
				title="What our customers are saying."
				description="Proident sunt exercitation minim laborum enim laboris labore esse."
			/>
			<Reviews />
		</section>
	);
}
