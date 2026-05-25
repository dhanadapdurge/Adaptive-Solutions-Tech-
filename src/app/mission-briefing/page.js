"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "motion/react";

export default function MissionBriefingPage() {
  const [briefings, setBriefings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API data pull
    const fetchBriefings = () => {
      setTimeout(() => {
        setBriefings([
          {
            id: 1,
            title: "LMS Scalability Cluster Update",
            timestamp: "2 hours ago",
            description: "Global database architecture optimized for multi-region user concurrent traffic spike tests."
          },
          {
            id: 2,
            title: "Next-Gen 3D Simulation Framework",
            timestamp: "5 hours ago",
            description: "Active integration of web-based interactive animation engines for advanced mechanics training modules."
          },
          {
            id: 3,
            title: "Enterprise Compliance Protocol Patch",
            timestamp: "12 hours ago",
            description: "Automated xAPI background tracking scripts deployed for flawless analytics delivery."
          }
        ]);
        setLoading(false);
      }, 1000); // Simulated delay
    };

    fetchBriefings();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#F4F7FC] text-slate-900 overflow-hidden font-sans flex flex-col">
      <Navbar />

      <section className="pt-32 pb-24 px-6 flex-grow w-full relative z-10 min-h-screen flex flex-col items-center">
        <div className="max-w-3xl w-full mx-auto">
          
          {/* Top Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-700 tracking-widest uppercase">
                LIVE OPERATIONS FEED ACTIVE
              </span>
            </div>
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" 
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              SYSTEM OPERATIONS & MISSION BRIEFINGS
            </h1>
            <p 
              className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Real-time corporate educational insight vectors and technical system roadmaps, refreshed automatically across global nodes.
            </p>
          </div>

          {/* Dynamic Briefing List */}
          <div className="flex flex-col" style={{ gap: "1.5rem" }}>
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              briefings.map((briefing, idx) => (
                <motion.div 
                  key={briefing.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-[#FFFFFF] p-8 shadow-lg border-l-4 border-blue-600"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 
                      className="text-xl text-slate-900"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >
                      {briefing.title}
                    </h3>
                    <span 
                      className="text-sm text-slate-400 whitespace-nowrap bg-slate-50 px-3 py-1 rounded-md"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {briefing.timestamp}
                    </span>
                  </div>
                  <p 
                    className="text-slate-600 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {briefing.description}
                  </p>
                </motion.div>
              ))
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
