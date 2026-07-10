import React, { useState } from "react";
import { motion } from "motion/react";
import { Quote, Sparkles, BookOpen, Compass, Heart } from "lucide-react";
import { philosophies } from "../data";
import type { RichContentItem } from "../types";

export default function Philosophy() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const icons = [Compass, Sparkles, Heart];

  const renderRichContent = (content: RichContentItem[]) => (
    <div className="space-y-4">
      {content.map((item, idx) => {
        if (typeof item === "string") {
          return (
            <p key={idx} className="text-slate-600 text-xs md:text-sm leading-relaxed">
              {item}
            </p>
          );
        }

        return (
          <figure key={idx} className="flex justify-center">
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-xl border border-slate-200 object-cover shadow-sm"
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
    <div id="philosophy-section-card" className="bg-white rounded-2xl border border-[#e9ecef] p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
            <BookOpen className="w-3.5 h-3.5" /> Philosophy & Perspective
          </span>
          <p className="text-slate-500 text-xs md:text-sm mt-1">
            How Son navigates individual perspectives between physical variables and everyday life.
          </p>
        </div>

        <div className="flex gap-1.5 self-start md:self-center">
          {philosophies.map((ph, idx) => (
            <button
              key={ph.id}
              id={`btn-select-philosophy-tab-${idx}`}
              onClick={() => setSelectedIdx(idx)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                selectedIdx === idx
                  ? "bg-blue-600 border-blue-600 text-white font-medium shadow-xs"
                  : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left selector cards */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {philosophies.map((ph, idx) => {
            const IconComponent = icons[idx] || Compass;
            const isSelected = selectedIdx === idx;

            return (
              <button
                key={ph.id}
                id={`btn-philosophy-card-${ph.id}`}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50/50 hover:bg-slate-50 text-slate-800 border-slate-200/60"
                }`}
              >
                <div className={`p-2.5 rounded-lg border ${
                  isSelected 
                    ? "bg-slate-800 text-blue-400 border-slate-700" 
                    : "bg-white text-slate-500 border-slate-200 shadow-xs"
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-display font-medium text-xs md:text-sm ${isSelected ? "text-white" : "text-slate-800"}`}>
                    {ph.vietnameseTitle}
                  </h4>
                  <p className={`text-[11px] font-mono mt-1 ${isSelected ? "text-blue-400" : "text-slate-400"}`}>
                    {ph.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right detailed expanded card */}
        <div className="lg:col-span-7 flex">
          <div className="bg-slate-50/60 rounded-xl border border-slate-200/60 p-6 md:p-8 flex flex-col justify-between w-full h-full relative overflow-hidden">
            
            {/* watermark-like quotation mark */}
            <div className="absolute right-4 bottom-1 text-slate-200/30 select-none pointer-events-none">
              <Quote className="w-32 h-32 ml-auto rotate-180" />
            </div>

            <div className="relative space-y-6">
              
              {/* The Quote Block */}
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-blue-500" />
                <p className="text-base md:text-lg italic font-medium font-sans text-slate-800 leading-snug">
                  "{philosophies[selectedIdx].quote}"
                </p>
                <div className="text-xs font-mono font-medium text-slate-500 text-right pr-4">
                  — {philosophies[selectedIdx].author}
                </div>
              </div>

              {/* Interpretation Commentary */}
              <div className="border-t border-slate-200/60 pt-6">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-2">Personal Interpretation</div>
                {renderRichContent(philosophies[selectedIdx].content)}
              </div>

            </div>

            <div className="text-[10px] font-mono text-slate-400 mt-6 pt-3 border-t border-slate-200/40 relative">
              Perspective Core • Academic Truth
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
