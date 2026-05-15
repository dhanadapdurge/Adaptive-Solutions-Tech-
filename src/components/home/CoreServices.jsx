"use client";
import React from "react";
import { motion } from "motion/react";
import { Layout, BookOpen, MessageSquare, ArrowRight, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { FlipCard } from "../visuals/FlipCard";

const services = [
  {
    title: "Custom LMS",
    description: "Personalized learning platforms where users can access courses, track progress, and manage learning easily.",
    icon: Layout,
    href: "/services/custom-lms",
    specs: ["Cloud-Native", "xAPI Support", "Mobile Optimized"]
  },
  {
    title: "Course Creation",
    description: "Engaging and interactive learning content including videos, quizzes, and technical training materials.",
    icon: BookOpen,
    href: "/services/course-development",
    specs: ["Cinematic 4K", "Interactive Quizzes", "3D Renders"]
  },
  {
    title: "E-Learning Strategy",
    description: "Expert guidance to help organizations plan and implement effective global learning strategies.",
    icon: MessageSquare,
    href: "/services/e-learning-consulting",
    specs: ["Market Analysis", "Engagement Hub", "ROI Strategy"]
  },
];

export function CoreServices() {
  return (
    <section className="py-32 px-6 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] uppercase tracking-tighter font-heading">
            Services We <span className="text-cyan-600">Provide</span>
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-[10px] font-black uppercase tracking-[0.4em]">
            Comprehensive technology solutions tailored for the modern education world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <FlipCard 
              key={idx} 
              className="h-[520px] relative z-10"
              front={
                <div className="p-10 rounded-[3rem] border border-white/40 transition-all group flex flex-col items-center text-center h-full bg-[#DDE5EE]/80 backdrop-blur-3xl shadow-xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent"></div>
                  <div className={`w-20 h-20 rounded-[1.5rem] bg-white/40 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-sm border border-white/20`}>
                    <service.icon className={`w-10 h-10 text-cyan-600`} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-6 uppercase tracking-tighter leading-tight font-heading">{service.title}</h3>
                  <p className="text-[10px] text-slate-700 leading-relaxed mb-10 flex-grow font-black uppercase tracking-widest opacity-80">
                    {service.description}
                  </p>
                  <div className={`font-black text-[10px] uppercase tracking-[0.3em] text-cyan-600 flex items-center gap-2 group-hover:text-cyan-500 transition-colors`}>
                    Mission Intel <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              }
              back={
                <div className="p-10 rounded-[3rem] border border-black/5 flex flex-col items-center text-center h-full bg-white shadow-2xl backdrop-blur-3xl">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 border border-cyan-100 shadow-sm">
                    <Shield className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-black text-[#0F172A] mb-8 uppercase tracking-widest font-heading">Mission Data</h3>
                  <div className="space-y-4 mb-auto w-full">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 text-[9px] font-black text-slate-700 uppercase tracking-widest p-4 bg-slate-50 rounded-xl border border-black/5">
                        <Zap className="w-3 h-3 text-cyan-600" />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={service.href}
                    className="w-full mt-8 py-5 bg-[#0F172A] text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl"
                  >
                    Initiate Deployment
                  </Link>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
