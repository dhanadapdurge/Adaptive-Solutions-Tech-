"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Rossi",
    role: "L&D Director, Starcom",
    text: "EduTech transformed our onboarding into a cinematic experience. Completion rates jumped from 45% to 98% in three months.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "James Chen",
    role: "CEO, Quantum Dynamics",
    text: "The custom LMS they built for us feels like it's from the year 2030. It's fast, beautiful, and the AI analytics are frighteningly accurate.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Miller",
    role: "HR Lead, Horizon VR",
    text: "Their course development team are genuine artists. Every module is a work of immersive storytelling that actually sticks.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase text-slate-900"
          >
            Voice of the <span className="text-cyan-600">Universe</span>
          </motion.h2>
          <p className="text-slate-600 text-lg uppercase tracking-widest font-bold">Trusted by global innovators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[3rem] border border-black/5 relative group hover:border-cyan-500/30 transition-all duration-500 flex flex-col shadow-sm hover:shadow-lg bg-white"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-aurora-teal/5 blur-2xl group-hover:bg-aurora-teal/20 transition-all"></div>
              <Quote className="w-10 h-10 text-cyan-600/10 mb-8 group-hover:text-cyan-600/20 transition-colors" />
              <p className="text-xl text-slate-900 mb-10 leading-relaxed font-medium italic flex-grow">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-black/5">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg uppercase tracking-tighter">{t.name}</h4>
                  <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-cyan-500 text-cyan-500" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
