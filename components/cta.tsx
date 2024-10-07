interface CTAProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

export default function CTA({ title, description, children }: CTAProps) {
	return (
		<div className="text-foreground">
			<div className="py-12 text-center">
				<h2 className="font-bold text-3xl sm:text-5xl">{title}</h2>
				<p className="mt-4 text-foreground/60 text-lg">{description}</p>
				<div className="mt-6">{children}</div>
			</div>
		</div>
	);
}
