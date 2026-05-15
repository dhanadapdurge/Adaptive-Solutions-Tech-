"use client";
import React from "react";
import { motion } from "motion/react";
import { Search, PenTool, Database, Link as LinkIcon, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { title: "Learning Goals", desc: "Understanding what you need to learn.", icon: Search },
  { title: "Branding & Look", desc: "Making the site look like your brand.", icon: PenTool },
  { title: "Moving Data", desc: "Safely moving your old lessons to the new site.", icon: Database },
  { title: "System Setup", desc: "Connecting your favorite tools.", icon: LinkIcon },
  { title: "Final Checks", desc: "Checking everything to make sure it works perfectly.", icon: ShieldCheck },
  { title: "Going Live", desc: "Starting your site and making it better over time.", icon: Rocket },
];

export function LMSProcess() {
  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter font-heading">
            How We <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Build It</span>
          </h2>
          <p className="text-slate-900 text-base font-black uppercase tracking-[0.3em] opacity-80">
            A simple path to building your perfect learning platform.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - Dark for contrast */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex items-center gap-10 ${i % 2 === 0 ? "flex-row text-right" : "flex-row-reverse text-left"}`}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-2 font-heading">{step.title}</h3>
                  <p className="text-xs text-slate-900 uppercase tracking-widest leading-relaxed font-black opacity-70">{step.desc}</p>
                </div>

                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 shadow-lg flex items-center justify-center group hover:border-cyan-600 transition-all backdrop-blur-xl">
                      <step.icon className={`w-7 h-7 ${i % 2 === 0 ? "text-cyan-600" : "text-blue-600"}`} />
                      
                      {/* Connection node point */}
                      <div className="absolute inset-0 bg-cyan-600/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                </div>

                <div className="flex-1">
                   {/* Empty space for alignment */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
