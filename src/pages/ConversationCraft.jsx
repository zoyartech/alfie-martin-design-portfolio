import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import ShowcaseConversation from "@/components/design/ShowcaseConversation";
import { ProbabilityBar, HedgedTooltip, SourceCitationChip, LowConfidenceBanner, NumericalScorePopover } from "@/components/design/ConfidenceLibrary";
import VUIPrototype from "@/components/VUIPrototype";

export default function ConversationCraft({ isEmbedded = false }) {
  return (
    <div className={`${isEmbedded ? 'pb-12 bg-white' : 'min-h-screen bg-[#faf9f6] pb-24'} text-slate-900 font-sans`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .font-mono {
          font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
      `}</style>

      {/* Header */}
      <div className={`${isEmbedded ? 'pt-12 pb-12' : 'pt-32 pb-16'} px-6 lg:px-12 bg-white border-b border-slate-100`}>
        <div className="max-w-5xl mx-auto">
          {!isEmbedded && (
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-slate-400 mb-6 font-sans uppercase">Interaction Design</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6 max-w-4xl font-serif text-slate-900">
              Designing Trust into Conversational Systems
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              A demonstration of editorial UI patterns for AI agents. Rather than hiding uncertainty, this system exposes model confidence to build trust during clinical triage, utilizing restrained typography and thoughtful pacing.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-4">The Challenge</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Default chat UIs map poorly to high-stakes domains. When an AI provides medical context, users need to know exactly how confident the system is, and when it is gracefully escalating to a human.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-4">Design Decisions</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Asymmetric Framing:</strong> User messages use structured, solid bubbles. AI responses are borderless, editorial text blocks to feel more like a document than a text message.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Confidence Metadata:</strong> Instead of generic avatars, the AI's identity is defined by its metadata (latency, model, confidence).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <span><strong>Intentional Hedging:</strong> When confidence drops below 70%, the UI signals caution, and the dialogue automatically offers a human escalation path.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <ShowcaseConversation />
          </div>
        </div>

        {/* Confidence Library Section */}
        <div className="max-w-5xl mx-auto mt-32 pt-20 border-t border-slate-100">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4 font-serif text-slate-900">Confidence Indicator Patterns</h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Different contexts require different expressions of uncertainty. These patterns treat confidence as a spectrum, utilizing typography, layout, and interaction to guide user trust. Hover over any pattern to see the design rationale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase">1. Probability Bar</h4>
              <div className="flex flex-col sm:flex-row sm:gap-12">
                <div className="flex-1"><ProbabilityBar value={0.82} label="Diagnosis match" /></div>
                <div className="flex-1"><ProbabilityBar value={0.95} label="Treatment efficacy" /></div>
              </div>
              <ProbabilityBar value={0.45} label="Symptom correlation" />
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase">2. Hedged Language</h4>
              <HedgedTooltip />
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase">3. Source Citation</h4>
              <SourceCitationChip />
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase">4. Decomposition Score</h4>
              <div className="bg-white p-6 border border-slate-100 rounded-sm">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-slate-700 max-w-[200px]">
                    Risk assessment complete. Model certainty is moderate.
                  </p>
                  <NumericalScorePopover />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-slate-900 uppercase">5. Low Confidence Banner</h4>
              <LowConfidenceBanner />
            </div>
          </div>
        </div>

        {/* VUI Mobile Simulation Section */}
        <div className="max-w-5xl mx-auto mt-32 pt-20 border-t border-slate-100">
          <div className="mb-16">
            <h2 className="text-3xl font-light mb-4 font-serif text-slate-900">VUI Mobile Simulation</h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Interactive voice user interface dashboard simulating command processing, status tracking, and user feedback in a clinical setting.
            </p>
          </div>
          <VUIPrototype />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-slate-600 leading-relaxed text-sm mt-32 pt-20 border-t border-slate-100">
          <h2 className="text-3xl font-light font-serif text-slate-900 pb-2">Concluding Thoughts</h2>
          <p>
            The "only when communicates something useful" clause on confidence badges is doing a lot of work — it stops the model from slapping a percentage on every message, which is what most generic chatbot UI demos look like. You can swap in your own thresholds if you have a POV.
          </p>
          <p>
            The conversation content section is the most-skipped part of UI prompts and the most important one for a portfolio piece. If you don't constrain the dialogue, you get "Hi! How can I help you today?" "I'd love to learn Python!" and the whole artifact reads as filler. Specifying the kinds of moments to show forces the model to demonstrate actual conversational design thinking.
          </p>
          <p>
            The "avoid" list in the aesthetic section is more powerful than the positive direction. AI tools have strong default aesthetics (purple gradients, sparkle icons, drop-shadowed bubbles) and naming them explicitly is the only reliable way to suppress them.
          </p>
        </div>
      </div>
    </div>
  );
}