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
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter font-heading">
            Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Workflow</span>
          </h2>
          <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em] mt-4">A proven path to transformation.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 z-20 w-6 h-6 rounded-full bg-cyan-600 text-white text-[10px] font-black flex items-center justify-center shadow-lg">
                  {i + 1}
                </div>

                <div className="w-24 h-24 rounded-[2rem] bg-[#0F172A] border border-white/10 shadow-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 relative z-10 group-hover:border-cyan-400">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-cyan-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </div>

                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2 font-heading leading-tight max-w-[120px]">
                  {step.name}
                </h3>
                
                <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold leading-relaxed max-w-[150px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>

                {/* Mobile Line */}
                <div className="w-px h-12 bg-slate-200 mt-6 lg:hidden last:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
