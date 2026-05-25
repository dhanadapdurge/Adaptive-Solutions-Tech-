"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("CLIENT");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { isSignup, role, formData });
  };

  return (
    <main className="min-h-screen bg-[#F4F7FC] relative flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Return */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-[#0F172A] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>E</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            System Access
          </h1>
          <p className="text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Secure authentication to the enterprise workspace
          </p>
        </div>

        {/* Auth Container */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
          
          <AnimatePresence mode="wait">
            {!isSignup ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* DUAL-ROLE TOGGLE TABS */}
                <div 
                  className="flex p-1 bg-[#E2E8F0] mb-8"
                  style={{ borderRadius: "8px", gap: "0.5rem" }}
                >
                  <button
                    type="button"
                    onClick={() => setRole("CLIENT")}
                    className={`flex-1 py-2.5 text-xs font-bold transition-all rounded-md uppercase tracking-wider ${
                      role === "CLIENT" 
                        ? "bg-white text-slate-900 shadow-sm" 
                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    CLIENT ACCESS
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("ADMIN")}
                    className={`flex-1 py-2.5 text-xs font-bold transition-all rounded-md uppercase tracking-wider ${
                      role === "ADMIN" 
                        ? "bg-white text-slate-900 shadow-sm" 
                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    ADMINISTRATOR LOGIN
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-white border border-slate-300 py-3 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Secure Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-white border border-slate-300 py-3 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-4 bg-[#0F172A] text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide text-sm"
                    style={{ borderRadius: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {role === "CLIENT" ? "PROCEED TO WORKSPACE" : "SECURE ADMIN ENTRY"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href={role === "CLIENT" ? "/signup" : "/admin-register-secure"}
                    className="block w-full text-center text-[#475569] font-medium transition-colors cursor-pointer hover:text-[#F97316]"
                    style={{ fontSize: "0.875rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {role === "CLIENT" 
                      ? "Don't have an account? Sign up here" 
                      : "Don't have a secure admin account? Register node here"}
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Create Account
                  </h2>
                  <p className="text-sm text-slate-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Join the enterprise learning network
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Company / Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-white border border-slate-300 py-3 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-white border border-slate-300 py-3 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Choose Secure Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-white border border-slate-300 py-3 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                      style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 mt-4 bg-[#0F172A] text-white font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide text-sm"
                    style={{ borderRadius: "8px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    CREATE WORKSPACE
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="text-sm text-slate-600 hover:text-[#0F172A] hover:underline transition-colors font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Already have an account? Sign in here
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Secret Admin Routing Link */}
        <div className="mt-12 text-center opacity-40 hover:opacity-100 transition-opacity">
          <Link 
            href="/admin-register-secure" 
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            ⊙ System Portal Access
          </Link>
        </div>
      </div>
    </main>
  );
}
