import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const projects = [
  {
    title: "The User Experience of AI Products",
    category: "AI Design",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    year: "2024",
    link: "DesignStrategyAI",
    summary: "Designing AI-powered interfaces that feel human, trustworthy, and intuitive. Built a conversational design framework grounded in cooperative dialogue theory and AI transparency research.",
    stats: [
      { label: "User Trust Score", value: "88%" },
      { label: "Faster Onboarding", value: "3×" },
      { label: "Support Reduction", value: "60%" },
    ],
    tags: ["UX Research", "AI Systems", "Conversation Design"],
  },
  {
    title: "TCS NYC Marathon App",
    category: "Product Design",
    industry: "Sports & Events",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80",
    year: "2023",
    link: "TCSMarathon",
    summary: "Redesigned the official TCS NYC Marathon tracking app, improving the real-time runner tracking experience for over 1M spectators and participants.",
    stats: [
      { label: "App Downloads", value: "1M+" },
      { label: "Rating Increase", value: "+0.8★" },
      { label: "Engagement Lift", value: "42%" },
    ],
    tags: ["Mobile Design", "Real-Time Data", "Sports"],
  },
  {
    title: "Grammarly AI Writing Feedback",
    category: "UX Strategy",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    year: "2023",
    summary: "Redesigned Grammarly's AI suggestion UX to reduce friction and improve writing confidence. Focused on tone, clarity, and progressive disclosure of AI reasoning.",
    stats: [
      { label: "Suggestion Accept Rate", value: "+35%" },
      { label: "Session Length", value: "+22%" },
      { label: "NPS Improvement", value: "+18pts" },
    ],
    tags: ["AI UX", "Writing Tools", "SaaS"],
  },
  {
    title: "Microsoft Fluent Design System",
    category: "Design Systems",
    industry: "Enterprise",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    year: "2023",
    summary: "Contributed to Microsoft's Fluent Design System, ensuring consistency and accessibility across enterprise products used by millions of users worldwide.",
    stats: [
      { label: "Components Built", value: "120+" },
      { label: "Products Impacted", value: "30+" },
      { label: "A11y Compliance", value: "WCAG AA" },
    ],
    tags: ["Design Systems", "Accessibility", "Enterprise"],
  },
  {
    title: "Polaroid Digital Brand Identity",
    category: "Brand Identity",
    industry: "Consumer",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    year: "2023",
    summary: "Repositioned Polaroid's digital brand identity for a new generation — balancing nostalgia with modern visual language across web, packaging, and campaign materials.",
    stats: [
      { label: "Brand Recall", value: "+47%" },
      { label: "Campaign Reach", value: "2.4M" },
      { label: "Social Growth", value: "+120%" },
    ],
    tags: ["Brand Identity", "Visual Direction", "Consumer"],
  },
  {
    title: "Workflow Optimization",
    category: "Product Design",
    industry: "Enterprise",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    year: "2022",
    link: "WorkflowOptimizationHVAC",
    summary: "Streamlined complex HVAC workflow management through a redesigned dashboard and task management system, reducing operational overhead for field teams.",
    stats: [
      { label: "Time Saved", value: "4hrs/day" },
      { label: "Error Reduction", value: "65%" },
      { label: "Adoption Rate", value: "91%" },
    ],
    tags: ["Enterprise UX", "Dashboards", "Workflow"],
  },
];

const filters = ["All", "AI Design", "Product Design", "Brand Identity", "Design Systems", "UX Strategy"];

export default function FilterableGallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">CASE STUDIES</p>
            <h2 className="text-3xl md:text-4xl font-light">Selected Work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-200 ${
                  active === f ? "bg-black text-white border-black" : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>


    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        {/* Hover button */}
        {project.link && (
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <Link
              to={createPageUrl(project.link)}
              className="flex items-center gap-1.5 text-xs tracking-[0.15em] bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <ArrowUpRight className="w-3.5 h-3.5" /> OPEN
            </Link>
          </div>
        )}
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs tracking-[0.15em] text-gray-400">{project.category}</span>
          <span className="text-xs text-gray-400">{project.year}</span>
        </div>
        <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">{project.title}</h3>
      </div>
    </div>
  );
}