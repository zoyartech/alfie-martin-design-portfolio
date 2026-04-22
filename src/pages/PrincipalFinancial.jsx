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
  'Mid-market': 'text-black',
  'Enterprise': 'text-black',
  'Emerging': 'text-black'
};

const severityStyles = {
  Critical: { badge: 'text-black border', bar: 'border-l-4', barColor: '#08aedb' },
  High: { badge: 'text-black border', bar: 'border-l-4', barColor: '#014388' }
};

const statusStyles = {
  'In progress': 'text-black border',
  'Planned': 'text-black border',
  'Backlog': 'text-black'
};

function FindingCard({ finding }) {
  const [open, setOpen] = useState(false);
  const styles = severityStyles[finding.severity];

  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderLeftWidth: '4px', borderLeftColor: styles.barColor, borderColor: '#a7ecff' }}>
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-colors"
        style={{ backgroundColor: open ? '#a7ecff22' : 'white' }}
        onClick={() => setOpen(!open)}>
        <div className="flex items-start gap-3">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded mt-0.5 shrink-0 border"
            style={{ backgroundColor: finding.severity === 'Critical' ? '#a7ecff' : '#e0f4ff', borderColor: '#08aedb', color: '#002853' }}>
            {finding.severity}
          </span>
          <div>
            <p className="text-black text-base font-semibold leading-snug">{finding.id}: {finding.title}</p>
            <p className="text-xs mt-1" style={{ color: '#014388' }}>{finding.participants}</p>
          </div>
        </div>
        {open ?
        <ChevronUp className="w-4 h-4 shrink-0 mt-1" style={{ color: '#08aedb' }} /> :
        <ChevronDown className="w-4 h-4 shrink-0 mt-1" style={{ color: '#08aedb' }} />}
      </button>
      {open &&
      <div className="bg-[#adf7ff] pt-4 pb-6 px-6 space-y-4" style={{ borderTop: '1px solid #a7ecff', backgroundColor: '#f0fbff' }}>
          <blockquote className="rounded-lg p-4 text-sm text-black italic leading-relaxed" style={{ backgroundColor: 'white', border: '1px solid #a7ecff' }}>
            {finding.quote}
            <footer className="mt-2 text-xs not-italic" style={{ color: '#014388' }}>{finding.attribution}</footer>
          </blockquote>
          <div>
            <p className="mb-1 text-sm font-bold uppercase tracking-widest" style={{ color: '#014388' }}>Recommendation</p>
            <p className="text-sm text-black leading-relaxed">{finding.recommendation}</p>
          </div>
        </div>
      }
    </div>);

}

