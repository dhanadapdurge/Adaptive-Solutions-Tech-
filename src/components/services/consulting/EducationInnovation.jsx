"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles, Mic, Fingerprint, Gamepad2, Bot, MessageSquare } from "lucide-react";

const innovations = [
  { title: "AI Personalization", icon: Bot, desc: "Dynamic learning paths tailored to individual cognitive profiles." },
  { title: "Gamification Engine", icon: Gamepad2, desc: "Immersive engagement frameworks and reward systems." },
  { title: "Voice Recognition", icon: Mic, desc: "Interactive oral assessments and voice-controlled navigation." },
  { title: "AI Chatbots", icon: MessageSquare, desc: "24/7 intelligent tutoring and administrative assistance." },
  { title: "Biometric Verification", icon: Fingerprint, desc: "Secure identity tracking and engagement monitoring." },
  { title: "Smart Proctoring", icon: Sparkles, desc: "AI-monitored assessment environments for integrity." },
];

export function EducationInnovation() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Innovative Solutions <br /> <span className="text-ice-blue">For Education</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Pushing the boundaries of digital education with cutting-edge AI and immersive technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {innovations.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -10 }}
               className="group p-10 glass-dark rounded-[3rem] border border-white/5 hover:border-ice-blue/30 transition-all relative overflow-hidden"
             >
                <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl bg-ice-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-ice-blue" />
                   </div>
                   <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                   <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
                
                {/* Decorative Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ice-blue/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
