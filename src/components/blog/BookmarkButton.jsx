import React, { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";

export default function BookmarkButton({ postId, postTitle }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarked_posts") || "[]");
    setBookmarked(saved.includes(postId));
  }, [postId]);

  const toggle = () => {
    const saved = JSON.parse(localStorage.getItem("bookmarked_posts") || "[]");
    let updated;
    if (saved.includes(postId)) {
      updated = saved.filter(id => id !== postId);
    } else {
      updated = [...saved, postId];
    }
    localStorage.setItem("bookmarked_posts", JSON.stringify(updated));
    setBookmarked(!bookmarked);
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-300 ${
        bookmarked
          ? "bg-black text-white border-black"
          : "border-gray-300 text-gray-500 hover:border-black hover:text-black"
      }`}
      title={bookmarked ? "Remove bookmark" : "Save for later"}
    >
      {bookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
      {bookmarked ? "SAVED" : "READ LATER"}
    </button>
  );
}