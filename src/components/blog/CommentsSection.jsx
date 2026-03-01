import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";

export default function CommentsSection({ postId }) {
  const storageKey = `comments_${postId}`;

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    };
    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setName("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <div className="flex items-center gap-2 mb-10">
        <MessageSquare className="w-4 h-4 text-gray-400" />
        <p className="text-xs tracking-[0.3em] text-gray-400">
          COMMENTS {comments.length > 0 && `(${comments.length})`}
        </p>
      </div>

      {/* Comment List */}
      {comments.length === 0 ? (
        <p className="text-sm text-gray-400 mb-10">Be the first to leave a comment.</p>
      ) : (
        <div className="space-y-8 mb-12">
          <AnimatePresence>
            {comments.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border-l-2 border-gray-200 pl-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-medium">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Comment Form */}
      <div>
        <p className="text-xs tracking-[0.2em] text-gray-400 mb-6">LEAVE A COMMENT</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">YOUR NAME</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Alfie Martin"
              className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
              required
            />
          </div>
          <div>
            <label className="text-xs tracking-[0.15em] text-gray-400 block mb-2">COMMENT</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none h-28"
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white text-xs tracking-[0.2em] px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            {submitted ? "POSTED!" : "POST COMMENT"}
          </button>
        </form>
      </div>
    </div>
  );
}