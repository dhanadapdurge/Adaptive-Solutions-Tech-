"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-[#F4F7FC] text-slate-900 overflow-hidden flex flex-col">
      <Navbar />

      <div className="relative z-10 pt-40 pb-32 flex-grow w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col">
          
          {/* 1. SECTION 1: 'OUR CORE STORY' (Hero Split - Text Left, Photo Right) */}
          <section className="grid md:grid-cols-2 gap-12 items-center py-16">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm w-fit"
              >
                Our Core Story
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading text-slate-900 uppercase">
                WE DESIGN THE FUTURE OF GLOBAL LEARNING
              </h1>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans mb-4">
                Adaptive Solutions Tech is a premier software and educational architecture firm. We specialize in engineering custom, high-performance Learning Management Systems (LMS) tailored specifically for global organizations and rapidly scaling teams.
              </p>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans">
                By combining elite UI/UX design principles with robust database integration, we transform traditional, static training manuals into dynamic, cloud-based digital learning experiences that work seamlessly on any device.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate Meeting Room"
                fill
                className="object-cover rounded-[20px] shadow-lg"
              />
            </div>
          </section>

          {/* 2. SECTION 2: 'OUR MISSION' (Alternating Split - Photo Left, Text Right) */}
          <section className="grid md:grid-cols-2 gap-12 items-center py-16">
            <div className="relative h-[400px] md:h-[500px] order-2 md:order-1">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                alt="Alternative Office Workflow"
                fill
                className="object-cover rounded-[20px] shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-slate-900 uppercase">
                OUR MISSION
              </h2>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans mb-4">
                Our core mission is to completely revolutionize how modern global workforces internalize critical operational knowledge. We permanently eliminate the friction of uninspiring corporate training by engineering lightning-fast, highly interactive digital spaces, custom 3D course simulations, and intuitive onboarding frameworks that drive genuine user immersion.
              </p>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans">
                By deploying data-backed learning paths that actively adjust to an employee’s unique pacing, we empower enterprise organizations to systematically reduce training times by up to 40% while simultaneously skyrocketing knowledge retention scores and maintaining strict compliance standards across distributed regional teams.
              </p>
            </div>
          </section>

          {/* 3. SECTION 3: 'OUR VISION' (Alternating Split - Text Left, Photo Right) */}
          <section className="grid md:grid-cols-2 gap-12 items-center py-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-slate-900 uppercase">
                OUR VISION
              </h2>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans mb-4">
                We envision a borderless corporate future where organizational wisdom is effortlessly scaled, decentralized, and secured through intelligent cloud-native infrastructure. Adaptive Solutions Tech aims to be the definitive global architectural backbone for enterprise learning, pushing the absolute technical boundaries of SCORM and xAPI data integration.
              </p>
              <p className="text-base text-slate-600 leading-[1.6] font-normal font-sans">
                Through the strategic application of advanced learning analytics, predictive compliance monitoring, and premium user-centered design, we build scalable platforms that ensure complex technical workflows, shifting safety regulations, and internal standard operating procedures are beautifully understood, transparently evaluated, and instantly trackable.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
                alt="Collaborative Team"
                fill
                className="object-cover rounded-[20px] shadow-lg"
              />
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
