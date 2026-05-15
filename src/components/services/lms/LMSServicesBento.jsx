"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Layers, Rocket, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom Design",
    description: "Systems built from scratch to fit your needs perfectly.",
    content: ["Custom features", "Privacy control", "Easy connections"],
    icon: Layers,
    color: "from-cyan-500/20 to-blue-500/20",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Quick Start",
    description: "Deploy a high-performance platform in days.",
    content: ["Quick Launch", "Cost Effective", "Standard Ready"],
    icon: Rocket,
    color: "from-cyan-500/20 to-blue-500/20",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "New Tools",
    description: "Modernize your old systems with new technology.",
    content: ["Better UI", "Cloud Moving", "Mobile Ready"],
    icon: Sparkles,
    color: "from-blue-500/20 to-cyan-500/20",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    size: "md:col-span-1 md:row-span-1",
  }
];

export function LMSServicesBento() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-8 uppercase tracking-tighter leading-tight">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-slate-900 text-[11px] uppercase tracking-[0.4em] font-black opacity-70">
            Simple. Fast. Smart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[350px]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={cn(
                "group relative rounded-[4rem] border border-black/10 overflow-hidden shadow-2xl transition-all duration-700 bg-[#0F172A]",
                service.size
              )}
            >
              {/* Background Visual - DARK & ATMOSPHERIC */}
              <div className="absolute inset-0 z-0">
                 <Image 
                   src={service.img} 
                   alt={service.title} 
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-[4s] opacity-60" 
                 />
                 {/* Deep Navy Overlays for Text Visibility */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/60 via-transparent to-transparent"></div>
                 <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20", service.color)}></div>
              </div>

              {/* Content Overlay - HIGH VISIBILITY WHITE TEXT */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                 <div>
                    <div className="flex items-center justify-between mb-10">
                       <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all group-hover:scale-110 shadow-xl">
                          <service.icon className="w-8 h-8 text-white" />
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40">0{idx + 1}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-white mb-12 leading-relaxed font-black uppercase tracking-[0.3em] text-[12px] opacity-80 max-w-md">
                      {service.description}
                    </p>
                 </div>
                 
                 <div className="flex flex-wrap gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.content.map((item, i) => (
                       <span key={i} className="px-6 py-3 bg-white/10 backdrop-blur-3xl rounded-full text-[10px] font-black text-white uppercase tracking-[0.25em] border border-white/10 shadow-lg">
                          {item}
                       </span>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
