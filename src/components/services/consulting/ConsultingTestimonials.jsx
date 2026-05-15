"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  { 
    name: "Elena Vance", 
    role: "Training Director", 
    text: "The strategy session completely changed how we think about learning. The results were immediate.",
    image: "https://i.pravatar.cc/150?u=elena"
  },
  { 
    name: "Marcus Thorne", 
    role: "LMS Manager", 
    text: "Professional, fast, and very effective. They delivered exactly what our team needed to grow.",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  { 
    name: "Sarah Jenkins", 
    role: "Product Strategist", 
    text: "The most creative consulting team we have worked with. Simple tools, powerful results.",
    image: "https://i.pravatar.cc/150?u=sarah"
  }
];

export function ConsultingTestimonials() {
  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase font-heading text-slate-900">Expert <span className="text-cyan-600">Feedback</span></h2>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-black">Voices from the leaders of industry-leading organizations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="glass p-10 rounded-[2.5rem] border border-black/5 hover:border-cyan-600/30 transition-all flex flex-col justify-between group h-full shadow-lg bg-white/60 backdrop-blur-xl"
             >
                <div>
                   <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-cyan-100 shadow-sm">
                      <Quote className="w-5 h-5 text-cyan-600" />
                   </div>
                   <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, idx) => <Star key={idx} className="w-2.5 h-2.5 text-cyan-600 fill-cyan-600" />)}
                   </div>
                   <p className="text-[12px] text-slate-900 italic mb-8 leading-relaxed uppercase tracking-widest font-medium">"{t.text}"</p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-black/5 pt-8">
                   <div className="w-10 h-10 rounded-full overflow-hidden border border-black/5">
                      <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
                   </div>
                   <div>
                      <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-wider">{t.name}</h4>
                      <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
