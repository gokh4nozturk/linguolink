import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "next-view-transitions";

export default function NotFound() {
	return (
		<div className="min-h-dvh w-full grid place-items-center">
			<div>
				<Image
					src="/404.webp"
					alt="404"
					width={400}
					height={400}
					className="rounded-lg"
				/>
				<Button
					asChild
					variant="secondary"
					className="w-full mt-2"
					aria-label="Return Home"
				>
					<Link href="/">Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
