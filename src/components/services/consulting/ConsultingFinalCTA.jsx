"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Bot } from "lucide-react";

export function ConsultingFinalCTA() {
  return (
    <section className="py-20 px-6 relative bg-transparent overflow-hidden">
      {/* Background Visualization - Very Subtle */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 [transform:perspective(1000px)_rotateX(60deg)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-12 md:p-16 rounded-[3rem] border border-black/5 backdrop-blur-3xl relative overflow-hidden group shadow-2xl bg-white"
        >
          {/* Animated Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-700 border border-cyan-100 shadow-sm">
                <Bot className="w-6 h-6 text-cyan-600" />
              </div>
             
             <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-tight font-heading">
                Refine Your Training <br />
                <span className="text-cyan-600">With Smart Strategy</span>
             </h2>
             
             <p className="text-[10px] text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed font-black uppercase tracking-[0.2em]">
                Build the future of your company today. Talk to our team to get started with a simple and effective plan.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-cyan-600 text-white font-black rounded-xl hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 group/btn uppercase tracking-widest text-[10px]">
                   Book A Call <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
                <button className="px-10 py-4 glass border border-black/5 rounded-xl font-black text-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-[10px]">
                   Message Us
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
