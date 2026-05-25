"use client";
import React from "react";
import { motion } from "motion/react";
import { Search, ClipboardCheck, Map, Code2, Share2, ShieldCheck, Rocket } from "lucide-react";

const processSteps = [
  { name: "Learning Your Needs", icon: Search, desc: "We start by understanding exactly what you want to achieve." },
  { name: "Checking Your Tools", icon: ClipboardCheck, desc: "We look at the tools you already use." },
  { name: "Creating The Plan", icon: Map, desc: "We build a roadmap for your success." },
  { name: "Building The System", icon: Code2, desc: "We develop the custom platform for you." },
  { name: "Connecting Everything", icon: Share2, desc: "We make sure all systems work together." },
  { name: "Final Checks", icon: ShieldCheck, desc: "We test everything before launch." },
  { name: "Launch Time", icon: Rocket, desc: "Your new platform is ready for the world." }
];

export function ProcessTimeline() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-heading font-extrabold text-slate-900 uppercase tracking-tighter">
            Our <span className="text-[#F97316]">Workflow</span>
          </h2>
          <p className="text-slate-500 text-xs font-sans font-normal mt-4">A proven path to transformation.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 w-full h-px bg-slate-200 hidden lg:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Step Container with Number Badge & Glow */}
                <div className="relative mb-8 transition-transform group-hover:scale-110">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-[#F97316] text-white text-sm font-heading font-black flex items-center justify-center shadow-lg border-2 border-[#F4F7FC]">
                    {i + 1}
                  </div>

                  <div className="w-32 h-32 rounded-[2.5rem] bg-white border border-slate-200 shadow-lg flex items-center justify-center relative z-10 group-hover:border-[#F97316]/40 transition-colors">
                    {/* Subtle Background Glow */}
                    <div className="absolute inset-0 bg-[#F97316]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
                    <step.icon className="w-12 h-12 text-[#F97316]" />
                  </div>
                </div>

                <h3 className="text-xs md:text-sm font-heading font-extrabold text-[#0F172A] uppercase tracking-widest mb-3 leading-tight max-w-[140px]">
                  {step.name}
                </h3>
                
                <p className="text-[11px] font-sans font-normal text-slate-500 leading-relaxed max-w-[160px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>

                {/* Mobile Line */}
                <div className="w-px h-16 bg-slate-200 mt-8 lg:hidden last:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
