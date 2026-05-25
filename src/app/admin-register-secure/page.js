"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AdminRegisterSecurePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    overrideToken: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Registration Submitting:", formData);
  };

  return (
    <main className="min-h-screen bg-[#F4F7FC] relative flex flex-col justify-between overflow-hidden">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-6 py-32 z-10">
        <div className="w-full" style={{ maxWidth: "440px" }}>
          
          {/* Card Header */}
          <div className="text-center mb-10">
            <h1 
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-3" 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              SECURE ADMINISTRATOR REGISTRATION
            </h1>
            <p 
              className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Internal node deployment framework. Unauthorized access attempts are strictly logged.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#FFFFFF] p-10 rounded-[16px] shadow-[0_10px_25px_rgba(15,23,42,0.08)] relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-2">
                <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Full Name / Staff ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="Admin Staff"
                  className="w-full bg-[#FFFFFF] border border-slate-300 h-12 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                  style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Administrator Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@adaptivetech.com"
                  className="w-full bg-[#FFFFFF] border border-slate-300 h-12 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
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
                  className="w-full bg-[#FFFFFF] border border-slate-300 h-12 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                  style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm text-slate-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Enterprise Security Override Token
                </label>
                <input
                  type="text"
                  required
                  placeholder="AT-2026-SECURE-NODE"
                  className="w-full bg-[#FFFFFF] border border-slate-300 h-12 px-4 text-slate-900 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors"
                  style={{ borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                  value={formData.overrideToken}
                  onChange={(e) => setFormData({ ...formData, overrideToken: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 mt-6 bg-[#0F172A] text-[#FFFFFF] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  borderRadius: "8px", 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                AUTHORIZE SYSTEM CREDENTIALS
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <Link
                href="/login"
                className="text-sm text-slate-600 hover:text-[#F97316] transition-colors font-medium inline-block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Return to secure entry portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
