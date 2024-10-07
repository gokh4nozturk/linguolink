import Features from "./_components/features";
import Pricing from "./_components/pricing";
import Testimonials from "./_components/testimonials";
import FAQ from "./_components/faq";
import Banner from "./_components/banner";
import GetStarted from "./_components/get-started";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 max-sm:gap-10">
			<Banner />
			<Features />
			<Pricing />
			<Testimonials />
			<GetStarted />
			<FAQ />
		</main>
	);
}
