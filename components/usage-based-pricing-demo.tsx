'use client';

import { UsageBasedPricing } from '@/components/billingsdk/usage-based-pricing';
import { useState } from 'react';

export function UsageBasedPricingDemo() {
  const [credits, setCredits] = useState(1000);
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6 text-center">
      <UsageBasedPricing
        className="w-full max-w-5xl"
        min={1000}
        max={50001}
        snapTo={2000}
        currency="$"
        basePrice={24.99}
        includedCredits={1000}
        value={credits}
        onChange={setCredits}
        onChangeEnd={(v) => console.log('Committed:', v)}
        title="Pay-as-you-use pricing"
        subtitle="Start with a flat monthly rate that includes 1,000 credits."
      />
      <div className="text-muted-foreground text-xs">
        Current value: {credits.toLocaleString()} credits
      </div>
    </div>
  );
}
