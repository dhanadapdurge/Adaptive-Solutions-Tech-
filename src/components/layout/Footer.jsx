"use client";
import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, Mail, Phone } from "lucide-react";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="relative w-full h-full p-1 opacity-80 group-hover:opacity-100 transition-opacity">
        <img 
          src="/logo.png" 
          alt="Adaptive Logo" 
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full mt-auto clear-both pt-24 pb-12 px-6 overflow-hidden bg-[#0F172A] border-t border-slate-800 font-poppins text-white">
      {/* Aesthetic Top Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <FooterLogo />
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors">
                  Adaptive
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-cyan-400 transition-colors">
                  Solutions Tech
                </span>
              </div>
            </Link>
            <p className="text-slate-450 text-sm font-normal leading-relaxed max-w-xs">
              Architecting the future of human connectivity through adaptive technology and expert EdTech strategy.
            </p>
            <div className="flex gap-6">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, idx) => (
                <Link key={idx} href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Contact", "FAQ"].map(link => (
                <li key={link}>
                  <Link 
                    href={
                      link === "Home" ? "/" : 
                      link === "Services" ? "/services/custom-lms" : 
                      `/${link.toLowerCase()}`
                    } 
                    className="text-slate-350 text-[10px] font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <Link href="/services/custom-lms">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 hover:text-cyan-400 transition-colors cursor-pointer">Services</h4>
             </Link>
             <ul className="space-y-4">
                {[
                  { name: "Custom LMS", href: "/services/custom-lms" },
                  { name: "Course Development", href: "/services/course-development" },
                  { name: "E-Learning Consulting", href: "/services/e-learning-consulting" }
                ].map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-350 text-[10px] font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">{link.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black opacity-60">© 2026 Adaptive Solutions Tech. All rights reserved.</p>
           <div className="flex gap-8">
              <Link href="#" className="text-[9px] text-slate-450 hover:text-cyan-400 transition-colors uppercase tracking-widest font-black opacity-60">SECURITY PROTOCOL</Link>
              <Link href="#" className="text-[9px] text-slate-450 hover:text-cyan-400 transition-colors uppercase tracking-widest font-black opacity-60">SERVICE STANDARDS</Link>
           </div>
        </div>
      </div>
      
      {/* Footer Ambient Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full"></div>
    </footer>
  );
}
