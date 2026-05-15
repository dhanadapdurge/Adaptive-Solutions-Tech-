"use client";
import React from "react";
import { Hero } from "@/components/home/Hero";
import { Challenges } from "@/components/home/Challenges";
import { CoreServices } from "@/components/home/CoreServices";
import { LatestArticles } from "@/components/home/LatestArticles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    setMounted(true);
    const newStars = [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <main className="relative min-h-screen text-slate-900 bg-transparent overflow-hidden">
      <Navbar />

      {/* SPACE LIGHT THEME - Cinematic Atmosphere */}
      <div className="fixed inset-0 z-0 bg-[#CBD8E6]">
         {/* Aesthetic Gradients */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#CBD8E6]/80 via-[#CBD8E6]/60 to-transparent"></div>
         
         {/* Floating Space Particles */}
         {mounted && stars.map((star) => (
           <motion.div
             key={star.id}
             animate={{ 
               opacity: [0.1, 0.4, 0.1],
               scale: [1, 1.2, 1]
             }}
             transition={{ 
               duration: star.duration,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="absolute bg-slate-900 rounded-full"
             style={{
               top: star.top,
               left: star.left,
               width: star.size,
               height: star.size,
             }}
           />
         ))}
      </div>
      
      <div className="relative z-10 pt-32">
        <Hero />
        <Challenges />
        <CoreServices />
        <LatestArticles />
      </div>
      
      <Footer />
    </main>
  );
}
