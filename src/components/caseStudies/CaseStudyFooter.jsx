import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Share2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Creating Trust With AI",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/cc9a88d70_Screenshot2026-04-28at23312AM.png",
    link: "ConversationCraft",
    category: "AI Design"
  },
  {
    title: "Voice User Interface in AI-Med Tech",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d1e0590e7_Screenshot2026-04-27at75059PM.png",
    link: "VoiceUserInterface",
    category: "Product Design"
  },
  {
    title: "Search Agent Optimization",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/a61e9832d_Screenshot2026-04-27at83736PM.png",
    link: "SAO",
    category: "Product Design"
  },
  {
    title: "Confidence Scoring in AI outputs",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/42aefcea5_handy.png",
    link: "DesignStrategyAI",
    category: "AI Design"
  },
  {
    title: "Multimodal Design for AI systems In mental health",
    category: "AI Design",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ec1acd843_ai-medtech.png",
    link: "b6",
  },
  {
    title: "Designing trust into automated climate risk",
    category: "Product Design",
    image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ad407e43e_Screenshot2026-03-19at120315AM.png",
    link: "ArbolCaseStudy"
  }
];

export default function CaseStudyFooter({ currentProjectLink }) {
  const relatedProjects = projects
    .filter(p => p.link !== currentProjectLink)
    .slice(0, 3);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="bg-white border-t border-slate-100 py-20 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-serif text-slate-900 mb-2">Keep Exploring</h2>
            <p className="text-slate-500 font-sans">Other case studies and projects</p>
          </div>
          <button 
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors text-sm font-medium font-sans w-full md:w-auto shadow-sm"
          >
            <Share2 className="w-4 h-4" /> Share Case Study
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((project, i) => (
            <motion.div 
              key={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={createPageUrl(project.link)} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-slate-50 rounded-xl mb-6 shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-sans">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors font-serif leading-snug">
                  {project.title}
                </h3>
                <div className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-sans gap-2">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}