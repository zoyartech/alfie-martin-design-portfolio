import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Sparkles, PenLine, Wand2, Tags, ChevronDown, ChevronUp, Copy, Check, Loader2 } from "lucide-react";
import { blogPosts } from "./blogData";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-black transition-colors">
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function OutputBlock({ title, content }) {
  return (
    <div className="mt-6 border border-gray-200 bg-gray-50 p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs tracking-[0.2em] text-gray-400">{title}</p>
        <CopyButton text={typeof content === "string" ? content : JSON.stringify(content, null, 2)} />
      </div>
      {typeof content === "string" ? (
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
      ) : Array.isArray(content) ? (
        <div className="flex flex-wrap gap-2">
          {content.map((tag, i) => (
            <span key={i} className="text-xs border border-gray-300 px-3 py-1 text-gray-600">{tag}</span>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {Object.entries(content).map(([k, v]) => (
            <div key={k}>
              <p className="text-xs text-gray-400 mb-0.5 capitalize">{k}</p>
              {Array.isArray(v) ? (
                <div className="flex flex-wrap gap-2">
                  {v.map((tag, i) => <span key={i} className="text-xs border border-gray-300 px-2 py-0.5 text-gray-600">{tag}</span>)}
                </div>
              ) : (
                <p className="text-sm text-gray-700 leading-relaxed">{v}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Tab 1: Generate Draft ───────────────────────────────────────────
function GenerateDraft() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("thoughtful");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult(null);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a design writer for Alfie Martin's personal portfolio blog. Write a high-quality blog post draft about: "${topic}".
The tone should be ${tone}. The blog covers design, AI product design, brand strategy, and UX.
Return a well-structured draft with a compelling title, subtitle, excerpt (2 sentences), and 4-6 paragraphs of body content.
Do NOT use markdown headers — format as plain readable text with clear paragraph breaks.`,
      response_json_schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          subtitle: { type: "string" },
          excerpt: { type: "string" },
          body: { type: "string" }
        }
      }
    });
    setResult(res);
    setLoading(false);
  };

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">Enter a topic and get a full blog post draft, ready to refine and publish.</p>
      <div className="space-y-4">
        <div>
          <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">TOPIC</label>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="e.g. The future of AI-assisted design tools"
            className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
            onKeyDown={e => e.key === "Enter" && generate()}
          />
        </div>
        <div>
          <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">TONE</label>
          <select value={tone} onChange={e => setTone(e.target.value)}
            className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white">
            <option value="thoughtful">Thoughtful & Strategic</option>
            <option value="direct">Direct & Opinionated</option>
            <option value="educational">Educational & Clear</option>
            <option value="conversational">Conversational & Personal</option>
          </select>
        </div>
        <button onClick={generate} disabled={!topic.trim() || loading}
          className="w-full bg-black text-white text-xs tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <PenLine className="w-4 h-4" />}
          {loading ? "GENERATING DRAFT..." : "GENERATE DRAFT"}
        </button>
      </div>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <OutputBlock title="TITLE" content={result.title} />
          <OutputBlock title="SUBTITLE" content={result.subtitle} />
          <OutputBlock title="EXCERPT" content={result.excerpt} />
          <OutputBlock title="DRAFT BODY" content={result.body} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Tab 2: Improve Content ──────────────────────────────────────────
function ImproveContent() {
  const [mode, setMode] = useState("paste");
  const [selectedPost, setSelectedPost] = useState(blogPosts[0].id);
  const [customText, setCustomText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const getContent = () => {
    if (mode === "existing") {
      const post = blogPosts.find(p => p.id === selectedPost);
      return post ? post.content.filter(c => c.type === "paragraph").map(c => c.text).join("\n\n") : "";
    }
    return customText;
  };

  const improve = async () => {
    const content = getContent();
    if (!content.trim()) return;
    setLoading(true);
    setResult(null);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an expert content editor and SEO strategist. Analyze this blog content and provide specific improvements.
Focus on: clarity, conciseness, stronger opening hooks, better transitions, and SEO keyword opportunities.

CONTENT:
${content}

Provide actionable suggestions, not a full rewrite. Be specific about what to change and why.`,
      response_json_schema: {
        type: "object",
        properties: {
          clarity_suggestions: { type: "string" },
          seo_improvements: { type: "string" },
          stronger_hooks: { type: "string" },
          overall_score: { type: "string" }
        }
      }
    });
    setResult(res);
    setLoading(false);
  };

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">Get specific clarity and SEO suggestions for your content.</p>

      <div className="flex gap-0 mb-6 border border-gray-200 w-fit">
        {[["existing", "Existing Post"], ["paste", "Paste Content"]].map(([val, label]) => (
          <button key={val} onClick={() => setMode(val)}
            className={`text-xs tracking-[0.15em] px-5 py-2.5 transition-colors ${mode === val ? "bg-black text-white" : "hover:bg-gray-50"}`}>
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {mode === "existing" ? (
          <div>
            <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">SELECT POST</label>
            <select value={selectedPost} onChange={e => setSelectedPost(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white">
              {blogPosts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">PASTE YOUR CONTENT</label>
            <textarea value={customText} onChange={e => setCustomText(e.target.value)}
              placeholder="Paste your blog post content here..."
              className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none h-40" />
          </div>
        )}

        <button onClick={improve} disabled={loading || (!customText.trim() && mode === "paste")}
          className="w-full bg-black text-white text-xs tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
          {loading ? "ANALYZING..." : "SUGGEST IMPROVEMENTS"}
        </button>
      </div>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <OutputBlock title="OVERALL ASSESSMENT" content={result.overall_score} />
          <OutputBlock title="CLARITY IMPROVEMENTS" content={result.clarity_suggestions} />
          <OutputBlock title="SEO OPPORTUNITIES" content={result.seo_improvements} />
          <OutputBlock title="STRONGER HOOKS" content={result.stronger_hooks} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Tab 3: Generate Tags & Meta ─────────────────────────────────────
function GenerateMeta() {
  const [mode, setMode] = useState("existing");
  const [selectedPost, setSelectedPost] = useState(blogPosts[0].id);
  const [customTitle, setCustomTitle] = useState("");
  const [customExcerpt, setCustomExcerpt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generate = async () => {
    let title, excerpt;
    if (mode === "existing") {
      const post = blogPosts.find(p => p.id === selectedPost);
      title = post?.title; excerpt = post?.excerpt;
    } else {
      title = customTitle; excerpt = customExcerpt;
    }
    if (!title) return;
    setLoading(true);
    setResult(null);
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `Generate SEO metadata for a blog post on a design portfolio website.

Title: "${title}"
Excerpt: "${excerpt || ""}"

The blog covers design, AI product design, brand strategy, UX research, and creative direction.`,
      response_json_schema: {
        type: "object",
        properties: {
          meta_description: { type: "string" },
          primary_tags: { type: "array", items: { type: "string" } },
          seo_keywords: { type: "array", items: { type: "string" } },
          og_title: { type: "string" }
        }
      }
    });
    setResult(res);
    setLoading(false);
  };

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">Auto-generate SEO tags, keywords, and meta descriptions for any post.</p>

      <div className="flex gap-0 mb-6 border border-gray-200 w-fit">
        {[["existing", "Existing Post"], ["custom", "New Content"]].map(([val, label]) => (
          <button key={val} onClick={() => setMode(val)}
            className={`text-xs tracking-[0.15em] px-5 py-2.5 transition-colors ${mode === val ? "bg-black text-white" : "hover:bg-gray-50"}`}>
            {label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {mode === "existing" ? (
          <div>
            <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">SELECT POST</label>
            <select value={selectedPost} onChange={e => setSelectedPost(e.target.value)}
              className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white">
              {blogPosts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          </div>
        ) : (
          <>
            <div>
              <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">TITLE</label>
              <input type="text" value={customTitle} onChange={e => setCustomTitle(e.target.value)}
                placeholder="Your post title" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="text-xs tracking-[0.2em] text-gray-400 block mb-2">EXCERPT / SUMMARY</label>
              <textarea value={customExcerpt} onChange={e => setCustomExcerpt(e.target.value)}
                placeholder="Brief description of your post..."
                className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none h-24" />
            </div>
          </>
        )}

        <button onClick={generate} disabled={loading || (mode === "custom" && !customTitle.trim())}
          className="w-full bg-black text-white text-xs tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Tags className="w-4 h-4" />}
          {loading ? "GENERATING..." : "GENERATE TAGS & META"}
        </button>
      </div>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <OutputBlock title="META DESCRIPTION" content={result.meta_description} />
          <OutputBlock title="OG TITLE" content={result.og_title} />
          <OutputBlock title="TAGS" content={result.primary_tags} />
          <OutputBlock title="SEO KEYWORDS" content={result.seo_keywords} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────
const TABS = [
  { id: "draft", label: "Generate Draft", icon: PenLine, component: GenerateDraft },
  { id: "improve", label: "Improve Content", icon: Wand2, component: ImproveContent },
  { id: "meta", label: "Tags & Meta", icon: Tags, component: GenerateMeta },
];

export default function AIBlogAssistant() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("draft");

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.component;

  return (
    <div className="border border-gray-200 mb-12">
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#a06bfa]" />
          <span className="text-sm tracking-[0.2em] font-medium">AI WRITING ASSISTANT</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gray-200"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-xs tracking-[0.15em] transition-colors border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-black"
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Active Panel */}
            <div className="px-6 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {ActiveComponent && <ActiveComponent />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}