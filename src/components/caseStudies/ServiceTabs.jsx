import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const tabs = [
  {
    label: '01',
    heading: 'Intent\nRouting',
    body: 'Every conversation begins with detecting what the user actually needs. The system classifies intent across hundreds of trained categories, then routes each one to the mechanism best suited to resolve it — deterministic flow, knowledge search, or generative response.',
    image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/174bc42c8_generated_image.png',
    alt: 'Abstract intent routing visualization with branching paths',
    href: '/ConversationCraft'
  },
  {
    label: '02',
    heading: 'Response\nGovernance',
    body: 'No response reaches a customer without passing through guardrails. Prompts are bounded, topics are constrained, and every generative path has a defined edge. Governance is authored alongside the prompt, not bolted on after.',
    image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3a84d0898_generated_image.png',
    alt: 'Abstract response governance visualization with guardrail layers',
    href: '/DesignSystemsAIGovernance'
  },
  {
    label: '03',
    heading: 'Human\nEscalation',
    body: 'When confidence drops or the request exceeds the bot\u2019s scope, the conversation routes to a human agent with full context. The handoff is seamless — transcript, attempted resolution, and escalation reason all travel with it.',
    image: 'https://media.base44.com/images/public/6974e154f708f4918a2b8d02/074136977_generated_image.png',
    alt: 'Abstract human escalation visualization with handoff transition',
    href: '/DesignStrategyAI'
  }
];

export default function ServiceTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 py-10 flex justify-center">
      <div className="w-full bg-slate-900 text-white" style={{ containerType: 'inline-size' }}>
        <div className="flex flex-col md:flex-row md:items-stretch gap-5 p-5">
          {/* Left column */}
          <div className="flex flex-col justify-between gap-10 flex-1 min-w-0 pb-2.5">
            <div className="flex flex-col gap-5">
              {/* Number tabs */}
              <div role="tablist" aria-label="Design principles" className="flex items-center gap-2.5">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active === i}
                    aria-controls="service-tabpanel"
                    aria-label={`${tab.label}: ${tab.heading.replace(/\n/g, ' ')}`}
                    onClick={() => setActive(i)}
                    className={`w-[46px] h-[46px] md:w-[64px] md:h-[64px] flex-shrink-0 flex items-center justify-center rounded-full border border-white font-wexley font-normal leading-none text-lg md:text-2xl tracking-tight cursor-pointer transition-colors duration-200 ${
                      active === i ? 'bg-white text-slate-900' : 'bg-transparent text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Heading */}
              <div className="grid">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={active}
                    initial={{ opacity: 0, x: -22 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -22 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="font-wexley font-medium text-white whitespace-pre-line break-words text-3xl md:text-5xl lg:text-6xl leading-tight m-0"
                  >
                    {tabs[active].heading}
                  </motion.h2>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom row */}
            <div
              id="service-tabpanel"
              role="tabpanel"
              className="flex flex-col lg:flex-row lg:items-start gap-5 pt-2.5 border-t border-white"
            >
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active}
                    initial={{ opacity: 0, x: -22 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -22 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.12 }}
                    className="font-wexley text-white text-sm md:text-base leading-relaxed m-0"
                  >
                    {tabs[active].body}
                  </motion.p>
                </AnimatePresence>
              </div>

              <Link
                to={tabs[active].href}
                className="inline-flex flex-shrink-0 items-center justify-center px-5 py-3 text-xs font-wexley uppercase tracking-wider border border-white text-white no-underline whitespace-nowrap transition-colors duration-200 hover:bg-white/10"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Right column — photo */}
          <div className="relative w-full md:w-[519px] flex-shrink-0 aspect-[519/520] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={tabs[active].image}
                alt={tabs[active].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}