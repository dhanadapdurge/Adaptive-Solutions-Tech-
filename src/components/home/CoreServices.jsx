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
    specs: ["Cloud-Native", "xAPI Support", "Mobile Optimized"],
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/10",
    gradient: "from-[#2563EB] to-[#0D9488]",
    hoverBorder: "hover:border-blue-400"
  },
  {
    title: "Course Creation",
    description: "Engaging and interactive learning content including videos, quizzes, and technical training materials.",
    icon: BookOpen,
    href: "/services/course-development",
    specs: ["Cinematic 4K", "Interactive Quizzes", "3D Renders"],
    iconColor: "text-purple-600",
    bgColor: "bg-purple-500/10",
    gradient: "from-purple-600 to-pink-500",
    hoverBorder: "hover:border-purple-400"
  },
  {
    title: "E-Learning Strategy",
    description: "Expert guidance to help organizations plan and implement effective global learning strategies.",
    icon: MessageSquare,
    href: "/services/e-learning-consulting",
    specs: ["Market Analysis", "Engagement Hub", "ROI Strategy"],
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-500/10",
    gradient: "from-orange-500 to-yellow-500",
    hoverBorder: "hover:border-orange-400"
  },
];

export function CoreServices() {
  return (
    <section className="py-16 px-6 bg-transparent relative z-20 overflow-hidden mt-0 mb-8 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] tracking-tight font-heading">
            Services We <span className="text-blue-600">Provide</span>
          </h2>
          <p className="text-slate-650 max-w-2xl mx-auto text-[10px] font-black uppercase tracking-[0.4em]">
            Comprehensive technology solutions tailored for the modern education world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <FlipCard 
              key={idx} 
              className="h-auto min-h-fit relative z-10"
              front={ frontCard(service) }
              back={ backCard(service) }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function frontCard(service) {
  return (
    <div className={`p-10 rounded-2xl border border-[#E2E8F0] ${service.hoverBorder} hover:bg-[#F5F3FF]/40 hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center h-full bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] relative overflow-hidden`}>
      {/* 3px gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-20"></div>
      <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10`}>
        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
      </div>
      <h3 className="text-2xl font-black text-[#0F172A] mb-6 tracking-tighter leading-tight font-heading relative z-10">{service.title}</h3>
      <p className="text-sm text-slate-650 leading-relaxed mb-8 flex-grow font-normal relative z-10">
        {service.description}
      </p>
      <div className="font-bold text-xs uppercase tracking-widest text-blue-600 flex items-center gap-2 group-hover:text-blue-500 transition-colors mt-auto relative z-10">
        Mission Intel <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
}

function backCard(service) {
  return (
    <div className={`p-10 rounded-2xl border border-[#E2E8F0] ${service.hoverBorder} hover:bg-[#F5F3FF]/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] relative overflow-hidden`}>
      {/* 3px gradient top border */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
      <div className={`w-16 h-16 rounded-full ${service.bgColor} flex items-center justify-center mb-8`}>
        <Shield className={`w-8 h-8 ${service.iconColor}`} />
      </div>
      <h3 className="text-xl font-black text-[#0F172A] mb-6 tracking-widest font-heading">Mission Data</h3>
      <div className="space-y-3 mb-auto w-full">
        {service.specs.map((spec, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-650 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            {spec}
          </div>
        ))}
      </div>
      <Link 
        href={service.href}
        className="w-full mt-8 py-5 bg-[#0F172A] text-white font-bold rounded-2xl text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-sm"
      >
        Initiate Deployment
      </Link>
    </div>
  );
}
