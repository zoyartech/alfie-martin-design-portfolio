import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const projects = [
{
  title: "Principal Financial",
  category: "Product Design",
  industry: "Finance",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/586e4fb43_Screenshot2026-03-28at13454PM.png",
  year: "2024",
  link: "PrincipalFinancial",
  summary: "Lead product designer on Principal's SBO Advisory platform — a suite of web and mobile tools helping financial advisors guide small business owners.",
  stats: [],
  tags: ["Enterprise UX", "Advisory Tools", "Product Design"]
},
{
  title: "The User Experience of AI Products",
  category: "AI Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/42aefcea5_handy.png",
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
  title: "Rockefeller Capital Management",
  category: "Product Design",
  industry: "Finance",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5b2be1488_Screenshot2026-03-25at92734PM.png",
  year: "2023",
  link: "RockefellerCapital",
  summary: "Practical Solutions To Improving The User Experience Of Digital Products for High Net Worth Individuals.",
  stats: [
  { label: "Adoption", value: "Increased" },
  { label: "MAU / DAU", value: "Lifted" },
  { label: "Usability", value: "Enhanced" }],
  tags: ["UX End To End", "Finance", "Mobile App"]
},

{
  title: "TCS NYC Marathon App",
  category: "Product Design",
  industry: "Sports & Events",
  image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1200&q=80",
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
  title: "Rebrand & Growth : Polaroid Makes a comeback",
  category: "Brand Identity",
  industry: "Consumer",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7e3c8706f_ooookaroid.png",
  year: "2023",
  link: "PolaroidProject",
  summary: "Repositioned Polaroid's digital brand identity for a new generation — balancing nostalgia with modern visual language across web, packaging, and campaign materials.",
  stats: [
  { label: "Brand Recall", value: "+47%" },
  { label: "Campaign Reach", value: "2.4M" },
  { label: "Social Growth", value: "+120%" }],

  tags: ["Brand Identity", "Visual Direction", "Consumer"]
},

{
  title: "Activation at Grammarly",
  category: "Product Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/0e719488f_growthlever.png",
  year: "2024",
  link: "ActivationGrammarly",
  summary: "Improve user activation and time-to-value while maintaining the quality writing experience users expect.",
  stats: [],
  tags: ["Growth Design", "Activation", "UX Strategy"],
  imageFit: "object-cover"
},
{
  title: "Designing trust into automated climate risk",
  category: "Product Design",
  industry: "Climate Risk",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ad407e43e_Screenshot2026-03-19at120315AM.png",
  year: "2023",
  link: "ArbolCaseStudy",
  summary: "Designed an explainable AI underwriting and smart contract UX for an automated parametric climate risk platform.",
  stats: [
  { label: "Broker Support Tickets", value: "↓ 60%" },
  { label: "Contracts Bound", value: "↑ 3×" },
  { label: "User Trust", value: "100%" }],

  tags: ["AI", "Smart Contracts", "Product Design"]
}];



const filters = ["All", "AI Design", "Product Design", "Brand Identity", "Design Systems", "UX Strategy", "Art Direction"];

export default function FilterableGallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link to={createPageUrl("UXResearchStudies")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#30daff] hover:bg-[#d9d9d9] text-sm font-medium text-black transition-all">
                UX Research Studies <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>
              <Link to={createPageUrl("SideQuests")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#30daff] hover:bg-[#d9d9d9] text-sm font-medium text-black transition-all">
                Side Quests <ArrowUpRight className="w-4 h-4 text-black" />
              </Link>
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">Product Design Case Studies </h2>
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
    </section>);

}

function ProjectCard({ project }) {
  const content =
  <div className="cursor-pointer group">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-lg">
        <img
        loading="lazy"
        src={project.image}
        alt={project.title}
        className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${project.imageFit || "object-cover"}`} />
      
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between mb-1">
          
        </div>
        <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">{project.title}</h3>
      </div>
    </div>;


  if (project.link) {
    return <Link to={createPageUrl(project.link)}>{content}</Link>;
  }

  return content;
}