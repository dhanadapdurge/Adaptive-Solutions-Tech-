"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, Search, Plus, Minus, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Technology",
    questions: [
      { q: "Is the EduTech LMS cloud-native?", a: "Yes, our entire platform is built on modern cloud systems, ensuring 99.99% uptime for your team." },
      { q: "Do you support xAPI and SCORM?", a: "Precisely. We support all modern interoperability standards, and our Neural Core natively translates xAPI streams for advanced analytics." },
    ]
  },
  {
    category: "Creative",
    questions: [
      { q: "How long does a cinematic course take?", a: "Depending on the complexity of 3D renders, our creative studio typically delivers high-end modules within 4 to 8 standard Earth weeks." },
      { q: "Can we use our own internal SMEs?", a: "Absolutely. We view your SMEs as the star maps for our journey. We handle the production while they provide the scientific truth." },
    ]
  },
  {
    category: "General",
    questions: [
      { q: "What is your pricing model?", a: "Our enterprise solutions are custom-quoted based on organizational size, required modules, and desired level of cinematic fidelity." },
      { q: "Is there a trial period?", a: "We offer a 14-day Guided Exploration Program for qualified enterprise partners." },
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState("0-0");
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="relative min-h-screen bg-transparent flex flex-col">
      <Navbar />

      <section className="pt-32 pb-20 px-6 flex-grow w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-10 tracking-tight text-slate-900 uppercase font-heading"
            >
              Frequently <br />
              <span className="text-blue-600">Asked</span> Questions
            </motion.h1>
            <div className="relative max-w-xl mx-auto">
                <input 
                  type="text" 
                  placeholder="Search protocols..." 
                  className="w-full bg-white border border-black/10 rounded-2xl px-12 py-5 outline-none focus:border-blue-600 transition-all text-slate-900 placeholder:text-slate-400 shadow-xl font-medium"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-900" />
            </div>
          </div>

          <div className="space-y-16">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                 <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.5em] mb-8 flex items-center gap-4 font-heading">
                   {category.category}
                   <div className="h-px flex-1 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
                 </h3>
                
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => {
                    const id = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === id;
                    
                    if (searchQuery && !faq.q.toLowerCase().includes(searchQuery.toLowerCase())) return null;
 
                    return (
                       <div 
                        key={id} 
                        className={cn(
                          "rounded-[2rem] border transition-all duration-300 overflow-hidden bg-white/60 backdrop-blur-3xl shadow-xl",
                          isOpen ? "border-blue-500/50" : "border-black/5 hover:border-blue-500/30"
                        )}
                      >
                        <button 
                          onClick={() => toggle(id)}
                          className="w-full flex items-center justify-between p-8 text-left group"
                        >
                           <span className={cn(
                            "text-xs font-black uppercase tracking-wider transition-colors font-heading",
                            isOpen ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                          )}>{faq.q}</span>
                           <div className={cn(
                             "w-8 h-8 rounded-full flex items-center justify-center transition-all border",
                             isOpen ? "border-blue-600 text-blue-600 rotate-180" : "border-black/5 text-slate-900 group-hover:border-blue-600/40"
                           )}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                               <div className="px-8 pb-8 text-slate-600 leading-relaxed text-[11px] border-t border-black/5 pt-6 uppercase tracking-widest font-medium font-heading">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

           <div className="mt-24 p-12 rounded-[3.5rem] border border-black/5 text-center relative overflow-hidden bg-white/80 shadow-2xl backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-8 animate-pulse" />
              <h3 
                className="text-3xl mb-4 text-[#0F172A]" 
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                STILL HAVE QUESTIONS?
              </h3>
              <p 
                className="text-base text-slate-700 mb-10 max-w-lg mx-auto opacity-90" 
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                If you cannot find the answer you are looking for, reach out directly to our support team for specialized assistance.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-10 py-5 bg-[#0F172A] text-white rounded-2xl hover:bg-slate-800 transition-all shadow-xl" 
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                CONTACT SUPPORT
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
