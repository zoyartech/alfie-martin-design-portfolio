import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
{
  title: "establishing trust with AI",
  category: "AI Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/7e50c8abf_Screenshot2026-04-28at122856AM.png",
  imageFit: "object-cover",
  year: "2024",
  link: "ConversationCraft",
  summary: "In depth look into designing for trust into conversational design",
  stats: [],
  tags: ["AI Design"]
},
{
  title: "Voice User Interface in AI-Med Tech",
  category: "Product Design",
  industry: "Med Tech",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d1e0590e7_Screenshot2026-04-27at75059PM.png",
  imageFit: "object-contain bg-[#020b18]",
  year: "2024",
  link: "VoiceUserInterface",
  summary: "Designing a voice user interface for AI-powered clinical tech.",
  stats: [],
  tags: ["VUI", "Voice UI", "Med Tech"]
},
{
  title: "Search Agent Optimization",
  category: "Product Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a61e9832d_Screenshot2026-04-27at83736PM.png",
  imageFit: "object-contain bg-[#f6f6f6]",
  year: "2024",
  link: "SAO",
  summary: "Designing the end-to-end experience and retrieval architecture for an AI-powered search agent.",
  stats: [],
  tags: ["SAO", "Semantic Search", "AI Agents"]
},
{
  title: "Multimodal Design for AI systems In mental health",
  category: "AI Design",
  industry: "Med Tech",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ec1acd843_ai-medtech.png",
  imageFit: "object-contain bg-[#111823]",
  year: "2024",
  link: "b6",
  summary: "Designing an intelligent, empathetic AI-driven patient experience for a nationwide network of neurotherapy clinics.",
  stats: [
    { label: "Intake Completion", value: "+40%" },
    { label: "Engagement", value: "85%" }
  ],
  tags: ["AI in Healthcare", "Product Design", "Mental Health"]
},

{
  title: "Confidence Scoring in AI outputs",
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
    <section className="pt-0 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={createPageUrl("UXResearchStudies")} className="inline-flex items-center px-5 py-2.5 rounded-[10px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-[#d9d9d9] text-sm font-medium text-black transition-all">
                      UX Research Studies
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Qualitative and Quantitative Research</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={createPageUrl("SideQuests")} className="inline-flex items-center px-5 py-2.5 rounded-[10px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-[#d9d9d9] text-sm font-medium text-black transition-all">
                      Product Design
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Product Design</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={createPageUrl("Writing")} className="inline-flex items-center px-5 py-2.5 rounded-[10px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-[#d9d9d9] text-sm font-medium text-black transition-all">
                      Content Strategy
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Content Strategy</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">AI Native Product Design</h2>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-10">
            
            

          
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