export default function PrincipalFinancial() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0fbff' }}>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12" style={{ backgroundColor: '#002853', borderBottom: '1px solid #014388' }}>
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold mb-8 transition-colors" style={{ color: '#a7ecff' }}>
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs tracking-[0.3em] mb-4 uppercase" style={{ color: '#08aedb' }}>Case Study</p>
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Designing Business Tools for Principal Financial</h1>
            <p className="max-w-3xl text-lg leading-relaxed" style={{ color: '#a7ecff' }}>
              Lead product designer on Principal's SBO Advisory platform — a suite of web and mobile tools helping financial advisors guide small business owners through retirement, succession, and wealth planning.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12" style={{ borderTop: '1px solid #014388' }}>
            <div>
              <p className="text-xs tracking-[0.2em] mb-2" style={{ color: '#08aedb' }}>ROLE</p>
              <p className="text-white">Product Designer</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] mb-2" style={{ color: '#08aedb' }}>FOCUS</p>
              <p className="text-white">Enterprise UX, Advisory Tools</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] mb-2" style={{ color: '#08aedb' }}>CLIENT</p>
              <p className="text-white">Principal Financial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Figma Prototype Embed */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #a7ecff' }}>
        <div className="w-full">
          <iframe
            src="https://cough-point-09643712.figma.site"
            className="w-full"
            style={{ height: '100vh', border: 'none' }}
            title="Principal Financial Figma Prototype"
            allowFullScreen />
          
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 lg:px-12" style={{ backgroundColor: 'white', borderBottom: '1px solid #a7ecff' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-black">Principal: Client Overview Dashboard & SBO Advisory Suite</h2>
            <p className="leading-relaxed text-black">
              I was lead product designer on Principal's SBO Advisory platform, a suite of web and mobile tools helping financial advisors guide small business owners through retirement, succession, and wealth planning — and business owners tracking their own readiness.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-black">The Solution</h3>
            <p className="leading-relaxed text-black">
              The core problem was that advisors had no single view of the full client picture. Business valuation, personal wealth, insurance gaps, compliance flags, succession status, and tax strategy were siloed across multiple tools — leaving advisors to manually aggregate data before every client meeting, often the biggest financial decision of their lives.
            </p>
            <p className="leading-relaxed mt-3 text-black">
              The biggest design challenge was density. Advisors wanted everything visible at once but the data model per client was enormous. I landed on a card-based layout with a persistent detail nav as a compromise. The top row gives a fast situational read; advisors can drill into any domain without leaving the page.
            </p>
          </div>
        </div>
      </section>

      {/* Mockup Image */}
      <section className="py-12 px-6 lg:px-12" style={{ backgroundColor: '#f0fbff' }}>
        <div className="max-w-5xl mx-auto">
          <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b02482119_Screenshot2026-03-28at43334AM.png" alt="Principal Client Overview Dashboard on MacBook" className="w-full h-auto rounded-2xl" />
        </div>
      </section>

      {/* Research Content */}
      <section className="py-12 px-6 lg:px-12" style={{ backgroundColor: '#f0fbff' }}>
        <div className="max-w-4xl mx-auto space-y-16">

          <div>
            <h2 className="text-black text-3xl font-semibold md:text-4xl">UX Research</h2>
          </div>

          {/* Methodology */}
          <div>
            <h2 className="mb-6 pb-2 text-lg font-black uppercase tracking-[0.25em] w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Methodology</h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'white', border: '1px solid #a7ecff' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 pb-6" style={{ borderBottom: '1px solid #a7ecff' }}>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#08aedb' }}>Method</p>
                  <p className="font-semibold text-black text-sm">Contextual inquiry</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#08aedb' }}>Participants</p>
                  <p className="font-semibold text-black text-sm">n = 6 advisors</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#08aedb' }}>Duration</p>
                  <p className="font-semibold text-black text-sm">60 min sessions</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: '#08aedb' }}>Setting</p>
                  <p className="font-semibold text-black text-sm">Remote observation</p>
                </div>
              </div>
              <p className="text-sm text-black leading-relaxed">
                Each session observed an advisor preparing for a real client meeting, including which tools they opened, what data they sought, how they flagged risks, and what they wished they had. This round supplemented prior McKinsey-led strategic research (n=200+ survey, stakeholder interviews) with hands-on behavioral data to inform interface design decisions.
              </p>
            </div>
          </div>

          {/* Participants */}
          <div>
            <h2 className="mb-6 pb-2 text-xl font-bold uppercase tracking-[0.25em] w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Participants</h2>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #a7ecff', backgroundColor: 'white' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid #a7ecff' }}>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#08aedb' }}>ID</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#08aedb' }}>Role</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#08aedb' }}>Experience</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#08aedb' }}>Active Clients</th>
                    <th className="text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase" style={{ color: '#08aedb' }}>Segment</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((p, i) =>
                  <tr key={p.id} style={{ borderBottom: '1px solid #a7ecff33', backgroundColor: i % 2 === 0 ? 'white' : '#f0fbff' }}>
                      <td className="px-5 py-4 font-bold text-black">{p.id}</td>
                      <td className="px-5 py-4 text-black">{p.role}</td>
                      <td className="px-5 py-4 text-black">{p.experience}</td>
                      <td className="px-5 py-4 text-black">{p.clients}</td>
                      <td className="px-5 py-4">
                        <span className="text-xs px-2.5 py-1 rounded font-medium text-black" style={{
                        backgroundColor: p.segment === 'Enterprise' ? '#a7ecff' : p.segment === 'Mid-market' ? '#e0f4ff' : '#cdf5ff',
                        border: '1px solid #08aedb'
                      }}>{p.segment}</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Affinity Mapping */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase pb-2 mb-6 w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Affinity Mapping — Theme Distribution</h2>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'white', border: '1px solid #a7ecff' }}>
              <p className="text-xs mb-5" style={{ color: '#014388' }}>68 observations coded across 5 themes from 6 sessions</p>
              <div className="space-y-4">
                {themes.map((t) =>
                <div key={t.label} className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-black w-44 shrink-0">{t.label}</span>
                    <div className="flex-1 rounded h-7 relative overflow-hidden" style={{ backgroundColor: '#e0f4ff' }}>
                      <div
                      className="h-full rounded flex items-center justify-end pr-2"
                      style={{ width: `${t.count / 23 * 100}%`, backgroundColor: '#014388' }}>
                        <span className="text-xs font-bold text-white">{t.count}</span>
                      </div>
                    </div>
                    <span className="text-sm w-8 text-right text-black">{t.pct}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h2 className="mb-6 pb-2 text-lg font-bold uppercase tracking-[0.25em] w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Key Findings</h2>
            <div className="space-y-3">
              {findings.map((f) => <FindingCard key={f.id} finding={f} />)}
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase pb-2 mb-6 w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Next Steps</h2>
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #a7ecff', backgroundColor: 'white' }}>
              {nextSteps.map((step, i) =>
              <div key={i} className="flex items-center gap-4 px-6 py-4" style={{ borderBottom: i < nextSteps.length - 1 ? '1px solid #a7ecff' : 'none' }}>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded shrink-0 text-black" style={{
                  backgroundColor: step.status === 'In progress' ? '#a7ecff' : step.status === 'Planned' ? '#e0f4ff' : '#f0fbff',
                  border: `1px solid ${step.status === 'In progress' ? '#08aedb' : step.status === 'Planned' ? '#014388' : '#a7ecff'}`
                }}>{step.status}</span>
                  <p className="text-sm text-black">{step.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Design System Embed */}
          <div className="w-full mt-12">
            <h2 className="mb-6 pb-2 text-lg font-bold uppercase tracking-[0.25em] w-fit" style={{ color: '#014388', borderBottom: '2px solid #08aedb' }}>Preliminary Design System</h2>
            <div className="rounded-xl overflow-hidden shadow-sm" style={{ border: '1px solid #a7ecff', backgroundColor: 'white' }}>
              <iframe src="https://claude.site/public/artifacts/b8b7d1c4-b50e-474a-9a2c-4f102be723d0/embed" title="design-system.html" width="100%" height="600" frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 mt-16" style={{ borderTop: '1px solid #014388', backgroundColor: '#002853' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs" style={{ color: '#a7ecff' }}>© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}