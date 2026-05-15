"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How does consulting improve growth?",
    a: "We help you use better tools to save time and make learning easier for your team, which helps your company grow faster."
  },
  {
    q: "Can you fix my old learning system?",
    a: "Yes. We update your current tools with modern designs and better tech so they work perfectly for your business today."
  },
  {
    q: "What smart tech do you use?",
    a: "We use smart data tracking and automated plans to make sure every person in your team gets the exact training they need."
  },
  {
    q: "Does this work for big companies?",
    a: "Our systems are built to handle thousands of people at once, ensuring everyone has a fast and smooth experience."
  }
];

export function ConsultingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-black/5 shadow-sm">
             <HelpCircle className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase font-heading text-slate-900">Common <span className="text-cyan-600">Questions</span></h2>
          <p className="text-xs text-slate-600 uppercase tracking-widest font-black">Simple answers about our expert strategy services.</p>
        </div>

        <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="rounded-[2rem] border border-black/5 overflow-hidden transition-all hover:border-cyan-600/30 bg-white/60 backdrop-blur-3xl shadow-xl">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                   <span className="text-xs font-black text-slate-900 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">{faq.q}</span>
                   <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-black/5">
                      {openIndex === i ? <Minus className="w-3 h-3 text-cyan-600" /> : <Plus className="w-3 h-3 text-slate-900" />}
                   </div>
                </button>
                <AnimatePresence>
                   {openIndex === i && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="px-8 pb-6"
                     >
                        <p className="text-[11px] text-slate-600 leading-relaxed border-t border-black/5 pt-4 uppercase tracking-widest font-medium">{faq.a}</p>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
