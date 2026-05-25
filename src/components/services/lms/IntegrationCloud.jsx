"use client";
import React from "react";
import { motion } from "motion/react";
import { Cloud, Link2, Share2, Database, MessageSquare, Video } from "lucide-react";

const integrations = [
  { name: "Video Calls", icon: Video, color: "bg-blue-400" },
  { name: "Cloud Tools", icon: Cloud, color: "bg-emerald-400" },
  { name: "Messaging", icon: MessageSquare, color: "bg-pink-500" },
  { name: "Sharing", icon: Share2, color: "bg-yellow-400" },
  { name: "Data Storage", icon: Database, color: "bg-purple-500" },
  { name: "Business Tools", icon: Link2, color: "bg-cyan-400" },
];

export function IntegrationCloud() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <section className="py-24 px-6 relative overflow-hidden h-[700px] bg-transparent">
       <div className="absolute inset-0 bg-gradient-to-t from-electric-cyan/5 to-transparent"></div>
    </section>
  );

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-t from-electric-cyan/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter font-heading">
          Simple <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Connections</span>
        </h2>
        <p className="text-slate-900 text-lg max-w-2xl mx-auto mb-20 font-black uppercase tracking-[0.3em]">
          Connect with your favorite tools in seconds.
        </p>

        {/* Animated Integration Cloud */}
        <div className="relative h-[550px] flex items-center justify-center">
           {/* Central Core Icon - Professional Replacement */}
           <div className="w-16 h-16 rounded-3xl bg-white border border-black/10 flex items-center justify-center shadow-2xl z-20 group hover:border-cyan-600 transition-all">
              <Cloud className="w-8 h-8 text-cyan-600" />
           </div>

           {/* Orbiting Balls - Minimalist & Multi-colored */}
           {integrations.map((item, i) => {
             const angle = (i * 360) / integrations.length;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="absolute"
                 style={{
                   transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`
                 }}
               >
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3"
                  >
                      {/* Multi-colored Glowing Ball */}
                     <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md">
                        <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className={`w-3.5 h-3.5 rounded-full ${item.color} shadow-sm transition-colors`}></div>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{item.name}</span>
                  </motion.div>
               </motion.div>
             );
           })}

           {/* Animated connection lines (SVGs) - Dark for contrast */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              {integrations.map((_, i) => {
                const angle = (i * 360) / integrations.length;
                const radian = (angle - 90) * (Math.PI / 180);
                const x = 50 + 35 * Math.cos(radian);
                const y = 50 + 35 * Math.sin(radian);
                return (
                  <motion.line
                    key={i}
                    x1="50%" y1="50%" 
                    x2={`${x}%`} y2={`${y}%`}
                    stroke="#0F172A"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                );
              })}
           </svg>


        </div>
      </div>
    </section>
  );
}
