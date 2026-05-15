"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Users, ShieldCheck, Activity, Workflow, 
  CheckCircle2, Star, Zap, BarChart3, 
  Shield, ClipboardCheck, ArrowRight, UserCheck, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const trainingCategories = [
  {
    id: "onboarding",
    title: "Onboarding",
    tag: "Welcome Node",
    desc: "A warm and simple start for your new team members.",
    content: ["Welcome Message", "Company Intro", "First Day", "Role Training"],
    icon: Users,
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    glowColor: "bg-cyan-500/40",
    accent: "text-cyan-400"
  },
  {
    id: "performance",
    title: "Performance",
    tag: "Growth Hub",
    desc: "Helping your team do their best work every day.",
    content: ["Speed Up Work", "Easy Guides", "Job Support", "Skill Building"],
    icon: Activity,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    glowColor: "bg-blue-500/40",
    accent: "text-blue-400"
  },
  {
    id: "compliance",
    title: "Safety & Rules",
    tag: "Security Node",
    desc: "Keeping your team safe and following company rules.",
    content: ["Safety Training", "Simple Policies", "Standard Rules", "Compliance Help"],
    icon: ShieldCheck,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    glowColor: "bg-purple-500/40",
    accent: "text-purple-400"
  }
];

export function TrainingCategoryShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Background Orbs - More Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/10 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            <Star className="w-3 h-3 fill-cyan-400" />
            Training Types
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter text-slate-900 font-poppins uppercase">
            Smart Learning <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Categories</span>
          </h2>

          <p className="text-slate-900 text-sm max-w-xl mx-auto font-black uppercase tracking-[0.2em] opacity-80 font-poppins">
            Compact and powerful training solutions for your business.
          </p>
        </div>

        {/* Dark Box Grid - High Contrast Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className={cn(
                "h-full rounded-[3rem] border border-white/10 p-8 relative overflow-hidden transition-all duration-500 group-hover:border-cyan-400 group-hover:-translate-y-2 flex flex-col shadow-2xl bg-[#0F172A] backdrop-blur-xl font-poppins",
                category.borderColor
              )}>
                {/* Subtle Gradient Glow */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700",
                  category.color
                )} />

                {/* Top Section: Icon & Tag */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center border bg-white/5 backdrop-blur-md shadow-lg transition-transform group-hover:scale-110",
                      category.borderColor.replace('/30', '/50')
                    )}>
                      <category.icon className={cn("w-6 h-6", category.accent)} />
                    </div>
                   <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 font-poppins">{category.tag}</span>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter font-poppins">{category.title}</h3>
                  <p className="text-slate-400 text-[11px] mb-8 leading-relaxed font-bold uppercase tracking-widest opacity-80 font-poppins">
                    {category.desc}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {category.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 group/item">
                        <CheckCircle2 className={cn("w-4 h-4 transition-colors", category.accent)} />
                        <span className="text-[10px] font-bold text-slate-300 group-hover/item:text-cyan-400 transition-colors uppercase tracking-widest">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                 <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-cyan-400 transition-all">
                      Learn More
                   </button>
                   <ArrowRight className={cn("w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all", category.accent)} />
                </div>

                {/* Visual Creativity - Very Subtle Orbiting Particle */}
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full border border-white/10 rounded-full relative"
                    >
                       <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full blur-[2px]", category.glowColor)} />
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
