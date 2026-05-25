"use client";
import React from "react";
import { motion } from "motion/react";
import { AlertCircle, ShieldCheck, Users, LineChart, Cpu } from "lucide-react";

const challenges = [
  {
    title: "Market Density",
    description: "Standing out in a crowded digital learning landscape.",
    icon: AlertCircle,
    gradient: "from-[#2563EB] to-[#0D9488]",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
    hoverBorder: "hover:border-blue-400"
  },
  {
    title: "User Trust",
    description: "Establishing credibility for new educational platforms.",
    icon: ShieldCheck,
    gradient: "from-purple-600 to-pink-500",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-500/10",
    hoverBorder: "hover:border-purple-400"
  },
  {
    title: "User Diversity",
    description: "Addressing the varied needs of students and teachers.",
    icon: Users,
    gradient: "from-orange-500 to-yellow-500",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-500/10",
    hoverBorder: "hover:border-orange-450"
  },
  {
    title: "Outcome Proof",
    description: "Demonstrating real learning results to stakeholders.",
    icon: LineChart,
    gradient: "from-indigo-600 to-cyan-500",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-400"
  },
  {
    title: "Tech Adoption",
    description: "Bridging the gap between technology and education.",
    icon: Cpu,
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-450"
  },
];

export function Challenges() {
  return (
    <section className="py-16 px-6 bg-transparent border-y border-slate-200/40 relative overflow-hidden z-20 mt-0 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] tracking-tight font-heading">
            Facing the <span className="text-blue-600">Future</span>
          </h2>
          <p className="text-slate-650 max-w-2xl mx-auto text-[10px] font-black uppercase tracking-[0.4em]">
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
              className={`p-10 rounded-2xl border border-[#E2E8F0] hover:bg-[#F5F3FF]/40 ${challenge.hoverBorder} hover:shadow-lg transition-all duration-300 group w-full md:w-[calc(33.333%-1.5rem)] min-w-[300px] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] relative overflow-hidden`}
            >
              {/* 3px gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${challenge.gradient} rounded-t-2xl`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-30"></div>
              
              <div className={`w-12 h-12 rounded-full ${challenge.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                <challenge.icon className={`w-6 h-6 ${challenge.iconColor}`} />
              </div>
              <h4 className="text-xl font-black text-[#0F172A] mb-3 tracking-tighter group-hover:text-blue-600 transition-colors font-heading relative z-10">{challenge.title}</h4>
              <p className="text-sm text-slate-650 leading-relaxed font-normal relative z-10">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
