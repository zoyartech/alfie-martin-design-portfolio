import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../components/blog/blogData";

export default function BlogPost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  // SEO meta
  useEffect(() => {
    document.title = `${post.title} — Alfie Martin`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = post.metaDescription;

    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) { keywords = document.createElement("meta"); keywords.name = "keywords"; document.head.appendChild(keywords); }
    keywords.content = post.tags.join(", ");
  }, [post]);

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
                  className="relative text-xs tracking-[0.15em] font-medium text-gray-600 hover:text-black transition-colors group">
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
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

      {/* Back */}
      <section className="pt-32 pb-8 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("Blog")}
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> BACK TO WRITING
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.2em] text-gray-400">{post.category.toUpperCase()}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-500 font-light leading-relaxed">{post.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="aspect-[16/7] overflow-hidden bg-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "heading") return (
                <h2 key={i} className="text-2xl font-light mt-12 mb-2">{block.text}</h2>
              );
              return (
                <p key={i} className="text-gray-700 leading-relaxed text-lg">{block.text}</p>
              );
            })}
          </motion.div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-xs tracking-[0.2em] text-gray-400 mb-4">TAGS</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs tracking-wider text-gray-600 border border-gray-300 px-3 py-1.5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Posts */}
      <section className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-10">MORE WRITING</p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((p, i) => (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group">
                <Link to={`${createPageUrl("BlogPost")}?id=${p.id}`}>
                  <div className="aspect-[16/9] overflow-hidden bg-gray-200 mb-4">
                    <img src={p.image} alt={p.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <span className="text-xs tracking-[0.2em] text-gray-400">{p.category.toUpperCase()}</span>
                  <h3 className="text-lg font-light mt-1 group-hover:text-[#8B7355] transition-colors">{p.title}</h3>
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