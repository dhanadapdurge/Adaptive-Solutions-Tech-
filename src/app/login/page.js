"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
  };

  return (
    <main className="min-h-screen bg-transparent relative flex items-center justify-center px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/30 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden relative shadow-lg">
              <span className="text-white font-black text-2xl relative z-10">E</span>
            </div>
          </Link>
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Access <span className="text-cyan-600">Node</span></h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Enter credentials to synchronize</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-10 rounded-[2.5rem] border border-black/5 shadow-2xl bg-white/80"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="name@nexus.com"
                  className="w-full bg-slate-50 border border-black/5 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all font-medium placeholder:text-slate-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Access Protocol</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-black/5 rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-cyan-600/50 transition-all font-medium placeholder:text-slate-400"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black rounded-2xl uppercase tracking-[0.3em] text-xs shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Initialize Login <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-black/5 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 glass rounded-xl border border-black/5 hover:bg-slate-50 transition-all text-slate-900 text-[10px] font-black uppercase tracking-widest bg-white">
                <Chrome className="w-4 h-4" /> Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 glass rounded-xl border border-black/5 hover:bg-slate-50 transition-all text-slate-900 text-[10px] font-black uppercase tracking-widest bg-white">
                <Github className="w-4 h-4" /> Github
              </button>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-12 text-slate-500 text-xs font-bold uppercase tracking-widest">
          Don't have an account?{" "}
          <Link href="/signup" className="text-cyan-600 hover:underline transition-all">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}
