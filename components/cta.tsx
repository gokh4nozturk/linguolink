interface CTAProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

export default function CTA({ title, description, children }: CTAProps) {
	return (
		<div className="bg-accent-1 text-foreground">
			<div className="container mx-auto py-12 text-center">
				<h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
				<p className="text-lg mt-4 text-foreground/60">{description}</p>
				<div className="mt-6">{children}</div>
			</div>
		</div>
	);
}
