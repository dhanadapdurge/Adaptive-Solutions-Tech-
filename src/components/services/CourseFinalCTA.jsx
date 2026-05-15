"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function CourseFinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Background Glows - Subtler */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass rounded-[3rem] border border-black/5 p-10 md:p-16 text-center relative overflow-hidden group bg-white shadow-xl">
          {/* Animated Background Image Pattern - Very faint */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[10px] font-black text-cyan-600 uppercase tracking-[0.3em] mb-8 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-600/50" />
              Next-Gen Learning
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight text-slate-900 uppercase font-heading">
              Ready to <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Evolve</span> <br />
              Your <span className="text-blue-600">Platform?</span>
            </h2>

            <p className="text-[10px] text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed uppercase tracking-widest font-bold">
              Don't settle for static modules. Launch immersive, story-driven learning journeys that your teams will actually love.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-cyan-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-lg transition-all uppercase tracking-widest text-xs"
              >
                Start A Project <Send className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="w-full sm:w-auto px-10 py-4 bg-white border border-black/5 rounded-2xl text-slate-900 font-black flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs shadow-sm hover:border-cyan-500/30"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Decorative Elements - Very subtle */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/[0.02] rounded-full" />
          <div className="absolute -top-10 -right-10 w-60 h-60 border border-aurora-teal/[0.02] rounded-full" />
        </div>
      </div>
    </section>
  );
}
