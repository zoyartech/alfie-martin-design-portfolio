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
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c676ec4e0_Screenshot2026-05-01at75025AM.png",
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
  link: "b6"
},
{
  title: "Designing trust into automated climate risk",
  category: "Product Design",
  image: "https://media.base44.com/images/public/6974e154f708f4918a2b8d02/ad407e43e_Screenshot2026-03-19at120315AM.png",
  link: "ArbolCaseStudy"
}];


export default function CaseStudyFooter({ currentProjectLink }) {
  const relatedProjects = projects.
  filter((p) => p.link !== currentProjectLink).
  slice(0, 3);

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
      













































      
    </div>);

}