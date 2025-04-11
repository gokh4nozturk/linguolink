import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | LinguoLink',
  description: 'Latest news, updates, and insights about translation automation and localization.',
};

export default function BlogPage() {
  // Example blog posts - in a real application these would be fetched from a database or CMS
  const blogPosts = [
    {
      id: 1,
      title: '5 Ways to Improve Your Translation Workflow',
      excerpt:
        'Discover practical strategies to streamline and enhance your translation processes.',
      date: 'June 15, 2023',
      slug: 'improve-translation-workflow',
    },
    {
      id: 2,
      title: 'The Future of AI in Translation Services',
      excerpt: 'Exploring how artificial intelligence is transforming the translation industry.',
      date: 'May 22, 2023',
      slug: 'ai-in-translation-services',
    },
    {
      id: 3,
      title: 'Best Practices for Managing Multilingual Projects',
      excerpt:
        'Learn how to effectively coordinate and deliver projects across multiple languages.',
      date: 'April 10, 2023',
      slug: 'multilingual-project-management',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col pt-14">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <h1 className="mb-10 font-bold text-4xl">Blog</h1>
        <p className="mb-12 text-xl">
          The latest insights, tips, and updates from the LinguoLink team on translation automation,
          localization, and more.
        </p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b pb-8">
              <div className="mb-2 text-muted-foreground text-sm">{post.date}</div>
              <h2 className="mb-3 font-semibold text-2xl">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-medium text-primary hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
