import Image from "next/image";
import experience from "@/public/experience.svg";

export default function Banner() {
	return (
		<section
			id="banner"
			className="flex min-h-dvh w-full scroll-m-24 flex-col items-center pt-1 pb-32 text-center"
		>
			<div className="text-foreground">
				<div className="py-12 text-center">
					<h1 className="font-bold text-3xl sm:text-7xl">
						Transform Your Translation Experience!
					</h1>
					<p className="mt-4 text-foreground/60 text-lg">
						Unlock Seamless Translation Management! Experience the future of
						collaboration and efficiency with our intuitive platform.
					</p>
				</div>
			</div>
			<Image
				className="sm:-mr-8 max-sm:w-10/12"
				src={experience}
				alt="experience"
			/>
		</section>
	);
}
