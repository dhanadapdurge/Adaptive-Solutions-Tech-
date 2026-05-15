"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  FileText, ShieldCheck, Users, Briefcase, 
  BarChart, Smartphone, Trophy, Lock 
} from "lucide-react";

const features = [
  { title: "Course Builder", desc: "Drag-and-drop module creation.", icon: FileText, span: "md:col-span-4" },
  { title: "Security", desc: "Encryption on every node.", icon: Lock, span: "md:col-span-2" },
  { title: "Smart Auth", desc: "Secure biometric access.", icon: ShieldCheck, span: "md:col-span-2" },
  { title: "Social Net", desc: "Peer-to-peer networking.", icon: Users, span: "md:col-span-4" },
  { title: "Admin Panel", desc: "Streamlined management hub.", icon: Briefcase, span: "md:col-span-3" },
  { title: "Live Reports", desc: "Real-time holographic data.", icon: BarChart, span: "md:col-span-3" },
  { title: "Native Mobile", desc: "Fluid on every handheld.", icon: Smartphone, span: "md:col-span-3" },
  { title: "Rewards", desc: "XP and level mechanics.", icon: Trophy, span: "md:col-span-3" },
];

export function LMSFeaturesBento() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter font-heading">
            LMS Features <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-slate-900 text-base max-w-2xl mx-auto font-black uppercase tracking-[0.3em] opacity-80">
            A comprehensive suite of powerful tools designed to elevate the educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative glass-premium rounded-3xl border border-white/10 p-8 overflow-hidden hover:border-cyan-400 transition-all flex flex-col bg-[#0F172A] shadow-2xl backdrop-blur-xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                   <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all border border-cyan-500/30">
                      <f.icon className="w-6 h-6 text-cyan-400" />
                   </div>
                   <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2 group-hover:text-cyan-400 transition-colors">{f.title}</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed font-bold">{f.desc}</p>
                  
                  {/* Small Decorative Elements */}
                   <div className="mt-auto pt-6 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                      <div className="h-0.5 w-1/2 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-cyan-400 w-1/3 shadow-[0_0_8px_#22d3ee]"></div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
                   </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
