"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, BarChart2, Calendar, LineChart, Users, Settings } from "lucide-react"
import { useState, useEffect } from "react"
import { CircularGallery } from "@/components/circular-gallery"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MacbookScrollDemo } from '@/components/macbook-scroll';

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Automated Rate Pushing",
      description: "Update your prices instantly and push changes to connected OTAs with a single click.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Semper PMS Integration",
      description: "Seamless data fetching from Semper ensures accurate availability and occupancy information.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Competitor Analysis",
      description: "Compare your rates against a selected set of competitors to stay ahead of market trends.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Demand & Performance Tracking",
      description:
        "Access occupancy graphs, average daily rates (ADR), and RevPAR charts to monitor overall performance.",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Clean, Intuitive Interface",
      description: "A minimal design for a streamlined user experience that makes rate management simple.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: "Bulk Rate Editing",
      description: "Quickly adjust rates in bulk or for specific dates, saving you time and effort.",
    },
  ]

  const faqItems = [
    {
      question: "How long does it take for my updated rates to appear on OTAs?",
      answer:
        "Once you save a rate change (via Single or Bulk Edit), the updated rate is pushed immediately to the OTA for the chosen Rate Type. You can expect to see changes live within about five minutes.",
    },
    {
      question: "Can I change my Rate Type after initial setup?",
      answer:
        "Yes. Navigate to your Profile page, where you can select a new Rate Type from the dropdown. The system will then push updates to that newly selected Rate Type on Semper PMS moving forward.",
    },
    {
      question: "How do I reset my password if I forget it?",
      answer:
        "Use the \"Forgot Password?\" link on the Sign-In page. You'll receive an email with instructions on how to reset your password. Alternatively, if you're already logged in, you can set a new password from your Profile page.",
    },
    {
      question: "What if the algorithm's suggested rate seems too low or too high?",
      answer:
        "You can manually override the suggested rate using either the Single Edit or Bulk Edit feature on the Calendar page. Additionally, you can adjust the algorithm's sensitivity in Settings Step 2 if you consistently find the suggestions off-target.",
    },
    {
      question: "Where can I view a history of all rate changes?",
      answer:
        "If you're on the Pro Plan, visit the Tracked Rate Changes page. You'll see each rate adjustment along with the date, old rate, new rate, and which user made the change.",
    },
    {
      question: "How do I contact support?",
      answer:
        "For assistance, please reach out to your assigned agent or use the contact information provided in your MyRevManager welcome email. You can also email us at support@property-yield.com for technical issues.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation - Glassmorphic */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/70 backdrop-blur-md border-b' : 'bg-transparent'
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
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
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="https://myrevmanager.com/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="#pricing">Get Early Access</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Centered */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-4 max-w-5xl">
              <h1 className="text-3xl font-bold tracking-wider sm:text-5xl xl:text-6xl/none">
                Optimize Your Property Revenue with MyRevManager
              </h1>
              <p className="max-w-[800px] mx-auto text-gray-500 md:text-xl">
                The intelligent rate management solution that maximizes your
                property's revenue potential through automated pricing
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="px-8">
                  Get Early Access
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="w-full">
              <MacbookScrollDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Circular Gallery */}
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                Powerful Features to Boost Your Revenue
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MyRevManager provides all the tools you need to optimize your
                property's pricing strategy and maximize revenue.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CircularGallery items={features} />
          </div>
        </div>
      </section>

      {/* How It Works Section - Mimicking the provided image */}
      <section
        id="how-it-works"
        className="w-full py-12 md:py-24 lg:py-32 bg-purple-100"
      >
        <div className="container px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-wider text-center mb-12">
              Where your needs and our product meet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/calendar.png"
                    alt="Automated Rate Management"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Automated Rate Management
                </h3>
                <p className="text-gray-500">
                  Set your price bands once and let our algorithm suggest
                  optimal rates based on market demand.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/step1.png"
                    alt="Seamless Integration"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
                <p className="text-gray-500">
                  Connect with Semper PMS and push rate changes to all your OTAs
                  with a single click.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Image
                    src="/demand.png"
                    alt="Data-Driven Insights"
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-500">
                  Make informed decisions with competitor analysis and
                  performance tracking tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                Revenue Manager Pricing Packages
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your property's needs and budget.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            {/* Basic Package */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Essential
              </div>
              <h3 className="text-xl font-bold mb-4">Basic Package</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">R111</span>
                <span className="text-gray-500 ml-2">room/pm</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Up to R5K referral ARR
              </p>
              <h4 className="font-medium mb-4">Includes:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Automated Rate Pushing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Semper PMS Integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Basic Demand Tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>Calendar View & Bulk Editing</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-blue-500">⚡</div>
                    <span className="font-medium">
                      Early Bird Offer: 50% Off
                    </span>
                  </div>
                  <div className="text-2xl font-bold">R55 room/pm</div>
                </div>
                <Button className="w-full" variant="outline">
                  Get Early Access
                </Button>
              </div>
            </div>

            {/* Pro Package */}
            <div className="flex flex-col p-6 bg-blue-500 text-white rounded-lg shadow-sm relative">
              <div className="absolute top-4 right-4 bg-white text-blue-500 text-xs font-medium px-2 py-1 rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-4">Pro Package</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">R150</span>
                <span className="text-blue-100 ml-2">room/pm</span>
              </div>
              <p className="text-sm text-blue-100 mb-6">
                Up to R50K referral ARR
              </p>
              <h4 className="font-medium mb-4">Everything in Basic, Plus:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Full Features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>
                    Includes competitor pricing & rate change tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Premium SLAs</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="bg-blue-600 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">⚡</div>
                    <span className="font-medium">
                      Early Bird Offer: 50% Off
                    </span>
                  </div>
                  <div className="text-2xl font-bold">R75 room/pm</div>
                </div>
                <Button className="w-full bg-white text-blue-500 hover:bg-blue-50">
                  Get Early Access
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-xl font-bold mb-4 md:mb-0">
                Early Bird Discount: Limited time only for first time adopters
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about MyRevManager.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Rounded Box Container */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl text-white">
                  Ready to Optimize Your Property Revenue?
                </h2>
                <p className="max-w-[900px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of property managers who are maximizing their
                  revenue with MyRevManager.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8"
                >
                  Get Early Access
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-primary-foreground/10 px-8"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="w-full py-6 bg-white text-black">
        <div className="container px-20 md:px-32 lg:px-48">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm">
              © 2025 Property Yield. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

