import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function DesignStrategyAI() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        
        p {
          line-height: 1.7;
        }
        
        strong {
          font-weight: 700;
          color: #0f172a;
        }
      `}</style>
      


      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6 mb-8 mt-4">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors uppercase font-sans">
                <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
        </div>

        {/* 01 — OVERVIEW */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            01 — Overview
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            The Problem With Single-Answer Chatbots
          </h2>
          <div className="font-sans text-slate-700 text-lg md:text-xl space-y-6">
            <p>Most conversational AI products hand you one answer and a silent prayer that you'll believe it. It's <strong>the "trust me, bro" school of product design:</strong> a black box with the confidence of a TED talk speaker and the citation practices of a group chat.</p>
            <p>When I joined this project, the user feedback had been saying the same thing for months, just increasingly louder:<br/><span className="italic">"How do I know this is right?"</span></p>
            <p><strong>Nobody was accusing the chatbot of lying, exactly.</strong> They just had zero way to evaluate whether it was telling the truth, which, functionally, is the same problem.</p>
            <p><strong>So they'd do what any reasonable person does when a stranger gives them financial advice: copy-paste the answer into Google and quietly verify it behind the chatbot's back.</strong></p>
            <p>I was brought on to redesign the answer experience from scratch.</p>
            <p>The hypothesis wasn't complicated. In fact, it was almost <strong>embarrassingly obvious</strong> once you said it out loud:</p>
            <p className="font-bold italic text-slate-900">what if, instead of cosplaying omniscience, the chatbot just showed its work?</p>
            <p className="font-bold italic text-slate-900">Surface three candidate answers?</p>
            <ul className="list-disc pl-8 space-y-2 font-bold text-slate-900">
              <li>Rank them by confidence.</li>
              <li>Pin a cited source to each one.</li>
              <li>Let the user see the model's uncertainty instead of pretending it doesn't exist.</li>
            </ul>
            <p className="font-bold italic text-slate-900 pt-2">The bet was that transparency would do what a thousand "I'm confident in this answer!" microcopy strings never could: actually build trust.</p>
          </div>
          <div className="mt-12 bg-[#cde3f5] p-6 md:p-8 flex items-start gap-4 rounded-sm">
            <div className="mt-1 flex-shrink-0 text-slate-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </div>
            <p className="font-serif text-2xl text-slate-900">
              <strong>Core design question:</strong> How might we make an AI's uncertainty legible and useful, rather than hidden?
            </p>
          </div>
        </div>

        {/* 02 — RESEARCH & DISCOVERY */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            02 — Research & Discovery
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12 text-slate-900 tracking-tight leading-[1.1]">
            Understanding the Trust Deficit
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#b8daf2] p-8 md:p-10 rounded-sm">
              <h3 className="font-serif text-3xl font-bold mb-4 text-slate-900">What I Did</h3>
              <p className="font-sans text-slate-700 text-lg md:text-xl">
                I conducted 14 moderated usability sessions with existing users across three segments: enterprise knowledge workers, customer support agents, and casual consumers. I also ran a diary study over two weeks with 8 participants to capture verification behaviors in the wild, because nothing reveals product trust issues quite like watching someone narrate their skepticism in real time. Alongside the qualitative work, I partnered with our data team to pull behavioral analytics on answer acceptance rates, session abandonment points, and re-query frequency.
              </p>
            </div>
            <div className="p-4 md:p-10 flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold mb-4 text-slate-900">What I Found</h3>
              <p className="font-sans text-slate-700 text-lg md:text-xl">
                Three patterns showed up so consistently they might as well have been wearing uniforms. First, 61% of users cross-referenced answers with an external source before acting on them. The chatbot was essentially a first draft that users ran through Google for peer review. Second, abandonment spiked on questions where the model's internal confidence was actually lowest, meaning the product was failing hardest exactly when users needed the most help. Poetic. Third, users overwhelmingly said they wanted "options" or "a second opinion," not a single pronouncement delivered with unearned authority.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div>
              <p className="font-serif text-5xl text-gray-700 mb-4 font-light">61%</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Cross-referenced externally</p>
              <p className="font-sans text-gray-600 text-sm  ">Users verified answers with an external source before acting</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-gray-700 mb-4 font-light">3.2×</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Higher abandonment</p>
              <p className="font-sans text-gray-600 text-sm  ">On low-confidence queries</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-gray-700 mb-4 font-light">14</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Usability sessions</p>
              <p className="font-sans text-gray-600 text-sm  ">Conducted across three user segments</p>
            </div>
            <div>
              <p className="font-serif text-5xl text-gray-700 mb-4 font-light">78%</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Wanted options</p>
              <p className="font-sans text-gray-600 text-sm  ">Not pronouncements — users wanted "a second opinion"</p>
            </div>
          </div>

          <div className="font-serif text-2xl md:text-3xl text-slate-900   space-y-6 max-w-4xl">
            <p>These insights gave me a clear directional mandate: the interface needed to shift from declarative (one answer, no context) to deliberative (multiple answers, ranked transparency, verifiable sources).</p>
            <p>In other words, the chatbot needed to stop performing certainty and start communicating honestly.</p>
          </div>
        </div>

        {/* 03 — DESIGN PROCESS */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            03 — Design Process
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-[1.15]">
            From Concept to Confidence Ranking
          </h2>
          
          <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900 mt-6">Framing the Output Model</h3>
          <p className="font-sans text-slate-700 text-lg mb-12  ">
            I worked with our ML lead to define a new answer output schema. Instead of returning one response, the model would return three ranked candidate answers, each carrying <strong>a probability-of-accuracy score</strong> (0 to 100%) and a traceable source citation. The technical constraint was real: the model had to generate, score, and rank all three candidates in under 2 seconds to feel responsive. But the design challenge was harder, and frankly more interesting: how do you present probabilistic information to people who did not sign up for a statistics lesson?
          </p>

          <h3 className="font-serif text-3xl font-bold mb-6 text-slate-900">Exploration</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="flex flex-col border border-blue-200">
              <div className="bg-[#99c4f1] py-3 text-center text-xl font-serif text-slate-900">1</div>
              <div className="bg-[#e3f0fa] p-8 flex-grow">
                <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Divergent Sketching</h4>
                <p className="font-sans text-slate-700 text-lg md:text-xl">I explored 30+ layout concepts across three paradigms: stacked cards, inline toggles, and tabbed panels. Most of them were bad. That's the point of divergent sketching.</p>
              </div>
            </div>
            <div className="flex flex-col border border-blue-400">
              <div className="bg-[#65a5f1] py-3 text-center text-xl font-serif text-white">2</div>
              <div className="bg-[#e3f0fa] p-8 flex-grow">
                <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Concept Testing</h4>
                <p className="font-sans text-slate-700 text-lg md:text-xl">I tested 4 mid-fidelity prototypes with 10 users. Stacked cards with visible confidence bars won decisively on comprehension speed. Tabs made people feel like the other answers were hidden. Toggles made people feel like they were doing homework.</p>
              </div>
            </div>
            <div className="flex flex-col border border-[#0a3d82]">
              <div className="bg-[#0a3d82] py-3 text-center text-xl font-serif text-white">3</div>
              <div className="bg-[#153a70] p-8 flex-grow">
                <h4 className="font-serif text-xl font-bold mb-4 text-white">Training Collaboration</h4>
                <p className="font-sans text-white/90 text-lg md:text-xl">I partnered with the ML team to define the training data structure: answer text, confidence float, and source URL per candidate. Getting engineering and design to agree on a schema was, as always, a negotiation disguised as a technical conversation.</p>
              </div>
            </div>
            <div className="flex flex-col border border-purple-200">
              <div className="bg-[#dfb9f3] py-3 text-center text-xl font-serif text-slate-900">4</div>
              <div className="bg-[#faeffd] p-8 flex-grow">
                <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Calibration Design</h4>
                <p className="font-sans text-slate-700 text-lg md:text-xl">I designed a feedback loop where users could flag incorrect answers, feeding corrections back into the model's confidence calibration. The chatbot could learn from being wrong, which already put it ahead of most people I've worked with.</p>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-3xl font-bold mb-8 text-slate-900">Key Design Decisions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-[6px] border-[#3b82f6] pl-6 py-1">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Three answers, not two or five</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl md:text-xl">Through testing, I found that two answers felt like a coin flip and five felt like a research project. Three gave users a primary recommendation with meaningful alternatives, without triggering decision fatigue. The magic number is real, and it's three.</p>
            </div>
            <div className="border-l-[6px] border-[#3b82f6] pl-6 py-1">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Confidence as a visual bar, not just a number</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl md:text-xl">Early tests showed that a bare percentage (e.g., "87%") triggered anxiety in some users. They fixated on why it wasn't 100%. A filled bar with a color-coded badge (green, yellow, red) communicated relative confidence more intuitively and reduced that fixation by 40% in follow-up testing. Turns out, humans process "mostly green" faster than they process "eighty-seven percent."</p>
            </div>
            <div className="border-l-[6px] border-[#3b82f6] pl-6 py-1">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Source citations as anchors, not footnotes</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl md:text-xl">I placed the source directly beneath each answer. Not in a collapsible section. Not at the bottom of the page. Not behind a "learn more" link that nobody clicks. The citation needed to be inseparable from the claim. This was the single highest-impact decision for perceived trustworthiness in testing, and also the one that required the least engineering effort. Love when that happens.</p>
            </div>
          </div>
        </div>

        {/* 04 — FINAL DESIGN */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            04 — Final Design
          </div>
          
          <div className="w-full flex justify-center mb-12">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/f4b23b31b_Screenshot2026-03-22at40100PM.png" 
              alt="System architecture diagram" 
              className="max-w-full md:max-w-3xl h-auto object-contain rounded-md" 
            />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            The Answer Experience
          </h2>
          
          <p className="font-sans text-slate-700 text-lg mb-6  ">
            The core interaction pattern I shipped: the user asks a question and receives three ranked responses, each with a confidence probability and an inline source citation. The highest-confidence answer leads, but the lower-ranked answers remain visible and accessible, not buried.
          </p>
          <p className="font-sans text-slate-700 text-lg mb-10  ">
            For example, a user asking <strong>"What's the maximum contribution limit for a Roth IRA in 2025?"</strong> would see:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#f4f3ef] p-6 rounded-sm">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 border-b border-gray-200 pb-4">Answer 1 · 94% confidence</h4>
              <p className="font-sans text-slate-700 mb-6 text-lg md:text-xl">The maximum contribution limit for a Roth IRA in 2025 is $7,000 for individuals under 50, and $8,000 for individuals 50 and older (with the $1,000 catch-up provision).</p>
              <p className="font-sans text-sm text-gray-600 italic  ">Source: IRS.gov, Retirement Topics: IRA Contribution Limits (2025)</p>
            </div>
            <div className="bg-[#f4f3ef] p-6 rounded-sm">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 border-b border-gray-200 pb-4">Answer 2 · 72% confidence</h4>
              <p className="font-sans text-slate-700 mb-6 text-lg md:text-xl">The 2025 Roth IRA contribution limit is $7,000, though eligibility may phase out for single filers earning above $150,000 (MAGI).</p>
              <p className="font-sans text-sm text-gray-600 italic  ">Source: NerdWallet, Roth IRA Rules and Limits for 2025</p>
            </div>
            <div className="bg-[#f4f3ef] p-6 rounded-sm">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 border-b border-gray-200 pb-4">Answer 3 · 41% confidence</h4>
              <p className="font-sans text-slate-700 mb-6 text-lg md:text-xl">The contribution limit may remain at $6,500 for 2025, consistent with the 2023 limit, pending further IRS guidance.</p>
              <p className="font-sans text-sm text-gray-600 italic  ">Source: Investopedia, IRA Contribution Limits (2023 Archive)</p>
            </div>
          </div>

          <p className="font-sans text-slate-700 text-lg md:text-xl mb-16">
            The design made the model's reasoning transparent at a glance. The top answer was grounded in a primary government source with high confidence. The second offered useful supplementary context at moderate confidence. The third surfaced a plausible but outdated answer that the system was explicitly uncertain about, effectively telling the user "I found this, but I wouldn't bet on it." Users could make an informed judgment in seconds, and the ones who wanted to dig deeper had a source link waiting for them.
          </p>
          
          <div className="w-full">
            <img src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/lxvh7y6oa7mijoj/a83d49ade2774492a390acce18b4a363/optimized/tempImageoH8kyt.jpg" alt="Bobot Chat Interface" className="w-full rounded-sm object-contain" />
          </div>
        </div>

        {/* 05 — MODEL TRAINING & CALIBRATION */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            05 — Model Training & Calibration
          </div>

          <div className="w-full flex justify-center mb-12">
            <img 
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/16785e22c_Screenshot2026-03-22at40742PM.png" 
              alt="Ranked confidence answers interface" 
              className="max-w-full md:max-w-3xl h-auto object-contain rounded-md border border-gray-200" 
            />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            Teaching the Model to Rank Honestly
          </h2>
          
          <p className="font-sans text-slate-700 text-lg mb-16  ">
            Designing the UI was half the challenge. The other half was making sure the model's confidence scores weren't just vibes. A "90% confidence" answer needed to actually be correct roughly 90% of the time, or the whole transparency premise would collapse into a more elaborately decorated version of the same trust problem. I embedded directly with the ML team for four weeks to shape this work, which is designer-speak for "I moved my laptop to their side of the office and refused to leave."
          </p>

          <h3 className="font-serif text-3xl font-bold mb-10 text-slate-900">My Contributions to Training</h3>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div>
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Source-grounding taxonomy
              </h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">I developed a tiered source classification system that the model used as a training signal. Tier 1: government and official databases. Tier 2: established publications and peer-reviewed sources. Tier 3: community forums, user-generated content, and everything your uncle shares on Facebook. The model learned to weight its confidence scores partly based on the authority tier of its retrieved source, which improved calibration significantly. Shocking that teaching a model to trust the IRS more than Reddit made it more accurate.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Evaluation rubric design
              </h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">I authored the human evaluation rubric used by our annotation team to score answer quality across four dimensions: factual accuracy, source relevance, confidence calibration, and answer completeness. This rubric directly shaped the RLHF reward model. In practice, this meant I spent two weeks arguing about the difference between "partially correct" and "correct but incomplete" until we had a rubric everyone could apply consistently.</p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Edge-case curation
              </h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">I identified and curated roughly 200 "hard queries," questions with contested answers, recently-changed facts, or inherently ambiguous phrasing, and used them as a stress-test set for the model's confidence ranking. These queries exposed calibration drift early and became a standing regression suite. They were the trick questions on the exam, and the model needed to learn to say "I'm not sure" instead of guessing confidently.</p>
            </div>
          </div>

          <div className="bg-[#dcf0fb] p-8 md:p-10 flex items-start gap-4 rounded-sm">
            <div className="mt-1 flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </div>
            <div>
              <h4 className="font-serif text-2xl font-bold mb-4 text-slate-900">Key insight from training:</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">
                The model initially over-indexed on source recency, assigning high confidence to recent but unreliable sources. A blog post from yesterday outranked a government publication from six months ago, which is exactly the kind of logic that makes misinformation spread. I flagged this pattern and worked with ML to add authority weighting alongside recency. That single adjustment improved calibration accuracy by <strong className="text-[#3b82f6]">18 percentage points</strong> on our evaluation set.
              </p>
            </div>
          </div>
        </div>

        {/* 06 — OUTCOMES */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            06 — Outcomes
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight leading-[1.1]">
            What Shipped, What Changed
          </h2>
          
          <p className="font-sans text-slate-700 text-lg mb-16  ">
            We rolled out the three-answer confidence-ranked experience to 100% of users over a staged two-week release. I monitored behavioral metrics daily during rollout and ran a post-launch study with 12 users at the four-week mark.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            <div>
              <p className="font-serif text-5xl md:text-6xl font-light text-gray-700 mb-4">–47%</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">External verification</p>
              <p className="font-sans text-gray-600 text-sm  ">Reduction in external verification behavior</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl font-light text-gray-700 mb-4">+33%</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Answer acceptance</p>
              <p className="font-sans text-gray-600 text-sm  ">Increase in answer acceptance rate</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl font-light text-gray-700 mb-4">–29%</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Session abandonment</p>
              <p className="font-sans text-gray-600 text-sm  ">Drop in session abandonment on ambiguous queries</p>
            </div>
            <div>
              <p className="font-serif text-5xl md:text-6xl font-light text-gray-700 mb-4">4.7</p>
              <p className="font-serif text-xl font-bold text-slate-900 mb-2">Trust score</p>
              <p className="font-sans text-gray-600 text-sm  ">Up from 4.3 on a 5-point Likert scale</p>
            </div>
          </div>

          <p className="font-sans text-slate-700 text-lg mb-16  ">
            The qualitative feedback was just as telling. Users described the experience as feeling like "getting a second and third opinion" and said the confidence bars gave them "permission to trust the top answer." Several enterprise users reported that the source citations alone eliminated their need to cross-reference. The product had become the reference, which is the kind of outcome you frame and put on a wall.
          </p>

          <h3 className="font-serif text-3xl font-bold mb-8 text-slate-900">What I'd Do Differently</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-[6px] border-[#3b82f6] pl-6 py-1">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">Longitudinal calibration study</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">If I were to revisit this work, I'd invest earlier in a longitudinal study of confidence calibration perception. We optimized for first-impression comprehension, but I suspect that over time, power users develop a more nuanced mental model of what the percentages actually mean, and the UI should evolve to meet them there.</p>
            </div>
            <div className="border-l-[6px] border-[#3b82f6] pl-6 py-1">
              <h4 className="font-serif text-xl font-bold mb-4 text-slate-900">User-controlled confidence threshold</h4>
              <p className="font-sans text-slate-700 text-lg md:text-xl">I'd also explore a user-controlled confidence threshold: let users set a minimum confidence below which answers are suppressed, giving them agency over the noise-to-signal ratio. Some people want three answers. Some people want one good one. The product should be smart enough to accommodate both.</p>
            </div>
          </div>
        </div>

        {/* 07 — REFLECTION */}
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 border-t border-gray-100">
          <div className="inline-block bg-[#dbeafe] text-[#1e3a8a] text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
            07 — Reflection
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12 text-slate-900 tracking-tight leading-[1.1]">
            What I Took Away
          </h2>
          
          <div className="border-l-[6px] border-[#3b82f6] pl-6 py-2 mb-10">
            <p className="font-serif text-3xl font-bold text-slate-900">Transparency is not a feature. It is the product.</p>
          </div>

          <div className="font-sans text-slate-700 text-xl md:text-2xl space-y-8">
            <p>This project solidified a conviction I now carry into every AI-facing design problem: transparency is not a feature. It is the product. The chatbot didn't get smarter when we shipped this. We just stopped hiding how smart (or uncertain) it already was. The trust gains came not from improving the model, but from making its existing behavior legible. Which, if you think about it, is a pretty damning indictment of how most AI products treat their users: capable of handling nuance, but never given the chance.</p>
            <p>I also learned that designing for probabilistic information demands deep, genuine collaboration with ML. I couldn't have designed the confidence UI without understanding calibration curves, and the ML team couldn't have built a well-calibrated model without the human-evaluation rubric I brought from the design side. The best work happened in the overlap, in the room where the designer and the engineer were both slightly outside their comfort zones and too stubborn to admit it.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-sm text-gray-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}