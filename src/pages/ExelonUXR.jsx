import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";
import { ArrowLeft } from "lucide-react";

export default function ExelonUXR() {
  useEffect(() => {
    base44.analytics.track({
      eventName: "viewed_ux_research_exelon",
      properties: { page: "ExelonUXR" }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20 pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-serif { font-family: "PT Serif", serif; }
        .font-sans { font-family: "DM Sans", sans-serif; }
      `}</style>
      
      <div className="max-w-4xl mx-auto px-6 mb-8 mt-4">
        <Link to={createPageUrl("UXResearchStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-slate-900 transition-colors uppercase font-sans">
          <ArrowLeft className="w-4 h-4" /> Back to UX Research Studies
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="inline-block bg-slate-100 text-slate-600 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans rounded">
          UX Research Report • Exelon Corporation
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-[#003B5C] tracking-tight leading-[1.1]">
          Buy Now, Pay Later<br />for Energy Bills
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-3xl mb-12">
          Customer Attitudes Toward Flexible Payment Options Among Accounts with 3+ Late or Missed Payments
        </p>
        
        <div className="flex flex-col sm:flex-row sm:gap-12 gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500">
            <div>
                <strong className="text-slate-800">Prepared by:</strong> Alfie Martin
            </div>
            <div>
                <strong className="text-slate-800">Date:</strong> March 2026
            </div>
            <div>
                <strong className="text-slate-800">Classification:</strong> Internal — Confidential
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* Executive Summary */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Executive Summary</h2>
          <div className="prose prose-lg text-slate-700 font-sans space-y-4">
            <p>This report presents primary and secondary research findings evaluating the feasibility and customer demand for Buy Now, Pay Later (BNPL) payment options across Exelon's six regulated utility subsidiaries. The study specifically targeted residential customers who have accumulated three or more late or missed payments within the past 12 months, a population segment representing a significant share of outstanding receivables and collection costs.</p>
            <p>The primary research consisted of a mixed-methods study combining a quantitative survey (n=2,147) with 36 moderated qualitative interviews conducted across all six Exelon operating companies: ComEd, PECO, BGE, Pepco, Delmarva Power, and Atlantic City Electric. Participants were recruited from billing system records and screened for the 3+ delinquency threshold.</p>
            <p>The central finding is clear: a strong majority of surveyed customers (78%) indicated they would find BNPL installment options helpful for managing their energy bills, with 34% describing the option as "extremely helpful." Qualitative interviews reinforced this sentiment, revealing that customers view BNPL not as a luxury convenience but as a critical tool for avoiding service disconnection and the cascading financial consequences that follow.</p>
            <p>Secondary research, including a total cost of ownership analysis and vendor landscape review, indicates that building a proprietary BNPL platform in-house would be more cost-effective for Exelon over a 5-year horizon than integrating with existing third-party BNPL providers, primarily due to lower per-transaction costs at scale, greater regulatory control, and the ability to retain customer payment data within existing systems.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-slate-50 p-6 border-t-4 border-[#003B5C]">
                <div className="text-3xl font-bold text-[#003B5C] mb-2">2,147</div>
                <div className="text-sm text-slate-600">Survey Respondents</div>
            </div>
            <div className="bg-slate-50 p-6 border-t-4 border-[#003B5C]">
                <div className="text-3xl font-bold text-[#003B5C] mb-2">78%</div>
                <div className="text-sm text-slate-600">Said BNPL Helpful</div>
            </div>
            <div className="bg-slate-50 p-6 border-t-4 border-[#003B5C]">
                <div className="text-3xl font-bold text-[#003B5C] mb-2">36</div>
                <div className="text-sm text-slate-600">Qualitative Interviews</div>
            </div>
            <div className="bg-slate-50 p-6 border-t-4 border-[#003B5C]">
                <div className="text-3xl font-bold text-[#003B5C] mb-2">42%</div>
                <div className="text-sm text-slate-600">Lower 5-Yr Cost (Build)</div>
            </div>
          </div>
        </section>

        {/* Research Objectives */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Research Objectives</h2>
          <p className="text-lg text-slate-700 mb-4">This study was designed to address four core questions that emerged from a cross-functional planning workshop involving Exelon's Customer Experience, Revenue Operations, Digital Products, and Regulatory Affairs teams:</p>
          <ol className="list-decimal pl-6 space-y-3 text-lg text-slate-700">
            <li>Assess whether residential customers with recurring payment difficulties would find BNPL installment options valuable for managing energy bills.</li>
            <li>Identify the specific BNPL structures, terms, and features that would be most useful to this customer segment.</li>
            <li>Understand the emotional and behavioral drivers behind late or missed utility payments to inform product design.</li>
            <li>Evaluate the cost-effectiveness of building a proprietary BNPL platform versus integrating with established third-party providers.</li>
          </ol>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Methodology</h2>
          
          <h3 className="text-2xl font-bold text-[#007096] mb-4">Primary Research</h3>
          
          <h4 className="text-xl font-bold mb-3">Quantitative Survey</h4>
          <p className="text-lg text-slate-700 mb-6">A 22-question online survey was distributed via email and SMS to 8,400 residential customers across all six Exelon operating companies who had been flagged in billing systems with three or more late or missed payments in the preceding 12-month period. The survey was fielded over a 3-week window (January 6–24, 2026) and achieved a 25.6% response rate (n=2,147), which exceeded the target of 1,500 completes needed for a ±2.5% margin of error at 95% confidence.</p>
          <p className="text-lg text-slate-700 mb-6">The survey instrument covered current bill payment behaviors, awareness and prior use of BNPL services, receptivity to utility-specific BNPL options, preferred installment structures, and demographic information. Surveys were offered in English and Spanish, with a median completion time of 8 minutes.</p>

          <h5 className="font-bold text-slate-900 mb-3">Respondent Distribution by Operating Company</h5>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#003B5C] text-white">
                  <th className="p-3 border border-slate-300">Operating Company</th>
                  <th className="p-3 border border-slate-300">Invited</th>
                  <th className="p-3 border border-slate-300">Completed</th>
                  <th className="p-3 border border-slate-300">Response Rate</th>
                  <th className="p-3 border border-slate-300">% of Total</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200"><td className="p-3">ComEd (Illinois)</td><td className="p-3">2,940</td><td className="p-3">761</td><td className="p-3">25.9%</td><td className="p-3">35.4%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">PECO (Pennsylvania)</td><td className="p-3">1,680</td><td className="p-3">437</td><td className="p-3">26.0%</td><td className="p-3">20.4%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">BGE (Maryland)</td><td className="p-3">1,428</td><td className="p-3">362</td><td className="p-3">25.4%</td><td className="p-3">16.9%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">Pepco (DC / Maryland)</td><td className="p-3">1,092</td><td className="p-3">279</td><td className="p-3">25.5%</td><td className="p-3">13.0%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">Delmarva Power (DE / MD)</td><td className="p-3">756</td><td className="p-3">188</td><td className="p-3">24.9%</td><td className="p-3">8.8%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">Atlantic City Electric (NJ)</td><td className="p-3">504</td><td className="p-3">120</td><td className="p-3">23.8%</td><td className="p-3">5.6%</td></tr>
                <tr className="bg-slate-100 font-bold"><td className="p-3">Total</td><td className="p-3">8,400</td><td className="p-3">2,147</td><td className="p-3">25.6%</td><td className="p-3">100%</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-xl font-bold mb-3 mt-8">Qualitative Interviews</h4>
          <p className="text-lg text-slate-700 mb-6">Thirty-six moderated, semi-structured interviews (6 per operating company) were conducted via video call between January 27 and February 14, 2026. Each session lasted 45–60 minutes and followed a discussion guide organized around three topic areas: current bill management strategies, reactions to BNPL concepts, and feature preference exercises. Participants received a $75 bill credit as incentive. Sessions were recorded with consent and analyzed using thematic coding.</p>

          <h5 className="font-bold text-slate-900 mb-3">Participant Demographics</h5>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#003B5C] text-white">
                  <th className="p-3 border border-slate-300">Demographic</th>
                  <th className="p-3 border border-slate-300">Category</th>
                  <th className="p-3 border border-slate-300">% of Respondents</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200"><td className="p-3 font-medium" rowSpan="4">Household Income</td><td className="p-3">Under $35,000</td><td className="p-3">38%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">$35,000 – $60,000</td><td className="p-3">31%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">$60,000 – $90,000</td><td className="p-3">19%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">Over $90,000</td><td className="p-3">12%</td></tr>
                
                <tr className="border-b border-slate-200"><td className="p-3 font-medium" rowSpan="3">Age Range</td><td className="p-3">18–34</td><td className="p-3">27%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">35–54</td><td className="p-3">41%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">55+</td><td className="p-3">32%</td></tr>
                
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3 font-medium" rowSpan="2">Housing Type</td><td className="p-3">Renter</td><td className="p-3">58%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">Homeowner</td><td className="p-3">42%</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-[#007096] mb-4 mt-12">Secondary Research</h3>
          <p className="text-lg text-slate-700 mb-4">The secondary research component consisted of three workstreams conducted in parallel with primary data collection:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-slate-700">
            <li>Vendor landscape analysis covering 12 third-party BNPL providers currently active in the utilities and recurring-bill space, including Affirm, Klarna, Sezzle, PayPal Pay Later, Zilch, Sunbit, and six utility-specific fintech platforms.</li>
            <li>Total cost of ownership (TCO) modeling comparing build-vs-buy scenarios over a 5-year projection period, incorporating development costs, licensing fees, per-transaction economics, compliance overhead, and staffing.</li>
            <li>Regulatory review of BNPL-adjacent consumer lending and utility payment regulations across Exelon's six-state service territory (IL, PA, MD, DC, DE, NJ), conducted in coordination with Exelon's Regulatory Affairs and Legal teams.</li>
          </ul>
        </section>

        {/* Primary Research Findings */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Primary Research Findings</h2>
          
          <h3 className="text-2xl font-bold text-[#007096] mb-4">Overall BNPL Receptivity</h3>
          <p className="text-lg font-bold text-slate-800 mb-4">The headline finding across all six operating companies was a strong and consistent customer appetite for BNPL options applied to energy bills. When asked "How helpful would it be to have the option to split a past-due energy bill into smaller, interest-free installments?" the responses broke down as follows:</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#003B5C] text-white">
                  <th className="p-3 border border-slate-300">Response</th>
                  <th className="p-3 border border-slate-300">Count</th>
                  <th className="p-3 border border-slate-300">Percentage</th>
                  <th className="p-3 border border-slate-300">Cumulative</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200"><td className="p-3">Extremely helpful</td><td className="p-3">730</td><td className="p-3 font-bold text-green-600">34%</td><td className="p-3">34%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">Very helpful</td><td className="p-3">601</td><td className="p-3 font-bold text-green-600">28%</td><td className="p-3">62%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">Somewhat helpful</td><td className="p-3">344</td><td className="p-3 font-bold text-orange-500">16%</td><td className="p-3">78%</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3">Not very helpful</td><td className="p-3">279</td><td className="p-3 font-bold">13%</td><td className="p-3">91%</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3">Not at all helpful</td><td className="p-3">193</td><td className="p-3 font-bold">9%</td><td className="p-3">100%</td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-lg font-bold text-slate-800 mb-10">A combined <span className="text-green-600">78% of respondents</span> rated BNPL options as at least "somewhat helpful," with the majority (62%) selecting "extremely" or "very" helpful. This signal was consistent across all operating companies, with individual subsidiary approval ranging from 74% (Atlantic City Electric) to 81% (ComEd).</p>

          <h3 className="text-2xl font-bold text-[#007096] mb-6">Qualitative Themes</h3>
          <p className="text-lg text-slate-700 mb-6">Thematic analysis of the 36 interview transcripts surfaced five recurring themes that contextualize the quantitative results:</p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">1. Disconnection Anxiety as a Primary Motivator</h4>
              <p className="text-lg text-slate-700">The single most powerful driver of BNPL interest was the fear of service disconnection. Participants consistently described electricity as a non-negotiable expense, but one that competes with rent, food, and medical costs during financially strained months. BNPL was seen as a tool to prevent the worst-case scenario rather than simply a convenience feature. Several participants described past disconnection experiences and the compounding costs that followed, including reconnection fees, spoiled food, and temporary housing.</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2. Seasonal Bill Spikes as a Trigger</h4>
              <p className="text-lg text-slate-700">Many participants reported that their payment difficulties were not chronic but seasonal, concentrated in summer (cooling) and winter (heating) months when bills can spike 40–80% above baseline. These customers said they manage payments fine during moderate months but fall behind when bills exceed $250–$350. BNPL was viewed as particularly valuable for these peak-season spikes, allowing customers to spread the elevated cost across 2–3 months.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">3. Distrust of Traditional Payment Plans</h4>
              <p className="text-lg text-slate-700">A notable segment of participants (roughly 1 in 4 interviewees) expressed skepticism or negative prior experience with existing utility payment arrangement programs. Common complaints included rigid structures, confusing terms, automatic cancellation after a single missed installment, and the perception that payment plans are "for people who are already too far behind." BNPL was perceived as more accessible, more modern, and less stigmatized than calling to negotiate a payment arrangement.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">4. Demand for Zero-Interest Terms</h4>
              <p className="text-lg text-slate-700">Interest-free installments were the single most important feature. When presented with a hypothetical BNPL product that included even modest interest (e.g., 3–5% APR), approval dropped from 78% to 51%. Customers in this population are already financially stressed, and the addition of interest charges was seen as punitive. Participants consistently said they would only use a BNPL option if it did not increase their total cost.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">5. Digital-First Delivery Preference</h4>
              <p className="text-lg text-slate-700">Across all age groups, participants expressed a clear preference for managing BNPL arrangements through digital channels. 67% of survey respondents selected the utility's mobile app as their preferred enrollment channel, followed by the website (22%), automated phone system (7%), and live customer service call (4%). Interview participants reinforced this, describing a desire to "handle it without having to talk to anyone."</p>
            </div>
          </div>
        </section>

        {/* Secondary Research Findings: Build vs. Buy Analysis */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Secondary Research Findings: Build vs. Buy Analysis</h2>
          
          <h3 className="text-2xl font-bold text-[#007096] mb-4">Vendor Landscape Overview</h3>
          <p className="text-lg text-slate-700 mb-8">The research team evaluated 12 third-party BNPL providers across four dimensions: utility-sector experience, regulatory compliance readiness, integration complexity, and cost structure. While several vendors offer turnkey BNPL integrations for billers, the analysis revealed structural disadvantages for a utility-scale deployment at Exelon's volume.</p>

          <h3 className="text-2xl font-bold text-[#007096] mb-4">Total Cost of Ownership: 5-Year Comparison</h3>
          <p className="text-lg text-slate-700 mb-6">The TCO analysis modeled two scenarios over a 5-year period, assuming a participation rate of 15% of eligible accounts (approximately 185,000 active BNPL arrangements at steady state across all six operating companies):</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#003B5C] text-white">
                  <th className="p-3 border border-slate-300">Cost Category</th>
                  <th className="p-3 border border-slate-300">Build In-House</th>
                  <th className="p-3 border border-slate-300">Third-Party Integration</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-200"><td className="p-3 font-medium">Initial Development / Setup</td><td className="p-3">$4.2M</td><td className="p-3">$1.1M</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3 font-medium">Annual Platform Licensing</td><td className="p-3">$0</td><td className="p-3">$2.8M / year</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3 font-medium">Per-Transaction Fees (5-Year)</td><td className="p-3">$3.1M</td><td className="p-3">$18.6M</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3 font-medium">Compliance & Legal</td><td className="p-3">$1.8M</td><td className="p-3">$0.9M</td></tr>
                <tr className="border-b border-slate-200"><td className="p-3 font-medium">Internal Staffing (5-Year)</td><td className="p-3">$6.2M</td><td className="p-3">$2.4M</td></tr>
                <tr className="border-b border-slate-200 bg-slate-50"><td className="p-3 font-medium">Integration & Maintenance</td><td className="p-3">$2.9M</td><td className="p-3">$4.1M</td></tr>
                <tr className="border-b border-slate-200 bg-blue-50 font-bold"><td className="p-3">5-Year Total Cost</td><td className="p-3 text-green-700">$18.2M</td><td className="p-3">$41.1M</td></tr>
                <tr className="bg-blue-50 font-bold"><td className="p-3">Cost Per Arrangement (Annual Avg)</td><td className="p-3 text-green-700">$19.70</td><td className="p-3">$44.40</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg font-bold text-slate-800 mb-10">The in-house build scenario results in a <span className="text-green-600">5-year savings of approximately $22.9M (a 42% reduction in total cost)</span> compared to third-party integration. While the build scenario requires significantly higher upfront capital ($4.2M vs. $1.1M) and greater initial staffing investment, the economics invert by the end of Year 2 due to the compounding effect of per-transaction fees charged by third-party providers.</p>

          <h3 className="text-2xl font-bold text-[#007096] mb-6">Key Drivers Favoring In-House Build</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">1. Per-Transaction Economics at Scale</h4>
              <p className="text-lg text-slate-700">Third-party BNPL providers typically charge 2–6% of transaction value per installment arrangement. At Exelon's projected volume (185,000 active arrangements with an average balance of $340), these fees compound to $18.6M over five years. An in-house platform eliminates this ongoing cost, replacing it with fixed infrastructure and staffing costs that scale much more favorably.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">2. Regulatory Control and Compliance</h4>
              <p className="text-lg text-slate-700">Utility-specific BNPL products operate in a complex regulatory environment spanning six state public utility commissions, consumer lending laws, and CFPB oversight. Building in-house gives Exelon direct control over compliance parameters, rate-case treatment, and the ability to adapt terms on a per-jurisdiction basis without renegotiating vendor contracts. Several third-party providers evaluated lacked experience navigating utility commission approval processes.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">3. Customer Data Retention</h4>
              <p className="text-lg text-slate-700">An in-house platform keeps all payment behavior data within Exelon's existing systems, enabling deeper integration with customer analytics, predictive delinquency models, and personalized outreach programs. Third-party integrations typically limit data sharing and create information silos that reduce the utility's ability to proactively identify at-risk accounts.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">4. Brand and Experience Consistency</h4>
              <p className="text-lg text-slate-700">Interview participants consistently expressed that they wanted BNPL to feel like part of their utility's normal billing experience, not a redirect to an unfamiliar third-party app. An in-house solution allows seamless integration into existing MyAccount portals and mobile apps without introducing external branding, separate logins, or unfamiliar interfaces.</p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Recommendations</h2>
          <p className="text-lg text-slate-700 mb-4">Based on the convergence of primary and secondary research findings, the UX Research team recommends the following:</p>
          <ol className="list-decimal pl-6 space-y-3 text-lg text-slate-700">
            <li>Proceed with development of a proprietary BNPL platform built on Exelon's existing billing infrastructure, targeting a pilot launch with ComEd (largest customer base and highest approval rate) in Q4 2026.</li>
            <li>Design the initial product as a zero-interest, 3-installment split for past-due balances between $150 and $600, with automatic enrollment available through the MyAccount app and website.</li>
            <li>Extend the pilot to PECO and BGE in Q1 2027, followed by Pepco, Delmarva, and ACE by Q3 2027, adjusting terms per jurisdiction based on regulatory review outcomes.</li>
            <li>Invest in proactive outreach triggers that surface BNPL options to customers before they reach the 3+ missed payment threshold, using predictive analytics to identify at-risk accounts after the first missed payment.</li>
            <li>Conduct a follow-up UX research study during the ComEd pilot to test enrollment flows, in-app messaging, and post-enrollment satisfaction, iterating on the product before multi-subsidiary rollout.</li>
          </ol>
        </section>

        {/* Risks and Limitations */}
        <section>
          <h2 className="text-3xl font-bold text-[#003B5C] mb-6 border-b border-slate-200 pb-2">Risks and Limitations</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
            <li><strong className="text-slate-900">Self-selection bias:</strong> Respondents who completed the survey may over-represent customers with the strongest financial stress or the strongest opinions about BNPL, potentially inflating the 78% approval figure.</li>
            <li><strong className="text-slate-900">Stated vs. revealed preference:</strong> Survey responses capture intended behavior, not actual enrollment or completion rates. Real-world uptake may differ from stated interest.</li>
            <li><strong className="text-slate-900">Regulatory uncertainty:</strong> BNPL products for utility bills may face varying regulatory treatment across Exelon's six-state territory. Commission approval timelines are unpredictable and could delay rollout.</li>
            <li><strong className="text-slate-900">Build timeline risk:</strong> The in-house build scenario assumes a 9–12 month development timeline. Scope creep, resource constraints, or integration challenges with legacy billing systems could extend this window and shift the cost crossover point.</li>
          </ul>
          <p className="text-sm text-slate-500 italic mt-8">Appendices (survey instrument, full interview transcripts, detailed TCO model, vendor evaluation scorecards, and regulatory jurisdiction summaries) are available under separate cover. Contact the UX Research team for access.</p>
        </section>

      </div>
    </div>
  );
}