import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const reviews = [
  {
    name: 'Sarah Chen',
    username: 'CTO at DevTech',
    body: 'Our 3-hour translation process now takes just 12 minutes. Linguolink is a game-changer for our workflow.',
    img: 'https://avatar.vercel.sh/sarahchen',
  },
  {
    name: 'Michael Patel',
    username: 'Lead Developer',
    body: 'We switched from Lokalise and saved $400 per month while improving our localization process.',
    img: 'https://avatar.vercel.sh/michaelpatel',
  },
  {
    name: 'Emma Rodriguez',
    username: 'Product Manager',
    body: 'Linguolink streamlined our entire localization workflow. Onboarding new languages is now effortless.',
    img: 'https://avatar.vercel.sh/emmarodriguez',
  },
  {
    name: 'Tobias Schmidt',
    username: 'Fullstack Developer',
    body: 'The API is incredibly well documented and the integration with our CI/CD pipeline was seamless.',
    img: 'https://avatar.vercel.sh/tobiasschmidt',
  },
  {
    name: 'Yuki Tanaka',
    username: 'Localization Lead',
    body: 'Managing translations across 12 languages used to be a nightmare. Linguolink made it manageable for our small team.',
    img: 'https://avatar.vercel.sh/yukitanaka',
  },
  {
    name: 'Alex Warren',
    username: 'Startup Founder',
    body: "As a startup expanding globally, Linguolink's pricing model scales perfectly with our growth. No surprise costs.",
    img: 'https://avatar.vercel.sh/alexwarren',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="font-medium text-sm dark:text-foreground">{name}</figcaption>
          <p className="font-medium text-xs dark:text-foreground/80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-foreground/80">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
