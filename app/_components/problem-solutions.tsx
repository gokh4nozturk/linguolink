import CTA from '@/components/cta';
import Title from '@/components/title';

export default function ProblemSolutions() {
  return (
    <section
      id="problem-solutions"
      className="flex min-h-fit w-full scroll-m-24 flex-col justify-center"
    >
      <Title>How It Works</Title>
      <div className="mx-auto mb-12 flex max-w-6xl flex-col justify-between gap-8 px-4 md:flex-row">
        <div className="flex-1 rounded-lg bg-muted/50 p-6 text-center">
          <div className="mb-2 font-bold text-3xl">1</div>
          <h3 className="mb-2 font-semibold text-xl">Create & Connect</h3>
          <p>Create your project and connect your translation files</p>
        </div>
        <div className="flex-1 rounded-lg bg-muted/50 p-6 text-center">
          <div className="mb-2 font-bold text-3xl">2</div>
          <h3 className="mb-2 font-semibold text-xl">Automate</h3>
          <p>Linguolink automatically captures updated content</p>
        </div>
        <div className="flex-1 rounded-lg bg-muted/50 p-6 text-center">
          <div className="mb-2 font-bold text-3xl">3</div>
          <h3 className="mb-2 font-semibold text-xl">Deliver</h3>
          <p>Deploy translations with your CI/CD pipeline</p>
        </div>
      </div>

      <Title>Problems & Solutions</Title>
      <CTA
        title="Managing translations shouldn't feel like managing chaos."
        description="We understand the frustrations of managing translations manually. Here's how Linguolink solves them."
      />
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
    </section>
  );
}
