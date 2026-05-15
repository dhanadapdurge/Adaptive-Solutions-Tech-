"use client";
import React from "react";
import { motion } from "motion/react";
import { Play, Quote, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const learners = [
  {
    name: "Sarah Chen",
    role: "Project Manager, TechNova",
    quote: "The immersive modules transformed our onboarding. Engagement skyrocketed by 40% in the first quarter.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    video: "#"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Developer, Stellar Systems",
    quote: "I've never seen technical training this engaging. It felt like playing a Cinema-Grade game while learning complex architecture.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    video: "#"
  },
  {
    name: "Elena Rodriguez",
    role: "HR Director, Global Edu",
    quote: "The pedagogical depth combined with cinematic visuals is a game-changer for our compliance training.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    video: "#"
  }
];

export function LearnerShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-cyan-50 border border-cyan-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm"
          >
            <Users className="w-8 h-8 text-cyan-600" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900">
            Voices of the <span className="text-cyan-600 italic">Future</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            See how learners across the globe are transcending traditional education with our immersive platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learners.map((learner, i) => (
            <motion.div
              key={learner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[3rem] border border-black/5 p-8 relative hover:border-cyan-500/30 transition-all overflow-hidden bg-white shadow-sm"
            >
               <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                <Quote className="w-24 h-24 text-slate-400" />
              </div>

              <div className="relative z-10">
                 <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-cyan-600 text-cyan-600" />)}
                </div>

                 <p className="text-xl text-slate-700 mb-10 font-medium leading-relaxed italic">
                  "{learner.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={learner.image} 
                      alt={learner.name} 
                      className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                     <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center border-2 border-white shadow-md"
                    >
                      <Play className="w-3 h-3 fill-white text-white" />
                    </motion.button>
                  </div>
                   <div>
                    <h4 className="font-bold text-slate-900">{learner.name}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{learner.role}</p>
                  </div>
                </div>
              </div>

               {/* Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/5 blur-[60px] rounded-full group-hover:bg-cyan-500/10 transition-all" />
            </motion.div>
          ))}
        </div>

         {/* Video Showcase Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 glass rounded-[4rem] border border-black/5 overflow-hidden relative aspect-video flex items-center justify-center group cursor-pointer bg-slate-900 shadow-2xl"
        >
           <img 
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
             className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
             alt="Team Video"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                      <div className="relative z-10 text-center">
               <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 fill-white text-white ml-2" />
               </div>
               <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Experience the Impact</h3>
               <p className="text-slate-300">Watch our success stories across 50+ countries</p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
