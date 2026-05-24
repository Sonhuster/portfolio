import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Coffee, 
  Compass, 
  FlaskConical, 
  GraduationCap, 
  ChevronRight, 
  Image as ImageIcon 
} from "lucide-react";
import { memories } from "../data";

export default function DailyMemories() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedMemoryId, setSelectedMemoryId] = useState<string | null>(null);

  const filters = ["All", "Lab Fun", "Field Trip", "Daily Life", "Academic"];

  const filteredMemories = activeFilter === "All" 
    ? memories 
    : memories.filter(m => m.category === activeFilter);

  // Helper to map string to lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "ThermometerCheck":
        return <FlaskConical className="w-4 h-4 text-blue-500" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-indigo-500" />;
      case "Coffee":
        return <Coffee className="w-4 h-4 text-amber-500" />;
      case "Presentation":
        return <GraduationCap className="w-4 h-4 text-purple-500" />;
      default:
        return <Heart className="w-4 h-4 text-red-400" />;
    }
  };

  const getCategoryBadgeClass = (cat: string) => {
    switch (cat) {
      case "Lab Fun": return "bg-blue-50/70 text-blue-800 border-blue-100";
      case "Field Trip": return "bg-indigo-50/70 text-indigo-800 border-indigo-100";
      case "Daily Life": return "bg-amber-50/70 text-amber-800 border-amber-100";
      case "Academic": return "bg-purple-50/70 text-purple-800 border-purple-100";
      default: return "bg-slate-50 text-slate-800 border-slate-150";
    }
  };

  return (
    <div id="daily-memories-card" className="bg-white rounded-2xl border border-[#e9ecef] p-6 md:p-8 shadow-xs">
      
      {/* Title & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8 border-b border-slate-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Daily Diaries & Memories
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-medium text-[#2d3436] mt-2">
            Nhật Ký & Kỷ Niệm Đời Thường
          </h3>
          <p className="text-slate-500 text-xs md:text-sm mt-1">
            Ghi lại những khoảnh khắc đời thường ý nghĩa bên ngoài những biểu đồ khô khan của phòng thí nghiệm.
          </p>
        </div>

        {/* Filter controls row */}
        <div className="flex flex-wrap gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/50">
          {filters.map((filter) => (
            <button
              key={filter}
              id={`btn-filter-memories-${filter.replace(" ", "-")}`}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedMemoryId(null);
              }}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-slate-900 text-white shadow-xs font-medium"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {filter === "All" ? "Tất cả" : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Journal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMemories.map((m) => {
          const isExpanded = selectedMemoryId === m.id;

          return (
            <motion.div
              layout
              key={m.id}
              id={`memory-card-${m.id}`}
              className={`p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isExpanded 
                  ? "bg-slate-950 text-white border-slate-900 shadow-lg col-span-1 md:col-span-2" 
                  : "bg-slate-50/40 hover:bg-slate-50/80 text-slate-800 border-slate-200/50"
              }`}
            >
              <div>
                {/* Badge Category and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1.5 bg-white rounded-lg border border-slate-200 shadow-xs flex-shrink-0">
                      {getIcon(m.iconName)}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border font-semibold ${
                      isExpanded 
                        ? "bg-slate-800 border-slate-700 text-blue-400" 
                        : getCategoryBadgeClass(m.category)
                    }`}>
                      {m.category}
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono ${isExpanded ? "text-slate-500" : "text-slate-400"}`}>
                    {m.date}
                  </span>
                </div>

                <h4 className={`text-base md:text-lg font-display font-semibold leading-tight ${isExpanded ? "text-blue-400" : "text-slate-900"}`}>
                  {m.title}
                </h4>

                {/* Subtitle / Location */}
                <div className={`flex items-center gap-1 text-[10px] font-mono mt-1 ${isExpanded ? "text-slate-400" : "text-slate-400"}`}>
                  <MapPin className="w-3 h-3 text-blue-500" /> {m.location}
                </div>

                <p className={`text-xs md:text-sm leading-relaxed mt-3.5 ${
                  isExpanded 
                    ? "text-slate-300 font-normal lg:max-w-4xl" 
                    : "text-slate-600 line-clamp-2"
                }`}>
                  {m.description}
                </p>
              </div>

              {/* Action: Expand Story to Read */}
              <div className="mt-5 pt-4 border-t border-slate-200/20 flex justify-between items-center text-xs font-mono">
                <span className={isExpanded ? "text-slate-500" : "text-slate-400"}>
                  ID: {m.id}
                </span>

                <button
                  id={`btn-toggle-story-${m.id}`}
                  onClick={() => setSelectedMemoryId(isExpanded ? null : m.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors font-semibold ${
                    isExpanded 
                      ? "text-blue-400 bg-slate-900 hover:bg-slate-800 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  {isExpanded ? "Đóng nhật ký ✖" : "Đọc chi tiết câu chuyện ➜"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredMemories.length === 0 && (
        <div className="text-center py-12 text-xs font-mono text-slate-400">
          Chưa có nhật ký ghi chép cho bộ lọc '{activeFilter}'.
        </div>
      )}

    </div>
  );
}
