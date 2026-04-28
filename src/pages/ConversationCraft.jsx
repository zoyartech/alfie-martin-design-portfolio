import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import ShowcaseConversation from "@/components/design/ShowcaseConversation";

export default function ConversationCraft() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans pb-24">
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
      <div className="pt-32 pb-16 px-6 lg:px-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
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
      </div>
    </div>
  );
}