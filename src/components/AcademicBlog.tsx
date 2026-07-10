import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  Tag, 
  User
} from "lucide-react";
import { blogPosts, profileData } from "../data";
import { BlogPost } from "../types";

export default function AcademicBlog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const categories = ["All", "Academic", "Reflection", "Survival Guide"];

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div id="academic-blog-container" className="bg-white rounded-2xl border border-[#e9ecef] p-6 md:p-8 shadow-xs">
      
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          // BLOG LIST VIEW
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Title Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 uppercase">
                  <BookOpen className="w-3.5 h-3.5" /> PERSONAL BLOG & JOURNEY
                </span>
                <p className="text-slate-500 text-xs md:text-sm mt-1">
                  Research logs, computing journeys, and postgraduate studies experiences at HUST, KAIST & NTU.
                </p>
              </div>

              {/* Filtering */}
              <div className="flex flex-wrap gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/50">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`btn-blog-category-${cat.replace(" ", "-")}`}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-slate-900 text-white shadow-xs font-semibold"
                        : "text-slate-500 hover:text-slate-950"
                    }`}
                  >
                    {cat === "All" ? "All" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Blogs List */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                return (
                  <div 
                    key={post.id}
                    id={`blog-card-${post.id}`}
                    className="flex flex-col justify-between p-6 bg-slate-50/45 hover:bg-slate-50 border border-slate-100/80 hover:border-slate-200 rounded-2xl transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-white border border-slate-200 text-slate-600">
                          {post.category}
                        </span>
                        
                        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                      </div>

                      <h4 className="text-base font-display font-semibold text-slate-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>

                      <p className="text-xs text-slate-500 leading-relaxed mt-3 line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      {/* Tags */}
                      <div className="flex gap-1 overflow-hidden max-w-[70%]">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                           <span key={idx} className="text-[9px] text-slate-400 font-mono flex items-center gap-0.5 whitespace-nowrap">
                            #{tag.replace(" ", "")}
                          </span>
                        ))}
                      </div>

                      <button
                        id={`btn-read-blog-${post.id}`}
                        onClick={() => setSelectedPost(post)}
                        className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 shrink-0 flex items-center gap-0.5"
                      >
                        Read post ➜
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 text-xs font-mono text-slate-400">
                No blog posts available in category '{activeCategory}'.
              </div>
            )}
          </motion.div>
        ) : (
          // DETAILED READER VIEW WITH COMMENT BOX
          <motion.div 
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Header / Back Action */}
            <div className="flex items-center justify-between border-b border-[#dddfe1] pb-5">
              <button
                id="btn-back-to-blogs"
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> BACK TO BLOGS
              </button>
              
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-850 border border-blue-150">
                  {selectedPost.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{selectedPost.date}</span>
              </div>
            </div>

            {/* Article Sheet formatting */}
            <article className="max-w-3xl mx-auto space-y-6">
              
              <div className="space-y-3 text-center sm:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold tracking-tight text-slate-900 leading-tight">
                  {selectedPost.title}
                </h2>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 pt-2 border-y border-slate-50 py-2.5">
                  <span className="flex items-center gap-1 text-slate-500"><User className="w-3.5 h-3.5" /> By {profileData.name}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Read Time: {selectedPost.readTime}</span>
                </div>
              </div>

              {/* Tag pile */}
              <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                {selectedPost.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-slate-50 text-slate-500 border border-slate-200/40">
                    <Tag className="w-2.5 h-2.5 text-slate-400" /> #{tag}
                  </span>
                ))}
              </div>

              {/* Summary lead quotation */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl italic text-slate-700 text-xs md:text-sm pl-4 leading-relaxed">
                <strong>Summary: </strong> {selectedPost.summary}
              </div>

              {/* Core Content paragraphs */}
              <div className="space-y-4 pt-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
                {selectedPost.content.map((item, idx) => {
                  if (typeof item === "string") {
                    return (
                      <p key={idx} className="indent-0 sm:indent-4">
                        {item}
                      </p>
                    );
                  }

                  return (
                    <figure key={idx} className="my-4">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full rounded-xl border border-slate-200 object-cover shadow-sm"
                        style={item.style}
                      />
                      {item.caption && (
                        <figcaption className="mt-2 text-center text-xs text-slate-500">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
              </div>

            </article>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
