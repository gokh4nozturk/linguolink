export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-center font-semibold text-base text-soft-blue-foreground dark:text-soft-blue-foreground">
      {children}
    </h2>
  );
}
