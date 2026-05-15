"use client";
import React from "react";
import { motion } from "motion/react";
import { Trophy, Star, Target, Shield, Zap, Medal } from "lucide-react";

const badges = [
  { name: "Speed Demon", icon: Zap, color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "Master Mind", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Code Breaker", icon: Shield, color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "Top Learner", icon: Medal, color: "text-blue-600", bg: "bg-blue-50" },
];

export function LMSGamification() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
              Gamification <br /> <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-xl">
              Turn learning into an addictive journey. Our gamification engine uses psychological reward cycles to drive engagement and retention through the roof.
            </p>

            <div className="space-y-10">
               {/* XP Progress Bar Mockup */}
               <div className="glass p-8 rounded-[2rem] border border-black/5 relative overflow-hidden bg-white shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                     <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-cyan-600" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-900">Current XP: 14,240</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase">Level 24</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden border border-black/5">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md"
                     ></motion.div>
                  </div>
                  <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">3,450 XP TO NEXT LEVEL UNLOCK</p>
               </div>

               <div className="grid grid-cols-2 gap-6">
                   {badges.map((badge, i) => (
                     <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass p-6 rounded-3xl border border-black/5 flex flex-col items-center group hover:border-cyan-600/30 transition-all bg-white/40 shadow-sm"
                    >
                       <div className={`w-16 h-16 rounded-full ${badge.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                          <badge.icon className={`w-8 h-8 ${badge.color}`} />
                       </div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">{badge.name}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Side: Leaderboard / Achievement Visual */}
          <div className="relative">
             <div className="absolute inset-0 bg-blue-100/50 blur-[120px] rounded-full"></div>
             
             <div className="relative glass rounded-[3rem] border border-black/5 p-10 shadow-xl overflow-hidden bg-white/60">
                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-3">
                   <Star className="w-6 h-6 text-cyan-600 fill-cyan-600" />
                   Leaderboard UI
                </h3>

                <div className="space-y-4">
                    { [
                      { name: "K. Anderson", xp: "42,400", rank: "01", active: true },
                      { name: "Sarah Volkov", xp: "38,150", rank: "02" },
                      { name: "John Miller", xp: "35,900", rank: "03" },
                      { name: "Alex Chen", xp: "31,200", rank: "04" },
                    ].map((user, i) => (
                       <motion.div
                         key={i}
                         initial={{ x: 20, opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         transition={{ delay: i * 0.1 }}
                         className={`p-5 rounded-2xl border ${user.active ? "bg-white border-cyan-200" : "bg-white/40 border-black/5"} flex items-center justify-between group hover:border-cyan-600/20 transition-all`}
                       >
                          <div className="flex items-center gap-4">
                             <span className={`text-xs font-black ${user.active ? "text-cyan-600" : "text-slate-400"}`}>{user.rank}</span>
                             <div className="w-10 h-10 rounded-full bg-slate-200 border border-black/5"></div>
                             <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{user.name}</span>
                          </div>
                          <span className="text-xs font-black text-slate-900">{user.xp} XP</span>
                       </motion.div>
                    ))}
                </div>

                <div className="mt-10 pt-8 border-t border-black/5 text-center">
                   <button className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 hover:text-cyan-700 transition-colors">
                      View Global Rankings
                   </button>
                </div>
             </div>
             
             {/* Floating Achievement Alert */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-12 -right-8 glass p-6 rounded-3xl border border-black/10 shadow-2xl z-20 flex items-center gap-4 bg-white/90"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-md">
                   <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-500 uppercase">Achievement Unlocked</p>
                   <p className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none">Course Master v2</p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
