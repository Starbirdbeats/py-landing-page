import React from 'react';
import { BarChart2, Calendar, LineChart, Users, Settings } from 'lucide-react';

export const stickyScrollFeatures = [
  {
    title: 'Automated Rate Pushing',
    description:
      'Update your prices instantly and push changes to connected OTAs with a single click.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <BarChart2 className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">Automated Rate Pushing</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Update your prices instantly and push changes to connected OTAs with a
          single click.
        </p>
      </div>
    ),
  },
  {
    title: 'Semper PMS Integration',
    description:
      'Seamless data fetching from Semper ensures accurate availability and occupancy information.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <Calendar className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">Semper PMS Integration</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Seamless data fetching from Semper ensures accurate availability and
          occupancy information.
        </p>
      </div>
    ),
  },
  {
    title: 'Competitor Analysis',
    description:
      'Compare your rates against a selected set of competitors to stay ahead of market trends.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <LineChart className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">Competitor Analysis</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Compare your rates against a selected set of competitors to stay ahead
          of market trends.
        </p>
      </div>
    ),
  },
  {
    title: 'Demand & Performance Tracking',
    description:
      'Access occupancy graphs, average daily rates (ADR), and RevPAR charts to monitor overall performance.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <Users className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">
          Demand & Performance Tracking
        </h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Access occupancy graphs, average daily rates (ADR), and RevPAR charts
          to monitor overall performance.
        </p>
      </div>
    ),
  },
  {
    title: 'Clean, Intuitive Interface',
    description:
      'A minimal design for a streamlined user experience that makes rate management simple.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <Settings className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">Clean, Intuitive Interface</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          A minimal design for a streamlined user experience that makes rate
          management simple.
        </p>
      </div>
    ),
  },
  {
    title: 'Bulk Rate Editing',
    description:
      'Quickly adjust rates in bulk or for specific dates, saving you time and effort.',
    content: (
      <div className="flex flex-col items-center justify-center p-4">
        <BarChart2 className="h-6 w-6 text-primary" />
        <h3 className="mt-2 text-xl font-bold">Bulk Rate Editing</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">
          Quickly adjust rates in bulk or for specific dates, saving you time
          and effort.
        </p>
      </div>
    ),
  },
];
