import Cards from '@/components/cards';
import Title from '@/components/title';
export default function Features() {
  return (
    <section id="features" className="min-h-dvh w-full scroll-m-24">
      <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="rounded-lg bg-muted/50 p-6">
          <h3 className="mb-4 font-semibold text-xl">Common Problems</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-destructive">✕</span>
              <p>Continuously updating translations wastes valuable time</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-destructive">✕</span>
              <p>Manual processes are error-prone and slow down development</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-destructive">✕</span>
              <p>Disconnect between development teams and translators</p>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-muted/50 p-6">
          <h3 className="mb-4 font-semibold text-xl">Linguolink Solutions</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <p>Set up translation pipelines in minutes with automatic workflows</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <p>Developer-first approach with robust APIs and SDKs</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              <p>Centralized management for all your projects</p>
            </li>
          </ul>
        </div>
      </div>

      <Title>Feature Highlights</Title>
      <Cards />
    </section>
  );
}
