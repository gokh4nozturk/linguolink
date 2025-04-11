'use client';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubscription } from '@/contexts/subscription-context';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import SignupForm from './signup-form';

export default function SignupPage() {
  const router = useRouter();
  const { selectedPlan } = useSubscription();

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            {selectedPlan
              ? `You've selected the ${selectedPlan} plan. Complete your registration to get started.`
              : 'Complete your registration to get started with LinguoLink.'}
          </CardDescription>
        </CardHeader>
        <Suspense fallback={<div className="p-6">Loading form...</div>}>
          <SignupForm />
        </Suspense>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <CardDescription>
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
