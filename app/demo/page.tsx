'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function DemoPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  const features = [
    {
      id: 'auto-detection',
      title: 'Automatic Translation Detection',
      description: 'Linguolink automatically detects strings that need translation in your code.',
      icon: '🔍',
    },
    {
      id: 'ci-cd',
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate translations into your CI/CD pipeline.',
      icon: '⚙️',
    },
    {
      id: 'translation-memory',
      title: 'Translation Memory',
      description: 'Reuse previously translated content to save time and ensure consistency.',
      icon: '🧠',
    },
    {
      id: 'api-access',
      title: 'API Access',
      description: 'Access all functionality programmatically through our robust API.',
      icon: '🔌',
    },
    {
      id: 'team-collab',
      title: 'Team Collaboration',
      description: 'Work together with your team on translations with role-based permissions.',
      icon: '👥',
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Track progress and performance of your translation projects.',
      icon: '📊',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col pt-14">
      <div className="container mx-auto py-12">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">See Linguolink in Action</h1>
          <p className="mx-auto mt-4 max-w-3xl text-foreground/60 text-lg">
            Watch how Linguolink streamlines the translation process for development teams
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center">
            <div>
              <h2 className="mb-4 font-bold text-2xl">How It Works</h2>
              <ol className="mb-6 space-y-4">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Connect your codebase</p>
                    <p className="text-foreground/60">
                      Integrate with your GitHub, GitLab, or Bitbucket repository
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Define translation workflows</p>
                    <p className="text-foreground/60">
                      Set up automated pipelines for translating your content
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Review and deploy</p>
                    <p className="text-foreground/60">
                      Approve translations and merge them back into your codebase
                    </p>
                  </div>
                </li>
              </ol>
              <Button size="lg" onClick={handleGetStarted}>
                Get Started Free
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-lg bg-black p-4">
            <div className="relative aspect-video w-full rounded bg-muted/20">
              {/* Placeholder for video/animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Demo Video</p>
                {/* In a real implementation, you would embed a video here */}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-center font-bold text-2xl">Key Features</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.id}>
                <CardHeader className="pb-2">
                  <div className="mb-2 text-3xl">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={handleGetStarted}>
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </main>
  );
}
