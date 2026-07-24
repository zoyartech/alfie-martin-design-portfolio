import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rows = [
{
  title: 'CONVERSATIONAL FLOWS',
  image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f2c06a35f_chatchat.png',
  alt: 'Interconnected dialogue nodes and flowchart paths',
  body: 'The rule-based, deterministic layer. Triggered by an intent, the virtual agent follows a scripted branch — you author exactly how the bot responds. No ambiguity, no improvisation. Every reply is mapped, reviewed, and version-controlled before it reaches a customer.'
},
{
  title: 'AI SEARCH & RAG',
  image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b149519bc_generated_image.png',
  alt: 'Document fragments being searched and synthesized',
  body: 'Content comes from knowledge base articles; phrasing comes from the LLM summarizing them. You author what lives in the KB, not the reply itself. This separates truth (curated articles) from voice (model-generated prose), keeping answers grounded and editable.'
},
{
  title: 'GENERATIVE ACTIONS',
  image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d5ba21d31_Screenshot2026-07-23at92000PM.png',
  alt: '3D isometric data grid with floating circles and hexagonal border',
  body: 'Generative responses bounded by prompts and guardrails. The model composes within constraints — tone, length, approved topics — never freewheeling. Guardrails are authored alongside the prompt, so every generative path has a defined edge it cannot cross.'
},
{
  title: 'HUMAN ESCALATION',
  image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c5c6886dc_generated_image.png',
  alt: 'Geometric handoff between machine and human',
  body: 'When confidence drops or intent is ambiguous, the conversation routes to a human agent with full context attached. The handoff is seamless — the rep sees the transcript, the bot\u2019s attempted resolution, and the reason for escalation. Human oversight is never an afterthought; it is the default escape hatch.'
}];


export default function OrchestrationAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-[585px] mx-auto border border-slate-900 bg-white p-2.5">
      {rows.map((row, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={index > 0 ? '-mt-px' : ''}>
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => handleClick(index)}
                aria-expanded={isOpen}
                className={`flex items-center justify-between gap-4 w-full box-border border border-slate-900 px-2.5 py-2.5 text-left cursor-pointer transition-colors duration-200 bg-[#a3e0ff] ${
                isOpen ? "" : 'bg-white'}`
                }>
                
                <span className="font-wexley leading-none font-normal text-slate-900 max-w-full break-words text-base md:text-base">
                  {row.title}
                </span>
                <span className="relative flex-shrink-0 w-5 h-5 md:w-[30px] md:h-[30px]">
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-900 -translate-y-1/2 rounded-sm" />
                  <motion.span
                    className="absolute top-0 left-1/2 w-[2px] h-full bg-slate-900 rounded-sm"
                    style={{ originX: 0.5 }}
                    animate={{
                      scaleY: isOpen ? 0 : 1,
                      scaleX: isOpen ? 1.5 : 1,
                      translateX: '-50%'
                    }}
                    transition={{
                      duration: isOpen ? 0.3 : 0.45,
                      ease: isOpen ? [0.4, 0, 0.2, 1] : [0.34, 1.56, 0.64, 1]
                    }} />
                  
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
                role="region">
                
                  <div className="flex flex-wrap items-start gap-2.5 pt-2.5 pb-2.5">
                    <img src={row.image}

                  alt={row.alt}
                  loading="lazy"
                  className="block flex-shrink-0 w-full max-w-[225px] aspect-square object-cover" />
                  
                    <div className="flex-1 min-w-[12rem] overflow-hidden">
                      <p className="m-0 text-sm leading-5 break-words text-[#000000]">
                        {row.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>);

      })}
    </div>);

}