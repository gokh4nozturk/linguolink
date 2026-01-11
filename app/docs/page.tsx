'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Introduction',
    href: '#introduction',
  },
  {
    title: 'Getting Started',
    href: '#getting-started',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'API Reference',
    href: '#api-reference',
  },
  {
    title: 'Examples',
    href: '#examples',
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='mb-8 font-bold text-4xl'>Documentation</h1>

      <div className='flex flex-col gap-10 md:flex-row'>
        {/* Sidebar Navigation */}
        <aside className='w-full shrink-0 md:w-64'>
          <nav className='sticky top-24'>
            <ul className='space-y-1'>
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-md px-4 py-2 transition-colors hover:bg-muted',
                      activeSection === item.href.substring(1) && 'bg-muted font-medium',
                    )}
                    onClick={() => setActiveSection(item.href.substring(1))}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='prose prose-slate dark:prose-invert max-w-none flex-1'>
          <section id='introduction' className='scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>Introduction</h2>
            <p>
              Welcome to Linguolink documentation. This guide will help you understand how to use
              our platform effectively and get the most out of its features.
            </p>
            <p>
              Linguolink is a powerful language learning platform designed to help you connect with
              native speakers and improve your language skills through practical conversations.
            </p>
          </section>

          <section id='getting-started' className='mt-12 scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>Getting Started</h2>
            <p>To get started with Linguolink, follow these simple steps:</p>
            <ol className='list-decimal space-y-2 pl-6'>
              <li>Create an account or sign in to your existing account</li>
              <li>
                Complete your language profile with your native language and the languages you're
                learning
              </li>
              <li>
                Browse available language partners or use our matching algorithm to find suitable
                partners
              </li>
              <li>Start conversations and schedule language exchange sessions</li>
            </ol>
          </section>

          <section id='features' className='mt-12 scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>Features</h2>
            <p>
              Linguolink offers a variety of features to enhance your language learning experience:
            </p>
            <ul className='list-disc space-y-2 pl-6'>
              <li>AI-powered language partner matching</li>
              <li>Integrated video chat with subtitle support</li>
              <li>Text chat with grammar and vocabulary assistance</li>
              <li>Scheduling tools for regular practice sessions</li>
              <li>Progress tracking and skill assessment</li>
            </ul>
          </section>

          <section id='api-reference' className='mt-12 scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>API Reference</h2>
            <p>
              For developers looking to integrate with Linguolink, we provide a comprehensive API.
              Below are the main endpoints available:
            </p>
            <div className='mt-4 overflow-x-auto'>
              <table className='min-w-full border-collapse'>
                <thead>
                  <tr className='border-b'>
                    <th className='px-4 py-2 text-left'>Endpoint</th>
                    <th className='px-4 py-2 text-left'>Description</th>
                    <th className='px-4 py-2 text-left'>Authentication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='px-4 py-2 font-mono text-sm'>/api/users</td>
                    <td className='px-4 py-2'>User management</td>
                    <td className='px-4 py-2'>JWT</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-4 py-2 font-mono text-sm'>/api/matches</td>
                    <td className='px-4 py-2'>Partner matching</td>
                    <td className='px-4 py-2'>JWT</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='px-4 py-2 font-mono text-sm'>/api/sessions</td>
                    <td className='px-4 py-2'>Session management</td>
                    <td className='px-4 py-2'>JWT</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id='examples' className='mt-12 scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>Examples</h2>
            <p>Here are some examples of how to use Linguolink effectively:</p>
            <div className='my-4 rounded-md bg-muted p-4'>
              <h3 className='mb-2 font-medium text-lg'>Language Exchange Best Practices</h3>
              <p>
                The most effective language exchanges follow the 50/50 rule: spend half the time
                speaking in your native language and half in the language you're learning.
              </p>
            </div>
            <div className='my-4 rounded-md bg-muted p-4'>
              <h3 className='mb-2 font-medium text-lg'>Setting Achievable Goals</h3>
              <p>
                Start with short, 15-minute sessions focused on specific topics or vocabulary sets.
                Gradually increase session length as you become more comfortable.
              </p>
            </div>
          </section>

          <section id='faq' className='mt-12 mb-16 scroll-mt-24'>
            <h2 className='mb-4 font-bold text-2xl'>Frequently Asked Questions</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='mb-2 font-medium text-lg'>How much does Linguolink cost?</h3>
                <p>
                  Linguolink offers a free basic tier with limited features and premium subscription
                  plans starting at $9.99/month. Check our pricing page for more details.
                </p>
              </div>
              <div>
                <h3 className='mb-2 font-medium text-lg'>
                  Can I use Linguolink on mobile devices?
                </h3>
                <p>
                  Yes, Linguolink is fully responsive and works on mobile devices. We also offer
                  native apps for iOS and Android for an enhanced experience.
                </p>
              </div>
              <div>
                <h3 className='mb-2 font-medium text-lg'>What languages are supported?</h3>
                <p>
                  Linguolink currently supports over 20 languages including English, Spanish,
                  French, German, Chinese, Japanese, Korean, and many more. We're constantly adding
                  new languages.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
