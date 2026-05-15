"use client";
import React from "react";
import { motion } from "motion/react";
import { Cloud, ArrowRight, Server, Shield, Layers } from "lucide-react";

export function CloudMigration() {
  return (
    <section className="py-32 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
             <h2 className="text-5xl font-black mb-8 leading-tight uppercase tracking-tighter font-heading text-slate-900">Modern Systems & <br /> <span className="text-cyan-600">Easy Cloud Moving</span></h2>
             <p className="text-xl text-slate-700 mb-12 leading-relaxed">
                Make your tools ready for the future. We help move your old systems to the cloud so they are faster and easier to use.
             </p>
             
             <div className="space-y-8">
                {[
                  { title: "System Updates", desc: "Making your old tools work with new technology.", icon: Server },
                  { title: "Ready for Growth", desc: "Building systems that work for everyone, everywhere.", icon: Layers },
                  { title: "Safe & Steady", desc: "Moving your data carefully with no service breaks.", icon: Shield },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                     <div className="w-14 h-14 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-cyan-600" />
                     </div>
                     <div>
                        <h4 className="text-lg font-black text-slate-900 mb-1 uppercase tracking-wider">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative aspect-square glass rounded-[4rem] border border-black/5 p-12 overflow-hidden flex flex-col justify-center items-center gap-12 shadow-xl bg-white/50"
             >
                {/* Visual Before/After Transformation */}
                <div className="flex items-center gap-8 w-full justify-center">
                   {/* Legacy Node */}
                   <div className="text-center">
                      <div className="w-24 h-24 rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                         <Server className="w-10 h-10 text-slate-400" />
                      </div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LEGACY</div>
                   </div>
                   
                   <motion.div
                     animate={{ x: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: -1 }}
                   >
                      <ArrowRight className="text-cyan-600 w-10 h-10" />
                   </motion.div>
                   
                   {/* Cloud Node */}
                   <div className="text-center">
                      <div className="w-32 h-32 rounded-[2.5rem] bg-cyan-100 border border-cyan-200 flex items-center justify-center mb-4 shadow-lg relative">
                         <Cloud className="w-16 h-16 text-cyan-600" />
                         <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-500/20 animate-ping"></div>
                      </div>
                      <div className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">CLOUD NATIVE</div>
                   </div>
                </div>
                
                {/* Stats Widget */}
                <div className="w-full grid grid-cols-2 gap-4">
                   <div className="glass p-6 rounded-3xl border border-black/5 text-center bg-white shadow-sm">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Performance Boost</div>
                      <div className="text-3xl font-black text-slate-900">+300%</div>
                   </div>
                   <div className="glass p-6 rounded-3xl border border-black/5 text-center bg-white shadow-sm">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Security Score</div>
                      <div className="text-3xl font-black text-cyan-600">A+</div>
                   </div>
                </div>
             </motion.div>
             
             {/* Floating Particles */}
             <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -100],
                      opacity: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 50]
                    }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: -1, delay: i * 0.5 }}
                    className="absolute bottom-20 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px]"
                  ></motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
