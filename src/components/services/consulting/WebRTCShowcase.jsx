"use client";
import React from "react";
import { motion } from "motion/react";
import { Video, Mic, Share2, MessageSquare, Users } from "lucide-react";

export function WebRTCShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-ice-blue/30 bg-ice-blue/5 text-ice-blue text-xs font-bold uppercase tracking-widest mb-6"
          >
            Real-Time Infrastructure
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Low Latency <span className="text-glow text-ice-blue">Communication</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Ultra-fast WebRTC systems for live conferencing, collaboration, and real-time interaction.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual - Call UI */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h-full glass-dark rounded-[3.5rem] border border-white/5 relative overflow-hidden p-8"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200"
                   className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                   alt="Conference UI"
                 />
                 
                 {/* Participant Overlays */}
                 <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="w-12 h-12 rounded-xl glass border border-white/10 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-full h-full object-cover" alt="User" />
                      </div>
                    ))}
                 </div>
                 
                 {/* Voice Waves Animation */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1 h-12">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                        transition={{ duration: 0.5 + Math.random(), repeat: -1 }}
                        className="w-1 bg-ice-blue rounded-full opacity-60"
                      ></motion.div>
                    ))}
                 </div>
                 
                 {/* Call Controls */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-2xl flex gap-6 border border-white/10 backdrop-blur-2xl">
                    <button className="text-white hover:text-ice-blue transition-colors"><Mic /></button>
                    <button className="text-white hover:text-ice-blue transition-colors"><Video /></button>
                    <button className="text-white hover:text-ice-blue transition-colors"><Share2 /></button>
                    <button className="bg-red-500/20 text-red-500 px-4 py-1 rounded-lg font-bold text-xs uppercase tracking-widest">End</button>
                 </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-6">
                 <div className="glass p-6 rounded-3xl border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Stability</h4>
                    <div className="text-2xl font-black text-white">99.99%</div>
                 </div>
                 <div className="glass p-6 rounded-3xl border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Encryption</h4>
                    <div className="text-2xl font-black text-ice-blue">E2EE</div>
                 </div>
                 <div className="glass p-6 rounded-3xl border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Active Users</h4>
                    <div className="text-2xl font-black text-white">4.2k</div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Features Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             {[
               { title: "Live Whiteboard", desc: "Collaborative drawing and documentation.", icon: Share2 },
               { title: "Real-time Chat", desc: "Instant messaging with rich media support.", icon: MessageSquare },
               { title: "Screen Sharing", desc: "Ultra-low latency 4K display sharing.", icon: Users },
             ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 glass p-8 rounded-[2.5rem] border border-white/10 hover:border-ice-blue/30 transition-all flex flex-col justify-between group"
                >
                   <div className="w-12 h-12 rounded-xl bg-ice-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <f.icon className="w-6 h-6 text-ice-blue" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{f.title}</h4>
                      <p className="text-sm text-slate-500">{f.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
