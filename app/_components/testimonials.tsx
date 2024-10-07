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
				description="See how our platform is transforming translation management for teams like yours. Discover success stories from satisfied users and learn why they trust us to streamline their workflows."
			/>
			<Reviews />
		</section>
	);
}
