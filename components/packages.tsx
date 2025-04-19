'use client';

import { type SubscriptionPlan, useSubscription } from '@/contexts/subscription-context';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Packages() {
  const { setSelectedPlan } = useSubscription();
  const router = useRouter();

  const packages = [
    {
      id: 'individual',
      name: 'Individual',
      description: 'For individuals and small projects',
      price: 0,
      features: ['1 project', '500 words limit', 'Basic dashboard', 'No credit card required'],
    },
    {
      id: 'starter',
      name: 'Starter',
      description: 'For growing projects',
      price: 19,
      features: [
        '3 projects',
        '5,000 words',
        'Webhook support',
        'Export functionality',
        'No credit card required',
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'For professional teams',
      price: 49,
      features: [
        '10 projects',
        '10,000 words',
        'Collaboration features',
        'Role management',
        'No credit card required',
      ],
    },
  ];

  const enterprisePlan = {
    id: 'pro',
    name: 'Pro / Enterprise',
    description: 'For organizations with advanced needs',
    features: [
      'Unlimited projects',
      'Custom domain',
      'SSO authentication',
      'SLA support',
      'Custom integrations',
    ],
  };

  const handleSelectPackage = (packageId: string) => {
    const selectedPackage = packages.find((pkg) => pkg.id === packageId);
    if (selectedPackage) {
      setSelectedPlan(selectedPackage.name as SubscriptionPlan);
      router.push(`/signup?plan=${selectedPackage.id}`);
    }
  };

  const handleEnterpriseContact = () => {
    setSelectedPlan('Pro / Enterprise' as SubscriptionPlan);
    router.push('/contact?plan=pro');
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row">
        {packages.map((pkg, idx) => (
          <Card
            key={pkg.id}
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
                  {pkg.price === 0 ? (
                    'Free'
                  ) : (
                    <NumberFlow
                      value={pkg.price}
                      format={{
                        style: 'currency',
                        currency: 'USD',
                        trailingZeroDisplay: 'stripIfInteger',
                      }}
                      suffix="/mo"
                      willChange
                    />
                  )}
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
                onClick={() => handleSelectPackage(pkg.id)}
              >
                {pkg.price === 0 ? 'Start Free' : 'Subscribe'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border border-primary/30 border-dashed bg-background/50 p-6 text-center">
        <h3 className="mb-2 font-bold text-2xl">{enterprisePlan.name}</h3>
        <p className="mb-4 text-muted-foreground">{enterprisePlan.description}</p>

        <div className="mt-4 mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {enterprisePlan.features.map((feature) => (
            <span key={feature} className="flex items-center text-sm">
              <BadgeCheck className="mr-1 inline-block h-4 w-4 text-primary" />
              {feature}
            </span>
          ))}
        </div>

        <Button
          onClick={handleEnterpriseContact}
          variant="ghost"
          className="font-medium text-primary hover:text-primary/80"
        >
          Contact our sales team for custom pricing <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
