export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-soft-blue-foreground font-semibold text-base">
			{children}
		</h2>
	);
}
