'use client';

import { useState } from 'react';
import { UsageBasedPricing } from '@/components/billingsdk/usage-based-pricing';
import { cn } from '@/lib/utils';

const PER_CREDIT = 7.755;

export interface UsageBasedPackageProps {
  className?: string;
  onCommit?: (credits: number, price: number) => void;
}

export function UsageBasedPackage({ className }: UsageBasedPackageProps) {
  const [credits, setCredits] = useState(2000);

  return (
    <div className='flex flex-1 flex-col items-center justify-center space-y-6 text-center'>
      <UsageBasedPricing
        className={cn('max-w-4xl', className)}
        min={2000}
        max={100000}
        snapTo={2000}
        currency='$'
        basePrice={24.99}
        includedCredits={2000}
        creditInterval={2000}
        pricePerInterval={PER_CREDIT}
        value={credits}
        onChange={setCredits}
        title='Pay-as-you-use pricing'
        subtitle='Start with a flat monthly rate that includes 2,000 keys.'
      />
      <div className='text-muted-foreground text-xs'>
        Current value: {credits.toLocaleString()} keys
      </div>
    </div>
  );
}

export default UsageBasedPackage;
