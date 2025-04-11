'use client';

import { type SubscriptionPlan, useSubscription } from '@/contexts/subscription-context';
import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Packages() {
  const { setSelectedPlan } = useSubscription();
  const router = useRouter();

  const packages = [
    {
      name: 'Free',
      description: 'For small projects and individual developers',
      price: 0,
      features: ['1 project', '10,000 characters/month', '1 user', 'Basic dashboard'],
    },
    {
      name: 'Growth',
      description: 'For growing teams and startups',
      price: 19,
      features: [
        '5 projects',
        '100,000 characters/month',
        'Team access',
        'Webhook support',
        'Export functionality',
      ],
    },
    {
      name: 'Pro',
      description: 'For professional teams',
      price: 79,
      features: [
        'Unlimited projects',
        'Unlimited characters',
        'API access',
        'Priority support',
        'Role management',
        'CI/CD integration',
        'Email notifications',
      ],
    },
  ];

  const handleSelectPackage = (packageName: SubscriptionPlan) => {
    setSelectedPlan(packageName);
    router.push('/signup');
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row">
      {packages.map((pkg, idx) => (
        <Card
          key={pkg.name}
          className={cn(
            'flex flex-1 flex-col border text-left',
            idx === 1 && 'sm:-mt-4 sm:border-primary sm:shadow-lg'
          )}
        >
          <CardHeader className="space-y-2 pb-0">
            <p className="font-bold text-3xl">{pkg.name}</p>
            <p className="text-base text-foreground/60">{pkg.description}</p>
          </CardHeader>

          <CardContent className="flex h-full flex-col justify-between space-y-6 pt-4">
            <div>
              <CardTitle className="mb-6 text-left font-bold text-4xl">
                {pkg.price === 0 ? 'Free' : `$${pkg.price}/mo`}
              </CardTitle>

              <div className="space-y-3">
                {pkg.features.map((feature) => (
                  <CardDescription key={feature} className="flex items-center text-left text-sm">
                    <BadgeCheck className="mr-2 inline-block h-4 w-4 text-primary" />
                    {feature}
                  </CardDescription>
                ))}
              </div>
            </div>

            <Button
              variant={idx === 1 ? 'default' : 'outline'}
              size="lg"
              className="mt-6 w-full"
              onClick={() => handleSelectPackage(pkg.name as SubscriptionPlan)}
            >
              {pkg.price === 0 ? 'Start Free' : 'Subscribe'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
