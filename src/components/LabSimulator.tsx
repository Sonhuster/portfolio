import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Info,
  Layers,
  BookOpen,
  Activity,
  Award
} from "lucide-react";
import { experiments } from "../data";

export default function LabSimulator() {
  const [activeExpIdx, setActiveExpIdx] = useState<number>(0);
  const currentExp = experiments[activeExpIdx];

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

      {/* Main Content Area (Single Column / Unified Layout) */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Scientific Objective & Materials */}
            <div className="space-y-6">
              {/* Scientific Objective */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-500" /> Scientific Objective:
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  {currentExp.objective}
                </p>
              </div>

              {/* Required Instruments / Tech Stack */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs space-y-3">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-500" /> Mathematical Framework & Solver Tech:
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentExp.equipment.map((eq, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-lg text-xs bg-white text-slate-700 font-mono border border-slate-200 shadow-xs"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Standard Operating Procedure (SOP Steps) */}
            <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-xs space-y-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-500" /> Pipeline & Standard Operating Procedure (SOP):
              </div>
              
              <div className="relative border-l-2 border-slate-200 pl-4 ml-2.5 space-y-6">
                {currentExp.steps.map((st) => (
                  <div key={st.number} className="relative group">
                    {/* Circle Node on Timeline */}
                    <div className="absolute -left-[27px] top-0.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold shadow-sm font-mono group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                      {st.number}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-slate-900 font-display">
                        {st.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans">
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
