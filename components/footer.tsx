import { Github, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-soft-blue-foreground p-12 text-primary md:p-24 [&_*]:text-pretty">
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
              className="hover:text-primary"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/gokh4nozturk/Linguolink"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a href="mailto:hello@linguol.ink" className="hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-primary">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-primary">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="mb-4 font-semibold text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-primary">
                Careers
              </a>
            </li>
            <li>
              <a href="mailto:hello@linguol.ink" className="hover:text-primary">
                Contact
              </a>
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
                className="hover:text-primary"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://Linguolink-s3.s3.eu-central-1.amazonaws.com/legal/Linguolink-Terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-gray-700 border-t pt-8 text-center text-primary/70 text-sm">
        <p>&copy; {new Date().getFullYear()} Linguolink. All rights reserved.</p>
      </div>
    </footer>
  );
}
