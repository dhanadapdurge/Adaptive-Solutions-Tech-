"use client";
import React from "react";
import { motion } from "motion/react";
import { BarChart3, PieChart, TrendingUp, Cpu, Activity } from "lucide-react";

export function AnalyticsCenter() {
  return (
    <section className="py-32 px-6 relative bg-transparent overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full">
           <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
           </pattern>
           <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
           <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter font-heading">Learning <br /> <span className="text-ice-blue">Dashboard</span></h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                 See how your students are doing at a glance. Our simple dashboard shows you everything you need to know about their learning progress.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-8 glass-dark rounded-3xl border border-white/5">
                    <TrendingUp className="text-ice-blue mb-4" />
                    <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2 font-heading">Success Rate</h4>
                    <div className="text-3xl font-black">94%</div>
                 </div>
                 <div className="p-8 glass-dark rounded-3xl border border-white/5">
                    <Activity className="text-ice-blue mb-4" />
                    <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2 font-heading">Total Students</h4>
                    <div className="text-3xl font-black">1.8M</div>
                 </div>
              </div>
           </div>
           
           <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative aspect-square glass-dark rounded-[4rem] border border-white/10 p-10 overflow-hidden shadow-2xl"
              >
                 {/* Giant Animated Chart Visualization */}
                 <div className="relative h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter font-heading">Student Habits</h3>
                       <div className="px-4 py-2 glass rounded-xl text-[10px] font-bold text-ice-blue border border-ice-blue/20">LIVE VIEW</div>
                    </div>
                    
                    <div className="flex-1 flex items-end gap-2 py-10">
                       {[60, 80, 45, 90, 70, 85, 50, 95, 60, 75, 40, 80].map((h, i) => (
                         <div key={i} className="flex-1 relative group">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ delay: i * 0.05, duration: 1 }}
                              className="w-full bg-gradient-to-t from-ice-blue/20 to-ice-blue/60 rounded-t-lg group-hover:to-ice-blue transition-all"
                            ></motion.div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-ice-blue font-heading">{h}%</div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                       <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: -1 }} className="h-full w-1/2 bg-ice-blue/50"></motion.div>
                       </div>
                       <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: -1 }} className="h-full w-1/2 bg-cyan-500/50"></motion.div>
                       </div>
                       <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 4, repeat: -1 }} className="h-full w-1/2 bg-blue-500/50"></motion.div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Floating Labels */}
                 <div className="absolute top-1/4 right-10 glass p-4 rounded-2xl border border-white/10 backdrop-blur-3xl animate-bounce">
                    <PieChart className="w-6 h-6 text-ice-blue mb-2" />
                    <div className="text-[10px] font-black text-white font-heading">LEVELS</div>
                 </div>
              </motion.div>
           </div>
        </div>
        
        {/* Features Bottom */}
        <div className="grid md:grid-cols-4 gap-6">
           {[
             { title: "Easy Reports", icon: BarChart3 },
             { title: "Growth Data", icon: TrendingUp },
             { title: "Learning Style", icon: Activity },
             { title: "Smart Help", icon: Cpu },
           ].map((item, i) => (
              <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 hover:border-ice-blue/30 transition-all text-center group">
                 <div className="w-14 h-14 bg-ice-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-ice-blue w-7 h-7" />
                 </div>
                 <h5 className="font-bold text-white uppercase tracking-widest text-sm font-heading">{item.title}</h5>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
