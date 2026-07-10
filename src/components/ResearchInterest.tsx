import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dna, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  Cpu, 
  FlaskConical, 
  Clock, 
  Check, 
  Sparkles,
  Award
} from "lucide-react";
import { profileData, researchProjects } from "../data";
import type { RichContentItem } from "../types";

export default function ResearchInterest() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(0);

  const renderRichContent = (content: RichContentItem[]) => (
    <div className="space-y-3">
      {content.map((item, idx) => {
        if (typeof item === "string") {
          return (
            <p key={idx} className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
              {item}
            </p>
          );
        }

        return (
          <figure key={idx} className="mt-2">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded-xl border border-slate-200 object-cover shadow-sm"
              style={item.style}
            />
            {item.caption && (
              <figcaption className="mt-2 text-center text-[11px] text-slate-500">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="research-interest-view"
    >
      <div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
          <Dna className="w-3.5 h-3.5" /> RESEARCH PASSIONS & PROJECTS
        </span>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Core specialized research fields and active academic endeavors.
        </p>
      </div>

      {/* Main Interests Group */}
      <div className="bg-white rounded-2xl border border-[#e9ecef] p-6 shadow-xs space-y-4">
        <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-mono tracking-widest">
          Core Focus Areas (Research Specializations)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.interests.map((interest, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-4 bg-slate-50/60 rounded-xl border border-slate-150 transition-all hover:bg-white hover:border-blue-200"
            >
              <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-600">
                <Dna className="w-4 h-4" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-slate-800 tracking-tight">{interest}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Projects Section */}
      <div className="space-y-4">
        <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-400 font-mono tracking-widest flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" /> Detailed Projects & Research Fields
        </h4>

        <div className="space-y-4">
          {researchProjects.map((project, idx) => {
            const isExpanded = activeProjectIdx === idx;
            return (
              <div 
                key={project.id}
                className="bg-white rounded-xl border border-slate-200/85 overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setActiveProjectIdx(isExpanded ? null : idx)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 bg-white hover:bg-slate-50/50 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                        project.status === "In Review" 
                          ? "bg-amber-50 text-amber-700 border border-amber-100" 
                          : project.status === "In Progress"
                            ? "bg-sky-50 text-sky-700 border border-sky-100"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      }`}>
                        {project.status === "In Review" ? "UNDER REVIEW" : project.status === "In Progress" ? "IN PROGRESS" : "COMPLETED"}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">/{project.id.toUpperCase()}</span>
                    </div>
                    <h5 className="font-display font-semibold text-[#2d3436] text-base md:text-lg leading-snug">
                      {project.title}
                    </h5>
                    <p className="text-slate-400 font-mono text-xs italic tracking-tight">{project.subtitle}</p>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180 bg-blue-50 text-blue-600 border-blue-100" : ""}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 md:p-6 border-t border-slate-100 bg-slate-50/20 space-y-5 text-slate-700">
                        {/* Abstract */}
                        <div className="space-y-1.5">
                          <h6 className="text-[10px] font-bold text-slate-400 font-mono tracking-wider uppercase">Research Abstract</h6>
                          {renderRichContent(project.abstract)}
                        </div>

                        {/* Two column metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-100/60">
                          {/* Methodology */}
                          <div className="space-y-3">
                            <h6 className="text-[10px] font-bold text-blue-600 font-mono tracking-wider uppercase flex items-center gap-1">
                              <FlaskConical className="w-3.5 h-3.5" /> Methodology & Procedures
                            </h6>
                            <ul className="space-y-2">
                              {project.methodology.map((meth, mIdx) => (
                                <li key={mIdx} className="flex gap-2 text-xs text-slate-600">
                                  <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono text-blue-600 font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {mIdx + 1}
                                  </span>
                                  <span className="leading-snug">{meth}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Findings */}
                          <div className="space-y-3">
                            <h6 className="text-[10px] font-bold text-indigo-600 font-mono tracking-wider uppercase flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Key Findings
                            </h6>
                            <ul className="space-y-2">
                              {project.keyFindings.map((find, fIdx) => (
                                <li key={fIdx} className="flex gap-2 text-xs text-slate-600">
                                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                  <span className="leading-snug">{find}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Journal Info / Context Footer */}
                        {project.publication && (
                          <div className="p-3.5 bg-blue-50/40 rounded-lg border border-blue-100/60 text-xs flex flex-wrap gap-2 justify-between items-center">
                            <div>
                              <span className="text-[9px] font-mono font-bold text-blue-500 uppercase block">RELATED PUBLICATION</span>
                              <span className="font-semibold text-slate-800 font-sans">{project.publication.journal}</span>
                            </div>
                            <div className="text-[10px] text-right text-slate-500 font-mono">
                              Authors: {project.publication.authors}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
