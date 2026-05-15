"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function ConsultingFinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-deep-space">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass-dark rounded-[4rem] border border-ice-blue/20 p-12 md:p-24 text-center relative group overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/10 via-transparent to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-ice-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-ice-blue/30 group-hover:rotate-[360deg] transition-transform duration-1000">
               <ShieldCheck className="w-10 h-10 text-ice-blue" />
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              Scale Your <br />
              <span className="text-glow text-ice-blue">Enterprise</span> Vision
            </h2>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Our consultants are ready to architect your next-generation learning infrastructure. Secure, scalable, and intelligent.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 bg-ice-blue text-deep-space font-black rounded-2xl shadow-[0_0_40px_rgba(153,246,255,0.3)] hover:shadow-[0_0_60px_rgba(153,246,255,0.6)] hover:scale-105 transition-all flex items-center gap-3">
                 Book Consultation <Zap className="w-5 h-5 fill-deep-space" />
              </button>
              <button className="px-12 py-5 glass border border-white/10 rounded-2xl text-white font-bold hover:bg-white/5 transition-all flex items-center gap-3">
                 Download Case Studies <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Floating background image experiment: Zigzag/Boxed */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 group-hover:opacity-20 transition-opacity">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
