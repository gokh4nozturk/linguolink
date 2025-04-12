import StructuredData from '@/components/structured-data';
import Title from '@/components/title';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Localization Management Blog | Linguolink',
  description:
    'Expert insights on translation automation, localization management, and optimizing your translation workflows for developers and global teams.',
  openGraph: {
    title: 'Localization Management Blog | Linguolink',
    description:
      'Expert insights on translation automation, localization management, and optimizing your translation workflows.',
    url: 'https://linguol.ink/blog',
  },
  alternates: {
    canonical: '/blog',
  },
  keywords: [
    'localization management',
    'translation automation',
    'translation workflows',
    'developer tools',
    'i18n best practices',
  ],
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'localization-management-for-developers',
      title: 'Localization Management for Developers: A Complete Guide',
      description:
        'Learn the best practices for implementing efficient localization management in your development workflow.',
      date: '2023-08-15',
      readTime: '8 min read',
      category: 'Best Practices',
      image: 'https://storage.linguol.ink/images/blog/localization-management.webp',
      alt: 'Developer working on localization management',
    },
    {
      id: 'translation-workflow-automation',
      title: 'How to Automate Your Translation Workflow',
      description:
        'Discover automation techniques to streamline your translation processes and reduce manual work.',
      date: '2023-09-22',
      readTime: '6 min read',
      category: 'Automation',
      image: 'https://storage.linguol.ink/images/blog/workflow-automation.webp',
      alt: 'Automated translation workflow diagram',
    },
    {
      id: 'scaling-localization-efforts',
      title: 'Scaling Localization Efforts for Growing Companies',
      description:
        'Strategies to scale your localization management as your company grows internationally.',
      date: '2023-10-10',
      readTime: '7 min read',
      category: 'Scaling',
      image: 'https://storage.linguol.ink/images/blog/scaling-localization.webp',
      alt: 'Global growth chart and localization process',
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <Title>Localization Management Blog</Title>
      <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/60">
        Expert insights on translation automation, localization management, and optimizing your
        workflows for global teams.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="no-underline">
            <Card className="h-full transition-all hover:shadow-md">
              <div className="relative h-48 w-full">
                <Image src={post.image} alt={post.alt} fill className="rounded-t-lg object-cover" />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded bg-primary/10 px-2 py-1 font-medium text-primary text-xs">
                    {post.category}
                  </span>
                  <span className="text-foreground/60 text-xs">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <time dateTime={post.date} className="text-foreground/60 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* Blog structured data */}
      <StructuredData
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://linguol.ink',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://linguol.ink/blog',
            },
          ],
        }}
      />
    </main>
  );
}
