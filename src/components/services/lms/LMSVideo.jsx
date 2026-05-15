"use client";
import React from "react";
import { motion } from "motion/react";
import { Play, ArrowRight, Monitor, Smartphone, Layout } from "lucide-react";

export function LMSVideo() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
            Cinematic <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Walkthrough</span>
          </h2>
          <p className="text-slate-900 text-base max-w-2xl mx-auto font-black uppercase tracking-[0.3em] opacity-80">
            Experience the future of education in motion. Explore our platform architecture and UI dynamics.
          </p>
        </div>

        {/* Main Video Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video max-w-5xl mx-auto rounded-[3rem] overflow-hidden border border-black/10 shadow-2xl group cursor-pointer bg-slate-900"
        >
           <img 
             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
             alt="LMS Walkthrough" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] opacity-80"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
           
           {/* Floating Play Button */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                 <div className="absolute -inset-8 bg-cyan-600/20 blur-3xl rounded-full animate-pulse"></div>
                 <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center shadow-lg">
                       <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Info Overlay - Keeping white for video legibility */}
           <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
              <div>
                 <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Platform Master Walkthrough</h4>
                 <p className="text-xs text-slate-300 uppercase tracking-widest">Runtime: 04:42 | Resolution: 8K Holographic</p>
              </div>
              <div className="flex gap-4">
                 {[Monitor, Smartphone, Layout].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                       <Icon className="w-5 h-5" />
                    </div>
                 ))}
              </div>
           </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { title: "Analytics Engine Demo", duration: "02:15" },
              { title: "Mobile UI Breakdown", duration: "01:45" },
              { title: "Global Integration Cloud", duration: "03:20" },
            ].map((v, i) => (
              <div key={i} className="glass-premium p-6 rounded-3xl border border-black/10 group hover:border-cyan-600 transition-all cursor-pointer bg-white shadow-xl backdrop-blur-xl">
                 <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                       <Play className="w-4 h-4 text-cyan-700" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 uppercase opacity-60">{v.duration}</span>
                 </div>
                 <h5 className="text-sm font-black text-slate-900 uppercase tracking-widest group-hover:text-cyan-600 transition-colors">{v.title}</h5>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
