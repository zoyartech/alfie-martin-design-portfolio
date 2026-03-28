import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const participants = [
{ id: 'P01', role: 'Regional Advisor', experience: '9 yrs', clients: 45, segment: 'Mid-market' },
{ id: 'P02', role: 'Senior Advisor', experience: '17 yrs', clients: 62, segment: 'Enterprise' },
{ id: 'P03', role: 'Senior Advisor', experience: '14 yrs', clients: 38, segment: 'Mid-market' },
{ id: 'P04', role: 'Advisor', experience: '4 yrs', clients: 22, segment: 'Emerging' },
{ id: 'P05', role: 'Lead Advisor', experience: '20 yrs', clients: 71, segment: 'Enterprise' },
{ id: 'P06', role: 'Advisor', experience: '6 yrs', clients: 30, segment: 'Mid-market' }];


const themes = [
{ label: 'Data fragmentation', count: 23, pct: 34 },
{ label: 'Compliance anxiety', count: 16, pct: 24 },
{ label: 'Meeting prep burden', count: 12, pct: 18 },
{ label: 'Client emotional state', count: 9, pct: 13 },
{ label: 'Mobile limitations', count: 8, pct: 11 }];


const findings = [
{
  id: 'F1',
  severity: 'Critical',
  title: 'Advisors lack a unified client view, forcing manual data aggregation before every meeting',
  participants: '6/6 participants',
  quote: '"I have four tabs open, two spreadsheets, and a sticky note. That\'s my dashboard right now."',
  attribution: '— P03, Senior Advisor, 14 yrs experience',
  recommendation: 'Consolidate business financials, personal wealth, compliance, and succession status into a single-screen overview with progressive disclosure for detail views.'
},
{
  id: 'F2',
  severity: 'Critical',
  title: 'Compliance flags are discovered reactively, often during or after client meetings',
  participants: '5/6 participants',
  quote: '"I found out his insurance had lapsed while I was sitting across from him at lunch. That\'s not a good moment to find out."',
  attribution: '— P01, Regional Advisor, 9 yrs experience',
  recommendation: 'Surface compliance and risk alerts with severity ranking in primary dashboard view. Implement proactive notification system with configurable thresholds.'
},
{
  id: 'F3',
  severity: 'High',
  title: 'Cash runway and succession readiness are top-of-mind but hardest to locate in current tools',
  participants: '5/6 participants',
  quote: '"If a client has two months of cash left and no succession plan, I need to know that before I walk in, not after I start digging."',
  attribution: '— P05, Lead Advisor, 20 yrs experience',
  recommendation: 'Elevate cash runway and succession status to top-level dashboard metrics with visual indicators for urgency thresholds.'
},
{
  id: 'F4',
  severity: 'High',
  title: 'Mobile use is limited to pre-meeting prep and post-meeting notes, not full portfolio review',
  participants: '4/6 participants',
  quote: '"On my phone I just need the cheat sheet. Who am I seeing, what\'s on fire, what did we say last time."',
  attribution: '— P06, Advisor, 6 yrs experience',
  recommendation: 'Design mobile experience around two modes: pre-meeting briefing (flags, performance snapshot, open items) and post-meeting capture (notes, task updates).'
}];


const nextSteps = [
{ status: 'In progress', label: 'Translate F1 and F2 into dashboard wireframes for Client Overview' },
{ status: 'Planned', label: 'Design mobile pre-meeting and post-meeting flows per F4' },
{ status: 'Planned', label: 'Validate milestone-based framing with 4-6 business owner participants' },
{ status: 'Backlog', label: 'Align notification thresholds with compliance team requirements' }];


const segmentColors = {
  'Mid-market': 'bg-gray-100 text-gray-700',
  'Enterprise': 'bg-blue-50 text-blue-700',
  'Emerging': 'bg-green-50 text-green-700'
};

const severityStyles = {
  Critical: { badge: 'bg-red-50 text-red-600 border border-red-200', bar: 'border-l-4 border-red-400' },
  High: { badge: 'bg-orange-50 text-orange-500 border border-orange-200', bar: 'border-l-4 border-orange-400' }
};

const statusStyles = {
  'In progress': 'bg-orange-50 text-orange-600 border border-orange-200',
  'Planned': 'bg-blue-50 text-blue-600 border border-blue-200',
  'Backlog': 'bg-gray-100 text-gray-500'
};

function FindingCard({ finding }) {
  const [open, setOpen] = useState(false);
  const styles = severityStyles[finding.severity];

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${styles.bar}`}>
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}>
        
        <div className="flex items-start gap-3">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded mt-0.5 shrink-0 ${styles.badge}`}>{finding.severity}</span>
          <div>
            <p className="font-semibold text-slate-900 text-sm leading-snug">{finding.id}: {finding.title}</p>
            <p className="text-xs text-gray-400 mt-1">{finding.participants}</p>
          </div>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0 mt-1" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 mt-1" />}
      </button>
      {open &&
      <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
          <blockquote className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-slate-600 italic leading-relaxed">
            {finding.quote}
            <footer className="mt-2 text-xs text-gray-400 not-italic">{finding.attribution}</footer>
          </blockquote>
          <div>
            <p className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-1">Recommendation</p>
            <p className="text-sm text-slate-600 leading-relaxed">{finding.recommendation}</p>
          </div>
        </div>
      }
    </div>);

}

