"use client";
import React from "react";
import { motion } from "motion/react";
import { Layers, Rocket, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Design",
    description: "Systems built from scratch to fit your needs perfectly.",
    content: ["Custom features", "Privacy control", "Easy connections"],
    icon: Layers,
  },
  {
    title: "Quick Start",
    description: "Deploy a high-performance platform in days.",
    content: ["Quick Launch", "Cost Effective", "Standard Ready"],
    icon: Rocket,
  },
  {
    title: "New Tools",
    description: "Modernize your old systems with new technology.",
    content: ["Better UI", "Cloud Moving", "Mobile Ready"],
    icon: Sparkles,
  }
];

export function LMSServicesBento() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 tracking-tight leading-tight font-heading">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-slate-655 text-[11px] uppercase tracking-[0.4em] font-black opacity-70">
            Simple. Fast. Smart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {services.map((service, idx) => {
            const isMiddle = idx === 1;
            return (
              <div 
                key={idx}
                className={cn(
                  "relative group transition-transform duration-500",
                  isMiddle ? "md:-translate-y-[10px]" : ""
                )}
              >
                {/* Soft, rich gradient glow behind the card on hover */}
                <div 
                  className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#2DD4BF] opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700 pointer-events-none group-hover:scale-[1.03]"
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative h-full rounded-[2.5rem] p-10 overflow-hidden flex flex-col justify-between shadow-[0_4px_12px_rgba(15,23,42,0.03)] hover:shadow-2xl transition-all duration-500 border"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(8px)",
                    borderColor: "rgba(226, 232, 240, 0.8)",
                  }}
                >
                  {/* Creative Top Border Line Glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div>
                        <div className="flex items-center justify-between mb-8">
                           {/* Soft-tinted circular badges */}
                           <div className={cn(
                             "w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm",
                             idx === 0 ? "bg-blue-500/10 border-blue-200/50 text-blue-600" :
                             idx === 1 ? "bg-purple-500/10 border-purple-200/50 text-purple-600" :
                             "bg-cyan-500/10 border-cyan-200/50 text-cyan-600"
                           )}>
                              <service.icon className="w-6 h-6" />
                           </div>
                           {/* Step indicator in top-right corner */}
                           <span 
                             className="absolute top-8 right-8 text-xs font-mono tracking-wider text-[#0F172A]/40 pointer-events-none select-none"
                             style={{ fontWeight: 600 }}
                           >
                             0{idx + 1}
                           </span>
                        </div>
                        
                        <h3 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight leading-tight group-hover:text-indigo-650 transition-colors font-heading text-left">
                          {service.title}
                        </h3>
                        
                        <p className="text-[#475569] mb-8 leading-relaxed font-normal text-sm text-left font-sans">
                          {service.description}
                        </p>
                     </div>
                     
                     {/* Features Content Checklist Always Visible */}
                     <div className="flex flex-wrap gap-2 mt-auto">
                        {service.content.map((item, i) => (
                           <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200/60 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wider font-sans">
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
