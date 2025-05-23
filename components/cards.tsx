'use client';

import {
  CheckIcon,
  CogIcon,
  CpuIcon,
  HandCoinsIcon,
  RabbitIcon,
  WorkflowIcon,
} from '@/components/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from 'framer-motion';
import React from 'react';

export default function Cards() {
  const controls = useAnimation();
  const cards = [
    {
      id: 'automatic-sync',
      title: 'Automatic Sync',
      description:
        'Never worry about manual updates. Linguolink automatically syncs your translations as content changes.',
      icon: <WorkflowIcon />,
    },
    {
      id: 'webhook-integration',
      title: 'Webhook & CI/CD Integration',
      description:
        'Seamlessly integrate with your existing development workflows and deployment pipelines.',
      icon: <CogIcon />,
    },
    {
      id: 'inline-editor',
      title: 'Inline Editor',
      description:
        'Edit translations directly in the platform with a user-friendly interface that supports multiple languages.',
      icon: <CheckIcon />,
    },
    {
      id: 'api-key-management',
      title: 'API Key Management',
      description:
        'Securely manage and rotate API keys for all your projects with fine-grained permissions.',
      icon: <CpuIcon />,
    },
    {
      id: 'usage-based-pricing',
      title: 'Usage-Based Pricing',
      description:
        'Only pay for what you use with our transparent, scalable pricing model that grows with your needs.',
      icon: <HandCoinsIcon />,
    },
    {
      id: 'fast-performance',
      title: 'Fast Performance',
      description:
        'Get rapid response times and lightning-fast translation processing to keep your localization pipelines flowing.',
      icon: <RabbitIcon />,
    },
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const controls = useAnimation();

        return (
          <Card
            key={card.id}
            className="border-t-4 border-t-primary transition-all hover:scale-[1.015] hover:drop-shadow-lg dark:hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
            onMouseEnter={() => controls.start('animate')}
            onMouseLeave={() => controls.start('normal')}
          >
            <CardHeader className="flex items-center justify-center">
              <div className="rounded-full bg-primary/10 p-3">
                {React.cloneElement(card.icon, { controls })}
              </div>
            </CardHeader>
            <CardContent className="space-y-1 text-center">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
