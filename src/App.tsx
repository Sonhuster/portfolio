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

export default function App() {
  const [activeNav, setActiveNav] = useState("education");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuCategories = [
    {
      title: "Van-Son Dinh",
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

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#2d3436] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col md:flex-row pb-0">
      
      {/* 1. DESKTOP PERMANENT SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 xl:w-80 fixed inset-y-0 left-0 bg-white border-r border-[#e9ecef] shadow-xs z-30">
        {/* Sidebar Header / Branding */}
        <div className="p-6 border-b border-[#e9ecef] flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-50 border border-blue-100 rounded-lg text-blue-600">
              <Hexagon className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-slate-900 text-sm md:text-base tracking-tight block leading-tight">
                Sơn Đỗ Viết
              </span>
              <span className="text-[10px] text-blue-600 font-mono block leading-none mt-0.5 font-bold">
                MSc CANDIDATE
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100/80 pt-2.5">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-blue-100 font-bold">
              HUST BIOTECH '26
            </span>
          </div>
        </div>

        {/* Sidebar Menus */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
          {menuCategories.map((cat, i) => (
            <div key={i} className="space-y-2">
              <h4 className="px-3 text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">
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
                          ? "bg-slate-900 text-white font-semibold shadow-xs"
                          : "text-slate-500 hover:text-slate-950 hover:bg-slate-50/80"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition-transform group-hover:scale-105 ${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-650"}`} />
                        <span>{item.label}</span>
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-400 hidden xl:block" />}
                    </button>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Sidebar Sticky Footer */}
        <div className="p-4 border-t border-[#e9ecef] bg-slate-50/50 space-y-2.5">
          <div className="flex flex-col gap-1.5 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-slate-400" />
              <a href={`mailto:${profileData.email}`} className="hover:text-blue-600 truncate">{profileData.email}</a>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
              <span>{profileData.location}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MOBILE TOP BANNER HEADER */}
      <header className="md:hidden sticky top-0 z-40 bg-white border-b border-[#e9ecef] h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-blue-50 border border-blue-100 rounded-lg text-blue-600">
            <Hexagon className="w-4.5 h-4.5" />
          </div>
          <div>
            <span className="font-display font-medium text-slate-900 text-sm tracking-tight block">
              Sơn Đỗ Viết <span className="text-blue-650 font-mono text-[9px] font-bold">/ Candidates</span>
            </span>
          </div>
        </div>

        <button 
          id="btn-mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-600 hover:text-[#2d3436] transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* 3. MOBILE SYSTEM SLIDEOUT DRAWER */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden animate-fade-in" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 border-r border-[#e9ecef] p-5 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="space-y-6 flex-1">
          {/* Brand block */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Hexagon className="w-5 h-5 text-blue-600" />
              <span className="font-display font-bold text-slate-900 text-sm">Sơn Đỗ Viết</span>
            </div>
            <button 
              id="btn-close-mobile-drawer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg border border-slate-150 hover:bg-slate-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Menus */}
          <div className="space-y-6">
            {menuCategories.map((cat, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">
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
                            ? "bg-slate-900 text-white font-semibold"
                            : "text-slate-500 hover:text-slate-950 hover:bg-slate-50"
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
        <div className="border-t border-slate-100 pt-4 flex flex-col gap-1 text-[10px] font-mono text-slate-400">
          <div>sondv.hust@gmail.com</div>
          <div>Hanoi, Vietnam</div>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA (Offset by sidebar width on desktop) */}
      <div className="flex-1 md:pl-64 lg:pl-72 xl:pl-80 flex flex-col min-h-screen">
        <main className="flex-1 max-w-5xl w-full mx-auto px-6 md:px-8 lg:px-12 py-8 space-y-10">
          {renderActiveComponent()}
        </main>
        
        {/* Footer Area */}
        <Footer />
      </div>

    </div>
  );
}
