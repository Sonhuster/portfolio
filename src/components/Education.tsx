import React from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  Mail, 
  MapPin, 
  FlaskConical, 
  Dna, 
  GraduationCap, 
  FileText,
  Calendar,
  Sparkles,
  Award,
  Binary
} from "lucide-react";
import { profileData, educationHistory } from "../data";

export default function Education() {
  const stats = [
    { label: "Wet Lab Activity", value: "850+ Phút", icon: FlaskConical, color: "text-blue-600 bg-blue-50/60 border-blue-100" },
    { label: "Sequenced Bases", value: "3.2M bp", icon: Dna, color: "text-indigo-600 bg-indigo-50/60 border-indigo-100" },
    { label: "Publications & Seminars", value: "3 Đề tài", icon: FileText, color: "text-slate-700 bg-slate-50 border-slate-200" },
    { label: "Lab Work Ethic & Code", value: "400+ Giờ", icon: Binary, color: "text-sky-600 bg-sky-50/60 border-sky-100" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="education-view"
    >
      <div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
          <GraduationCap className="w-3.5 h-3.5" /> PROFILE & EDUCATION
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-medium text-[#2d3436] mt-2">
          Academic Journey 
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Personal Highlight Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-[#e9ecef] p-6 shadow-xs space-y-4">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-blue-50 text-blue-900 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                MSc CANDIDATE • 2024-2026
              </span>
              <h4 className="text-xl font-display font-bold text-slate-900">{profileData.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-mono">{profileData.title}</p>
            </div>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
              {profileData.bio}
            </p>

            <div className="space-y-2 border-t border-slate-100 pt-3">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                   <div className="text-[9px] font-semibold text-slate-400 font-mono">Affiliation</div>
                  <div className="text-xs text-[#2d3436] leading-tight mt-0.5 font-medium">{profileData.department}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{profileData.institution}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[9px] font-semibold text-slate-400 font-mono">Contacts</div>
                  <a href={`mailto:${profileData.email}`} className="text-xs text-blue-600 hover:underline font-mono block mt-0.5">
                    {profileData.email}
                  </a>
                  <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" /> {profileData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline of Education & Lab stats */}
        <div className="lg:col-span-7 space-y-6">
          {/* Education Timeline */}
          <div className="bg-white rounded-2xl border border-[#e9ecef] p-6 shadow-xs space-y-6">
            <h5 className="font-display font-medium text-sm text-[#2d3436] border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" /> Education
            </h5>

            <div className="relative pl-6 border-l border-slate-100 space-y-8">
              {educationHistory.map((edu, idx) => {
                const isCurrent = edu.type === "current";
                const isDiscontinued = edu.type === "discontinued";
                
                let markerOuterClasses = "bg-slate-100 border-slate-400";
                let markerInnerClasses = "bg-slate-400";
                let badgeClasses = "bg-slate-50 text-slate-500 border-slate-200";

                if (isCurrent) {
                  markerOuterClasses = "bg-blue-50 border-blue-600";
                  markerInnerClasses = "bg-blue-600";
                  badgeClasses = "bg-blue-50 text-blue-600 border border-blue-100";
                } else if (isDiscontinued) {
                  markerOuterClasses = "bg-amber-50 border-amber-500";
                  markerInnerClasses = "bg-amber-500";
                  badgeClasses = "bg-amber-50 text-amber-700 border border-amber-200";
                } else {
                  // completed / other
                  markerOuterClasses = "bg-emerald-50 border-emerald-600";
                  markerInnerClasses = "bg-emerald-600";
                  badgeClasses = "bg-emerald-50 text-emerald-700 border border-emerald-100";
                }

                return (
                  <div key={idx} className="relative">
                    <span className={`absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${markerOuterClasses}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${markerInnerClasses}`} />
                    </span>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h6 className="font-display font-semibold text-sm text-slate-900">{edu.degree}</h6>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${badgeClasses}`}>{edu.period}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 font-medium">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.department}</p>
                    {edu.details && (
                      <div className="mt-2 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 rounded-lg p-2.5 border border-slate-100/80">
                        • {edu.details}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Bento Box Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((st, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -2 }}
                className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium text-slate-500 font-mono leading-tight">{st.label}</span>
                  <span className={`p-1.5 rounded-lg border ${st.color}`}>
                    <st.icon className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-2xl font-mono font-bold text-[#2d3436] mt-4">
                  {st.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
