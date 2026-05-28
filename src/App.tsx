/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Education from "./components/Education";
import ResearchInterest from "./components/ResearchInterest";
import Publication from "./components/Publication";
import Philosophy from "./components/Philosophy";
import LabSimulator from "./components/LabSimulator";
import DailyMemories from "./components/DailyMemories";
import AcademicBlog from "./components/AcademicBlog";
import Footer from "./components/Footer";
import { 
  GraduationCap,
  Dna,
  FileText,
  Compass, 
  FlaskConical, 
  Heart, 
  BookOpen, 
  Hexagon,
  Menu,
  X,
  Mail,
  MapPin,
  ChevronRight
} from "lucide-react";
import { profileData } from "./data";

// Helper to calculate age dynamically based on a birthDate
function calculateAge(birthDateString: string): number {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function App() {
  const [activeNav, setActiveNav] = useState("education");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuCategories = [
    {
      title: "Home",
      items: [
        { id: "education", label: "Education", icon: GraduationCap },
        { id: "research-interests", label: "Research interests", icon: Dna },
        { id: "publications", label: "Achievements", icon: FileText }
      ]
    },
    {
      title: "My Personal Corner",
      items: [
        { id: "philosophy", label: "My life perspectives", icon: Compass },
        { id: "lab-simulator", label: "Fun lab", icon: FlaskConical },
        { id: "memories", label: "Daily life", icon: Heart },
        { id: "blog", label: "Blogs", icon: BookOpen }
      ]
    }
  ];

  const categoryBanners: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    // vibe: string;
  }> = {
    "education": {
      title: "Be a man : )",
      subtitle: "Academic Journey & Background",
      description: "Just store my stuffs.",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Nghiêm Túc & Hàn Lâm 🎓"
    },
    "research-interests": {
      title: "Primary Scientific Pursuits",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Sâu Sắc & Logic 🧬"
    },
    "publications": {
      title: "Scholarly Milestones & Achievements",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Khắt Khe & Đầy Giá Trị 📜"
    },
    "philosophy": {
      title: "Personal Perspectives & Lifespan",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Suy Tư & Điềm Tĩnh 🧘‍♂️"
    },
    "lab-simulator": {
      title: "Fun Laboratory & Engineer daily",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Đầy Đam Mê & Nerd ⚡"
    },
    "memories": {
      title: "man's daily",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Ấm Áp & Dễ Thương 🐾☕"
    },
    "blog": {
      title: "Blogs",
      subtitle: "To be continued",
      description: "...",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
      // vibe: "Phản Chiếu & Tự Sự ✍️"
    }
  };

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveComponent = () => {
    switch (activeNav) {
      case "education":
        return <Education />;
      case "research-interests":
        return <ResearchInterest />;
      case "publications":
        return <Publication />;
      case "philosophy":
        return <Philosophy />;
      case "lab-simulator":
        return <LabSimulator />;
      case "memories":
        return <DailyMemories />;
      case "blog":
        return <AcademicBlog />;
      default:
        return <Education />;
    }
  };

  const activeBanner = categoryBanners[activeNav] || categoryBanners["education"];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#2d3436] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col md:flex-row pb-0">
      
      {/* 1. DESKTOP PERMANENT DARK MODERN SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 xl:w-80 fixed inset-y-0 left-0 bg-[#070b13] text-slate-300 border-r border-[#162131] shadow-xl z-30">
        
        {/* Sidebar Header / Branding with Glowing Avatar */}
        <div className="p-6 border-b border-[#162131] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xs opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
              <img 
                src="/publics/Zoe.webp" 
                alt="Van-Son Dinh" 
                className="relative w-12 h-12 rounded-full object-cover border-2 border-slate-900 shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-sm md:text-base tracking-tight block leading-tight">
                Van-Son Dinh
              </span>
              <span className="text-[10px] text-blue-400 font-mono block leading-none mt-1 font-bold">
                MSc CANDIDATE
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-800/60 pt-3">
            <span className="inline-flex items-center gap-1 bg-slate-900 text-blue-400 text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-[#162131] font-bold">
              MSc of Engineering '{calculateAge("2001-10-16")}
            </span>
          </div>
        </div>

        {/* Sidebar Menus */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
          {menuCategories.map((cat, i) => (
            <div key={i} className="space-y-2">
              <h4 className="px-3 text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                {cat.title}
              </h4>
              <nav className="space-y-1">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`sidebar-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all group ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-950/40 border border-blue-500/20"
                          : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition-transform group-hover:scale-105 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`} />
                        <span>{item.label}</span>
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/90 hidden xl:block" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Sidebar Sticky Footer */}
        <div className="p-4 border-t border-[#162131] bg-[#04060b] space-y-2.5">
          <div className="flex flex-col gap-1.5 text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-slate-500" />
              <a href={`mailto:${profileData.email}`} className="hover:text-blue-400 truncate text-slate-300 transition-colors">{profileData.email}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-slate-500 flex-shrink-0" />
              <span className="text-slate-300 truncate">{profileData.location}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MOBILE TOP BLACK MODERN HEADER */}
      <header className="md:hidden sticky top-0 z-40 bg-[#070b13] border-b border-[#162131] h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img 
            src="/publics/Zoe.webp" 
            alt="Van-Son Dinh"
            className="w-8 h-8 rounded-full object-cover border border-blue-500/40"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="font-display font-bold text-white text-sm tracking-tight block">
              Van-Son Dinh
            </span>
          </div>
        </div>

        <button 
          id="btn-mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 border border-slate-800 rounded-lg bg-slate-900 text-slate-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* 3. MOBILE SYSTEM SLIDEOUT DRAWER */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden animate-fade-in" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <div className={`fixed inset-y-0 left-0 w-64 bg-[#070b13] z-50 border-r border-[#162131] p-5 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="space-y-6 flex-1">
          {/* Brand block slideout */}
          <div className="flex items-center justify-between border-b border-[#162131] pb-4">
            <div className="flex items-center gap-2.5">
              <img 
                src="/publics/Zoe.webp"
                alt="Van-Son Dinh"
                className="w-8 h-8 rounded-full object-cover border border-blue-500/40"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-white text-sm">Van-Son Dinh</span>
            </div>
            <button 
              id="btn-close-mobile-drawer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Menus */}
          <div className="space-y-6">
            {menuCategories.map((cat, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-[10px] uppercase font-bold text-slate-500 font-mono tracking-wider">
                  {cat.title}
                </h4>
                <nav className="space-y-1">
                  {cat.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mobile-nav-${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
                            : "text-slate-400 hover:text-white hover:bg-slate-900"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info mobile */}
        <div className="border-t border-[#162131] pt-4 flex flex-col gap-1 text-[10px] font-mono text-slate-400">
          <div>{profileData.email}</div>
          <div>{profileData.location}</div>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA with Dynamic Hero Cover Banner */}
      <div className="flex-1 md:pl-64 lg:pl-72 xl:pl-80 flex flex-col min-h-screen">
        
        {/* Cover Banner Area */}
        <div className="relative h-56 md:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          {/* Banner cover background */}
          <img 
            src={activeBanner.image} 
            alt={activeBanner.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Rich overlay filters for text safety */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-black/30" />
          
          {/* Banner Overlaid Text */}
          <div className="relative z-10 text-center px-6 max-w-4xl py-6 flex flex-col items-center">
            <span className="inline-block text-[9px] md:text-10px font-mono font-extrabold tracking-widest text-[#60a5fa] uppercase bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-full border border-white/10 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              {activeBanner.subtitle}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-extrabold text-white mt-3.5 tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.85)] max-w-2xl select-none leading-tight">
              {activeBanner.title}
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-3 font-medium max-w-xl mx-auto opacity-95 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)] leading-relaxed">
              {activeBanner.description}
            </p>
          </div>

          {/* Vibe Status Indicator Badge */}
          {/* <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 bg-slate-950/80 backdrop-blur-md text-[9px] md:text-[11px] font-mono text-white border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2 select-none shadow-lg tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Vibe: <span className="font-bold text-blue-300 uppercase">{activeBanner.vibe}</span>
          </div> */}
        </div>

        {/* Content Section Padding */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 md:px-8 lg:px-12 py-8 space-y-10">
          {renderActiveComponent()}
        </main>
        
        {/* Footer Area */}
        <Footer />
      </div>

    </div>
  );
}
