"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, User, Sparkles, Layout, BookOpen, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ProfileSidebar } from "./ProfileSidebar";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Custom LMS", href: "/services/custom-lms", icon: Layout },
      { name: "Custom course development", href: "/services/course-development", icon: BookOpen },
      { name: "E learning consulting", href: "/services/e-learning-consulting", icon: MessageSquare },
    ],
  },
  { name: "About", href: "/company" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

function LogoSymbol() {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="relative w-full h-full p-1 flex items-center justify-center">
        <img 
          src="/logo.png" 
          alt="Adaptive Logo" 
          className="w-full h-full object-contain mix-blend-multiply brightness-110"
        />
      </div>
      {/* Ambient Energy Field */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 py-2 px-8 rounded-full border shadow-2xl flex items-center justify-between w-[95%] max-w-7xl",
        (isScrolled && pathname !== "/") 
          ? "bg-[#334155]/95 backdrop-blur-2xl border-white/10" 
          : "bg-white/80 backdrop-blur-md border-black/5"
      )}
    >
          {/* REFINED LOGO - ADAPTIVE SOLUTIONS TECH */}
          <Link href="/" className="flex items-center gap-4 group font-poppins">
            <LogoSymbol />
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-[#0F172A] group-hover:text-cyan-600 transition-colors">
                Adaptive
              </span>
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]/60 group-hover:text-cyan-500 transition-colors">
                Solutions Tech
              </span>
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
        <Link
          href={link.href}
          className={cn(
            "text-[11px] font-black transition-all hover:text-cyan-600 flex items-center gap-1 uppercase tracking-[0.25em] font-poppins",
            activeDropdown === link.name || pathname === link.href ? "text-cyan-600" : "text-[#0F172A]"
          )}
        >
          {link.name}
          {link.dropdown && <ChevronDown className="w-3 h-3" />}
        </Link>

        <AnimatePresence>
          {link.dropdown && activeDropdown === link.name && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-2xl p-2 rounded-3xl border border-black/5 shadow-2xl overflow-hidden font-poppins"
            >
              <div className="grid grid-cols-1 gap-1">
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-100 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all">
                      <item.icon className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-wider group-hover:text-cyan-600 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">Expert Protocol</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>

  {/* Right Actions */}
  <div className="hidden md:flex items-center gap-6">
    <Link
      href="/contact"
      className="group relative px-8 py-4 bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-2 font-poppins"
    >
      <Sparkles className="w-3 h-3 text-cyan-400" />
      Book Strategy
    </Link>
    
    {isLoggedIn ? (
      <button
        onClick={() => setIsProfileOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all group border border-black/5 glass"
      >
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-black/5">
          <User className="w-4 h-4 text-slate-600" />
        </div>
      </button>
    ) : (
      <Link
        href="/login"
        className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0F172A]/80 hover:text-cyan-600 transition-colors font-poppins"
      >
        Login
      </Link>
    )}
  </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors text-[#0F172A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b border-black/5 overflow-hidden shadow-xl font-poppins"
            >
              <div className="p-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className="text-lg font-black text-[#0F172A] flex items-center justify-between uppercase tracking-[0.2em]"
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {link.dropdown && (
                      <div className="mt-4 pl-4 flex flex-col gap-4 border-l-2 border-cyan-100">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-500 font-black uppercase tracking-widest text-xs py-1 hover:text-cyan-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                 <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-black/5">
                   <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-black uppercase tracking-widest bg-[#0F172A] text-white py-5 rounded-2xl shadow-xl text-xs">Book Strategy</Link>
                   <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-black uppercase tracking-widest text-slate-400 text-xs py-2">Login</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
}
