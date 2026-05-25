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
    gradient: "from-[#2563EB] to-[#0D9488]",
    hoverBorder: "hover:border-blue-400"
  },
  {
    title: "Scaling Your LMS for Global Reach",
    date: "May 05, 2026",
    category: "LMS Strategy",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-purple-600 to-pink-500",
    hoverBorder: "hover:border-purple-400"
  },
  {
    title: "Interactive Course Design Best Practices",
    date: "April 28, 2026",
    category: "Course Design",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-orange-500 to-yellow-500",
    hoverBorder: "hover:border-orange-400"
  },
];

export function LatestArticles() {
  return (
    <section className="py-16 px-6 bg-transparent relative overflow-hidden z-20 mt-0 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0F172A] tracking-tight font-heading">
              Mission <span className="text-blue-600">Briefings</span>
            </h2>
            <p className="text-slate-650 max-w-2xl text-[10px] font-black uppercase tracking-[0.4em]">
              Strategic insights from the frontier of educational technology.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#0F172A] font-black uppercase tracking-[0.2em] text-[10px] hover:text-blue-600 transition-colors font-heading group">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative rounded-2xl border border-[#E2E8F0] ${article.hoverBorder} hover:bg-[#F5F3FF]/40 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white shadow-[0_4px_12px_rgba(15,23,42,0.03)] flex flex-col h-full`}
            >
              {/* 3px gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${article.gradient} rounded-t-2xl`}></div>
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#0F172A]/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0F172A] border border-slate-200 z-20 shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-10 relative z-20 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-3">{article.date}</p>
                  <h3 className="text-xl md:text-2xl font-black text-[#0F172A] mb-4 tracking-tighter leading-tight group-hover:text-blue-600 transition-colors font-heading">
                    {article.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
