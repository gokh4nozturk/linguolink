import Image from "next/image";
import experience from "@/public/experience.svg";

export default function Banner() {
	return (
		<section
			id="banner"
			className="min-h-dvh scroll-m-24 text-center pt-1 pb-32 flex flex-col items-center"
		>
			<div className="text-foreground">
				<div className="py-12 text-center">
					<h1 className="text-3xl sm:text-7xl font-bold">
						Transform Your Translation Experience!
					</h1>
					<p className="text-lg mt-4 text-foreground/60">
						Unlock Seamless Translation Management! Experience the future of
						collaboration and efficiency with our intuitive platform.
					</p>
				</div>
			</div>
			<Image className="-mr-8" src={experience} alt="experience" />
		</section>
	);
}
