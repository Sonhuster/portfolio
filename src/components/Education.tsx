import React, { useState } from "react";
import { Plane } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Briefcase,
  User,
  ChevronRight,
  Sparkles,
  BookOpen,
  Monitor,
  Cpu,
  Bookmark,
  CheckCircle2
} from "lucide-react";
import { profileData, educationHistory, workExperiences } from "../data";

export default function Education() {
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "work" | "research">("all");

  const filteredExperiences = workExperiences.filter(exp => {
    if (activeTab === "all") return true;
    if (activeTab === "work") return exp.role.includes("Developer") || exp.role.includes("Assistant");
    if (activeTab === "research") return exp.role.includes("Researcher") || exp.role.includes("Leader");
    return true;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
      id="education-view"
    >
      {/* Upper Category Badges & Academic Journey Heading */}
      <div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
          <GraduationCap className="w-3.5 h-3.5" /> PROFILE & EDUCATION
        </span>
        <h3 className="text-2xl md:text-3.5xl font-display font-black text-[#1e293b] mt-2 tracking-tight">
          Academic Journey
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= LEFT SIDE COLUMN ================= */}
        <div className="lg:col-span- così lg:col-span-5 space-y-6">
          
          {/* Mockup 1: "add my avatar here" Box */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-center gap-5 hover:border-blue-200 transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/40 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-blue-100/40 transition-colors" />
            
            <div className="relative flex-shrink-0">
              {/* Radial retro grid/glow border around avatar */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-[2px] opacity-75 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120&h=120" 
                alt="Van-Son Dinh" 
                className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h4 className="font-display font-extrabold text-slate-800 text-sm md:text-base leading-snug">
                Van-Son Dinh
              </h4>
              <p className="text-[11px] font-mono text-slate-500 mt-1 flex items-center gap-1">
                <Plane  className="w-3.5 h-3.5 text-blue-500" />
                MSc Student in Applied Mechanics
              </p>
            </div>
          </div>

          {/* Mockup 2: Personal Highlight Info Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4 hover:border-slate-300/80 transition-colors duration-300">
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
              Math, Computing Engineering, Programming, and Games :)
            </p>

            <div className="space-y-3 border-t border-slate-100 pt-3">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-slate-50 border border-slate-150 rounded-lg text-slate-450 mt-0.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 font-mono uppercase tracking-wider">Affiliation</div>
                  <div className="text-xs text-slate-800 leading-tight mt-0.5 font-bold">{profileData.department}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">{profileData.institution}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-slate-50 border border-slate-150 rounded-lg text-slate-450 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 font-mono uppercase tracking-wider">Contacts</div>
                  <a href={`mailto:${profileData.email}`} className="text-xs text-blue-600 hover:underline font-mono font-bold block mt-0.5">
                    {profileData.email}
                  </a>
                  <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-450" /> {profileData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE COLUMN: EDUCATION TIMELINE ================= */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-6">
            <h5 className="font-display font-bold text-sm text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" /> Education
            </h5>

            <div className="relative pl-6 border-l border-slate-150 space-y-8">
              {educationHistory.map((edu, idx) => {
                const isCurrent = edu.type === "current";
                const isDiscontinued = edu.type === "discontinued";
                
                let markerOuterClasses = "bg-slate-150 border-slate-400";
                let markerInnerClasses = "bg-slate-400";
                let badgeClasses = "bg-slate-50/80 text-slate-600 border-slate-200";

                if (isCurrent) {
                  markerOuterClasses = "bg-blue-100 border-blue-600";
                  markerInnerClasses = "bg-blue-600";
                  badgeClasses = "bg-blue-50 text-blue-700 border border-blue-200/80";
                } else if (isDiscontinued) {
                  markerOuterClasses = "bg-amber-100 border-amber-500";
                  markerInnerClasses = "bg-amber-500";
                  badgeClasses = "bg-amber-50/80 text-amber-700 border border-amber-200";
                } else {
                  // completed / backbground
                  markerOuterClasses = "bg-emerald-100 border-emerald-600";
                  markerInnerClasses = "bg-emerald-600";
                  badgeClasses = "bg-emerald-50 text-emerald-800 border border-emerald-200/80";
                }

                return (
                  <div key={idx} className="relative group">
                    <span className={`absolute -left-[30px] top-1.5 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${markerOuterClasses} group-hover:scale-110`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${markerInnerClasses}`} />
                    </span>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h6 className="font-display font-extrabold text-[#111827] text-sm md:text-base leading-tight group-hover:text-blue-600 transition-colors">
                        {edu.degree}
                      </h6>
                      <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeClasses} shadow-2xs`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 font-bold">{edu.institution}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{edu.department}</p>
                    
                    {edu.details && (
                      <ul className="mt-2.5 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 border border-slate-100/80 rounded-xl p-3 shadow-3xs transition-shadow hover:shadow-2xs list-disc list-inside">
                        {edu.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* ================= EXPERIENCES TIMELINE AREA ================= */}
      <div className="space-y-6 pt-4">
        
        {/* Header and Filter block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h4 className="text-xl md:text-2.5xl font-display font-black text-[#1e293b] tracking-tight">
              Experiences
            </h4>
          </div>

          {/* Modern Filter Toggles */}
          <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200/60 self-start md:self-auto font-mono text-[10px] font-bold">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-md transition-all ${activeTab === "all" ? "bg-white text-slate-900 shadow-3xs" : "text-slate-500 hover:text-slate-800"}`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-3 py-1.5 rounded-md transition-all ${activeTab === "work" ? "bg-white text-slate-900 shadow-3xs" : "text-slate-500 hover:text-slate-800"}`}
            >
              WORK & TA
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-3 py-1.5 rounded-md transition-all ${activeTab === "research" ? "bg-white text-slate-900 shadow-3xs" : "text-slate-500 hover:text-slate-800"}`}
            >
              RESEARCH
            </button>
          </div>
        </div>

        {/* Timeline body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => {
              const isAkselos = exp.organization === "AKSELOS";
              const isKaist = exp.organization.includes("KAIST");
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  key={idx}
                  onMouseEnter={() => setHoveredExp(idx)}
                  onMouseLeave={() => setHoveredExp(null)}
                  className={`bg-white rounded-2xl border p-5 shadow-3xs flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                    hoveredExp === idx 
                      ? "border-blue-300 shadow-sm translate-y-[-2px]" 
                      : "border-slate-200/80"
                  }`}
                >
                  {/* Glowing background decor */}
                  {isAkselos && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-50/50 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-emerald-100/50 transition-colors" />
                  )}
                  {isKaist && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-amber-50/50 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-amber-100/50 transition-colors" />
                  )}
                  
                  <div className="space-y-4 relative z-10">
                    
                    {/* Header: role, date */}
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold border ${
                          isAkselos 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-150" 
                            : isKaist 
                              ? "bg-amber-50 text-amber-700 border-amber-150"
                              : "bg-blue-50 text-blue-700 border-blue-150"
                        }`}>
                          {exp.role}
                        </span>
                        <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-base leading-snug group-hover:text-blue-600 transition-colors">
                          {exp.organization}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded flex-shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    {/* Meta info location and advisor */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-slate-400">
                      <div className="flex items-center gap-1 font-bold text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                      {exp.advisor && (
                        <div className="flex items-center gap-1 text-blue-600 bg-blue-50/40 px-1.5 py-0.2 rounded border border-blue-100/50">
                          <User className="w-3 h-3" />
                          <span>Advisor: {exp.advisor}</span>
                        </div>
                      )}
                    </div>

                    {/* Bullet List */}
                    <ul className="space-y-2 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3">
                      {exp.tasks.map((task, k) => (
                        <li key={k} className="flex items-start gap-2">
                          <span className="text-slate-300 group-hover:text-blue-400 transition-colors mt-1 font-bold flex-shrink-0">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Render special child projects if exists */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-4 pt-3.5 border-t border-dashed border-slate-200 space-y-3 relative z-10">
                      <div className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider flex items-center gap-1">
                        <Monitor className="w-3.5 h-3.5 text-blue-500" />
                        Featured Projects
                      </div>
                      <div className="space-y-2">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="bg-slate-50/60 rounded-xl p-2.5 border border-slate-100">
                            <h5 className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                              {proj.name}
                            </h5>
                            <p className="text-[10px] text-slate-500 mt-1 leading-normal font-sans italic">{proj.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

    </motion.div>
  );
}
