'use client';

import React from 'react';
import Image from 'next/image';
import { Tabs } from '@/components/ui/tabs';
import {
  Calendar,
  BarChart,
  LineChart,
  Users,
  Settings,
  BarChart2,
} from 'lucide-react';

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-black" />,
    title: 'Automated Rate Pushing',
    description:
      'Update your prices instantly and push changes to connected OTAs with a single click.',
    image: ['/calendar.png'],
  },
  {
    icon: <BarChart className="h-6 w-6 text-black" />,
    title: 'Semper PMS Integration',
    description:
      'Seamless data fetching from Semper ensures accurate availability and occupancy information.',
    image: ['/step1.png'],
  },
  {
    icon: <LineChart className="h-6 w-6 text-black" />,
    title: 'Competitor Analysis',
    description:
      'Compare your rates against a selected set of competitors to stay ahead of market trends.',
    image: ['/rates.png'],
  },
  {
    icon: <Users className="h-6 w-6 text-black" />,
    title: 'Demand & Performance Tracking',
    description:
      'Access occupancy graphs, average daily rates (ADR), and RevPAR charts to monitor overall performance.',
    image: ['/demand.png'],
  },
  {
    icon: <Settings className="h-6 w-6 text-black" />,
    title: 'Intuitive Interface',
    description:
      'A minimal design for a streamlined user experience that makes rate management simple.',
    image: ['/performance.png'],
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-black" />,
    title: 'Bulk Rate Editing',
    description:
      'Quickly adjust rates in bulk or for specific dates, saving you time and effort.',
    image: ['/bulk-edit.png'],
  },
];

export function TabsDemo() {
  const tabs = features.map((feature) => ({
    title: feature.title,
    value: feature.title.toLowerCase().replace(/\s+/g, '-'),
    content: (
      <div className="flex flex-col items-center justify-center p-10">
        <div className="mb-4 ">{feature.icon}</div>
        <h3 className="text-2xl font-bold mb-2 text-center">{feature.title}</h3>
        <p className="text-base text-center max-w-lg">{feature.description}</p>
        {Array.isArray(feature.image) && (
          <div className="flex gap-4 mt-4">
            {feature.image.map((imgSrc, idx) => {
              const size = feature.image.length === 1 ? 600 : 400;
              return (
                <Image
                  key={idx}
                  src={imgSrc}
                  alt={`${feature.title} image ${idx + 1}`}
                  width={size}
                  height={size}
                  className="rounded-lg mt-8"
                />
              );
            })}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="max-w-5xl w-full h-full items-center">
      <Tabs
        tabs={tabs}
        containerClassName="flex flex-row items-center justify-center"
        tabClassName="px-4 py-4 rounded-full text-md whitespace-nowrap"
        activeTabClassName="bg-[#2fafdf] dark:bg-zinc-800"
        contentClassName="max-w-full mt-24 md:mt-32 h-auto bg-gradient-to-br from-[#2fa5df] to-[#a6d8f1] rounded-lg"
      />
    </div>
  );
}

export default TabsDemo;
