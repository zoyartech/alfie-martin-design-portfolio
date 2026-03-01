import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { blogPosts } from "../components/blog/blogData";
import AIBlogAssistant from "../components/blog/AIBlogAssistant";

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const [bookmarks, setBookmarks] = useState(() =>
    JSON.parse(localStorage.getItem("bookmarked_posts") || "[]")
  );

  const allTags = ["All", ...new Set(blogPosts.flatMap(p => p.tags))];

  const filtered = activeTag === "__bookmarks__"
    ? blogPosts.filter(p => bookmarks.includes(p.id))
    : activeTag === "All"
    ? blogPosts
    : blogPosts.filter(p => p.tags.includes(activeTag));

  // SEO meta
  useEffect(() => {
    document.title = "Writing — Alfie Martin";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Thoughts on design, brand strategy, AI product design, and UX research by Alfie Martin.";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-semibold hover:text-[#8B7355] transition-colors duration-300">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center gap-10">
              {[["Home", "HOME"], ["About", "ABOUT"], ["Design", "DESIGN"], ["Gallery", "VISUALS"], ["Blog", "WRITING"]].map(([page, label]) => (
                <Link key={page} to={createPageUrl(page)}
                  className={`relative text-xs tracking-[0.15em] font-medium transition-colors group ${page === "Blog" ? "text-black" : "text-gray-600 hover:text-black"}`}>
                  {label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300 ${page === "Blog" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              ))}
              <Link to={createPageUrl("Contact")}
                className="text-xs tracking-[0.15em] font-medium px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">WRITING</p>
            <h1 className="text-4xl md:text-6xl font-light mb-6">Thoughts & Ideas</h1>
            <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
              Essays on design, AI, brand strategy, and the practice of building things that matter.
            </p>
          </motion.div>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-3 mt-12">
            {bookmarks.length > 0 && (
              <button onClick={() => setActiveTag("__bookmarks__")}
                className={`flex items-center gap-1.5 text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                  activeTag === "__bookmarks__" ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                }`}>
                <Bookmark className="w-3 h-3" /> SAVED ({bookmarks.length})
              </button>
            )}
            {allTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
                  activeTag === tag ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                }`}>
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="px-6 lg:px-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <AIBlogAssistant />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {filtered.map((post, i) => (
              <motion.div key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group">
                <Link to={`${createPageUrl("BlogPost")}?id=${post.id}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-gray-100 mb-6">
                    <img src={post.image} alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs tracking-[0.2em] text-gray-400">{post.category.toUpperCase()}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-light mb-2 group-hover:text-[#8B7355] transition-colors flex items-start gap-2">
                    {post.title}
                    <ArrowUpRight className="w-5 h-5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs tracking-wider text-gray-400 border border-gray-200 px-2 py-1">{tag}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}