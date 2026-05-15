"use client";
import React from "react";
import { motion } from "motion/react";
import { Play, Image as ImageIcon, Camera } from "lucide-react";

const mediaItems = [
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "Live Session",
    desc: "Interactive virtual classroom in action.",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    title: "Student Collab",
    desc: "Students working on a creative project.",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    title: "Tech Lab",
    desc: "Hands-on experience with modern tools.",
  },
];

export function CourseMedia() {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4">
            <Camera className="w-4 h-4" />
            Learning in Action
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900">
            Student <span className="text-cyan-600">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-black/5 glass bg-white shadow-sm"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {item.type === "video" && (
                   <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-[2.5rem] transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
