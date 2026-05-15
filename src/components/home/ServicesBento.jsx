"use client";
import React from "react";
import { motion } from "motion/react";
import { Layout, BookOpen, MessageSquare, ArrowUpRight, Zap, Database, Shield, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Custom LMS Development",
    desc: "Personalized learning operating systems built for enterprise scale.",
    icon: Layout,
    color: "cyan-600",
    href: "/services/custom-lms",
    size: "large",
    features: ["White Labeling", "Gamification", "Cloud Native"],
  },
  {
    title: "Course Creation",
    desc: "Cinematic digital learning modules.",
    icon: BookOpen,
    color: "blue-600",
    href: "/services/course-development",
    size: "medium",
  },
  {
    title: "Strategic Consulting",
    desc: "AI transformation for education.",
    icon: MessageSquare,
    color: "cyan-600",
    href: "/services/e-learning-consulting",
    size: "medium",
  },
  {
    title: "Neural Analytics",
    desc: "Predict learner outcomes with AI.",
    icon: Zap,
    color: "blue-600",
    href: "#",
    size: "small",
  },
  {
    title: "Global Compliance",
    desc: "SCORM, xAPI, & LTI standard ready.",
    icon: Shield,
    color: "cyan-600",
    href: "#",
    size: "small",
  },
  {
    title: "Scale Anywhere",
    desc: "Localized in 50+ languages.",
    icon: Globe,
    color: "blue-600",
    href: "#",
    size: "small",
  },
];

export function ServicesBento() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-6 tracking-tighter text-slate-900">
            Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Platform</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            A modular suite of award-winning technologies designed to transform how your organization shares knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 h-auto md:h-[900px]">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative glass rounded-[2rem] border border-black/5 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl",
                service.size === "large" ? "md:col-span-2 md:row-span-2" : "",
                service.size === "medium" ? "md:col-span-2 md:row-span-1" : "",
                service.size === "small" ? "md:col-span-1 md:row-span-1" : ""
              )}
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500",
                  `bg-${service.color}/10 border-${service.color}/20 group-hover:scale-110 group-hover:rotate-6`
                )}>
                  <service.icon className={cn("w-7 h-7", `text-${service.color}`)} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-all">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                
                {service.features && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map(f => (
                      <span key={f} className="text-[10px] uppercase tracking-widest text-slate-500 bg-slate-100 border border-black/5 px-3 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <Link 
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors"
                >
                  Launch App <ArrowUpRight className="w-4 h-4 translate-y-0.5" />
                </Link>
                
                {service.size === "large" && (
                   <div className="hidden md:block w-32 h-32 opacity-10 pointer-events-none group-hover:opacity-20 transition-all">
                      <Database className="w-full h-full text-cyan-600" />
                   </div>
                )}
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
