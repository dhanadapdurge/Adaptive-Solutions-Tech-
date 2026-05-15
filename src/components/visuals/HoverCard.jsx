"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

export function HoverCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [0, 1], ["-10deg", "10deg"]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${useTransform(mouseX, [0, 1], ["0%", "100%"])} ${useTransform(mouseY, [0, 1], ["0%", "100%"])}, rgba(0, 242, 255, 0.15), transparent 80%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ rotateX: 0, rotateY: 0 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group ${className}`}
    >
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-500 z-0"
        style={{ background }}
      />
      
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

