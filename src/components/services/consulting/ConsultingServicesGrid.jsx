"use client";
import React from "react";
import { motion } from "motion/react";
import { Layout, Zap, Search, Shield, Bot, Cloud, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Design & Layout",
    content: ["Easy to use", "Fast onboarding", "Simple search"],
    icon: Layout,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Speed & Growth",
    content: ["Growth ready", "Better performance"],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Quality Checks",
    content: ["System testing", "Reliable builds"],
    icon: Search,
    image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Safety & Security",
    content: ["Safe data", "Secure sign-in"],
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smart Technology",
    content: ["Smart learning", "Success data"],
    icon: Bot,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cloud Migration",
    content: ["System transition", "Safe move"],
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
  }
];

export function ConsultingServicesGrid() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative h-[420px] flex flex-col items-center justify-end",
                "rounded-[3.5rem] overflow-hidden bg-slate-100 border border-black/5 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl"
              )}
            >
              {/* Background Visual - VIBRANT & TEXTURED */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              </div>
              
              {/* Content Overlay - PRECISE EDITORIAL DESIGN */}
              <div className="relative z-10 w-full p-8 text-center flex flex-col items-center">
                {/* Floating Icon Node */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-3xl flex items-center justify-center border border-white/20 transition-all mb-6 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:-translate-y-2 duration-500 shadow-xl">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter font-heading mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Info Card - ULTRA HIGH CONTRAST */}
                <div className="w-full bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 transition-all group-hover:bg-white/20">
                  <div className="flex flex-col gap-2">
                    {service.content.map((item, idx) => (
                      <span key={idx} className="text-[10px] font-black text-white/90 uppercase tracking-[0.3em] leading-none">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-black uppercase tracking-[0.2em] text-[9px] opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   Analyze Node <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
