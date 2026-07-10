import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Info,
  Layers,
  BookOpen,
  Image as ImageIcon
} from "lucide-react";
import { experiments } from "../data";
import type { RichContentItem } from "../types";

export default function LabSimulator() {
  const [activeExpIdx, setActiveExpIdx] = useState<number>(0);
  const currentExp = experiments[activeExpIdx];

  const renderRichContent = (content: RichContentItem[]) => {
    return (
      <div className="space-y-4">
        {content.map((item, idx) => {
          if (typeof item === "string") {
            return (
              <p key={idx} className="text-slate-600 text-sm leading-relaxed font-sans">
                {item}
              </p>
            );
          }
          if (item && item.type === "image") {
            return (
              <figure key={idx} className="my-4 flex flex-col items-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="rounded-xl border border-slate-200/80 object-cover shadow-xs hover:shadow-md transition-shadow"
                  style={item.style || { width: "100%", maxWidth: "450px", height: "auto" }}
                  referrerPolicy="no-referrer"
                />
                {item.caption && (
                  <figcaption className="mt-2 text-center text-xs text-slate-500 font-mono italic">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div id="lab-simulator-card" className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Header Panel */}
      <div className="bg-slate-900 text-white p-6 md:p-8 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
              <Cpu className="w-3.5 h-3.5 animate-pulse" /> Computational Lab Area
            </span>
            <p className="text-slate-400 text-sm mt-1">
              Explore the mathematical frameworks, core parameters, and numerical simulation pipelines engineered by Son.
            </p>
          </div>
        </div>

        {/* Experiment selector tab line (Single rows, grid of 2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 border-t border-slate-800/80 pt-4">
          {experiments.map((exp, idx) => (
            <button
              key={exp.id}
              id={`tab-exp-${exp.id}`}
              onClick={() => setActiveExpIdx(idx)}
              className={`text-left p-4 rounded-xl transition-all duration-300 border ${
                activeExpIdx === idx
                  ? "bg-slate-800/80 border-blue-500/40 text-white shadow-inner"
                  : "bg-transparent border-transparent hover:bg-slate-850/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                Numerical Lab 0{idx + 1}
              </div>
              <div className="font-display font-semibold text-xs md:text-sm truncate mt-1">
                {exp.title.split("(")[0].trim()}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area (Single Column / Unified Table Layout) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentExp.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="p-6 md:p-8 space-y-8"
        >
          {/* Title Area */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200/60">
                Computational Analysis
              </span>
              <span className="text-xs text-slate-400 font-mono">ID: {currentExp.id.toUpperCase()}</span>
            </div>
            <h4 className="text-lg md:text-xl font-display font-bold text-slate-950 leading-tight">
              {currentExp.title}
            </h4>
          </div>

          {/* Unified Board / Table layout */}
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-xs bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-5 py-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 w-1/4 md:w-1/5">
                    Aspect
                  </th>
                  <th className="px-5 py-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Details & Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* 1. Scientific Objective */}
                <tr>
                  <td className="px-5 py-5 font-mono font-semibold text-xs text-slate-700 bg-slate-50/30">
                    <span className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      Objective
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm text-slate-600 font-sans leading-relaxed">
                    {currentExp.objective}
                  </td>
                </tr>

                {/* 2. Mathematical Framework / Solver Tech */}
                <tr>
                  <td className="px-5 py-5 font-mono font-semibold text-xs text-slate-700 bg-slate-50/30">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      Solver Tech
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm text-slate-600 font-sans">
                    <div className="flex flex-wrap gap-1.5">
                      {currentExp.equipment.map((eq, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 rounded-lg text-xs bg-slate-100/80 text-slate-700 font-mono border border-slate-200"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* 3. Steps Pipeline */}
                <tr>
                  <td className="px-5 py-5 font-mono font-semibold text-xs text-slate-700 bg-slate-50/30">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                      SOP Pipeline
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm text-slate-600 font-sans">
                    <div className="space-y-4">
                      {currentExp.steps.map((st) => (
                        <div key={st.number} className="flex gap-3 items-start">
                          <span className="w-5 h-5 rounded-full bg-slate-900 text-[10px] text-white flex items-center justify-center font-bold font-mono flex-shrink-0 mt-0.5">
                            {st.number}
                          </span>
                          <div>
                            <h5 className="font-semibold text-slate-900 text-xs md:text-sm">
                              {st.title}
                            </h5>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {st.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* 4. Rich Content & Images */}
                {currentExp.content && currentExp.content.length > 0 && (
                  <tr>
                    <td className="px-5 py-5 font-mono font-semibold text-xs text-slate-700 bg-slate-50/30">
                      <span className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-pink-500 flex-shrink-0" />
                        Analysis Output
                      </span>
                    </td>
                    <td className="px-5 py-5 text-sm text-slate-600 font-sans">
                      {renderRichContent(currentExp.content)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
