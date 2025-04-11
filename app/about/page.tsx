import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | LinguoLink',
  description: 'Learn more about LinguoLink and our mission to streamline translation workflows.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-14">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <h1 className="mb-6 font-bold text-4xl">About LinguoLink</h1>
        <p className="mb-8 text-xl">
          LinguoLink was founded with a clear mission: to streamline and automate translation
          workflows for businesses around the world.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 font-semibold text-2xl">Our Mission</h2>
            <p>
              We believe that effective communication across languages shouldn't be complicated or
              time-consuming. Our platform empowers teams to manage translation projects
              efficiently, reducing costs and accelerating time-to-market.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-semibold text-2xl">Our Team</h2>
            <p>
              LinguoLink is built by a diverse team of language enthusiasts, software engineers, and
              localization experts who understand the challenges of global communication.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-semibold text-2xl">Our Values</h2>
            <p>
              We're committed to quality, accuracy, and making language barriers a thing of the
              past. Through innovation and user-focused design, we're transforming how businesses
              approach translation and localization.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
