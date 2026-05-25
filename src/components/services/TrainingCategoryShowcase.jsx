"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, ShieldCheck, Activity, 
  CheckCircle2, Star, ArrowRight, Sparkles
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
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-200/50 hover:border-blue-500/50",
    glowColor: "bg-blue-500/40",
    accent: "text-blue-600",
    iconBg: "bg-blue-50/50 border-blue-100"
  },
  {
    id: "performance",
    title: "Performance",
    tag: "Growth Hub",
    desc: "Helping your team do their best work every day.",
    content: ["Speed Up Work", "Easy Guides", "Job Support", "Skill Building"],
    icon: Activity,
    color: "from-indigo-500/10 to-purple-500/10",
    borderColor: "border-indigo-200/50 hover:border-indigo-500/50",
    glowColor: "bg-indigo-500/40",
    accent: "text-indigo-600",
    iconBg: "bg-indigo-50/50 border-indigo-100"
  },
  {
    id: "compliance",
    title: "Safety & Rules",
    tag: "Security Node",
    desc: "Keeping your team safe and following company rules.",
    content: ["Safety Training", "Simple Policies", "Standard Rules", "Compliance Help"],
    icon: ShieldCheck,
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-200/50 hover:border-purple-500/50",
    glowColor: "bg-purple-500/40",
    accent: "text-purple-600",
    iconBg: "bg-purple-50/50 border-purple-100"
  }
];

