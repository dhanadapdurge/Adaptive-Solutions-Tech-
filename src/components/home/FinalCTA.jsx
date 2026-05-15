"use client";
import React from "react";
import { motion } from "motion/react";
import { Rocket, ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0F172A]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="glass-premium rounded-[4rem] border border-white/10 p-16 text-center relative overflow-hidden group bg-[#111827]/60 shadow-2xl backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 mix-blend-multiply"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 blur-[120px] group-hover:bg-cyan-500/30 transition-all duration-1000"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[120px] group-hover:bg-blue-500/30 transition-all duration-1000"></div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
        >
          <div className="w-20 h-20 bg-cyan-50/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-cyan-500/20 group-hover:rotate-[360deg] transition-transform duration-1000 shadow-sm">
             <Rocket className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
            Ready to Design <br />
            <span className="text-cyan-400">The Future?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto uppercase tracking-[0.2em] font-medium">
            Join the elite circle of organizations defining the next era of educational excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all uppercase tracking-widest text-sm border border-cyan-400/30">
               Establish Connection <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 shadow-sm">
               <Sparkles className="w-5 h-5 text-cyan-400" /> Request Demo
            </button>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[1,2,3,4,5,6].map(i => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: -1,
              delay: i * 0.5,
            }}
            className="absolute hidden md:block w-2 h-2 rounded-full bg-cyan-600/10 px-6 blur-[1px]"
            style={{
              top: `${((i * 37) % 80) + 10}%`,
              left: `${((i * 61) % 80) + 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
