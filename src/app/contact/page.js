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
    objective: "Custom LMS Development",
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
      setFormData({ name: "", email: "", objective: "Custom LMS Development", message: "" });
    }, 3000);
  };

  return (
    <main className="relative min-h-screen bg-[#CBD8E6]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Info Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-slate-900 uppercase font-heading">
                Contact <br />
                <span className="text-cyan-600">Mission Control</span>
              </h1>
              <p className="text-base text-slate-900 mb-12 max-w-lg leading-relaxed font-bold uppercase tracking-widest text-[10px] opacity-80">
                Ready to transcend traditional learning? Reach out to our crew for a strategic consultation or technical inquiry.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Neural Transmission", val: "mission-control@edutech.space" },
                  { icon: Phone, label: "Secure Link", val: "+1 (888) SPACE-TECH" },
                  { icon: MapPin, label: "Orbital Base", val: "Launchpad One, Silica Valley, MD7" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl border border-black/10 flex items-center justify-center group-hover:border-cyan-600 transition-all bg-white shadow-xl backdrop-blur-xl">
                      <item.icon className="w-6 h-6 text-cyan-600 group-hover:text-cyan-500 transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-1">{item.label}</p>
                      <p className="text-lg text-slate-900 font-black tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex gap-6">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl border border-black/5 flex items-center justify-center hover:border-cyan-600 hover:text-cyan-600 transition-all cursor-pointer bg-white shadow-sm">
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
              className="p-12 rounded-[3.5rem] border border-black/5 relative overflow-hidden bg-white/40 shadow-2xl backdrop-blur-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/20 blur-[100px] pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-cyan-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Transmission Received</h3>
                    <p className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Our crew will establish a link with you shortly.</p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-cyan-600 transition-colors">Mission Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Commander Name" 
                          className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-cyan-600 transition-colors">Neural Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="email@solar.tech" 
                          className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                        />
                      </div>
                    </div>

                    <div className="group mb-8">
                      <label className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-cyan-600 transition-colors">Objective Type</label>
                      <select 
                        value={formData.objective}
                        onChange={(e) => setFormData({...formData, objective: e.target.value})}
                        className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-all text-slate-900 appearance-none cursor-pointer font-medium"
                      >
                         <option className="bg-white">Custom LMS Development</option>
                         <option className="bg-white">Course Creation Strategy</option>
                         <option className="bg-white">Platform Optimization</option>
                         <option className="bg-white">Just Saying Hello</option>
                      </select>
                    </div>

                    <div className="group mb-12">
                      <label className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-3 block group-focus-within:text-cyan-600 transition-colors">Detailed Brief</label>
                      <textarea 
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your mission..." 
                        className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-600 transition-all text-slate-900 resize-none placeholder:text-slate-400 font-medium"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-5 bg-cyan-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:bg-cyan-700 transition-all active:scale-95 group disabled:opacity-50 uppercase tracking-[0.2em] text-xs"
                    >
                      {status === "sending" ? "Establishing..." : "Establish Link"} 
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Global Network Section - Improved Visibility */}
      <section className="pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto h-[400px] rounded-[3.5rem] border border-white/10 flex items-center justify-center relative group bg-[#0F172A] shadow-2xl overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-1000"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
           <div className="relative z-10 flex flex-col items-center">
              <Globe className="w-20 h-20 text-cyan-400 animate-[spin_20s_linear_infinite] drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
              <p className="mt-8 text-[11px] font-black tracking-[0.5em] text-white uppercase">Global Network Operational</p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
