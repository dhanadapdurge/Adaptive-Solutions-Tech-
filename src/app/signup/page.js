"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", formData);
  };

  return (
    <main className="min-h-screen bg-transparent relative flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/30 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden relative shadow-lg">
              <span className="text-white font-black text-2xl relative z-10">E</span>
            </div>
          </Link>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Create <span className="text-cyan-600">Identity</span></h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Register your node in the nexus</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 rounded-[2.5rem] border border-black/5 shadow-2xl bg-white/80"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder="name@nexus.com"
                    className="w-full bg-slate-50 border border-black/5 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all text-sm font-medium placeholder:text-slate-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Location Node</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="New Delhi, India"
                    className="w-full bg-slate-50 border border-black/5 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all text-sm font-medium placeholder:text-slate-400"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Security Protocol</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  required
                  placeholder="Create Password"
                  className="w-full bg-slate-50 border border-black/5 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all text-sm font-medium placeholder:text-slate-400"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Confirm Protocol</label>
              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="w-full bg-slate-50 border border-black/5 rounded-2xl py-3.5 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all text-sm font-medium placeholder:text-slate-400"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black rounded-2xl uppercase tracking-[0.3em] text-[10px] shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Establish Identity <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>

        <p className="text-center mt-10 text-slate-500 text-xs font-bold uppercase tracking-widest">
          Already have an identity?{" "}
          <Link href="/login" className="text-cyan-600 hover:underline transition-all">Login</Link>
        </p>
      </div>
    </main>
  );
}
