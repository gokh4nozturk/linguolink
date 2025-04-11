'use client';

import { type ReactNode, createContext, useContext, useState } from 'react';

export type SubscriptionPlan = 'Free' | 'Growth' | 'Pro';

interface SubscriptionContextType {
  selectedPlan: SubscriptionPlan | null;
  setSelectedPlan: (plan: SubscriptionPlan) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  return (
    <SubscriptionContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
