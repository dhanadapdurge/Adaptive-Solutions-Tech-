"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Play } from "lucide-react";

export function LMSFinalCTA() {
  return (
    <section className="py-24 px-6 relative flex items-center justify-center">

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[2rem] md:text-[3.25rem] leading-[1.15] md:leading-[1.15] font-extrabold mb-12 uppercase tracking-tight font-heading">
            <span className="text-[#0F172A]">Build The</span>{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#EA580C] bg-clip-text text-transparent">Future</span> <br /> 
            <span className="text-[#0F172A]">Of Learning</span>
          </h2>
          
          <p className="text-slate-900 text-lg mb-16 max-w-2xl mx-auto uppercase tracking-[0.3em] font-black opacity-80">
            Initiate your custom Learning Platform deployment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <button className="group relative px-[1.75rem] py-[0.75rem] bg-[#F97316] text-[#FFFFFF] text-[15px] font-semibold rounded-[8px] overflow-hidden transition-all uppercase tracking-widest hover:bg-[#EA580C] hover:shadow-[0_4px_14px_rgba(234,88,12,0.3)]">
                <span className="relative z-10 flex items-center gap-3">
                   Schedule Consultation <Calendar className="w-4 h-4" />
                </span>
             </button>
             
             <button className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-[0.3em] hover:text-[#F97316] transition-colors group">
                <div className="w-16 h-16 rounded-full border-2 border-black/10 flex items-center justify-center glass group-hover:border-[#F97316] transition-all">
                   <Play className="w-5 h-5 fill-slate-900 group-hover:fill-[#F97316]" />
                </div>
                Book Demo
              </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
