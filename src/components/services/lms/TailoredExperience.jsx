"use client";
import React from "react";
import { motion } from "motion/react";
import { UserCheck, Link2, Heart, Smartphone, Trophy, BarChart4 } from "lucide-react";

const features = [
  { title: "Personalized Learning", icon: UserCheck, desc: "Adaptive paths for every learner node." },
  { title: "Seamless Integration", icon: Link2, desc: "Connect with any enterprise stack." },
  { title: "Engaging Experience", icon: Heart, desc: "Cinematic modules that keep users hooked." },
  { title: "Mobile Learning", icon: Smartphone, desc: "Native power on any mobile device." },
  { title: "Gamification", icon: Trophy, desc: "Levels, badges, and reward cycles." },
  { title: "Advanced Analytics", icon: BarChart4, desc: "Deep insights into learning ROI." },
];

export function TailoredExperience() {
  return (
    <section className="py-24 px-6 relative bg-slate-100/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Animated AI Learning Visual */}
         <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse"></div>
            <div className="relative aspect-square max-w-[500px] mx-auto border border-black/5 rounded-[4rem] glass p-12 overflow-hidden flex items-center justify-center bg-white shadow-xl">
              {/* Dynamic Neural Network Visualization */}
              <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full"
                  ></motion.div>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-10 border border-dashed border-cyan-600/20 rounded-full"
                  ></motion.div>
                                  {/* Central Core */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-lg">
                     <div className="w-full h-full rounded-full bg-white flex items-center justify-center">                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <UserCheck className="w-12 h-12 text-cyan-600" />
                        </motion.div>
                    </div>
                 </div>

                 {/* Orbiting nodes */}
                 {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="absolute"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`
                      }}
                    >
                       <div className="w-12 h-12 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center group-hover:border-cyan-600 transition-all">
                          <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
                       </div>
                    </motion.div>
                 ))}

                 {/* Connection lines (animated) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                     <motion.circle 
                       cx="50%" cy="50%" r="180" 
                       fill="none" stroke="#0891b2" strokeWidth="1" strokeDasharray="5,5" 
                     />
                 </svg>
              </div>

               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-full">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Neural Learning Flow</p>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">AI Personalized Pathways</h4>
               </div>
           </div>
        </div>

        {/* Right Side: Feature Cards */}
        <div className="order-1 lg:order-2">
           <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
             Tailored Learning <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
           </h2>
           <p className="text-slate-600 mb-12 text-lg max-w-xl">
             We don't believe in one-size-fits-all. Our platform adapts to every user, creating a unique journey for every mind.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-3xl border border-black/5 hover:border-cyan-600/30 transition-all group bg-white/40"
                >
                   <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                      <f.icon className="w-5 h-5 text-cyan-600" />
                   </div>
                   <h4 className="font-black text-sm text-slate-900 mb-2 uppercase tracking-wide">{f.title}</h4>
                   <p className="text-[11px] text-slate-600 leading-relaxed uppercase tracking-widest">{f.desc}</p>
                   
                   {/* Mini graph/chart effect */}
                   <div className="mt-4 h-1 w-full bg-black/5 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        className="h-full bg-cyan-600"
                      ></motion.div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
