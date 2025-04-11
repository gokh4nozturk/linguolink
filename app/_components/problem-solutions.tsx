import CTA from '@/components/cta';
import Title from '@/components/title';

export default function ProblemSolutions() {
  return (
    <section id="features" className="min-h-dvh w-full scroll-m-24">
      <Title>Problems & Solutions</Title>
      <CTA
        title="Managing translations shouldn't feel like managing chaos."
        description="We understand the frustrations of managing translations manually. Here's how Linguolink solves them."
      />
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
    </section>
  );
}
