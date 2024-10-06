import Features from "./_components/features";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";
import FAQ from "./_components/faq";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Features />
			<Pricing />
			<Testimonials />
			<FAQ />
		</main>
	);
}
