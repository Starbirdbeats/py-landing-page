"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, BarChart2, Calendar, LineChart, Users, Settings, BarChart, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { CircularGallery } from "@/components/circular-gallery"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MacbookScrollDemo } from '@/components/macbook-scroll';
import TabsDemo from "@/components/tabs"
import { WavyBackground } from "@/components/ui/wavy-background"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { insights } from "@/utils/insights"
import RotatingText from "@/components/jsrepo/RotatingText/RotatingText"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <div className="flex min-h-screen flex-col overflow-x-hidden pt-20">
      {/* Navigation - Glassmorphic with Mobile Menu */}
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/50 backdrop-blur-md border-b' : 'bg-transparent'
        }`}
      >
        <div className="container flex h-20 md:h-20 items-center justify-between">
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
            </nav>
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="https://myrevmanager.com/sign-in">Sign In</Link>
            </Button>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="#pricing">Start Free Trial</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="!h-7 !w-7"/>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-10">
                  <Link
                    href="#features"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="text-lg font-medium hover:text-primary"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-lg font-medium hover:text-primary"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#faq"
                    className="text-lg font-medium hover:text-primary"
                  >
                    FAQ
                  </Link>
                  <div className="flex flex-col gap-4 mt-4">
                    <Button variant="outline" asChild>
                      <Link href="https://myrevmanager.com/sign-in">
                        Sign In
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="#pricing">Start Free Trial</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
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
                  Start Free Trial
                </Button>
              </div>
            </div>
            <div className="w-full hidden md:block">
              <MacbookScrollDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Tabs */}
      <section
        id="features"
        className="w-full py-32 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-4 text-center max-w-[900px]">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-6xl">
                Powerful Features to Boost Your Revenue
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MyRevManager provides all the tools you need to optimize your
                property's pricing strategy and maximize revenue.
              </p>
            </div>
          </div>
          <div className="h-[40rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full !items-center justify-start my-20">
            <TabsDemo />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="w-full h-auto py-60 md:py-8 lg:py-12 bg-white "
      >
        <WavyBackground
          className="flex max-w-7xl mx-auto mb-32 "
          backgroundFill="white"
          containerClassName="relative"
          colors={['#2fa5df', '#0080ff', '#00a8ff', '#0066cc']}
        >
          <div className="container px-4 md:px-6 max-w-[1200px] space-y-4">
            <div className="bg-none p-8 md:p-12">
              <h2 className="text-6xl font-bold tracking-wider text-center mb-12">
                Where your{' '}
                <RotatingText
                  texts={[
                    'needs',
                    'vision',
                    'strategy',
                    'targets',
                  ]}
                  mainClassName="mt-4 inline-block px-10 sm:px-2 md:px-3 bg-[#2fa5df] text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg w-auto"
                  staggerFrom={'last'}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />{' '}
                and our product meet
              </h2>
              <div className="max-w-6xl mx-auto px-8 flex items-center justify-center">
                <HoverEffect items={insights} className="" />
              </div>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="w-full py-6 md:py-12 lg:py-24 bg-gray-50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4">
            <div className="space-y-2 max-w-sm md:max-w-full">
              <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl">
                Revenue Manager Pricing Packages
              </h2>
              <p className="md:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best fits your property's needs and budget.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            {/* Basic Package */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg relative">
              <div className="absolute top-4 right-4 bg-[#2fa5df] text-white text-xs font-medium px-2 py-1 rounded-full">
                Essential
              </div>
              <h3 className="text-xl font-bold mb-4">Basic Package</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">R111</span>
                <span className="text-gray-500 ml-2">room/pm</span>
              </div>
              {/* <p className="text-sm text-gray-500 mb-6">
                Up to R5K referral ARR
              </p> */}
              <h4 className="font-medium mb-4">Features:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#2fa5df] mr-2 flex-shrink-0" />
                  <span>Advanced Suggested Rates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#2fa5df] mr-2 flex-shrink-0" />
                  <span>Data Analytics on Supply and Demand</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#2fa5df] mr-2 flex-shrink-0" />
                  <span>Bulk Editing Rates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#2fa5df] mr-2 flex-shrink-0" />
                  <span>Performance Insights</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="bg-transparent p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">⚡</div>
                    <span className="font-medium text-black">
                      Early Bird Offer: 50% Off
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-black">
                    R55 room/pm
                  </div>
                </div>
                <Button className="w-full text-lg hover:bg-[#0000ff]" size="lg">
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Pro Package */}
            <div className="flex flex-col p-6 bg-[#2fa5df] text-white rounded-lg shadow-lg relative">
              <div className="absolute top-4 right-4 bg-white text-blue-500 text-xs font-medium px-2 py-1 rounded-full">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-4">Pro Package</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold">R150</span>
                <span className="text-blue-100 ml-2">room/pm</span>
              </div>
              {/* <p className="text-sm text-blue-100 mb-6">
                Up to R50K referral ARR
              </p> */}
              <h4 className="font-medium mb-4">Everything in Basic, plus:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Advanced Suggested Rates with Competitors Pricing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Comprehensive Competitors Rate Analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Tracked Rate Changes Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                  <span>Exclusive Entry into New Features</span>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="bg-transparent p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">⚡</div>
                    <span className="font-medium">
                      Early Bird Offer: 50% Off
                    </span>
                  </div>
                  <div className="text-2xl font-bold">R75 room/pm</div>
                </div>
                <Button
                  className="w-full bg-white text-[#2fa5df] hover:bg-[#0000ff] hover:text-white text-lg"
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </div>
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
          <CardSpotlight
            className="p-8 md:p-12 w-full bg-[#2fa5df] border-none rounded-3xl overflow-hidden"
            color="#2fa5df"
            radius={500}
          >
            <div className="flex flex-col items-center justify-center space-y-8 text-center z-20">
              <div className="space-y-2 z-20">
                <h2 className="text-3xl font-bold tracking-wider sm:text-4xl md:text-5xl text-white">
                  Ready to Optimize Your Property Revenue?
                </h2>
                <p className="max-w-[900px] mx-auto text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of property managers who are maximizing their
                  revenue with MyRevManager.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto z-20">
                <Button
                  size="lg"
                  className="bg-[#0000ff] text-lg text-white hover:bg-white hover:text-black px-8"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </CardSpotlight>
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

