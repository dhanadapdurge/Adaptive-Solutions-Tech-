"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of AI in Modern Classrooms",
    date: "May 10, 2026",
    category: "EdTech Trends",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Scaling Your LMS for Global Reach",
    date: "May 05, 2026",
    category: "LMS Strategy",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Interactive Course Design Best Practices",
    date: "April 28, 2026",
    category: "Course Design",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
  },
];

export function LatestArticles() {
  return (
    <section className="py-32 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] uppercase tracking-tighter font-heading">
              Mission <span className="text-cyan-600">Briefings</span>
            </h2>
            <p className="text-slate-700 max-w-2xl text-[10px] font-black uppercase tracking-[0.4em]">
              Strategic insights from the frontier of educational technology.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#0F172A] font-black uppercase tracking-[0.2em] text-[10px] hover:text-cyan-600 transition-colors font-heading group">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[3rem] border border-white/40 overflow-hidden bg-[#DDE5EE]/80 shadow-2xl backdrop-blur-3xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#0F172A]/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#0F172A] border border-black/5 z-20 shadow-lg">
                  {article.category}
                </div>
              </div>
              <div className="p-10 relative z-20">
                <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">{article.date}</p>
                <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter leading-tight group-hover:text-cyan-600 transition-colors font-heading">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
