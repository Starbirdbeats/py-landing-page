import React from 'react';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Link from 'next/link';
import Image from 'next/image';

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
           
          </span>
        }
        badge={
            <Badge className="h-10 w-10 transform -rotate-12" />
        }
        src={`/sign-in2.png`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <Link href="#top" className="flex items-center">
      <Image
        src="/logo-cropped.png"
        alt="Logo"
        width={24}
        height={24}
        className={className}
      />
    </Link>
  );
};