export default function PrincipalFinancial() {
  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors uppercase font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">Case Study</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-slate-900">Designing Business Tools for Principal Financial</h1>
            <p className="text-gray-500 max-w-3xl text-lg leading-relaxed">
              Lead product designer on Principal's SBO Advisory platform — a suite of web and mobile tools helping financial advisors guide small business owners through retirement, succession, and wealth planning.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Product Designer</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">FOCUS</p><p className="text-gray-700">Enterprise UX, Advisory Tools</p></div>
            <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">CLIENT</p><p className="text-gray-700">Principal Financial</p></div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f5d23fb02_new-imac-24-inches-mockup-front-view-on-table-template-69c79593e80e6c1034ee2bb0-2x.png" alt="Principal Client Overview Dashboard" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 lg:px-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-slate-900">Principal: Client Overview Dashboard & SBO Advisory Suite</h2>
            <p className="text-slate-600 leading-relaxed">
              I was lead product designer on Principal's SBO Advisory platform, a suite of web and mobile tools helping financial advisors guide small business owners through retirement, succession, and wealth planning — and business owners tracking their own readiness.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900">The Solution</h3>
            <p className="text-slate-600 leading-relaxed">
              The core problem was that advisors had no single view of the full client picture. Business valuation, personal wealth, insurance gaps, compliance flags, succession status, and tax strategy were siloed across multiple tools — leaving advisors to manually aggregate data before every client meeting, often the biggest financial decision of their lives.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              The biggest design challenge was density. Advisors wanted everything visible at once but the data model per client was enormous. I landed on a card-based layout with a persistent detail nav as a compromise. The top row gives a fast situational read; advisors can drill into any domain without leaving the page.
            </p>
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Methodology */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase border-b-2 border-emerald-600 pb-2 mb-6 w-fit">Methodology</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Method</p>
                  <p className="font-semibold text-slate-900 text-sm">Contextual inquiry</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Participants</p>
                  <p className="font-semibold text-slate-900 text-sm">n = 6 advisors</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Duration</p>
                  <p className="font-semibold text-slate-900 text-sm">60 min sessions</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Setting</p>
                  <p className="font-semibold text-slate-900 text-sm">Remote observation</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Each session observed an advisor preparing for a real client meeting, including which tools they opened, what data they sought, how they flagged risks, and what they wished they had. This round supplemented prior McKinsey-led strategic research (n=200+ survey, stakeholder interviews) with hands-on behavioral data to inform interface design decisions.
              </p>
            </div>
          </div>

          {/* Participants */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase border-b-2 border-emerald-600 pb-2 mb-6 w-fit">Participants</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">ID</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Role</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Experience</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Active Clients</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest text-gray-400 uppercase">Segment</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((p, i) =>
                  <tr key={p.id} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                      <td className="px-5 py-4 font-bold text-slate-900">{p.id}</td>
                      <td className="px-5 py-4 text-slate-600">{p.role}</td>
                      <td className="px-5 py-4 text-slate-600">{p.experience}</td>
                      <td className="px-5 py-4 text-slate-600">{p.clients}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs px-2.5 py-1 rounded font-medium ${segmentColors[p.segment]}`}>{p.segment}</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Affinity Mapping */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase border-b-2 border-emerald-600 pb-2 mb-6 w-fit">Affinity Mapping — Theme Distribution</h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-xs text-gray-400 mb-5">68 observations coded across 5 themes from 6 sessions</p>
              <div className="space-y-4">
                {themes.map((t) =>
                <div key={t.label} className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-700 w-44 shrink-0">{t.label}</span>
                    <div className="flex-1 bg-gray-100 rounded h-7 relative overflow-hidden">
                      <div
                      className="h-full bg-emerald-600 rounded flex items-center justify-end pr-2"
                      style={{ width: `${t.count / 23 * 100}%` }}>
                      
                        <span className="text-xs font-bold text-white">{t.count}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 w-8 text-right">{t.pct}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase border-b-2 border-emerald-600 pb-2 mb-6 w-fit">Key Findings</h2>
            <div className="space-y-3">
              {findings.map((f) => <FindingCard key={f.id} finding={f} />)}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] text-emerald-700 uppercase border-b-2 border-emerald-600 pb-2 mb-6 w-fit">Next Steps</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {nextSteps.map((step, i) =>
              <div key={i} className={`flex items-center gap-4 px-6 py-4 ${i < nextSteps.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded shrink-0 ${statusStyles[step.status]}`}>{step.status}</span>
                  <p className="text-sm text-slate-600">{step.label}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-400">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}