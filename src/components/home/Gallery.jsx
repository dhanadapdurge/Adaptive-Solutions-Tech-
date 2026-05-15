"use client";
import React from "react";
import { motion } from "motion/react";
import { Camera, Play, Image as ImageIcon } from "lucide-react";

const galleryItems = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    title: "Collaborative Learning",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "Workshop Session",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    title: "Student Discussion",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    title: "Tech Innovation Lab",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800",
    title: "Campus Life",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    type: "video",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    title: "Lecture Hall",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function Gallery() {
  return (
    <section className="py-32 px-6 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-600 font-bold tracking-widest uppercase text-xs mb-4"
            >
              <Camera className="w-4 h-4" />
              Life at EduTech
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 leading-none"
            >
              Our Vibrant <span className="text-cyan-600">Universe</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-600 text-lg max-w-sm"
          >
            A glimpse into the daily lives of our students and the cutting-edge environments where they thrive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[1000px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`${item.span} group relative overflow-hidden rounded-[2rem] border border-black/5 glass cursor-pointer`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                   {item.type === "video" ? (
                     <Play className="w-4 h-4 text-cyan-600 fill-cyan-600" />
                   ) : (
                     <ImageIcon className="w-4 h-4 text-cyan-600" />
                   )}
                 </div>
                <h4 className="text-white font-bold tracking-tight uppercase">{item.title}</h4>
              </div>

               {/* Hover Glow */}
               <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-600/30 rounded-[2rem] transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
