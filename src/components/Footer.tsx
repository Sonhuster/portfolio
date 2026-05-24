import React from "react";
import { Mail, Hexagon, ArrowUp, Github } from "lucide-react";
import { profileData } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 px-6 md:px-8 mt-16 rounded-t-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
            <Hexagon className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <span className="font-display font-bold text-white text-sm block tracking-tight">
              Scientist Portfolio
            </span>
            <span className="text-[10px] text-slate-500 font-mono block">
              © 2026 {profileData.name} • Master of Science Candidate
            </span>
          </div>
        </div>

        {/* Center contact badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
          <span className="text-slate-500 text-[11px]">Đại học Bách khoa Hà Nội (HUST)</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <a 
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-1 text-slate-300 hover:text-blue-400 font-medium transition-colors border-b border-dashed border-slate-700 hover:border-blue-400"
          >
            <Mail className="w-3.5 h-3.5" /> {profileData.email}
          </a>
        </div>

        {/* Right Arrow Navigation */}
        <button
          id="btn-scroll-to-top"
          onClick={scrollToTop}
          className="p-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl text-slate-300 hover:text-white transition-colors flex items-center justify-center"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
