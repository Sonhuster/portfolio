import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Clock, 
  MessageSquare, 
  Send, 
  ArrowLeft, 
  Tag, 
  FileText, 
  User, 
  CornerDownRight, 
  Sparkles,
  BookmarkCheck
} from "lucide-react";
import { blogPosts, profileData } from "../data";
import { BlogPost } from "../types";

interface Comment {
  postId: string;
  author: string;
  email: string;
  text: string;
  timestamp: string;
}

export default function AcademicBlog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  // Blog Reader Details & Comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [newCommentEmail, setNewCommentEmail] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

  const categories = ["All", "Academic", "Reflection", "Survival Guide"];

  // Initialize comments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hust-scientist-blog-comments");
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default initial mock comments for authenticity
      const initialComments: Comment[] = [
        {
          postId: "blog1",
          author: "Linh Thuy Nguyen",
          email: "linhnt@hust.edu.vn",
          text: "This is deeply touching and incredibly realistic, Son! I am also in my final year of Master's study and often feel discouraged. Reading your reflections on laboratory companionship brings warmth to my heart.",
          timestamp: "May 23, 2026 - 10:20"
        },
        {
          postId: "blog2",
          author: "HUST Advisor K19",
          email: "linh.hp@hust.edu.vn",
          text: "Excellent dedication! Bridging computational fluid dynamics and wet lab validations is the future of modern engineering. Wishing you high marks on your Master's thesis and successful upcoming journal publications.",
          timestamp: "May 23, 2026 - 14:15"
        }
      ];
      setComments(initialComments);
      localStorage.setItem("hust-scientist-blog-comments", JSON.stringify(initialComments));
    }
  }, []);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentAuthor.trim() || !newCommentText.trim() || !selectedPost) return;

    const newComment: Comment = {
      postId: selectedPost.id,
      author: newCommentAuthor,
      email: newCommentEmail.trim() || "anonymous@hust.edu.vn",
      text: newCommentText,
      timestamp: new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem("hust-scientist-blog-comments", JSON.stringify(updated));

    // Reset inputs
    setNewCommentAuthor("");
    setNewCommentEmail("");
    setNewCommentText("");
  };

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const getPostCommentsCount = (postId: string) => {
    return comments.filter(c => c.postId === postId).length;
  };

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
                const commentCount = getPostCommentsCount(post.id);

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
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
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
                  <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> {getPostCommentsCount(selectedPost.id)} Discussions</span>
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
                {selectedPost.content.map((para, idx) => (
                  <p key={idx} className="indent-0 sm:indent-4">
                    {para}
                  </p>
                ))}
              </div>

            </article>

            {/* Real Comments Section */}
            <div className="max-w-3xl mx-auto pt-10 border-t border-slate-200">
              <h4 className="text-lg font-display font-semibold text-slate-950 flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-600" /> Discussion Board ({getPostCommentsCount(selectedPost.id)})
              </h4>

              {/* Write Comment Form */}
              <form onSubmit={handlePostComment} className="bg-slate-50/80 p-5 rounded-2xl border border-slate-150 space-y-3 mb-8">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> Submit feedback or raise scientific inquiries:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    id="input-comment-author"
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={newCommentAuthor}
                    onChange={(e) => setNewCommentAuthor(e.target.value)}
                    className="bg-white border border-slate-250 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  
                  <input
                    id="input-comment-email"
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={newCommentEmail}
                    onChange={(e) => setNewCommentEmail(e.target.value)}
                    className="bg-white border border-slate-250 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <textarea
                  id="textarea-comment-text"
                  required
                  placeholder="Your scientific comments, encouragement, or inquiries for Son... *"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="bg-white border border-slate-250 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-blue-500 min-h-[70px] w-full resize-y transition-colors"
                />

                <div className="flex justify-end">
                  <button
                    id="btn-submit-comment"
                    type="submit"
                    className="inline-flex items-center gap-1.5 text-xs bg-slate-950 hover:bg-slate-900 text-white font-semibold px-4 py-2 rounded-xl transition-colors shadow-xs"
                  >
                    Submit Discussion <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>

              {/* List Comments */}
              <div className="space-y-4">
                {comments.filter(c => c.postId === selectedPost.id).length === 0 ? (
                  <div className="text-center py-6 text-xs font-mono text-slate-400">
                    No comments yet. Be the first to start a conversation!
                  </div>
                ) : (
                  comments
                    .filter(c => c.postId === selectedPost.id)
                    .map((comm, idx) => (
                      <div key={idx} className="flex gap-3 text-xs bg-slate-50/30 p-4 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-slate-500 text-[10px] font-bold">
                          {comm.author.charAt(0).toUpperCase()}
                        </div>
                        
                        <div className="space-y-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-slate-800">{comm.author}</span>
                              <span className="text-[10px] text-slate-400 font-mono">({comm.email})</span>
                            </div>
                            <span className="text-[9px] text-slate-400 font-mono">{comm.timestamp}</span>
                          </div>
                          
                          <p className="text-slate-600 leading-relaxed pt-0.5">
                            {comm.text}
                          </p>
                        </div>
                      </div>
                    ))
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
