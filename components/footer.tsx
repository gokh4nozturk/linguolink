import { Github, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-soft-blue-foreground p-12 text-primary md:p-24 [&_*]:text-pretty [&_*]:dark:text-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Linguolink</h3>
          <p className="text-sm">
            Automate your translation workflow and scale globally with ease.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://twitter.com/gokh4nozturk"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
              aria-label="X"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/gokh4nozturk/Linguolink"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a href="mailto:hello@linguol.ink" title="Email" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/docs">Documentation</Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="mailto:hello@linguol.ink">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://Linguolink-s3.s3.eu-central-1.amazonaws.com/legal/Linguolink-Privacy-Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Privacy Policy"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://Linguolink-s3.s3.eu-central-1.amazonaws.com/legal/Linguolink-Terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Terms of Service"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-gray-700 border-t pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Linguolink. All rights reserved.</p>
      </div>
    </footer>
  );
}
