"use client";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, ArrowRight, Zap, Target, Users, Trophy, Globe, Star } from "lucide-react";

// Components
import { ConsultingHero } from "@/components/services/consulting/ConsultingHero";
import { ConsultingServicesGrid } from "@/components/services/consulting/ConsultingServicesGrid";
import { ProcessTimeline } from "@/components/services/consulting/ProcessTimeline";
import { ConsultingTestimonials } from "@/components/services/consulting/ConsultingTestimonials";
import { ConsultingFAQ } from "@/components/services/consulting/ConsultingFAQ";
import { ConsultingFinalCTA } from "@/components/services/consulting/ConsultingFinalCTA";

export default function ConsultingPage() {
  return (
    <main className="relative min-h-screen text-slate-900 bg-[#F4F7FC]">
      <Navbar />

      {/* page canvas: bg-[#F4F7FC] inherited from main — no fixed overlay needed */}

      <div className="relative z-10 space-y-14 pb-14">
        {/* 1. Cinematic Hero */}
        <ConsultingHero />

        {/* 2. Stat Widgets — glassmorphism, gradient top accent, hover glow — forced single row */}
        <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20 overflow-x-auto">
          <div className="flex flex-row flex-nowrap justify-between gap-6 w-full">
            {[
              { label: "Success Rate", val: "98%",  icon: Target },
              { label: "Global Reach", val: "40+",   icon: Globe },
              { label: "Happy Teams", val: "500+",  icon: Users },
              { label: "Expert Support", val: "24/7", icon: Sparkles }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex-1 basis-0 min-w-[130px] rounded-[1.75rem] overflow-hidden border border-[#E2E8F0] hover:border-[#F97316]/50 hover:shadow-[0_0_24px_rgba(249,115,22,0.18)] transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)" }}
              >
                {/* Orange-to-Purple gradient top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F97316] via-[#A855F7] to-[#6366F1] rounded-t-[1.75rem]" />

                <div className="pt-6 pb-6 px-6 text-center">
                  <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <item.icon className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-heading font-extrabold text-[#0F172A] tracking-tighter leading-none">{item.val}</div>
                  <div className="text-[9px] font-sans font-semibold text-slate-500 uppercase tracking-widest mt-2">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Proper Format: Arch Services Grid */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 font-heading">
                  Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Specialties</span>
               </h2>
               <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Precision strategy for global educational impact.</p>
            </div>
           <ConsultingServicesGrid />
        </section>

        {/* 4. Bento-Box Feature Cards — asymmetric 60/40 split */}
        <section className="max-w-7xl mx-auto px-6">
          <h2
            className="text-center text-3xl md:text-4xl"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#0F172A',
              marginBottom: '2.5rem'
            }}
          >
            CORE INNOVATION & FUTURE VISION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "People First",
              desc: "Building tools that make teaching simple and fun for every team.",
              src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
              alt: "Education",
              tag: null
            },
            {
              title: "Future Tech",
              desc: "Using the latest cloud systems to power your educational goals.",
              src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
              alt: "Technology",
              tag: "Cloud Node"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-[2rem] border border-[#E2E8F0] overflow-hidden flex flex-row shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_30px_-10px_rgba(249,115,22,0.12)] hover:border-[#F97316]/30"
              style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {/* 60% — Image panel with rounded frame */}
              <div className="relative w-[60%] min-h-[260px] overflow-hidden flex-shrink-0">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105"
                  style={{ borderRadius: '16px', margin: '12px', width: 'calc(100% - 24px)', height: 'calc(100% - 24px)', transition: 'transform 4s ease' }}
                />

                {/* Floating glass tag — Future Tech only */}
                {card.tag && (
                  <div
                    className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[9px] font-heading font-bold text-white uppercase tracking-widest border border-white/20"
                    style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}
                  >
                    {card.tag}
                  </div>
                )}
              </div>

              {/* 40% — White text canvas */}
              <div className="w-[40%] p-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  {/* Indicator dot — pulses on hover */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] group-hover:scale-150 group-hover:animate-pulse transition-transform duration-300 flex-shrink-0" />
                  <h3 className="text-lg font-heading font-extrabold text-[#0F172A] uppercase tracking-tight leading-tight">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm font-sans font-normal text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
                {/* Subtle accent line */}
                <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#F97316] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1" />
              </div>
            </motion.div>
          ))}
          </div>
        </section>

        {/* 5. Fluid Process */}
        <ProcessTimeline />

        {/* 6. Social Proof & Closing */}
        <section className="space-y-14">
           <ConsultingTestimonials />
           <ConsultingFAQ />
           <ConsultingFinalCTA />
        </section>
      </div>

      <Footer />
    </main>
  );
}
