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
    <section className="py-0 px-0 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden flex flex-col",
                "hover:shadow-[0_8px_40px_rgba(249,115,22,0.12)] hover:border-[#F97316]/30 transition-all duration-500 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
              )}
            >
              {/* Thumbnail Image — capped, decorative */}
              <div className="relative h-40 w-full overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                  alt={service.title}
                />
                {/* Subtle orange wash on hover */}
                <div className="absolute inset-0 bg-[#F97316]/0 group-hover:bg-[#F97316]/10 transition-colors duration-500" />
              </div>

              {/* Card Content — navy text on white */}
              <div className="p-7 flex flex-col gap-4 flex-1">
                {/* Icon + Title row */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all duration-300 shadow-sm">
                    <service.icon className="w-4 h-4 text-[#F97316] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-heading font-extrabold text-[#0F172A] uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Bullet list */}
                <ul className="flex flex-col gap-2">
                  {service.content.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                      <span className="text-[12px] font-sans font-medium text-slate-600 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle CTA link */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[#F97316] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-widest">Analyze Node</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
