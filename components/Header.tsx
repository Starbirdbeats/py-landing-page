'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from '@/components/ui/sheet';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/50 backdrop-blur-md border-b' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="#top">
            <Image
              src="/logo-cropped.png"
              alt="Property Yield Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex" asChild>
            <Link href="https://myrevmanager.com/sign-in">Sign In</Link>
          </Button>
          <Button className="hidden md:inline-flex" asChild>
            <Link href="/early-access">Start Free Trial</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="!h-7 !w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle>Menu</SheetTitle>
              <nav className="flex flex-col gap-6 mt-10">
                <Link
                  href="/#features"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#how-it-works"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/#pricing"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/#faq"
                  className="text-lg font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="flex flex-col gap-4 mt-4">
                  <Button variant="outline" asChild>
                    <Link href="https://myrevmanager.com/sign-in">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/early-access">Start Free Trial</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
