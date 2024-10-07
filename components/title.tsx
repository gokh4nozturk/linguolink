export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-semibold text-base text-soft-blue-foreground">
			{children}
		</h2>
	);
}
