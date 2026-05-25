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
    <section className="py-24 relative bg-transparent overflow-hidden w-full">
      {/* Full-width wrapper — no max-width cap, horizontal padding keeps cards off screen edges */}
      <div className="w-full" style={{ padding: "0 4rem" }}>
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase font-heading text-slate-900">Expert <span className="text-[#F97316]">Feedback</span></h2>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-black">Voices from the leaders of industry-leading organizations.</p>
        </div>

        {/* Horizontal flex row — cards always in-line, never stacking */}
        <div className="flex flex-row flex-nowrap gap-8 w-full items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="flex-1 basis-0 min-w-0 p-10 rounded-[2.5rem] border border-[#E2E8F0] hover:border-[#F97316]/40 hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(15,23,42,0.06)] bg-white"
            >
              <div>
                <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Quote className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 text-[#F97316] fill-[#F97316]" />
                  ))}
                </div>
                {/* Sentence case — not uppercase */}
                <p className="text-[13px] font-sans font-normal text-slate-700 italic mb-8 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                  <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[#0F172A] text-[11px] uppercase tracking-wider">{t.name}</h4>
                  <p className="text-[9px] font-sans font-medium text-slate-400 uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
