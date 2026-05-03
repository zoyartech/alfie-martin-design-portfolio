import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
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
  { label: "Engagement", value: "85%" }],

  tags: ["AI in Healthcare", "Product Design", "Mental Health"],
  bgColor: "#c5dfb1",
  textColor: "black"
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
  { label: "User Trust", value: "100%" }],

  tags: ["AI", "Smart Contracts", "Product Design"],
  textColor: "black",
  bgColor: "#a0c283"
},
{
  title: "Design System Playground",
  category: "Design Systems",
  industry: "Design",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f40868490_deeesignsystem.png",
  imageFit: "object-cover",
  year: "2024",
  link: "DesignSystemPlayground",
  summary: "An interactive playground for exploring and testing design system components.",
  stats: [],
  tags: ["Design Systems", "UI Components"],
  bgColor: "black",
  textColor: "white"
},
{
  title: "FluidUI",
  category: "AI Design",
  industry: "Technology",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d8842d2d7_Screenshot2026-05-02at105615PM.png",
  imageFit: "object-contain bg-[#f6f6f6]",
  year: "2024",
  link: "FluidUI",
  summary: "Interactive documentation component for conversational Voice User Interface (VUI) design, illustrating multimodal system architectures.",
  stats: [],
  tags: ["VUI", "Architecture", "Product Design"],
  bgColor: "#f6f6f6",
  textColor: "black"
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
                    <Link to={createPageUrl("UXResearchStudies")} className="inline-flex items-center px-5 py-2.5 rounded-[5px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-white hover:shadow-md text-sm font-medium text-black transition-all">
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
                    <Link to={createPageUrl("SideQuests")} className="inline-flex items-center px-5 py-2.5 rounded-[5px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-white hover:shadow-md text-sm font-medium text-black transition-all">
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
                    <Link to={createPageUrl("Writing")} className="inline-flex items-center px-5 py-2.5 rounded-[5px] border-[0.5px] border-gray-600 bg-[#d0fbff] hover:bg-white hover:shadow-md text-sm font-medium text-black transition-all">
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
        className="w-full h-full max-h-[85vh] overflow-hidden relative bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row origin-top border border-slate-900 group">
        
        <Link to={project.link ? createPageUrl(project.link) : '#'} className="flex flex-col md:flex-row w-full h-full relative ring-1 ring-inset ring-slate-900/10" style={{ backgroundColor: project.bgColor || '#fee2e2' }}>
          <div className="p-8 w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center">
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-900/10 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className={`group-hover:scale-105 transition-transform duration-700 ${
                (project.imageFit || '').includes('object-contain') && !(project.imageFit || '').includes('bg-') ?
                'max-w-full max-h-full w-auto h-auto object-contain' :
                `w-full h-full ${project.imageFit || 'object-cover'}`}`
                } />
            </div>
          </div>

          <div className="p-8 w-full md:w-1/2 h-1/2 md:h-full md:p-16 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-8">
              
              {project.industry && <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${project.theme === 'dark' || project.textColor === 'white' ? 'bg-white/20 text-white' : project.textColor === 'black' ? 'bg-black/10 text-black' : 'bg-gray-100 text-gray-600'}`}>{project.industry}</span>}
            </div>
            <h3 className={`mb-4 text-3xl font-light md:text-5xl md:mb-6 ${project.textColor === 'black' ? 'text-black' : project.theme === 'dark' || project.textColor === 'white' ? 'text-white' : 'text-slate-950'}`}>{project.title}</h3>
            <p className={`text-base md:text-lg mb-8 leading-relaxed max-w-xl ${project.theme === 'dark' || project.textColor === 'white' ? 'text-gray-200' : project.textColor === 'black' ? 'text-black' : 'text-gray-600'}`}>{project.summary}</p>
            
            {project.stats && project.stats.length > 0 &&
            <div className={`mt-auto mb-8 pb-8 grid grid-cols-2 gap-6 border-b hidden md:grid ${project.theme === 'dark' || project.textColor === 'white' ? 'text-white border-white/20' : project.textColor === 'black' ? 'text-black border-black/20' : 'text-white border-white/20'}`}>
                {project.stats.map((stat) =>
              <div key={stat.label}>
                    <p className={`mb-1 text-2xl font-light md:text-3xl ${project.theme === 'dark' || project.textColor === 'white' ? 'text-white' : project.textColor === 'black' ? 'text-black' : 'text-white'}`}>{stat.value}</p>
                    <p className={`text-sm font-medium ${project.theme === 'dark' || project.textColor === 'white' ? 'text-white/80' : project.textColor === 'black' ? 'text-black/80' : 'text-white/80'}`}>{stat.label}</p>
                  </div>
              )}
              </div>
            }
            
            <div className={`mt-auto md:mt-0 inline-flex items-center justify-center md:justify-start gap-2 font-medium transition-colors w-full md:w-auto px-6 py-3 md:px-0 md:py-0 ${project.theme === 'dark' || project.textColor === 'white' ? 'text-white group-hover:text-white/70' : project.textColor === 'black' ? 'text-black group-hover:text-black/70' : 'text-black group-hover:text-white'}`}>
              Read Case Study <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>);

}