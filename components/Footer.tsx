import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white text-black">
      <div className="container px-20 md:px-32 lg:px-48">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
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
          <Link href="/#faq" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Property Yield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
