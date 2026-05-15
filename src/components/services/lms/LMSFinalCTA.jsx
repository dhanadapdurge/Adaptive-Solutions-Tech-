"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Play } from "lucide-react";

export function LMSFinalCTA() {
  const [mounted, setMounted] = React.useState(false);
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-12 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Soft-Light Cinematic Background */}
      <div className="absolute inset-0 bg-[#CBD8E6]"></div>
      
      {/* Giant Glowing Sphere Background - Optimized for light mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-400/20 to-blue-400/10 blur-[150px] rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-600/10 rounded-full animate-ping opacity-20"></div>
      
      {/* Holographic Grid - Subtle dark grid */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #0F172A 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 uppercase tracking-tighter leading-tight font-heading">
            Build The <span className="text-cyan-600">Future</span> <br /> Of Learning
          </h2>
          
          <p className="text-slate-900 text-lg mb-16 max-w-2xl mx-auto uppercase tracking-[0.3em] font-black opacity-80">
            Initiate your custom Learning Platform deployment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-all uppercase tracking-widest">
                <span className="relative z-10 flex items-center gap-3">
                   Schedule Consultation <Calendar className="w-5 h-5" />
                </span>
             </button>
             
             <button className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-[0.3em] hover:text-cyan-600 transition-colors group">
                <div className="w-16 h-16 rounded-full border-2 border-black/10 flex items-center justify-center glass group-hover:border-cyan-600 transition-all">
                   <Play className="w-5 h-5 fill-slate-900 group-hover:fill-cyan-600" />
                </div>
                Book Demo
             </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles - Dark for visibility */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
          className="absolute w-1 h-1 bg-slate-900 rounded-full"
          style={{
            top: p.top,
            left: p.left,
          }}
        />
      ))}
    </section>
  );
}
