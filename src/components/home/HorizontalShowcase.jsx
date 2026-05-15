"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Lunar Academy", tags: ["LMS", "AR/VR"], img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
  { title: "Orbital Training", tags: ["Course", "3D"], img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
  { title: "Nebula LMS", tags: ["Enterprise", "AI"], img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
  { title: "Starship Onboarding", tags: ["Mobile", "UX"], img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4273?auto=format&fit=crop&q=80&w=800" },
  { title: "Cosmos Portal", tags: ["Portal", "Web3"], img: "https://images.unsplash.com/photo-1541339907198-e08756ded8dd?auto=format&fit=crop&q=80&w=800" },
];

export function HorizontalShowcase() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".showcase-panel");
    const totalWidth = scrollRef.current.offsetWidth;
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-transparent">
      <div className="pt-24 px-12 md:px-24">
         <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Innovation <span className="text-cyan-600">Portfolio</span></h2>
         <p className="text-slate-600 mt-4 text-lg">Drag or scroll to explore our stellar creations.</p>
      </div>
      
      <div ref={scrollRef} className="flex h-screen w-[500vw] items-center">
        {projects.map((project, idx) => (
          <div key={idx} className="showcase-panel w-screen h-full flex items-center justify-center p-12">
            <div className="relative w-full max-w-5xl h-[70vh] group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-1000"></div>
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl bg-slate-900">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-16 left-16 right-16">
                   <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-cyan-400 transition-all">{project.title}</h3>
                  <div className="mt-8 flex items-center gap-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <button className="flex items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors">
                      View Case Study <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
