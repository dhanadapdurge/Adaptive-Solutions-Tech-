"use client";
import React from "react";
import { motion } from "motion/react";
import { Play, Activity, Globe, Tv } from "lucide-react";

export function StreamingShowcase() {
  return (
    <section className="py-32 px-6 relative bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-video glass-dark rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover opacity-40"
                alt="Video Streaming"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-ice-blue/20 border border-ice-blue/40 flex items-center justify-center backdrop-blur-xl group shadow-[0_0_50px_rgba(0,242,255,0.3)]"
                >
                  <Play className="w-8 h-8 text-ice-blue fill-ice-blue group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-6 left-6 flex gap-2">
                 <div className="px-3 py-1 glass rounded-full text-[10px] font-black text-ice-blue flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice-blue animate-pulse"></span>
                    LIVE 4K STREAMING
                 </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                 <div className="glass p-4 rounded-2xl border border-white/10 flex gap-6">
                    <div className="text-center">
                       <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Latency</div>
                       <div className="text-xs font-black text-ice-blue">14ms</div>
                    </div>
                    <div className="text-center border-l border-white/10 pl-6">
                       <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Quality</div>
                       <div className="text-xs font-black text-ice-blue">2160p</div>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-ice-blue/10 blur-3xl -z-10 rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Video Delivery & <span className="text-ice-blue">Global Streaming</span></h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We architect cinematic video infrastructure that scales globally. From high-fidelity live streaming to intelligent VoD systems with AI-powered optimization.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "AI Video Optimization", desc: "Real-time bitrate adjustment for flawless delivery.", icon: Activity },
                { title: "Monetization Systems", desc: "Integrated payment and ad delivery frameworks.", icon: Globe },
                { title: "Global Delivery Maps", desc: "Low-latency edge distribution in 120+ regions.", icon: Tv },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-ice-blue/10 border border-ice-blue/20 flex items-center justify-center shrink-0 group-hover:bg-ice-blue/20 transition-all">
                    <item.icon className="w-5 h-5 text-ice-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
