"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Volkov",
    role: "Training Lead",
    text: "Revolutionized our corporate training with deep AI insights.",
  },
  {
    name: "Sarah Miller",
    role: "Edu Director",
    text: "The best custom LMS we've ever deployed. Scaling was effortless.",
  },
  {
    name: "James Chen",
    role: "Tech Founder",
    text: "Future-proof architecture. Exactly what we needed to grow.",
  },
  {
    name: "Elena Rodriguez",
    role: "Instructional Designer",
    text: "As a designer, the tools provided within this custom LMS are dream-like. We can build complex modules in record time.",
  },
];

export function LMSTestimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter">
            User <span className="text-cyan-600">Endorsements</span>
          </h2>
        </div>

        {/* Auto-scrolling Testimonials */}
        <div className="flex gap-6 overflow-hidden relative">
           <motion.div
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="flex gap-6 whitespace-nowrap"
           >
             {[...testimonials, ...testimonials].map((t, i) => (
               <div key={i} className="inline-block w-[400px] glass-premium p-10 rounded-[2.5rem] border border-black/10 whitespace-normal group hover:border-cyan-600 transition-all bg-white shadow-xl">
                  <Quote className="w-10 h-10 text-cyan-600 mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
                  <p className="text-slate-900 italic mb-8 leading-relaxed text-lg font-black opacity-80">"{t.text}"</p>
                  
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-100 border border-black/10 group-hover:border-cyan-600 transition-all"></div>
                     <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">{t.name}</h4>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{t.role}</p>
                     </div>
                  </div>
                  
                  <div className="flex gap-1 mt-6">
                     {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-cyan-600 fill-cyan-600" />
                     ))}
                  </div>
               </div>
             ))}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
