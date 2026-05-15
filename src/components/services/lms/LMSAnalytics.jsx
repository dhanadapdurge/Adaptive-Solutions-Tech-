"use client";
import React from "react";
import { motion } from "motion/react";
import { BarChart3, TrendingUp, PieChart, Activity, MousePointer2, UserMinus } from "lucide-react";

const kpis = [
  { label: "Success Rate", val: "92.8%", icon: Activity, color: "text-cyan-600" },
  { label: "Student Happiness", val: "88.4%", icon: UserMinus, color: "text-emerald-600" },
  { label: "Class Activity", val: "4.8x", icon: MousePointer2, color: "text-blue-600" },
  { label: "Fast Results", val: "0.2ms", icon: TrendingUp, color: "text-slate-900" },
];

export function LMSAnalytics() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter font-heading">
            Smart <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Tracking</span>
          </h2>
          <p className="text-slate-600 text-lg uppercase tracking-widest font-medium">
            See how your team is doing in real-time.
          </p>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Large Main Chart (8 cols) */}
          <div className="lg:col-span-8 glass rounded-[3rem] border border-black/5 p-10 flex flex-col min-h-[500px] bg-white shadow-sm">
             <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center border border-cyan-100 shadow-sm">
                     <BarChart3 className="text-cyan-600" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest font-heading">Engagement Data</h3>
                </div>
                <div className="flex gap-4">
                   {["Day", "Week", "Month"].map(t => (
                      <button key={t} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-slate-200 hover:border-cyan-500 transition-all text-slate-600 hover:text-cyan-600">
                        {t}
                      </button>
                   ))}
                </div>
             </div>

             <div className="flex-1 relative flex items-center justify-center">
                {/* Mock Data Visualization */}
                <div className="grid grid-cols-12 grid-rows-6 gap-2 w-full h-full opacity-20">
                   {Array.from({ length: 72 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.1 }}
                        whileInView={{ opacity: [0.1, Math.random() * 0.8 + 0.1, 0.1] }}
                        transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
                        className={`rounded-sm ${Math.random() > 0.7 ? "bg-cyan-400" : Math.random() > 0.8 ? "bg-blue-400" : "bg-black/5"}`}
                      ></motion.div>
                   ))}
                </div>
                
                {/* Overlaying Glow Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <svg className="w-full h-full p-10 overflow-visible" viewBox="0 0 800 300">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                        d="M0 150 Q 100 50, 200 120 T 400 100 T 600 180 T 800 80"
                        fill="none"
                        stroke="#0891b2"
                        strokeWidth="4"
                        className="drop-shadow-lg"
                      />
                   </svg>
                </div>
             </div>
          </div>

          {/* Right Column Success Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
              {kpis.map((kpi, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex-1 glass rounded-[2.5rem] border border-black/5 p-8 flex items-center justify-between group hover:border-cyan-500/20 transition-all bg-white shadow-sm"
                 >
                    <div>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 font-heading">{kpi.label}</p>
                       <h4 className={`text-4xl font-black ${kpi.color} drop-shadow-sm font-heading`}>{kpi.val}</h4>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-black/5 group-hover:scale-110 transition-transform`}>
                       <kpi.icon className={`w-7 h-7 ${kpi.color}`} />
                    </div>
                 </motion.div>
              ))}
          </div>

        </div>

        {/* Floating Success Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
           {[
             { label: "Active Users", val: "1.4M", trend: "+12%" },
             { label: "Lessons Learned", val: "842M", trend: "+24%" },
             { label: "Badges Earned", val: "240K", trend: "+5%" },
             { label: "Global Reach", val: "142", trend: "Nations" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 glass rounded-3xl border border-black/5 bg-white shadow-sm">
                 <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em] mb-2 font-heading">{stat.label}</p>
                 <p className="text-2xl font-black text-slate-900 font-heading">{stat.val}</p>
                 <span className="text-[10px] font-bold text-cyan-600 tracking-widest uppercase">{stat.trend}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
