"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Can the LMS be customized?",
    a: "Absolutely. Every Learning Platform deployment is bespoke. We tailor the UI, features, and core architecture to match your organization's specific mission requirements."
  },
  {
    q: "Is mobile learning supported?",
    a: "Yes, our platform is mobile-first. We provide native-level performance across all mobile nodes with seamless cross-device synchronization."
  },
  {
    q: "Is the platform secure?",
    a: "We implement enterprise-grade encryption and biometric authentication. Your data resides in highly secure, multi-tenant cloud nodes with 24/7 monitoring."
  },
  {
    q: "What integrations are available?",
    a: "We integrate with any major enterprise stack including Zoom, Slack, Google Classroom, Teams, and standard CRM systems through our holographic integration API."
  },
  {
    q: "What analytics features exist?",
    a: "Our advanced analytics core provides real-time heatmaps, learner retention tracking, engagement metrics, and automated ROI reporting."
  }
];

export function LMSFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 border border-black/5 shadow-sm">
             <HelpCircle className="w-6 h-6 text-cyan-600" />
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase font-heading text-slate-900">Platform <span className="text-cyan-600">FAQ</span></h2>
          <p className="text-xs text-slate-600 uppercase tracking-widest font-black">Technical insights into our architectural core.</p>
        </div>

        <div className="space-y-4">
           {faqs.map((faq, i) => {
             const isOpen = openIndex === i;
             return (
               <div 
                 key={i} 
                 className={`rounded-[2rem] border transition-all duration-300 overflow-hidden bg-white/60 backdrop-blur-3xl shadow-xl ${isOpen ? "border-cyan-500/50" : "border-black/5 hover:border-cyan-500/30"}`}
               >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                     <span className={`text-xs font-black uppercase tracking-wider transition-colors ${isOpen ? "text-cyan-600" : "text-slate-900 group-hover:text-cyan-600"}`}>{faq.q}</span>
                     <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${isOpen ? "border-cyan-500 text-cyan-600" : "border-black/5 text-slate-900"}`}>
                        {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                     </div>
                  </button>
                  <AnimatePresence>
                     {isOpen && (
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
             );
           })}
        </div>
      </div>
    </section>
  );
}
