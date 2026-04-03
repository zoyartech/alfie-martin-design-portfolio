import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="mb-16 md:mb-24"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">{title}</h2>
    <div className="prose prose-slate max-w-none text-slate-600 prose-headings:text-slate-900 prose-a:text-blue-600">
      {children}
    </div>
  </motion.div>
);

export default function CodeFlow() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="pt-32 pb-20 px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("Home")} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-[0.2em] font-bold text-slate-500 uppercase bg-slate-200 px-3 py-1 rounded-full">PRD</span>
              <span className="text-xs tracking-[0.2em] font-bold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">Microsoft Confidential</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-900 tracking-tight">
              CodeFlow 3.0
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Microsoft's internal code review platform, purpose-built to support the collaborative workflows of over 60,000 engineers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        <Section title="1. Executive Summary & Vision">
          <p className="text-lg leading-relaxed mb-6">
            CodeFlow has served as the backbone of Microsoft's software quality process since its initial deployment, with 89% adoption among developers. This ground-up modernization transitions the platform from a native desktop client to a cross-platform web application built on the Fluent 2 Design System.
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-blue-900 italic font-light text-xl">
            "CodeFlow 3.0 will be the fastest, most ergonomic code review tool at Microsoft—a platform that reduces review cycle time by 30% while preserving precision commenting and knowledge-sharing workflows."
          </div>
        </Section>

        <Section title="2. Key Objectives">
          <ul className="space-y-4">
            {[
              "Migrate from native desktop client to a Fluent 2 web application accessible via browser, Azure DevOps, and Visual Studio.",
              "Reduce average code review turnaround time from 24 hours to under 16 hours via AI-assisted summaries and intelligent routing.",
              "Maintain character-level commenting precision, region spanning, and multi-iteration comparison capabilities.",
              "Introduce Copilot-powered review assistance including code summarization, risk flagging, and suggested comments.",
              "Achieve WCAG 2.1 AA accessibility compliance across all core workflows."
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-lg text-slate-700">{obj}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="3. Target Users and Personas">
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-none border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Feature Developer</h3>
              <p className="text-slate-600">The most common user. They need to quickly prepare changesets, select reviewers, and track sign-off status with minimal context-switching.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-none border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The Senior Reviewer</h3>
              <p className="text-slate-600">Handling 5–15 reviews per day, they need efficient triage capabilities and rich commenting tools to provide precise, contextual feedback without burnout.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-none border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">The New Hire</h3>
              <p className="text-slate-600">Junior developers who use code review as a learning mechanism to build codebase familiarity and coding standards knowledge.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-none border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Engineering Managers & Security</h3>
              <p className="text-slate-600">Secondary personas needing visibility into review health metrics, team velocity, compliance, and security audit trails.</p>
            </div>
          </div>
        </Section>

        <Section title="4. Platform Architecture & Design">
          <p className="text-lg leading-relaxed mb-6">
            CodeFlow 3.0 is a web-first application built entirely on the <strong>Fluent 2 Design System</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700 mb-8">
            <li><strong>Presentation Layer:</strong> React-based SPA built on Fluent UI React v9.</li>
            <li><strong>Service Layer:</strong> Azure microservices for diff computation, storage, and Copilot integration.</li>
            <li><strong>Data Layer:</strong> Azure SQL (metadata), Blob Storage (diffs), Cosmos DB (real-time collaboration).</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-slate-900 mt-8 mb-4">Fluent Application</h4>
          <p className="text-lg text-slate-700 mb-4">
            The UI leverages Cascadia Code for diff views and Segoe UI Variable for all chrome and labels. The color system extends Fluent’s semantic tokens with domain-specific tones (e.g., green for additions, red for deletions, amber for modified regions). 
          </p>
        </Section>
      </div>

      <div className="w-full h-screen border-y border-slate-200 bg-slate-50 mb-16 md:mb-24">
        <iframe
          src="https://wand-scale-38470345.figma.site"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Figma Prototype"
          allowFullScreen
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-16 md:pb-24">
        <Section title="5. Core Functional Requirements">
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Review Creation & Submission</h4>
              <p className="text-slate-600">Create reviews from any branch. The system suggests reviewers based on CODEOWNERS and Graph availability. Copilot auto-generates changeset summaries.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Diff Viewing</h4>
              <p className="text-slate-600">Side-by-side and unified views with syntax highlighting for 50+ languages. Features inline minimaps and robust keyboard navigation.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Commenting System</h4>
              <p className="text-slate-600">Differentiated by character-level precision and region spanning across multiple lines. Comments persist across iterations anchoring to diff engine line-mapping.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Copilot Integration</h4>
              <p className="text-slate-600">Includes automatic changeset summarization, risk scoring (Low, Medium, High) based on blast radius, and suggested review comments to catch common errors.</p>
            </div>
          </div>
        </Section>

        <Section title="6. Analytics & Metrics">
          <p className="text-lg leading-relaxed mb-6">
            A built-in analytics layer provides visibility into engineering process health, including review turnaround time, reviewer load balance, comment resolution rates, and Copilot adoption metrics.
          </p>
        </Section>

      </div>
    </div>
  );
}