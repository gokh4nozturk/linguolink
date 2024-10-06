import CTA from "@/components/cta";
import Questions from "@/components/questions";

export default function FAQ() {
	return (
		<section id="faq" className="h-dvh scroll-m-24 text-center">
			<CTA
				title="Frequently asked questions"
				description="Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum."
			/>
			<Questions />
		</section>
	);
}
