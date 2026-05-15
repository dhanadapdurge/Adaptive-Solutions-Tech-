"use client";
import React from "react";
import { motion } from "motion/react";
import { Share2, Globe, Database, CreditCard, PlayCircle, ShieldCheck } from "lucide-react";

const nodes = [
  { name: "Customer Systems", icon: Database, x: "20%", y: "30%" },
  { name: "Business Systems", icon: Globe, x: "80%", y: "35%" },
  { name: "Payments", icon: CreditCard, x: "15%", y: "70%" },
  { name: "Videos", icon: PlayCircle, x: "85%", y: "75%" },
  { name: "Sign-in Safety", icon: ShieldCheck, x: "50%", y: "20%" },
  { name: "Learning Tracker", icon: Share2, x: "50%", y: "85%" },
];

export function IntegrationEcosystem() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase font-heading text-slate-900">Simple <span className="text-cyan-600">Connections</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Easily connect all your favorite tools and systems with our simple, secure connections.</p>
        </div>

        <div className="relative h-[600px] bg-slate-100 rounded-[4rem] border border-black/5 overflow-hidden p-12 shadow-inner">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: -1 }}
               className="w-40 h-40 rounded-full glass border border-cyan-500/40 flex items-center justify-center relative shadow-lg bg-white"
             >
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping"></div>
                <div className="text-center">
                   <div className="text-cyan-600 font-black text-2xl uppercase tracking-tighter font-heading">MAIN</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HUB</div>
                </div>
             </motion.div>
          </div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
             {nodes.map((node, i) => (
               <motion.line
                 key={i}
                 x1="50%"
                 y1="50%"
                 x2={node.x}
                 y2={node.y}
                 stroke="rgba(8, 145, 178, 0.5)"
                 strokeWidth="2"
                 strokeDasharray="5,5"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 1.5, delay: i * 0.2 }}
               />
             ))}
          </svg>

          {/* Integration Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 + 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="absolute glass p-6 rounded-2xl border border-black/5 backdrop-blur-2xl z-30 flex items-center gap-4 group cursor-pointer bg-white shadow-md"
              style={{ top: node.y, left: node.x, transform: 'translate(-50%, -50%)' }}
            >
               <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200 transition-all">
                  <node.icon className="w-5 h-5 text-cyan-600" />
               </div>
               <div className="text-left">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{node.name}</div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-tighter">Connected</div>
               </div>
               
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl"></div>
            </motion.div>
          ))}
          
          {/* Animated Data Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                x: [Math.random() * 100 + "%", "50%"],
                y: [Math.random() * 100 + "%", "50%"],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: -1, delay: Math.random() * 5 }}
              className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[1px] z-10"
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
