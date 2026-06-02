"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, Globe, Twitter, Linkedin, Github, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    objective: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
    
    // Reset after some time
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", objective: "", message: "" });
    }, 3000);
  };

  return (
    <main className="relative min-h-screen bg-transparent flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 px-6 flex-grow w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight text-slate-900 uppercase font-heading">
                Contact <br />
                <span className="text-blue-600">Mission Control</span>
              </h1>
              <p className="text-base text-slate-900 mb-12 max-w-lg leading-relaxed font-bold uppercase tracking-widest text-[10px] opacity-80">
                Ready to transcend traditional learning? Reach out to our crew for a strategic consultation or technical inquiry.
              </p>

              <div className="mt-16 flex gap-6">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl border border-black/5 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer bg-white shadow-sm">
                    <Icon className="w-5 h-5 text-slate-900" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 rounded-[3.5rem] border border-black/5 relative overflow-hidden bg-white/60 shadow-2xl backdrop-blur-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 blur-[100px] pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Transmission Received</h3>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Our crew will establish a link with you shortly.</p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="group">
                        <label className="text-[10px] font-heading font-bold text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-blue-600 transition-colors">FULL NAME</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Full Name" 
                          className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-blue-600 transition-all text-slate-900 placeholder:text-slate-400 font-sans font-medium"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-heading font-bold text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-blue-600 transition-colors">BUSINESS EMAIL</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@company.com" 
                          className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-blue-600 transition-all text-slate-900 placeholder:text-slate-400 font-sans font-medium"
                        />
                      </div>
                    </div>

                    <div className="group mb-8 relative">
                      <label className="text-[10px] font-heading font-bold text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-[#F97316] transition-colors">INTENDED SERVICE</label>
                      <select 
                        value={formData.objective}
                        onChange={(e) => setFormData({...formData, objective: e.target.value})}
                        className="w-full bg-[#FFFFFF] border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] focus:shadow-[0_0_10px_rgba(249,115,22,0.2)] transition-all text-[#0F172A] appearance-none cursor-pointer font-sans font-medium"
                      >
                         <option value="" disabled className="bg-white text-slate-400">Choose a service category...</option>
                         <option value="Custom LMS Development" className="bg-white">Custom LMS Development</option>
                         <option value="Custom Course Development" className="bg-white">Custom Course Development</option>
                         <option value="E-Learning Consulting" className="bg-white">E-Learning Consulting</option>
                         <option value="Other Business Inquiry" className="bg-white">Other Business Inquiry</option>
                      </select>
                      {/* Custom dropdown arrow to match dark blue corporate theme (#0F172A) */}
                      <div className="absolute right-4 bottom-3 pointer-events-none">
                        <svg className="w-5 h-5 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>

                    <div className="group mb-12">
                      <label className="text-[10px] font-heading font-bold text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-blue-600 transition-colors">PROJECT REQUIREMENTS</label>
                      <textarea 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your mission..." 
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-blue-600 transition-all text-slate-900 resize-none placeholder:text-slate-400 font-sans font-medium"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-5 bg-[#F97316] text-[#FFFFFF] font-black rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#EA580C] hover:scale-[1.02] transition-all active:scale-95 group disabled:opacity-50 uppercase tracking-[0.2em] text-xs"
                    >
                      {status === "sending" ? "SUBMITTING..." : "SUBMIT INQUIRY"} 
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] border border-slate-200/50 relative group bg-slate-900 shadow-2xl overflow-hidden min-h-[400px] flex items-center p-12 md:p-20">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
           <div className="absolute inset-0" style={{ background: 'rgba(15, 23, 42, 0.45)' }}></div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full">
             <div className="flex flex-col justify-center text-white">
               <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading uppercase tracking-tight">GLOBAL DATA NETWORK OPERATIONAL</h2>
               <p className="text-base text-slate-200 font-sans leading-relaxed">
                 Our custom cloud infrastructure handles enterprise compliance training and interactive data nodes with 99.9% uptime worldwide.
               </p>
             </div>
             
             <div className="flex flex-col justify-center gap-4">
                {[
                  { stat: "99.9% Uptime", text: "Regional Hubs Secured" },
                  { stat: "<24hr Response", text: "Global Support Nodes" },
                  { stat: "256-bit Encryption", text: "Secure Database Transfer" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
                     <span className="font-heading font-black text-[#F97316] uppercase tracking-wider text-sm">[{item.stat}]</span>
                     <span className="font-sans font-medium text-white text-sm">{item.text}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
