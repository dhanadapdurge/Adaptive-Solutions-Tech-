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
  const [mounted, setMounted] = React.useState(false);
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    setMounted(true);
    const newStars = [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 bg-transparent overflow-hidden">
      <Navbar />

      {/* SPACE LIGHT THEME - Cinematic Atmosphere */}
      <div className="fixed inset-0 z-0">
         {/* Background Photo - High Visibility */}
         <Image 
           src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
           alt="Consulting Atmosphere" 
           fill
           priority
           className="object-cover opacity-30"
         />
         {/* Aesthetic Gradients */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#CBD8E6]/80 via-[#CBD8E6]/60 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#CBD8E6] via-transparent to-transparent"></div>
         
         {/* Floating Space Stars */}
         {mounted && stars.map((star) => (
           <motion.div
             key={star.id}
             animate={{ 
               opacity: [0.1, 0.4, 0.1],
               scale: [1, 1.2, 1]
             }}
             transition={{ 
               duration: star.duration,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="absolute bg-slate-900 rounded-full"
             style={{
               top: star.top,
               left: star.left,
               width: star.size,
               height: star.size,
             }}
           />
         ))}
      </div>

      <div className="relative z-10 space-y-32 pb-32">
        {/* 1. Cinematic Hero */}
        <ConsultingHero />

        {/* 2. Success Bar - Light & Photo Visible Logic */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="rounded-[3rem] border border-black/5 p-8 flex flex-wrap justify-around gap-8 backdrop-blur-3xl shadow-2xl bg-white/40 overflow-hidden relative">
              {[
                { label: "Success Rate", val: "98%", icon: Target, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
                { label: "Global Reach", val: "40+", icon: Globe, img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=400" },
                { label: "Happy Teams", val: "500+", icon: Users, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" },
                { label: "Expert Support", val: "24/7", icon: Sparkles, img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" }
              ].map((item, i) => (
                  <div key={i} className="relative group p-6 rounded-2xl overflow-hidden min-w-[200px] text-center border border-black/5 flex-1">
                    {/* Item Background Photo - MAX VISIBILITY */}
                    <div className="absolute inset-0 z-0">
                       <img src={item.img} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" alt="" />
                       <div className="absolute inset-0 bg-white/60"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform border border-black/5 shadow-sm">
                         <item.icon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="text-2xl font-black text-slate-900 font-heading uppercase tracking-tighter">{item.val}</div>
                      <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-1 font-medium">{item.label}</div>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* 3. Proper Format: Arch Services Grid */}
        <section className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 font-heading">
                  Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Specialties</span>
               </h2>
               <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Precision strategy for global educational impact.</p>
            </div>
           <ConsultingServicesGrid />
        </section>

        {/* 4. Balanced Arch Feature Sections - High Contrast Dark Cards */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <motion.div 
               whileHover={{ y: -5 }}
               className="group relative h-[500px] rounded-t-[12rem] rounded-b-[2rem] overflow-hidden border border-white/10 bg-[#0F172A] shadow-2xl"
            >
               <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[6000ms]" alt="Education" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-12 left-12 right-12 text-center">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter font-heading mb-4 drop-shadow-lg">People First</h3>
                  <p className="text-[9px] text-slate-200 max-w-sm mx-auto leading-relaxed uppercase tracking-widest font-bold drop-shadow-md">Building tools that make teaching simple and fun for every team.</p>
               </div>
            </motion.div>

            <motion.div 
               whileHover={{ y: -5 }}
               className="group relative h-[500px] rounded-t-[12rem] rounded-b-[2rem] overflow-hidden border border-white/10 bg-[#0F172A] shadow-2xl"
            >
               <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[6000ms]" alt="Technology" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-12 left-12 right-12 text-center">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter font-heading mb-4 drop-shadow-lg">Future Tech</h3>
                  <p className="text-[9px] text-slate-200 max-w-sm mx-auto leading-relaxed uppercase tracking-widest font-bold drop-shadow-md">Using the latest cloud systems to power your educational goals.</p>
               </div>
            </motion.div>
        </section>

        {/* 5. Fluid Process */}
        <section className="py-20 relative">
           <ProcessTimeline />
        </section>

        {/* 6. Social Proof & Closing */}
        <section className="space-y-32">
           <ConsultingTestimonials />
           <ConsultingFAQ />
           <ConsultingFinalCTA />
        </section>
      </div>

      <Footer />
    </main>
  );
}
