"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, Volume2, Globe, Sparkles } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-6">
              <Globe className="w-5 h-5" />
              Global Vision Release
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1] text-slate-900">
              Cinematic Masterclass <br />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Learning Standard</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 glass rounded-2xl border border-black/5 hover:border-cyan-500/30 transition-all cursor-pointer bg-white">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Sparkles className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Neural Voiceover</h4>
                  <p className="text-sm text-slate-600">AI-powered narration in 40+ languages with emotional resonance.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 glass rounded-2xl border border-black/5 hover:border-cyan-500/30 transition-all cursor-pointer bg-white">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Play className="text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">4K Immersive Renders</h4>
                  <p className="text-sm text-slate-600">Cinematic 3D environments that increase retention by 300%.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video glass rounded-[2.5rem] overflow-hidden border border-black/5 group shadow-xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=1200" 
              alt="Students Learning" 
              fill
              className="object-cover group-hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-cyan-600 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-white">
                 <Play className="w-10 h-10 fill-white" />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-black/10 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-slate-900/60">NEXT-GEN LMS TRAILER</span>
              <Volume2 className="w-4 h-4 text-slate-900/60" />
            </div>
          </motion.div>
          
          {/* Floating Accents */}
          <div className="absolute -top-8 -right-8 w-24 h-24 border-t-2 border-r-2 border-electric-cyan/30 rounded-tr-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 border-b-2 border-l-2 border-aurora-teal/30 rounded-bl-3xl"></div>
        </div>
      </div>
    </section>
  );
}
