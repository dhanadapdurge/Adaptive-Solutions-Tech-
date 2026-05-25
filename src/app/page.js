"use client";
import React from "react";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Challenges } from "@/components/home/Challenges";
import { CoreServices } from "@/components/home/CoreServices";
import { LatestArticles } from "@/components/home/LatestArticles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-slate-900 bg-transparent overflow-hidden flex flex-col">
      <Navbar />

      {/* Cinematic Ambient Background */}
      <div className="fixed inset-0 z-0 bg-[#F4F7FC]">
         <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/3 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 pt-20 flex-grow w-full">
        <Hero />
        <Challenges />
        <CoreServices />
        <Link href="/mission-briefing" className="block w-full transition-transform duration-300 ease-in-out hover:scale-[1.02]">
          <LatestArticles />
        </Link>
      </div>
      
      <Footer />
    </main>
  );
}
