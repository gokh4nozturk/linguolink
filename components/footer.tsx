'use client';

import { Github, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { CrowdCanvas } from './crowd-canvas';

export default function Footer() {
  return (
    <footer
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      className='relative h-[--footer-height] bg-soft-blue-foreground px-4 py-12 text-primary [--footer-height:800px] sm:px-12 md:p-24 [&_*]:text-pretty [&_*]:dark:text-muted'
    >
      <div className='fixed bottom-0 left-0 h-[--footer-height] w-full px-4 pt-24'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='text-left'>
            <h3 className='mb-4 font-semibold text-lg'>Linguolink</h3>
            <p className='text-sm'>
              Automate your translation workflow and scale globally with ease.
            </p>
            <div className='mt-4 flex space-x-4'>
              <a
                href='https://twitter.com/gokh4nozturk'
                target='_blank'
                rel='noopener noreferrer'
                title='X'
                aria-label='X'
              >
                <Twitter size={20} />
              </a>
              <a
                href='https://github.com/gokh4nozturk/Linguolink'
                target='_blank'
                rel='noopener noreferrer'
                title='GitHub'
                aria-label='GitHub'
              >
                <Github size={20} />
              </a>
              <a href='mailto:hello@linguol.ink' title='Email' aria-label='Email'>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className='text-left'>
            <h3 className='mb-4 font-semibold text-lg'>Product</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='#features'>Features</Link>
              </li>
              <li>
                <Link href='#pricing'>Pricing</Link>
              </li>
              <li>
                <Link href='#testimonials'>Testimonials</Link>
              </li>
              <li>
                <Link href='/docs'>Documentation</Link>
              </li>
            </ul>
          </div>

          <div className='text-left'>
            <h3 className='mb-4 font-semibold text-lg'>Company</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/about'>About</Link>
              </li>
              {/*<li>
              <Link href="/blog">Blog</Link>
            </li>*/}
              {/*<li>
              <Link href="/careers">Careers</Link>
            </li>*/}
              <li>
                <Link href='mailto:hello@linguol.ink'>Contact</Link>
              </li>
            </ul>
          </div>

          <div className='text-left'>
            <h3 className='mb-4 font-semibold text-lg'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='https://storage.linguol.ink/legal/Privacy_Policy.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Privacy Policy'
                  aria-label='Privacy Policy'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='https://storage.linguol.ink/legal/Terms_of_Service.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Terms of Service'
                  aria-label='Terms of Service'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <Link href='/privacy/cookies'>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-gray-700 border-t pt-8 text-center text-sm'>
          <p>&copy; {new Date().getFullYear()} Linguolink. All rights reserved.</p>
        </div>

        <div className='absolute bottom-0 left-0 h-[60vh] w-screen'>
          <CrowdCanvas
            src='https://storage.linguol.ink/images/open-peeps-sheet.png'
            rows={15}
            cols={7}
          />
        </div>
      </div>
    </footer>
  );
}

// Motion version

// 'use client';

// import { Github, Mail, Twitter } from 'lucide-react';
// import type { Transition } from 'motion/react';
// import * as motion from 'motion/react-client';
// import Link from 'next/link';
// import { CrowdCanvas } from './crowd-canvas';

// export default function Footer() {
//   return (
//     <motion.footer
//       initial='hidden'
//       whileInView='visible'
//       variants={{
//         hidden: { clipPath: 'inset(0 0 100% 0)' },
//         visible: { clipPath: 'inset(0 0 0 0)' },
//       }}
//       transition={
//         {
//           duration: 2,
//           delay: 0.1,
//           fillMode: 'forwards',
//           fill: { duration: 2, delay: 0.1, ease: 'cubic-bezier(0.77, 0, 0.175, 1)' },
//         } as Transition
//       }
//       className='reveal relative h-[160vh] bg-soft-blue-foreground px-4 py-12 text-primary sm:h-[92vh] sm:px-12 md:h-[110vh] md:p-24 lg:h-[92vh] 2xl:h-[60vh] [&_*]:text-pretty [&_*]:dark:text-muted'
//     >
//       <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4'>
//         <div className='text-left'>
//           <h3 className='mb-4 font-semibold text-lg'>Linguolink</h3>
//           <p className='text-sm'>
//             Automate your translation workflow and scale globally with ease.
//           </p>
//           <div className='mt-4 flex space-x-4'>
//             <a
//               href='https://twitter.com/gokh4nozturk'
//               target='_blank'
//               rel='noopener noreferrer'
//               title='X'
//               aria-label='X'
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href='https://github.com/gokh4nozturk/Linguolink'
//               target='_blank'
//               rel='noopener noreferrer'
//               title='GitHub'
//               aria-label='GitHub'
//             >
//               <Github size={20} />
//             </a>
//             <a href='mailto:hello@linguol.ink' title='Email' aria-label='Email'>
//               <Mail size={20} />
//             </a>
//           </div>
//         </div>

//         <div className='text-left'>
//           <h3 className='mb-4 font-semibold text-lg'>Product</h3>
//           <ul className='space-y-2 text-sm'>
//             <li>
//               <Link href='#features'>Features</Link>
//             </li>
//             <li>
//               <Link href='#pricing'>Pricing</Link>
//             </li>
//             <li>
//               <Link href='#testimonials'>Testimonials</Link>
//             </li>
//             <li>
//               <Link href='/docs'>Documentation</Link>
//             </li>
//           </ul>
//         </div>

//         <div className='text-left'>
//           <h3 className='mb-4 font-semibold text-lg'>Company</h3>
//           <ul className='space-y-2 text-sm'>
//             <li>
//               <Link href='/about'>About</Link>
//             </li>
//             {/*<li>
//               <Link href="/blog">Blog</Link>
//             </li>*/}
//             {/*<li>
//               <Link href="/careers">Careers</Link>
//             </li>*/}
//             <li>
//               <Link href='mailto:hello@linguol.ink'>Contact</Link>
//             </li>
//           </ul>
//         </div>

//         <div className='text-left'>
//           <h3 className='mb-4 font-semibold text-lg'>Legal</h3>
//           <ul className='space-y-2 text-sm'>
//             <li>
//               <a
//                 href='https://storage.linguol.ink/legal/Privacy_Policy.pdf'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 title='Privacy Policy'
//                 aria-label='Privacy Policy'
//               >
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href='https://storage.linguol.ink/legal/Terms_of_Service.pdf'
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 title='Terms of Service'
//                 aria-label='Terms of Service'
//               >
//                 Terms of Service
//               </a>
//             </li>
//             <li>
//               <Link href='/privacy/cookies'>Cookie Policy</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className='mt-12 border-gray-700 border-t pt-8 text-center text-sm'>
//         <p>&copy; {new Date().getFullYear()} Linguolink. All rights reserved.</p>
//       </div>

//       <div className='absolute bottom-0 left-0 h-[60vh] w-screen'>
//         <CrowdCanvas
//           src='https://storage.linguol.ink/images/open-peeps-sheet.png'
//           rows={15}
//           cols={7}
//         />
//       </div>
//     </motion.footer>
//   );
// }
