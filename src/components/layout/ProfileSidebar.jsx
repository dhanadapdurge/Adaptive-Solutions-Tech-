"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Mail, Phone, Building2, Briefcase, LogOut, Camera } from "lucide-react";

export function ProfileSidebar({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-white border-l border-black/5 p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-slate-900">Profile Settings</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:text-cyan-600 transition-colors"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 p-1 group-hover:border-cyan-500 transition-all">
                  <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center">
                    <User className="w-12 h-12 text-slate-400" />
                  </div>
                </div>
                <button className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">Alex Volkov</h3>
                <p className="text-slate-600">System Architect</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {[
                { label: "Organization", icon: Building2, value: "Galaxy Learning Corp" },
                { label: "Role", icon: Briefcase, value: "Creative Director" },
              ].map((field) => (
                <div key={field.label} className="group">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 block group-focus-within:text-cyan-600 transition-colors">
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 text-slate-900 focus:border-cyan-500 transition-all outline-none"
                    />
                  </div>
                </div>
              ))}

              <button className="w-full py-4 bg-cyan-600 text-white font-bold mt-8 shadow-lg hover:scale-105 transition-all">
                Save Changes
              </button>

              <button className="w-full py-4 border border-red-500/30 text-red-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-500/10 transition-all">
                <LogOut className="w-5 h-5" />
                Log Out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
