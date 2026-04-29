import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
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
  tags: ["VUI", "Voice UI", "Med Tech"],
  bgColor: "#97bbf1"
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
  tags: ["SAO", "Semantic Search", "AI Agents"],
  bgColor: "#a8a9ab"
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
  tags: ["AI in Healthcare", "Product Design", "Mental Health"],
  bgColor: "#c5dfb1"
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
    { label: "Support Reduction", value: "60%" }
  ],
  tags: ["UX Research", "AI Systems", "Conversation Design"],
  bgColor: "#2b5769",
  theme: "dark"
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
    { label: "User Trust", value: "100%" }
  ],
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

        <div className="relative w-full mt-16 pb-24">
          <AnimatePresence>
            {filtered.map((project, i) =>
            <StickyCard key={project.title} project={project} index={i} total={filtered.length} />
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 mb-10">
            
        </motion.div>
      </div>
    </section>);
}

function StickyCard({ project, index, total }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["16px", "24px"]);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 h-[100vh] w-full flex flex-col items-center justify-center py-6 md:py-12"
      style={{ zIndex: index }}>
      
      <motion.div
        style={{ scale, opacity, borderRadius }}
        className="w-full h-full max-h-[85vh] overflow-hidden relative bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row origin-top border border-gray-200 group">
        
        <Link to={project.link ? createPageUrl(project.link) : '#'} className="flex flex-col md:flex-row w-full h-full relative" style={{ backgroundColor: project.bgColor || '#fee2e2' }}>
          <div className="p-8 w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              style={{ clipPath: 'inset(2px 0 0 0 round 10px)' }}
              className={`group-hover:scale-105 transition-transform duration-700 ${
                (project.imageFit || '').includes('object-contain') && !(project.imageFit || '').includes('bg-')
                  ? 'max-w-full max-h-full w-auto h-auto object-contain'
                  : `w-full h-full ${project.imageFit || 'object-cover'}`
              }`} />
            
          </div>

          <div className="p-8 w-full md:w-1/2 h-1/2 md:h-full md:p-16 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
              
              {project.industry && <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${project.theme === 'dark' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>{project.industry}</span>}
            </div>
            <h3 className={`text-3xl md:text-5xl font-light mb-4 md:mb-6 ${project.titleColor || 'text-[#97dc90]'}`}>{project.title}</h3>
            <p className={`text-base md:text-lg mb-8 leading-relaxed max-w-xl ${project.theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{project.summary}</p>
            
            {project.stats && project.stats.length > 0 &&
            <div className={`grid grid-cols-2 gap-6 mt-auto pb-8 border-b mb-8 hidden md:grid bg-[#2b5769] text-white ${project.theme === 'dark' ? 'border-gray-600/50' : 'border-gray-100'}`}>
                {project.stats.map((stat) =>
              <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-light mb-1 text-white">{stat.value}</p>
                    <p className="text-sm font-medium text-white/80">{stat.label}</p>
                  </div>
              )}
              </div>
            }
            
            <div className={`mt-auto md:mt-0 inline-flex items-center justify-center md:justify-start gap-2 font-medium group-hover:text-[#97dc90] transition-colors w-full md:w-auto px-6 py-3 md:px-0 md:py-0 ${project.theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Read Case Study <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>);

}