import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Linguolink',
  description: 'Join our team and help build the future of translation automation.',
};

export default function CareersPage() {
  // Example job listings - in a real application these would be fetched from a database or API
  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      slug: 'senior-full-stack-developer',
    },
    {
      id: 2,
      title: 'Translation Project Manager',
      location: 'London, UK',
      type: 'Full-time',
      slug: 'translation-project-manager',
    },
    {
      id: 3,
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      slug: 'product-designer',
    },
    {
      id: 4,
      title: 'Localization Specialist',
      location: 'Remote',
      type: 'Contract',
      slug: 'localization-specialist',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col pt-14">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <h1 className="mb-6 font-bold text-4xl">Join Our Team</h1>
        <p className="mb-10 text-xl">
          We're on a mission to transform how businesses handle translation and localization. Join
          us in building innovative solutions that connect people across languages.
        </p>

        <div className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">Why Work With Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-medium text-lg">Meaningful Impact</h3>
              <p>Help businesses communicate globally and break down language barriers.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-medium text-lg">Remote-First Culture</h3>
              <p>Work from anywhere with flexible hours and a focus on results.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-medium text-lg">Growth Opportunities</h3>
              <p>Develop your skills through challenging projects and continuous learning.</p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 font-medium text-lg">Diverse & Inclusive</h3>
              <p>Join a global team that values different perspectives and backgrounds.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-semibold text-2xl">Open Positions</h2>
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div key={job.id} className="rounded-lg border p-6">
                <h3 className="mb-2 font-medium text-xl">{job.title}</h3>
                <div className="mb-4 flex gap-4 text-muted-foreground text-sm">
                  <div>{job.location}</div>
                  <div>{job.type}</div>
                </div>
                <Link
                  href={`/careers/${job.slug}`}
                  className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
