"use client";
import "./globals.css";
import Features from "@/components/ui/feature";
import { Button } from "@/components/ui/button";
import features from "@/lib/features";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Stats } from "@/components/stats";
import { Stats_2 } from "@/components/stats_2";
import { TimelineDemo } from "@/components/roadmap";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto -mt-24">
              Welcome to PMS Scholarship Portal
            </h1>
            <p className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4">
              Paving the way to a brighter future <br /> by revolutionizing the
              modus operandi of scholarships.
            </p>
            <div className="flex md:flex-row gap-4 mt-8">
              <Button>Eligibility Criteria</Button>
              <Link href="/login">
                <Button>
                  Apply Now{" "}
                  <span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-7">
          <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto">
            Why go digital with PMSSS?
          </h1>
          <h3 className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4">
            Discover the key benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Features key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col container mx-auto mt-7 mb-10 justify-center items-center">
          <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4 mt-36">
            Number of beneficiaries
          </h1>
          <h3 className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-20">
            Analysis of the number of candidates granted scholarship from 2015
          </h3>
          <Stats />
        </div>
        <div className="flex flex-col container mx-auto mt-7 mb-10 justify-center items-center">
          <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4 mt-36">
            Total amount disbursed
          </h1>
          <h3 className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-20">
            Analysis of the total amount disbursed since 2015 on a yearly basis
          </h3>
          <Stats_2 />
        </div>
        <div className="flex flex-col container mx-auto mt-7 mb-10 justify-center items-center">
          <h1 className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4 mt-36">
            Our journey and roadmap
          </h1>
          <h3 className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-20">
            A timeline of our journey and future plans
          </h3>
          <TimelineDemo />
        </div>
      <footer className="bg-white text-gray-900 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-sm md:text-base">
            Follow us on
            <a href="https://twitter.com" className="text-blue-400 ml-1">
              Twitter
            </a>
            ,
            <a href="https://facebook.com" className="text-blue-600 ml-1">
              Facebook
            </a>
            , and
            <a href="https://instagram.com" className="text-pink-400 ml-1">
              Instagram
            </a>
            .
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
