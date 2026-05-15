"use client";
import React from "react";
import { motion } from "motion/react";
import { Smartphone, Globe, Zap, Layers, Bell, Play } from "lucide-react";

export function LMSMobile() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side: Static Mobile Device Mockup */}
        <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[150px] rounded-full"></div>
           
           {/* Futuristic Phone Mockup - Dark Mode for Contrast */}
            <motion.div
              initial={{ rotateZ: 0, y: 0 }}
              whileInView={{ rotateZ: 0, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-[300px] h-[600px] bg-[#050816] rounded-[3.5rem] border-[8px] border-slate-900 shadow-2xl p-4 overflow-hidden group"
            >
               {/* Internal Screen Content - Dark Mode */}
               <div className="relative w-full h-full bg-[#0F172A] rounded-[2.5rem] overflow-hidden flex flex-col">
                  <div className="p-6 pt-10">
                     <div className="flex items-center justify-between mb-8">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                        <Bell className="w-5 h-5 text-slate-500" />
                     </div>
                     <h4 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">My <br /> Learning</h4>
                    
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm backdrop-blur-md">
                              <div className="flex gap-4 items-center mb-3">
                                 <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                    <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                                 </div>
                                 <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className={`h-full bg-cyan-400 w-[${40 + i * 15}%] shadow-[0_0_10px_#22d3ee]`}></div>
                                 </div>
                              </div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Module 0{i}: Systems</p>
                           </div>
                        ))}
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="mt-auto p-4 flex justify-between border-t border-white/10 bg-white/5 backdrop-blur-md">
                     {[Layers, Zap, Globe, Smartphone].map((Icon, i) => (
                        <Icon key={i} className={`w-5 h-5 ${i === 0 ? "text-cyan-400" : "text-slate-500"}`} />
                     ))}
                  </div>
               </div>

               {/* Glowing Bezel */}
               <div className="absolute inset-0 rounded-[3.5rem] border border-cyan-600/20 pointer-events-none group-hover:border-cyan-600/40 transition-all"></div>
            </motion.div>

           {/* Floating App Cards beside phone */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-10 top-1/4 glass-premium p-4 rounded-2xl border border-black/10 shadow-2xl z-20 bg-white/80 backdrop-blur-xl"
            >
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center border border-cyan-200">
                     <Zap className="w-4 h-4 text-cyan-700" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Push Alert</span>
               </div>
            </motion.div>
        </div>

        {/* Right Side: Content - DARK TEXT FIX */}
        <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyan-700 font-black uppercase tracking-[0.4em] text-xs mb-6"
            >
              Anytime. Anywhere.
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
              Mobile Learning <br /> <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-slate-900 text-lg mb-12 max-w-xl font-black uppercase tracking-widest text-[10px] opacity-80 leading-relaxed">
              Seamless, high-performance learning on any device. Start on desktop, finish on your mobile.
            </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               { [
                 { title: "Anywhere Access", desc: "Learn offline or in the field." },
                 { title: "Mobile-First", desc: "Designed for speed and ease." },
                 { title: "Cross-Sync", desc: "Real-time node synchronization." },
                 { title: "Native UI", desc: "Fluid performance on every OS." }
               ].map((f, i) => (
                 <div key={i} className="group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center border border-cyan-200 group-hover:border-cyan-600 transition-all mb-4 shadow-sm">
                       <Smartphone className="w-5 h-5 text-cyan-700" />
                    </div>
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1 group-hover:text-cyan-700 transition-colors">{f.title}</h4>
                    <p className="text-[10px] text-slate-900 uppercase tracking-wider font-bold opacity-70">{f.desc}</p>
                 </div>
               ))}
           </div>
        </div>

      </div>
    </section>
  );
}
