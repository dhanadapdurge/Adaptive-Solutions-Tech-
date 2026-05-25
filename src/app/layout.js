import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"]
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

// Map legacy fonts for safe fallback propagation
const outfit = inter;
const poppins = inter;

import { Chatbot } from "@/components/layout/Chatbot";

export const metadata = {
  title: "EduTech | Modern Learning Experience",
  description: "Transform learning into a cinematic futuristic experience with AI-powered EdTech solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-[#F4F7FC] text-slate-900 antialiased font-sans">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
