'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Iridescence from '@/components/Iridescence'; 
export default function FreeTrialPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Heroui's built-in form handling logic can be added here if needed.
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 space-y-0 md:space-y-8 mt-24 mb-4">
        {/* Form Header (matches Hero styling) */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-wider sm:text-5xl xl:text-6xl/none max-w-full  md:max-w-[500px]">
            Request Free Trial
          </h1>
        </div>

        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-base">
              Your details have been received. We'll be in touch shortly.
            </p>
          </div>
        ) : (
          // Glassmorphic Card wrapping the form
          <div className="w-full max-w-md p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20">
            <form
              onSubmit={handleSubmit}
              data-heroui="true"
              className="space-y-4"
            >
              <div>
                <label htmlFor="fullName" className="block text-sm mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label htmlFor="rooms" className="block text-sm mb-1">
                  Amount of Rooms
                </label>
                <input
                  id="rooms"
                  name="rooms"
                  type="number"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Hidden field to route submissions to your sales email */}
              <input
                type="hidden"
                name="salesEmail"
                value="sales@property-yield.com"
              />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        )}
      </main>
      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
