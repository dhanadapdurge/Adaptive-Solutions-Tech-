"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";
import { Star, Target, Users, Zap, Globe, Sparkles } from "lucide-react";

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen bg-transparent text-slate-900 overflow-hidden">
      <Navbar />

      <div className="relative z-10 pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 1. Split Hero - VIBRANT PHOTOS */}
          <section className="grid lg:grid-cols-2 gap-20 items-center mb-40">
             <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-[9px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm"
                >
                  Our Core Story
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black mb-10 leading-[1] tracking-tighter font-heading uppercase text-slate-900"
                >
                  WE DESIGN THE <br />
                  <span className="text-cyan-600">FUTURE</span> OF <br />
                  GLOBAL LEARNING
                </motion.h1>
                <p className="text-sm text-slate-600 max-w-lg leading-relaxed uppercase tracking-widest font-medium">
                  We are a group of creators and thinkers dedicated to making education simple, powerful, and accessible for every company on earth.
                </p>
             </div>
             
             {/* 100% VISIBILITY - VIBRANT PHOTO */}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-[600px] rounded-[5rem] overflow-hidden border border-black/5 shadow-2xl group bg-white"
             >
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
                  alt="Vibrant Team"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
             </motion.div>
          </section>

          {/* 2. Creative Metrics Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40">
             {[
               { label: "Global Presence", val: "40+", icon: Globe },
               { label: "Elite Projects", val: "2.5K", icon: Target },
               { label: "Expert Creators", val: "150+", icon: Users },
               { label: "Success Rate", val: "99%", icon: Sparkles }
             ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-[2.5rem] border border-black/5 text-center group hover:border-cyan-600/30 transition-all bg-white/60"
                >
                   <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-100 group-hover:bg-cyan-100 transition-colors">
                      <stat.icon className="w-6 h-6 text-cyan-600" />
                   </div>
                   <div className="text-3xl font-black text-slate-900 font-heading mb-2">{stat.val}</div>
                   <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
             ))}
          </section>

          {/* 3. The Philosophy - VIBRANT */}
          <section className="relative rounded-[5rem] overflow-hidden h-[500px] mb-40 border border-white/20 shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover"
                alt="High Tech Philosophy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                 <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-heading text-white drop-shadow-xl">
                    "Simplicity is the <br /> 
                    <span className="text-cyan-400">Ultimate Sophistication</span>"
                 </h2>
              </div>
          </section>

          {/* 4. Creative Team Grid - VIBRANT */}
          <section className="grid md:grid-cols-2 gap-12 mb-40">
             <div className="space-y-12">
                <div className="glass p-16 rounded-[4rem] border border-black/5 relative overflow-hidden group bg-white/60 shadow-xl">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 blur-3xl rounded-full"></div>
                   <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter font-heading mb-8">Our Mission</h3>
                   <p className="text-sm text-slate-600 leading-relaxed uppercase tracking-widest font-medium">To empower every human being through smart, beautiful, and accessible learning tools.</p>
                </div>
                <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 glass bg-white shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=800" 
                  alt="Our Vision" 
                  fill
                  className="object-cover"
                />
              </div>
             </div>
             <div className="flex flex-col justify-between">
                 <div className="relative h-[400px] rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl mb-12 bg-white">
                   <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" fill className="object-cover" alt="Vibrant Tech" />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="glass p-16 rounded-[4rem] border border-black/5 relative overflow-hidden group bg-white/60 shadow-xl">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 blur-3xl rounded-full"></div>
                   <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter font-heading mb-8">Our Vision</h3>
                   <p className="text-sm text-slate-600 leading-relaxed uppercase tracking-widest font-medium">A borderless world connected by knowledge and the passion for lifelong growth.</p>
                </div>
             </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
