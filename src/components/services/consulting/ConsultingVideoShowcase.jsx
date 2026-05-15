"use client";
import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const videos = [
  { title: "Enterprise Consulting Demo", category: "STRATEGY", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { title: "AI Analytics Showcase", category: "INTELLIGENCE", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  { title: "Cloud Migration Walkthrough", category: "INFRASTRUCTURE", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { title: "Communication Platform Preview", category: "REAL-TIME", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" },
];

export function ConsultingVideoShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Video <span className="text-ice-blue">Showcase</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Immerse yourself in our technological breakthroughs and client success stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {videos.map((v, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="group relative aspect-video glass-dark rounded-[3rem] border border-white/5 overflow-hidden shadow-2xl cursor-pointer"
             >
                <img 
                  src={v.image} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                  alt={v.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div
                     whileHover={{ scale: 1.1 }}
                     className="w-16 h-16 rounded-full bg-ice-blue/20 border border-ice-blue/40 flex items-center justify-center backdrop-blur-xl group-hover:bg-ice-blue/40 transition-all"
                   >
                      <Play className="w-6 h-6 text-ice-blue fill-ice-blue" />
                   </motion.div>
                </div>
                
                <div className="absolute bottom-8 left-8">
                   <div className="text-[10px] font-black text-ice-blue uppercase tracking-[0.3em] mb-2">{v.category}</div>
                   <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-glow transition-all">{v.title}</h4>
                </div>
                
                <div className="absolute top-8 right-8">
                   <div className="px-3 py-1 glass rounded-full text-[8px] font-bold text-white/50 uppercase tracking-widest border border-white/5">03:45</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
