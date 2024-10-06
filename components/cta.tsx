interface CTAProps {
	title: string;
	description: string;
	children?: React.ReactNode;
}

export default function CTA({ title, description, children }: CTAProps) {
	return (
		<div className="text-foreground">
			<div className="py-12 text-center">
				<h2 className="text-3xl sm:text-5xl font-bold">{title}</h2>
				<p className="text-lg mt-4 text-foreground/60">{description}</p>
				<div className="mt-6">{children}</div>
			</div>
		</div>
	);
}
