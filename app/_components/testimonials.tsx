import CTA from "@/components/cta";
import Title from "@/components/title";

export default function Testimonials() {
	return (
		<section id="testimonials" className="h-dvh scroll-m-24 text-center">
			<Title>Testimonials</Title>
			<CTA
				title="What our customers are saying."
				description="Proident sunt exercitation minim laborum enim laboris labore esse."
			/>
		</section>
	);
}
