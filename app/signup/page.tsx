'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { Spinner } from '@/components/ui/spinner';
import { useSubscription } from '@/contexts/subscription-context';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import SignupForm from './signup-form';

export default function SignupPage() {
  const router = useRouter();
  // const { selectedPlan } = useSubscription();

  useEffect(() => {
    window.location.href = process.env.NEXT_PUBLIC_APP_REDIRECTION_URL || '';
  });

  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner />
          </EmptyMedia>
          <EmptyTitle>Processing your request</EmptyTitle>
          <EmptyDescription>
            Please wait while we process your request. Do not refresh the page.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm" onClick={() => router.back()}>
            Back
          </Button>
        </EmptyContent>
      </Empty>
      {/*<Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            {selectedPlan
              ? `You've selected the ${selectedPlan} plan. Complete your registration to get started.`
              : 'Complete your registration to get started with Linguolink.'}
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
      </Card>*/}
    </div>
  );
}
