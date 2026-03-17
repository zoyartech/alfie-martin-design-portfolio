import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const projects = [
{
  title: "The User Experience of AI Products",
  category: "AI Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/1bcfe2c17_alsharedasketchwithyou14.png",
  year: "2024",
  link: "DesignStrategyAI",
  summary: "Designing AI-powered interfaces that feel human, trustworthy, and intuitive. Built a conversational design framework grounded in cooperative dialogue theory and AI transparency research.",
  stats: [
  { label: "User Trust Score", value: "88%" },
  { label: "Faster Onboarding", value: "3×" },
  { label: "Support Reduction", value: "60%" }],

  tags: ["UX Research", "AI Systems", "Conversation Design"]
},
{
  title: "TCS NYC Marathon App",
  category: "Product Design",
  industry: "Sports & Events",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d50da56f6_alsharedasketchwithyou2copy.jpg",
  year: "2023",
  link: "TCSMarathon",
  summary: "Redesigned the official TCS NYC Marathon tracking app, improving the real-time runner tracking experience for over 1M spectators and participants.",
  stats: [
  { label: "App Downloads", value: "1M+" },
  { label: "Rating Increase", value: "+0.8★" },
  { label: "Engagement Lift", value: "42%" }],

  tags: ["Mobile Design", "Real-Time Data", "Sports"]
},
{
  title: "Polaroid Digital Brand Identity",
  category: "Brand Identity",
  industry: "Consumer",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/774fe444f_event-poster-design-template-66e0f3800fa4ecb1a1e657ce-2x.png",
  year: "2023",
  summary: "Repositioned Polaroid's digital brand identity for a new generation — balancing nostalgia with modern visual language across web, packaging, and campaign materials.",
  stats: [
  { label: "Brand Recall", value: "+47%" },
  { label: "Campaign Reach", value: "2.4M" },
  { label: "Social Growth", value: "+120%" }],

  tags: ["Brand Identity", "Visual Direction", "Consumer"]
},
{
  title: "Workflow Optimization",
  category: "Product Design",
  industry: "Enterprise",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/47f6fd98a_IMG_0491.jpg",
  year: "2022",
  link: "WorkflowOptimizationHVAC",
  summary: "Streamlined complex HVAC workflow management through a redesigned dashboard and task management system, reducing operational overhead for field teams.",
  stats: [
  { label: "Time Saved", value: "4hrs/day" },
  { label: "Error Reduction", value: "65%" },
  { label: "Adoption Rate", value: "91%" }],

  tags: ["Enterprise UX", "Dashboards", "Workflow"]
},
];


const filters = ["All", "AI Design", "Product Design", "Brand Identity", "Design Systems", "UX Strategy", "Art Direction"];

export default function FilterableGallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Selected Work</h2>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) =>
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group">
                <ProjectCard project={project} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const content = (
    <div className="cursor-pointer group">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs tracking-[0.15em] text-gray-400">{project.category}</span>
        </div>
        <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">{project.title}</h3>
      </div>
    </div>
  );

  if (project.link) {
    return <Link to={createPageUrl(project.link)}>{content}</Link>;
  }

  return content;
}