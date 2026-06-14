import React from "react";
import { motion } from "motion/react";
import { 
  FileText, 
  Award, 
  Sparkles, 
  Bookmark, 
  ArrowUpRight, 
  ExternalLink,
  Presentation,
  CheckCircle2,
  Trophy,
  Activity
} from "lucide-react";
import { researchProjects, achievements } from "../data";

export default function Publication() {
  // Extract published items
  const publicationsList = researchProjects.filter(p => p.publication);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="publications-view"
    >
      <div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
          <FileText className="w-3.5 h-3.5" /> BIBLIOGRAPHY & HONORS
        </span>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Scientific papers, detailed reports, and highlighted academic achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Publications Block */}
        <div className="lg:col-span-7 space-y-6 flex flex-col">
          <div className="bg-white rounded-2xl border border-[#e9ecef] p-6 shadow-xs flex-1 space-y-6">
            <h4 className="text-sm font-semibold text-[#2d3436] font-display flex items-center gap-2 border-b border-slate-100 pb-3 uppercase tracking-wider">
              <Bookmark className="w-4 h-4 text-blue-600" /> Journals & Scientific Publications (Peer-Reviewed)
            </h4>

            <div className="space-y-6">
              {publicationsList.map((pub, idx) => (
                <div key={idx} className="p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-200/80 rounded-xl space-y-3 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2 py-0.5 bg-blue-100/60 text-blue-700 font-mono text-[9px] bold uppercase rounded">
                      JOURNAL ARTICLE
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">#0{idx+1}</span>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-display font-semibold text-xs md:text-sm text-slate-900 leading-snug">
                      "{pub.title}"
                    </h5>
                    <p className="text-[11px] text-slate-500 font-mono italic">{pub.subtitle}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-2.5 space-y-1 text-[11px] font-sans">
                    <div>
                      <strong className="text-slate-700">Authors:</strong> {pub.publication?.authors}
                    </div>
                    <div>
                      <strong className="text-slate-700">Journal:</strong> <span className="text-blue-600 font-medium">{pub.publication?.journal}</span>
                    </div>
                    <div>
                      <strong className="text-slate-700">Status:</strong>{" "}
                      <span className={`inline-flex items-center px-1.5 py-0.2 rounded font-mono font-semibold ${
                        pub.status === "Completed"
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-amber-600 bg-amber-50"
                      }`}>
                        {pub.status === "Completed" ? "Completed / Published" : "Editing / Under Review"}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 border-t border-slate-100/50">
                    {pub.publication?.doi ? (
                      <a 
                        href={`https://doi.org/${pub.publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 font-mono transition-colors"
                      >
                        DOI: {pub.publication.doi} <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-mono select-none">
                        DOI: Pending publication <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Conference Paper */}
              <div className="p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-200/80 rounded-xl space-y-3 transition-colors">
                <div className="flex justify-between items-start gap-4">
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 font-mono text-[9px] bold uppercase rounded border border-indigo-150">
                    CONFERENCE PAPER
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">#02</span>
                </div>

                <div className="space-y-1">
                  <h5 className="font-display font-semibold text-xs md:text-sm text-slate-900 leading-snug">
                    "Design and Construction for Computational Models of Ultrasonic Transducers"
                  </h5>
                  <p className="text-[11px] text-slate-500 font-mono italic">Regional Conference in Mechanical Manufacturing Engineering, 1042-1063</p>
                </div>

                <div className="border-t border-slate-100 pt-2.5 space-y-1 text-[11px] font-sans text-slate-600">
                  <div>
                    <strong className="text-slate-700">Authors:</strong> AD Truong, VS Dinh, VS Pham, MT Ha
                  </div>
                  <div>
                    <strong className="text-slate-700">Conference:</strong> Regional Conference in Mechanical Manufacturing Engineering
                  </div>
                  <div>
                    <strong className="text-slate-700">Pages:</strong> 1042-1063
                  </div>
                  <div>
                    <strong className="text-slate-700">Status:</strong>{" "}
                    <span className="inline-flex items-center px-1.5 py-0.2 rounded font-mono font-semibold text-emerald-700 bg-emerald-50">
                      Published
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Achievements & Awards Listing */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex-1 relative overflow-hidden flex flex-col justify-between">
            {/* background design accent */}
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 z-10">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono flex items-center gap-1.5 border-b border-slate-800 pb-3">
                <Trophy className="w-4 h-4" /> Honors & Highlighted Academic Awards
              </h4>

              <div className="space-y-6">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="flex gap-3 text-slate-350 border-b border-slate-800/60 pb-4 last:border-0 last:pb-0">
                    <div className="text-[10px] font-mono font-bold text-blue-400 mt-0.5 bg-slate-800 px-1.5 py-0.5 rounded h-fit">
                      {ach.year}
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-display font-medium text-white text-xs md:text-sm">{ach.title}</h5>
                      <p className="text-[10px] text-blue-300 font-mono">{ach.organization}</p>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500 mt-8 pt-3 border-t border-slate-800/80 z-10 flex items-center justify-between">
              <span>Verified Scientific Output</span>
              <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
