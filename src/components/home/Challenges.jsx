"use client";
import React from "react";
import { motion } from "motion/react";
import { AlertCircle, ShieldCheck, Users, LineChart, Cpu } from "lucide-react";

const challenges = [
  {
    title: "Market Density",
    description: "Standing out in a crowded digital learning landscape.",
    icon: AlertCircle,
  },
  {
    title: "User Trust",
    description: "Establishing credibility for new educational platforms.",
    icon: ShieldCheck,
  },
  {
    title: "User Diversity",
    description: "Addressing the varied needs of students and teachers.",
    icon: Users,
  },
  {
    title: "Outcome Proof",
    description: "Demonstrating real learning results to stakeholders.",
    icon: LineChart,
  },
  {
    title: "Tech Adoption",
    description: "Bridging the gap between technology and education.",
    icon: Cpu,
  },
];

export function Challenges() {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] uppercase tracking-tighter font-heading">
            Facing the <span className="text-cyan-600">Future</span>
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-[10px] font-black uppercase tracking-[0.4em]">
            Overcoming the digital hurdles of modern education.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] border border-white/40 hover:border-cyan-500/50 transition-all group w-full md:w-[calc(33.333%-1.5rem)] min-w-[300px] bg-[#DDE5EE]/80 shadow-xl backdrop-blur-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/20 shadow-sm">
                <challenge.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="text-xl font-black text-[#0F172A] mb-3 uppercase tracking-tighter group-hover:text-cyan-600 transition-colors font-heading">{challenge.title}</h4>
              <p className="text-[10px] text-slate-700 leading-relaxed font-black uppercase tracking-widest opacity-80">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
