"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

export function FlipCard({ front, back, className = "" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`perspective-1000 w-full cursor-pointer ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="relative w-full h-full backface-hidden">
          {front}
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
