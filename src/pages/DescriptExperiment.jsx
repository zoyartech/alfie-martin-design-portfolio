import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Beaker, FileText, BarChart, Target, Zap, Shield, Rocket, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const Section = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm"
  >
    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
    </div>
    <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
      {children}
    </div>
  </motion.div>
);

export default function DescriptExperiment() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-32">
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50 hidden lg:block">
        <Link to={createPageUrl("Writing")} className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all uppercase font-bold bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-200">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Content
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-32 md:pt-40 px-6">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">Growth Experiment Proposal</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-slate-900">
            Reverse Trial with<br/>
            <span className="text-indigo-600">AI-Guided First Edit</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl">
            A data-backed activation and conversion experiment for Descript.
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm md:text-base">
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 w-1/3 bg-slate-50">Prepared by</th>
                  <td className="p-4">Ally Martin · Wexley House</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Date</th>
                  <td className="p-4">April 2026</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Experiment type</th>
                  <td className="p-4">A/B test, randomized at signup</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Funnel target</th>
                  <td className="p-4 font-medium text-indigo-600">Activation → Free-to-Paid Conversion</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Duration</th>
                  <td className="p-4">8 weeks (2 ramp + 6 measurement)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Required sample</th>
                  <td className="p-4">10,000 new signups (5,000 per variant)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Primary metric</th>
                  <td className="p-4">Free-to-paid conversion rate (30-day)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <th className="p-4 font-semibold text-slate-900 bg-slate-50">Expected lift</th>
                  <td className="p-4 font-bold text-emerald-600">+15–25% relative conversion improvement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 1. Problem Definition */}
        <Section title="1. Problem Definition" icon={FileText}>
          <h3 className="text-xl font-bold text-slate-900 mt-2">1.1 The Activation Gap</h3>
          <p>
            Descript's core value proposition is that editing video is as easy as editing a document. 
            You upload media, it gets transcribed, and then you edit the video by editing the text. 
            This is a genuinely novel paradigm. But that novelty comes with a cost: the product's 
            magic moment is structurally delayed behind multiple prerequisite actions.
          </p>
          <ul className="list-decimal pl-6 space-y-2 text-slate-600">
            <li><strong>Create an account</strong> (email, OAuth, or SSO)</li>
            <li><strong>Navigate the editor interface</strong> (unfamiliar layout for non-editors)</li>
            <li><strong>Upload or record media</strong> (requires having content ready)</li>
            <li><strong>Wait for transcription</strong> (creates cognitive interruption)</li>
            <li><strong>Discover text-based editing</strong> (must realize deleting text deletes video)</li>
            <li><strong>Make a meaningful edit</strong> (cut filler words, apply Studio Sound)</li>
            <li><strong>Export or publish</strong> (confirms value was created)</li>
          </ul>
          <p>
            Industry data consistently shows that each additional step in an onboarding flow reduces 
            completion rates by 15–25%. A seven-step flow with an average 20% drop-off per step would 
            yield a theoretical completion rate of roughly 21%.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">1.2 The Free Tier Constraint</h3>
          <p>
            Descript's free plan offers 1 media hour per month and 100 AI credits. This creates a paradox: 
            the free tier is <strong>too limited to form habits, but too generous to create urgency</strong>. 
            Users leave with a mental model of Descript as "another video editor" rather than "an AI co-editor 
            that does the hard parts for me."
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">1.3 Quantifying the Opportunity</h3>
          <p>
            Descript's estimated free-to-paid conversion rate sits at 12–15%. With ~1.5 million active users, 
            even a 3-percentage-point improvement in conversion represents significant incremental ARR ($10.8M–$18.9M).
          </p>
        </Section>

        {/* 2. Data Foundation */}
        <Section title="2. Data Foundation for the Hypothesis" icon={BarChart}>
          <p>
            This experiment is not based on intuition. Every element of the hypothesis is grounded 
            in published research, industry benchmarks, and Descript-specific signals.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6">Reverse Trial Conversion Data</h3>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>OpenView Benchmark:</strong> Reverse trials achieve an average conversion rate of 14–21%, compared to 3–15% for freemium.</li>
            <li><strong>Elena Verna (Dropbox):</strong> Reports reverse trial strategies increase freemium-to-premium conversion by 10–40%.</li>
            <li><strong>Recurly Trial-Length Data:</strong> Trials of 7 days or fewer yield 40.4% conversion to paid, versus 30.6% for longer trials. A 7-day reverse trial hits the optimal window.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8">Descript-Specific Behavioral Signals</h3>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>The 10-minute threshold:</strong> Amplitude found that companies with TTV under 10 minutes see conversions happen 30–40% faster.</li>
            <li><strong>Underlord as a conversion lever:</strong> Descript's AI co-editor is gated behind paid tiers. Users on the free tier never experience the feature that would most motivate them to pay.</li>
          </ul>
        </Section>

        {/* 3. Hypothesis */}
        <Section title="3. Hypothesis" icon={Beaker}>
          <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl mb-8">
            <h4 className="text-indigo-900 font-bold text-sm tracking-widest uppercase mb-3">Primary Hypothesis</h4>
            <p className="text-indigo-950 font-medium text-xl leading-relaxed">
              If we give new users a 7-day reverse trial of Creator-tier features combined with an AI-guided 
              onboarding flow that delivers a polished, exportable video output within their first session 
              (under 10 minutes from signup), we will increase the 30-day free-to-paid conversion rate by 
              15–25% relative to the current freemium baseline, and increase the 7-day activation rate by 30–45%.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-6">Hypothesis Logic Chain</h3>
          <div className="space-y-6 mt-4">
            <div>
              <strong className="text-slate-900 block mb-1">Mechanism 1: Compressed time-to-value.</strong>
              <span className="text-slate-600">The AI-guided first edit eliminates steps 2–6 of the current onboarding, compressing TTV from 25–40 minutes to under 10 minutes.</span>
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">Mechanism 2: Loss aversion via reverse trial.</strong>
              <span className="text-slate-600">When users experience 4K export, Studio Sound, and full Underlord for 7 days, the downgrade creates measurable loss aversion.</span>
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">Mechanism 3: Feature anchoring.</strong>
              <span className="text-slate-600">Users form their mental model of the product around premium capabilities, shifting the competitive frame in Descript's favor.</span>
            </div>
            <div>
              <strong className="text-slate-900 block mb-1">Mechanism 4: Output investment.</strong>
              <span className="text-slate-600">Producing a polished output in the first session builds workflow muscle memory and switching costs.</span>
            </div>
          </div>
        </Section>

        {/* 4. Experiment Design */}
        <Section title="4. Experiment Design" icon={Target}>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Treatment Group: Reverse Trial + AI First Edit</h3>
          
          <div className="mb-8">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Intervention 1: 7-Day Creator Tier Reverse Trial</h4>
            <p className="mb-3">Upon account creation, the user is immediately placed on the Creator tier for 7 days, with full access to:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>30 media hours (vs. 1 on Free)</li>
              <li>800 AI credits (vs. 100 on Free)</li>
              <li>4K export (vs. 720p on Free)</li>
              <li>Full Underlord AI co-editor access & All 20+ AI tools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Intervention 2: AI-Guided First Edit Flow</h4>
            <p className="mb-4">Designed to produce a publishable output in under 10 minutes:</p>
            <div className="space-y-4 pl-4 border-l-2 border-indigo-200">
              <div>
                <strong className="text-slate-900 block">Step 1 – Intent Selection (30 seconds)</strong>
                <span className="text-slate-600 text-base">User selects use case (Podcast, YouTube, Marketing, etc.)</span>
              </div>
              <div>
                <strong className="text-slate-900 block">Step 2 – Media Input (1–3 minutes)</strong>
                <span className="text-slate-600 text-base">Upload, record, paste URL, or use a pre-loaded sample clip.</span>
              </div>
              <div>
                <strong className="text-slate-900 block">Step 3 – AI Auto-Edit (1–2 minutes)</strong>
                <span className="text-slate-600 text-base">Underlord applies curated edits based on intent while transcribing.</span>
              </div>
              <div>
                <strong className="text-slate-900 block">Step 4 & 5 – Review, Export and Share (3–5 minutes)</strong>
                <span className="text-slate-600 text-base">Side-by-side comparison, "aha moment", 4K export.</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Measurement Framework */}
        <Section title="5. Measurement Framework" icon={BarChart}>
          <div className="p-5 bg-slate-50 rounded-xl mb-8 border border-slate-200">
            <h4 className="font-bold text-emerald-700 text-sm tracking-widest uppercase mb-2">Primary Metric</h4>
            <p className="text-slate-900 font-medium">Free-to-paid conversion rate at 30 days post-signup.</p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Secondary & Guardrail Metrics</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Metric</th>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Control</th>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Variant Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-3 font-medium">Activation rate (first export <br/>within 7 days)</td>
                  <td className="p-3">18–22%</td>
                  <td className="p-3 text-emerald-600 font-medium">30–40%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Time to first meaningful edit</td>
                  <td className="p-3">25–40 min</td>
                  <td className="p-3 text-emerald-600 font-medium">6–10 min</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">D7 & D30 Retention</td>
                  <td className="p-3">15–35%</td>
                  <td className="p-3 text-emerald-600 font-medium">22–50%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-slate-600 text-sm">
            <strong>Guardrails:</strong> D30 paid retention, Customer support ticket volume, Average revenue per user (ARPU). 
            If any guardrail metric shows statistically significant degradation, pause for investigation.
          </p>
        </Section>

        {/* 6. Phased Launch Plan */}
        <Section title="6. Phased Launch Plan" icon={Rocket}>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-1">0</div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Pre-Launch (Weeks 1–3)</h4>
                <p className="text-slate-600 mt-1">Build and QA all experiment components. Implement reverse trial billing logic, intent selection cards, downgrade transition UX, and set up Amplitude dashboards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-1">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Soft Launch (Week 4)</h4>
                <p className="text-slate-600 mt-1">Deploy to 10% of new signups. Monitor completion rates and billing errors. Kill switch criteria: billing errors or First Edit flow completion drops below 40%.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-1">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Full Deployment (Weeks 5–8)</h4>
                <p className="text-slate-600 mt-1">50/50 split for all new signups. Mid-experiment health check at week 7.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-1">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-xl">Analysis (Weeks 9–10)</h4>
                <p className="text-slate-600 mt-1">Evaluate statistical significance, guardrails, and cohort quality to make a ship/iterate/kill decision.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 7. Risk Analysis */}
        <Section title="7. Risk Analysis and Mitigations" icon={Shield}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Risk</th>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200">Impact</th>
                  <th className="p-3 font-semibold text-slate-900 border-b border-slate-200 w-1/2">Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="p-3 font-medium">Revenue cannibalization (users delay converting)</td>
                  <td className="p-3">Low</td>
                  <td className="p-3 text-slate-600">Track time-to-conversion distribution. Shorten trial to 5 days if delaying but not lifting.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Low-quality conversions (churn &lt;30 days)</td>
                  <td className="p-3">High</td>
                  <td className="p-3 text-slate-600">D30 paid retention is a guardrail metric. Fail quality gate if churn is &gt;2x standard.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Negative sentiment at Day 8 downgrade</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3 text-slate-600">Careful UX framing ("Unlock what you built" vs "Trial expired"). NPS survey at Day 14.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Free users consuming premium AI compute</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3 text-slate-600">7-day window caps exposure. Implement a soft cap with an upgrade prompt if per-user consumption exceeds 400 credits.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 8. Success Criteria */}
        <Section title="8. Success Criteria" icon={CheckCircle}>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-emerald-500 bg-emerald-50 rounded-r-xl">
              <h4 className="text-emerald-900 font-bold text-lg tracking-widest uppercase mb-2">Ship (Full Rollout)</h4>
              <p className="text-emerald-800">
                Primary metric shows statistically significant lift ≥ 15% relative. All guardrail metrics are neutral or positive. Cohort quality (D30 paid retention) is within 10% of control.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-amber-500 bg-amber-50 rounded-r-xl">
              <h4 className="text-amber-900 font-bold text-lg tracking-widest uppercase mb-2">Iterate</h4>
              <p className="text-amber-800">
                Directional lift (5–14% relative) without significance, OR significant primary metric but concerning guardrail trends. Identify weakest steps and re-test.
              </p>
            </div>

            <div className="p-6 border-l-4 border-rose-500 bg-rose-50 rounded-r-xl">
              <h4 className="text-rose-900 font-bold text-lg tracking-widest uppercase mb-2">Kill</h4>
              <p className="text-rose-800">
                No lift or negative lift, OR significant guardrail degradation (D30 retention drops &gt;15%, support tickets increase &gt;50%). Document learnings and redirect.
              </p>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="mt-24 text-center pb-12 border-t border-slate-200 pt-8">
          <p className="text-slate-500 text-sm">
            Prepared by Ally Martin, Wexley House. <br/>
            All benchmark data cited is sourced from published industry reports (OpenView, ChartMogul, Amplitude, etc.).
          </p>
        </div>

      </div>
    </div>
  );
}