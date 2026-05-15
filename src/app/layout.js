import { Outfit, Inter, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "EduTech | Modern Learning Experience",
  description: "Transform learning into a cinematic futuristic experience with AI-powered EdTech solutions.",
};

import { SpaceBackground } from "@/components/visuals/SpaceBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="bg-transparent text-slate-900 antialiased selection:bg-cyan-500 selection:text-white font-sans">
        <SpaceBackground />
        {children}
      </body>
    </html>
  );
}
