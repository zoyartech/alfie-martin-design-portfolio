import React, { useState } from "react";
import { Twitter, Linkedin, Link2, Check } from "lucide-react";

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      label: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`,
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.2em] text-gray-400 mr-1">SHARE</span>
      {shareLinks.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs border border-gray-300 px-3 py-2 text-gray-500 hover:border-black hover:text-black transition-all duration-300"
          title={`Share on ${label}`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 text-xs border border-gray-300 px-3 py-2 text-gray-500 hover:border-black hover:text-black transition-all duration-300"
        title="Copy link"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}