export function TrainingCategoryShowcase() {
  const [activeModalCategory, setActiveModalCategory] = useState(null);
  
  // Onboarding (Welcome Roadmap) Completed States
  const [onboardingModules, setOnboardingModules] = useState([false, false, false, false]);

  // Performance (Growth Hub) States
  const [performanceSpeedUp, setPerformanceSpeedUp] = useState(30); 
  const [showPerformanceGuides, setShowPerformanceGuides] = useState(false);
  const [performanceScoreToggled, setPerformanceScoreToggled] = useState(false);

  // Compliance Quiz State
  const [selectedComplianceQuizOption, setSelectedComplianceQuizOption] = useState(null);

  const handleCloseModal = () => {
    setActiveModalCategory(null);
    setSelectedComplianceQuizOption(null);
    setOnboardingModules([false, false, false, false]);
    setPerformanceSpeedUp(30);
    setShowPerformanceGuides(false);
    setPerformanceScoreToggled(false);
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Background Orbs - More Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-[10px] font-heading font-bold uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <Star className="w-3 h-3 fill-blue-500 text-blue-500" />
            Training Types
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 leading-tight tracking-tight text-slate-900 uppercase">
            Smart Learning <span className="text-[#F97316] italic font-heading font-extrabold">Categories</span>
          </h2>

          <p className="text-slate-650 text-sm max-w-xl mx-auto font-sans font-normal opacity-85 leading-relaxed">
            Compact and powerful training solutions for your business.
          </p>
        </div>

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
              <div className="h-full rounded-[3rem] border border-[#E2E8F0] p-8 relative overflow-hidden transition-[all] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[6px] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.08)] flex flex-col bg-[#FFFFFF] font-sans">
                {/* Thin Stylish Gradient Border Stroke */}
                <div className="absolute inset-0 rounded-[3rem] border border-transparent bg-gradient-to-br from-[#F97316]/20 to-transparent opacity-60 pointer-events-none" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>

                {/* Subtle Gradient Glow */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700",
                  category.color
                )} />

                {/* Top Section: Icon & Tag */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F97316]/10 border border-[#F97316]/20 transition-all duration-300 group-hover:bg-[#F97316]/20 group-hover:scale-110 shadow-sm relative z-10">
                      <category.icon className="w-5 h-5 text-[#F97316] transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                   <span className="text-[9px] font-sans font-semibold uppercase tracking-[0.3em] text-slate-400">{category.tag}</span>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 uppercase tracking-tighter">{category.title}</h3>
                  <p className="text-slate-650 text-xs mb-8 leading-relaxed font-sans font-normal opacity-80">
                    {category.desc}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {category.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 group/item">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                        <span className="text-[11px] font-sans font-medium text-slate-705 group-hover/item:text-[#F97316] transition-colors tracking-wide">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                 <div className="relative z-10 mt-auto pt-6 border-t border-slate-200/50 flex items-center justify-between">
                   <button 
                     onClick={() => setActiveModalCategory(category.id)}
                     className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-slate-900 hover:text-[#F97316] transition-all focus:outline-none"
                   >
                      Learn More
                   </button>
                   <button 
                     onClick={() => setActiveModalCategory(category.id)}
                     className="focus:outline-none"
                   >
                     <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#F97316]" />
                   </button>
                </div>

                {/* Visual Creativity - Very Subtle Orbiting Particle */}
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full border border-slate-200/50 rounded-full relative"
                    >
                       <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full blur-[2px]", category.glowColor)} />
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POP-UP CONTAINER (Modal Layer) */}
      <AnimatePresence>
        {activeModalCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 select-none">
            {/* Blurred out background backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[12px]"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md bg-[#FFFFFF] rounded-[2.5rem] p-10 shadow-2xl border border-[#E2E8F0] font-sans z-10 overflow-hidden"
            >
              {/* Close Button '✕' */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-350 transition-colors font-heading text-sm focus:outline-none"
              >
                ✕
              </button>

              {/* ONBOARDING ROADMAP MODULE */}
              {activeModalCategory === "onboarding" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316]">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-extrabold text-slate-900 uppercase tracking-tight leading-tight">Interactive Onboarding Node</h3>
                      <p className="text-[10px] font-sans font-semibold text-slate-400 uppercase tracking-widest">Student&rsquo;s First Day Dashboard</p>
                    </div>
                  </div>

                  {/* Dynamic Preview Simulation — Live First-Day Mockup */}
                  <div className="space-y-3 font-sans bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-wider">Welcome Roadmap Checklist</span>
                      <span className="text-[10px] font-heading font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Live Node</span>
                    </div>

                    {[
                      { key: 1, label: "Module 1: Welcome Message" },
                      { key: 2, label: "Module 2: Company Intro Video" },
                      { key: 3, label: "Module 3: First Day Portal Setup" },
                      { key: 4, label: "Module 4: Role Training Simulation Hub" }
                    ].map((mod, idx) => (
                      <div
                        key={mod.key}
                        onClick={() => {
                          setOnboardingModules(prev => {
                            const copy = [...prev];
                            copy[idx] = !copy[idx];
                            return copy;
                          });
                        }}
                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                          onboardingModules[idx]
                            ? "bg-orange-50/30 border-[#F97316]/40 shadow-sm"
                            : "bg-white border-slate-200/80 hover:border-[#F97316]/30 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Checkbox */}
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                              onboardingModules[idx]
                                ? "bg-[#F97316] border-[#F97316] text-white shadow-md shadow-[#F97316]/30"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {onboardingModules[idx] && (
                              <svg viewBox="0 0 10 8" fill="none" className="w-3 h-3">
                                <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`text-[12px] font-sans font-medium transition-all ${
                              onboardingModules[idx] ? "text-[#F97316] font-bold" : "text-slate-700"
                            }`}
                          >
                            {mod.label}
                          </span>
                        </div>
                        {onboardingModules[idx] && (
                          <span className="text-[9px] font-heading font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full tracking-wider uppercase whitespace-nowrap">
                            100% Completed
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PERFORMANCE PROGRESS MODULE */}
              {activeModalCategory === "performance" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316]">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-extrabold text-slate-900 uppercase tracking-tight leading-tight">Growth Hub Performance Analytics</h3>
                      <p className="text-[10px] font-sans font-semibold text-slate-400 uppercase tracking-widest">Simulated Progress Tracker</p>
                    </div>
                  </div>

                  {/* Simulated Progress Tracker Panel */}
                  <div className="space-y-4 font-sans bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-wider">Metric Boosters</span>
                      <span className="text-[10px] font-heading font-bold text-[#F97316] bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">Growth Hub</span>
                    </div>

                    {/* Metric 1 — Speed Up Work Module */}
                    <div
                      onClick={() => setPerformanceSpeedUp(85)}
                      className="space-y-2.5 cursor-pointer select-none border border-slate-200/80 bg-white p-4 rounded-2xl hover:border-[#F97316]/50 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="flex justify-between items-center text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                        <span>Speed Up Work Module</span>
                        <span
                          className={`font-extrabold transition-all duration-500 ${
                            performanceSpeedUp >= 85 ? "text-[#F97316]" : "text-slate-400"
                          }`}
                        >
                          {performanceSpeedUp}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                        <div
                          className="h-full bg-gradient-to-r from-[#F97316] to-orange-400 transition-all duration-1000 ease-out rounded-full shadow-sm"
                          style={{ width: `${performanceSpeedUp}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-slate-400 font-sans italic">
                        {performanceSpeedUp >= 85 ? "✓ Boosted to 85% — Optimal speed reached" : "Click to animate bar to 85%"}
                      </p>
                    </div>

                    {/* Metric 2 — Easy Guides Portal */}
                    <div className="border border-slate-200/80 bg-white p-4 rounded-2xl hover:border-[#F97316]/50 hover:shadow-sm transition-all duration-300">
                      <div
                        onClick={() => setShowPerformanceGuides(prev => !prev)}
                        className="flex justify-between items-center text-xs font-heading font-bold uppercase tracking-wider text-slate-700 cursor-pointer select-none"
                      >
                        <span>Easy Guides Portal</span>
                        <span
                          className={`text-[10px] font-heading font-black transition-all duration-300 ${
                            showPerformanceGuides ? "text-[#F97316] rotate-90" : "text-slate-400"
                          }`}
                        >
                          ▶
                        </span>
                      </div>

                      <AnimatePresence>
                        {showPerformanceGuides && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-3"
                          >
                            <div className="p-3.5 bg-gradient-to-br from-slate-50 to-orange-50/20 border border-slate-100 rounded-xl space-y-2 font-sans text-[11px] text-slate-600 leading-relaxed">
                              <div className="font-heading font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
                                Sleek Mini Document Preview
                              </div>
                              <p>📖 <strong>Index Setup</strong>: Review organisational safety standards.</p>
                              <p>🔗 <strong>Quick Links</strong>: Fast-access portals for each team role.</p>
                              <p>📋 <strong>Guide Cards</strong>: Step-by-step task breakdowns.</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <p className="text-[9px] text-slate-400 font-sans italic mt-2">
                        Click to {showPerformanceGuides ? "hide" : "reveal"} document preview
                      </p>
                    </div>

                    {/* Metric 3 — Job Support & Skill Building Metrics */}
                    <div className="border border-slate-200/80 bg-white p-4 rounded-2xl hover:border-[#F97316]/50 hover:shadow-sm transition-all duration-300 flex items-center justify-between gap-4">
                      <div
                        className="select-none cursor-pointer flex-1"
                        onClick={() => setPerformanceScoreToggled(prev => !prev)}
                      >
                        <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700">Job Support &amp; Skill Building Metrics</h4>
                        <p className="text-[9px] text-slate-400 font-sans italic mt-1">
                          Click to {performanceScoreToggled ? "reset" : "scale up"} user score badge
                        </p>
                      </div>

                      {/* Mock User Score Badge */}
                      <motion.div
                        animate={{
                          scale: performanceScoreToggled ? 1.15 : 1,
                          rotate: performanceScoreToggled ? [0, -8, 8, 0] : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className={`w-14 h-14 rounded-full flex flex-col items-center justify-center flex-shrink-0 border-2 cursor-pointer transition-colors duration-300 ${
                          performanceScoreToggled
                            ? "bg-orange-50 border-[#F97316] shadow-lg shadow-[#F97316]/25"
                            : "bg-slate-50 border-slate-200"
                        }`}
                        onClick={() => setPerformanceScoreToggled(prev => !prev)}
                      >
                        <span className="text-[8px] font-sans font-semibold uppercase tracking-wider text-slate-400">Score</span>
                        <span
                          className={`text-xs font-heading font-black transition-colors ${
                            performanceScoreToggled ? "text-[#F97316]" : "text-slate-600"
                          }`}
                        >
                          {performanceScoreToggled ? "990" : "750"}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              {/* COMPLIANCE QUIZ MODULE */}
              {activeModalCategory === "compliance" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-extrabold text-slate-900 uppercase tracking-tight leading-tight">Security Node: Compliance Guard</h3>
                      <p className="text-[10px] font-sans font-semibold text-slate-400 uppercase tracking-widest">Mandatory Corporate Quiz</p>
                    </div>
                  </div>

                  {/* Live Mandatory Corporate Quiz Panel */}
                  <div className="space-y-4 font-sans bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-heading font-bold text-slate-400 uppercase tracking-wider">Compliance Quiz</span>
                      <span className="text-[10px] font-heading font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Secure Node</span>
                    </div>

                    <p className="text-sm font-sans font-medium text-slate-800 leading-relaxed pt-1">
                      Which module ensures compliance with active company rules?
                    </p>

                    <div className="space-y-3 pt-1">
                      {[
                        { key: "A", label: "Safety Training", correct: false },
                        { key: "B", label: "Simple Policies Overview", correct: false },
                        { key: "C", label: "Standard Rules Protocol", correct: true }
                      ].map((opt) => {
                        const isSelected = selectedComplianceQuizOption === opt.key;
                        const isAnySelected = selectedComplianceQuizOption !== null;

                        let btnStyle;
                        if (!isAnySelected) {
                          btnStyle = "border-slate-200 hover:border-[#F97316]/50 hover:bg-orange-50/20 bg-white text-slate-800 cursor-pointer";
                        } else if (opt.correct) {
                          btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold shadow-[0_0_16px_rgba(16,185,129,0.18)]";
                        } else if (isSelected) {
                          btnStyle = "bg-red-50/60 border-red-300 text-red-700 font-semibold opacity-80";
                        } else {
                          btnStyle = "border-slate-100 bg-white/60 text-slate-400 opacity-50 cursor-default";
                        }

                        return (
                          <button
                            key={opt.key}
                            disabled={isAnySelected}
                            onClick={() => setSelectedComplianceQuizOption(opt.key)}
                            className={cn(
                              "w-full p-4 rounded-2xl border text-left text-xs font-sans transition-all duration-300 flex items-center justify-between focus:outline-none",
                              btnStyle
                            )}
                          >
                            <span>
                              <span className="font-heading font-bold text-[11px] mr-2">{opt.key})</span>
                              {opt.label}
                            </span>
                            {isAnySelected && opt.correct && (
                              <span className="text-[10px] uppercase font-heading font-black tracking-widest text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                                ✓ Correct
                              </span>
                            )}
                            {isSelected && !opt.correct && (
                              <span className="text-[10px] uppercase font-heading font-black tracking-widest text-red-500">
                                ✕ Wrong
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {selectedComplianceQuizOption && (
                      <div className="pt-1 flex items-center justify-between">
                        <p className="text-[10px] font-sans text-slate-400">
                          {selectedComplianceQuizOption === "C"
                            ? "Great job! Standard Rules Protocol governs all compliance."
                            : "Not quite — review the Standard Rules module."}
                        </p>
                        <button
                          onClick={() => setSelectedComplianceQuizOption(null)}
                          className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#F97316] hover:underline focus:outline-none flex-shrink-0 ml-3"
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

