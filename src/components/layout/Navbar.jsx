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
          className="w-full h-full object-contain brightness-125"
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

  const isLinkActive = (link) => {
    if (link.href === "/") {
      return pathname === "/";
    }
    if (link.name === "Services") {
      return pathname.startsWith("/services");
    }
    return pathname === link.href;
  };

  return (
    <>
    <div className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full shadow-lg bg-[#0F172A] border-b border-slate-800",
        isScrolled ? "shadow-2xl bg-[#0F172A]/95 backdrop-blur-md" : ""
      )}
    >
      <nav className="flex items-center justify-between w-full py-4 px-6 md:px-12">
        {/* REFINED LOGO - ADAPTIVE SOLUTIONS TECH */}
        <Link href="/" className="flex items-center gap-4 group font-sans">
          <LogoSymbol />
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-[#F97316] transition-colors font-heading">
              Adaptive
            </span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#F97316] transition-colors font-sans">
              Solutions Tech
            </span>
          </div>
        </Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.25em] font-sans pb-1.5 transition-all flex items-center gap-1 hover:text-[#F97316] relative",
                    active ? "text-white" : "text-[#E2E8F0]"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3 text-slate-400" />}
                  
                  {/* Sleek Underline Active State */}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full"></span>
                  )}
                </Link>

                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0F172A] p-2 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {link.dropdown.map((item) => {
                          const isDropdownActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                "flex items-center gap-3 p-4 rounded-2xl transition-all group",
                                isDropdownActive ? "bg-slate-800/50" : "hover:bg-slate-800/30"
                              )}
                            >
                              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-all">
                                <item.icon className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className={cn(
                                  "text-[10px] font-black uppercase tracking-wider transition-colors",
                                  isDropdownActive ? "text-[#F97316]" : "text-[#E2E8F0] group-hover:text-[#F97316]"
                                )}>
                                  {item.name}
                                </span>
                                <span className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">Expert Protocol</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-[#F97316] text-[#FFFFFF] hover:bg-[#D97706] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center gap-2 font-sans"
          >
            <Sparkles className="w-3 h-3 text-[#FFFFFF]" />
            Book Strategy
          </Link>
          
          {isLoggedIn ? (
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all group border border-slate-700 bg-slate-800"
            >
              <div className="w-8 h-8 rounded-full bg-slate-750 flex items-center justify-center border border-slate-600">
                <User className="w-4 h-4 text-slate-350" />
              </div>
            </button>
          ) : (
            <Link
              href="/login"
              className="px-[1.25rem] py-[0.5rem] rounded-[6px] bg-[#FFFFFF] text-[#0F172A] font-semibold uppercase tracking-widest text-[11px] transition-all duration-300 ease-in-out hover:bg-slate-100 hover:shadow-lg shadow-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors text-white hover:text-[#F97316] relative z-[70]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-[100vh] w-[280px] bg-[#0F172A] shadow-2xl font-sans z-[60] flex flex-col"
          >
            {/* Spacer for navbar overlay area */}
            <div className="h-[80px] shrink-0 border-b border-slate-800/30"></div>
            
            <div className="p-6 flex flex-col gap-6 overflow-y-auto flex-grow">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium flex items-center justify-between uppercase tracking-[0.2em] transition-colors pb-2 border-b border-slate-800/30",
                        active ? "text-[#F97316]" : "text-[#E2E8F0] hover:text-[#F97316]"
                      )}
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </Link>
                    {link.dropdown && (
                      <div className="mt-4 pl-4 flex flex-col gap-4 border-l-2 border-slate-800">
                        {link.dropdown.map((item) => {
                          const isDropdownActive = pathname === item.href;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={cn(
                                "font-medium uppercase tracking-widest text-xs py-1 transition-colors text-left",
                                isDropdownActive ? "text-[#F97316]" : "text-slate-400 hover:text-[#F97316]"
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col gap-4 p-6 mt-auto border-t border-slate-800 shrink-0">
               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-black uppercase tracking-widest bg-[#F97316] text-[#FFFFFF] hover:bg-[#D97706] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all p-4 rounded-xl shadow-xl text-xs">Book Strategy</Link>
               <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className={cn(
                 "text-center font-bold uppercase tracking-widest text-xs p-4 rounded-xl border border-slate-700 hover:text-[#F97316] transition-colors",
                 pathname === "/login" ? "text-white bg-slate-800/50" : "text-[#E2E8F0]"
               )}>Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
}
