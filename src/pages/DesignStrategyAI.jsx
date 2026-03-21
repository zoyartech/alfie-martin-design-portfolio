import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function DesignStrategyAI() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl("Home")} className="text-sm tracking-[0.3em] font-medium">
              ALFIE MARTIN
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link to={createPageUrl("Home")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                HOME
              </Link>
              <Link to={createPageUrl("About")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                ABOUT
              </Link>
              <Link to={createPageUrl("CaseStudies")} className="text-xs tracking-[0.2em] text-black border-b border-black pb-1">
                CASE STUDIES
              </Link>
              <Link to={createPageUrl("Contact")} className="text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                CONTACT
              </Link>
            </div>
            <MobileNav activePage="CaseStudies" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
        </div>

        {/* Hero / Overview */}
        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.1em] text-gray-700 bg-blue-100/50 w-fit px-3 py-1 mb-6 rounded-sm">01 — OVERVIEW</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight text-gray-900">The Problem With Single-Answer Chatbots</h2>
              <div className="text-gray-700 max-w-4xl text-lg leading-relaxed space-y-6">
                <p>
                  Most conversational AI products hand you one answer and a silent prayer that you'll believe it. It's the <strong>"trust me, bro" school of product design:</strong> a black box with the confidence of a TED talk speaker and the citation practices of a group chat.
                </p>
                <p>
                  When I joined this project, the user feedback had been saying the same thing for months, just increasingly louder:<br/>
                  <em>"How do I know this is right?"</em>
                </p>
                <p>
                  <strong>Nobody was accusing the chatbot of lying, exactly.</strong> They just had zero way to evaluate whether it was telling the truth, which, functionally, is the same problem.
                </p>
                <p>
                  <strong>So they'd do what any reasonable person does when a stranger gives them financial advice: copy-paste the answer into Google and quietly verify it behind the chatbot's back.</strong>
                </p>
                <p>
                  I was brought on to redesign the answer experience from scratch.
                </p>
                <p>
                  The hypothesis wasn't complicated. In fact, it was almost <strong>embarrassingly obvious</strong> once you said it out loud:
                </p>
                <p className="font-bold italic">
                  what if, instead of cosplaying omniscience, the chatbot just showed its work?
                </p>
                <p className="font-bold italic">Surface three candidate answers?</p>
                <ul className="list-disc pl-6 space-y-2 font-bold text-gray-800">
                  <li>Rank them by confidence.</li>
                  <li>Pin a cited source to each one.</li>
                  <li>Let the user see the model's uncertainty instead of pretending it doesn't exist.</li>
                </ul>
                <p className="italic font-bold pt-2 text-gray-900">
                  The bet was that transparency would do what a thousand "I'm confident in this answer!" microcopy strings never could: actually build trust.
                </p>
              </div>
            </motion.div>
            
            <div className="mt-12 bg-[#c9e1f5] p-6 max-w-4xl">
              <p className="text-xl text-gray-900 flex items-start gap-4">
                <span className="text-2xl mt-1 leading-none text-gray-800">❏</span>
                <span><strong>Core design question:</strong> How might we make an AI's uncertainty legible and useful, rather than hidden?</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">ROLE</p><p className="text-gray-700">Product Designer</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">FOCUS</p><p className="text-gray-700">Conversational AI, Transparency</p></div>
              <div><p className="text-xs tracking-[0.2em] text-gray-400 mb-2">YEAR</p><p className="text-gray-700">2024</p></div>
            </div>
          </div>
        </section>

        {/* Research & Discovery */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-[#c2dcf0] w-fit px-3 py-1 mb-6 rounded-sm">02 — RESEARCH & DISCOVERY</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">Understanding the Trust Deficit</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-[#b3d4f0] p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">What I Did</h3>
                <p className="text-gray-800 leading-relaxed text-lg">
                  I conducted 14 moderated usability sessions with existing users across three segments: enterprise knowledge workers, customer support agents, and casual consumers. I also ran a diary study over two weeks with 8 participants to capture verification behaviors in the wild, because nothing reveals product trust issues quite like watching someone narrate their skepticism in real time. Alongside the qualitative work, I partnered with our data team to pull behavioral analytics on answer acceptance rates, session abandonment points, and re-query frequency.
                </p>
              </div>
              <div className="p-4 md:p-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">What I Found</h3>
                <p className="text-gray-800 leading-relaxed text-lg">
                  Three patterns showed up so consistently they might as well have been wearing uniforms. First, 61% of users cross-referenced answers with an external source before acting on them. The chatbot was essentially a first draft that users ran through Google for peer review. Second, abandonment spiked on questions where the model's internal confidence was actually lowest, meaning the product was failing hardest exactly when users needed the most help. Poetic. Third, users overwhelmingly said they wanted "options" or "a second opinion," not a single pronouncement delivered with unearned authority.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-gray-700 mb-6">61%</p>
                <p className="text-xl text-gray-900 mb-3">Cross-referenced externally</p>
                <p className="text-gray-600">Users verified answers with an external source before acting</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-gray-700 mb-6">3.2×</p>
                <p className="text-xl text-gray-900 mb-3">Higher abandonment</p>
                <p className="text-gray-600">On low-confidence queries</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-gray-700 mb-6">14</p>
                <p className="text-xl text-gray-900 mb-3">Usability sessions</p>
                <p className="text-gray-600">Conducted across three user segments</p>
              </div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-light text-gray-700 mb-6">78%</p>
                <p className="text-xl text-gray-900 mb-3">Wanted options</p>
                <p className="text-gray-600">Not pronouncements — users wanted "a second opinion"</p>
              </div>
            </div>

            <div className="max-w-5xl text-2xl text-gray-900 leading-relaxed space-y-6">
              <p>
                These insights gave me a clear directional mandate: the interface needed to shift from declarative (one answer, no context) to deliberative (multiple answers, ranked transparency, verifiable sources).
              </p>
              <p>
                In other words, the chatbot needed to stop performing certainty and start communicating honestly.
              </p>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-blue-100/50 w-fit px-3 py-1 mb-6 rounded-sm">03 — DESIGN PROCESS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">From Concept to Confidence Ranking</h2>
            
            <div className="mb-16 max-w-5xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Framing the Output Model</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                I worked with our ML lead to define a new answer output schema. Instead of returning one response, the model would return three ranked candidate answers, each carrying a <strong>probability-of-accuracy score</strong> (0 to 100%) and a traceable source citation. The technical constraint was real: the model had to generate, score, and rank all three candidates in under 2 seconds to feel responsive. But the design challenge was harder, and frankly more interesting: how do you present probabilistic information to people who did not sign up for a statistics lesson?
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6">Exploration</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="border border-blue-200 bg-[#e6f0fa] flex flex-col">
                <div className="bg-[#9bbef3] py-3 text-center text-xl font-medium text-gray-900">1</div>
                <div className="p-8 flex-grow">
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Divergent Sketching</h4>
                  <p className="text-gray-800 text-lg">I explored 30+ layout concepts across three paradigms: stacked cards, inline toggles, and tabbed panels. Most of them were bad. That's the point of divergent sketching.</p>
                </div>
              </div>
              <div className="border border-blue-400 bg-[#e6f0fa] flex flex-col">
                <div className="bg-[#619eed] py-3 text-center text-xl font-medium text-white">2</div>
                <div className="p-8 flex-grow">
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Concept Testing</h4>
                  <p className="text-gray-800 text-lg">I tested 4 mid-fidelity prototypes with 10 users. Stacked cards with visible confidence bars won decisively on comprehension speed. Tabs made people feel like the other answers were hidden. Toggles made people feel like they were doing homework.</p>
                </div>
              </div>
              <div className="border border-blue-800 bg-[#163a73] flex flex-col">
                <div className="bg-[#0f2c59] py-3 text-center text-xl font-medium text-white">3</div>
                <div className="p-8 flex-grow">
                  <h4 className="font-bold text-xl mb-4 text-white">Training Collaboration</h4>
                  <p className="text-white/90 text-lg">I partnered with the ML team to define the training data structure: answer text, confidence float, and source URL per candidate. Getting engineering and design to agree on a schema was, as always, a negotiation disguised as a technical conversation.</p>
                </div>
              </div>
              <div className="border border-purple-200 bg-[#f7effc] flex flex-col">
                <div className="bg-[#dcbbf2] py-3 text-center text-xl font-medium text-gray-900">4</div>
                <div className="p-8 flex-grow">
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Calibration Design</h4>
                  <p className="text-gray-800 text-lg">I designed a feedback loop where users could flag incorrect answers, feeding corrections back into the model's confidence calibration. The chatbot could learn from being wrong, which already put it ahead of most people I've worked with.</p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-8">Key Design Decisions</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-l-[6px] border-blue-500 pl-6 py-2">
                <h4 className="font-bold text-xl mb-4 text-gray-900">Three answers, not two or five</h4>
                <p className="text-gray-800 text-lg leading-relaxed">Through testing, I found that two answers felt like a coin flip and five felt like a research project. Three gave users a primary recommendation with meaningful alternatives, without triggering decision fatigue. The magic number is real, and it's three.</p>
              </div>
              <div className="border-l-[6px] border-blue-500 pl-6 py-2">
                <h4 className="font-bold text-xl mb-4 text-gray-900">Confidence as a visual bar, not just a number</h4>
                <p className="text-gray-800 text-lg leading-relaxed">Early tests showed that a bare percentage (e.g., "87%") triggered anxiety in some users. They fixated on why it wasn't 100%. A filled bar with a color-coded badge (green, yellow, red) communicated relative confidence more intuitively and reduced that fixation by 40% in follow-up testing. Turns out, humans process "mostly green" faster than they process "eighty-seven percent."</p>
              </div>
              <div className="border-l-[6px] border-blue-500 pl-6 py-2">
                <h4 className="font-bold text-xl mb-4 text-gray-900">Source citations as anchors, not footnotes</h4>
                <p className="text-gray-800 text-lg leading-relaxed">I placed the source directly beneath each answer. Not in a collapsible section. Not at the bottom of the page. Not behind a "learn more" link that nobody clicks. The citation needed to be inseparable from the claim. This was the single highest-impact decision for perceived trustworthiness in testing, and also the one that required the least engineering effort. Love when that happens.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Design */}
        <section className="py-24 px-6 lg:px-12 bg-[#f5fbff]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-[#c2dcf0] w-fit px-3 py-1 mb-6 rounded-sm">04 — FINAL DESIGN</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">The Answer Experience</h2>
            
            <div className="mb-12 max-w-5xl">
              <p className="text-gray-800 text-xl leading-relaxed mb-6">
                The core interaction pattern I shipped: the user asks a question and receives three ranked responses, each with a confidence probability and an inline source citation. The highest-confidence answer leads, but the lower-ranked answers remain visible and accessible, not buried.
              </p>
              <p className="text-gray-800 text-xl leading-relaxed">
                For example, a user asking <strong>"What's the maximum contribution limit for a Roth IRA in 2025?"</strong> would see:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f5f4f0] p-8">
                <h4 className="font-bold text-xl mb-4 text-gray-900 border-b border-gray-300 pb-4">Answer 1 · 94% confidence</h4>
                <p className="text-gray-800 mb-8 text-lg">The maximum contribution limit for a Roth IRA in 2025 is $7,000 for individuals under 50, and $8,000 for individuals 50 and older (with the $1,000 catch-up provision).</p>
                <p className="text-sm text-gray-600 italic">Source: IRS.gov, Retirement Topics: IRA Contribution Limits (2025)</p>
              </div>
              <div className="bg-[#f5f4f0] p-8">
                <h4 className="font-bold text-xl mb-4 text-gray-900 border-b border-gray-300 pb-4">Answer 2 · 72% confidence</h4>
                <p className="text-gray-800 mb-8 text-lg">The 2025 Roth IRA contribution limit is $7,000, though eligibility may phase out for single filers earning above $150,000 (MAGI).</p>
                <p className="text-sm text-gray-600 italic">Source: NerdWallet, Roth IRA Rules and Limits for 2025</p>
              </div>
              <div className="bg-[#f5f4f0] p-8">
                <h4 className="font-bold text-xl mb-4 text-gray-900 border-b border-gray-300 pb-4">Answer 3 · 41% confidence</h4>
                <p className="text-gray-800 mb-8 text-lg">The contribution limit may remain at $6,500 for 2025, consistent with the 2023 limit, pending further IRS guidance.</p>
                <p className="text-sm text-gray-600 italic">Source: Investopedia, IRA Contribution Limits (2023 Archive)</p>
              </div>
            </div>

            <div className="max-w-5xl">
              <p className="text-gray-800 text-xl leading-relaxed">
                The design made the model's reasoning transparent at a glance. The top answer was grounded in a primary government source with high confidence. The second offered useful supplementary context at moderate confidence. The third surfaced a plausible but outdated answer that the system was explicitly uncertain about, effectively telling the user "I found this, but I wouldn't bet on it." Users could make an informed judgment in seconds, and the ones who wanted to dig deeper had a source link waiting for them.
              </p>
            </div>
          </div>
        </section>

        {/* Model Training & Calibration */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-blue-100/50 w-fit px-3 py-1 mb-6 rounded-sm">05 — MODEL TRAINING & CALIBRATION</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Teaching the Model to Rank Honestly</h2>
            
            <div className="mb-16 max-w-5xl">
              <p className="text-gray-800 text-xl leading-relaxed">
                Designing the UI was half the challenge. The other half was making sure the model's confidence scores weren't just vibes. A "90% confidence" answer needed to actually be correct roughly 90% of the time, or the whole transparency premise would collapse into a more elaborately decorated version of the same trust problem. I embedded directly with the ML team for four weeks to shape this work, which is designer-speak for "I moved my laptop to their side of the office and refused to leave."
              </p>
            </div>

            <h3 className="text-3xl font-bold mb-10 text-gray-900">My Contributions to Training</h3>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-3">
                  <span className="text-3xl font-normal">⛙</span> Source-grounding taxonomy
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">I developed a tiered source classification system that the model used as a training signal. Tier 1: government and official databases. Tier 2: established publications and peer-reviewed sources. Tier 3: community forums, user-generated content, and everything your uncle shares on Facebook. The model learned to weight its confidence scores partly based on the authority tier of its retrieved source, which improved calibration significantly. Shocking that teaching a model to trust the IRS more than Reddit made it more accurate.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-3">
                  <span className="text-3xl font-normal">☷</span> Evaluation rubric design
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">I authored the human evaluation rubric used by our annotation team to score answer quality across four dimensions: factual accuracy, source relevance, confidence calibration, and answer completeness. This rubric directly shaped the RLHF reward model. In practice, this meant I spent two weeks arguing about the difference between "partially correct" and "correct but incomplete" until we had a rubric everyone could apply consistently.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-3">
                  <span className="text-3xl font-normal">⍰</span> Edge-case curation
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">I identified and curated roughly 200 "hard queries," questions with contested answers, recently-changed facts, or inherently ambiguous phrasing, and used them as a stress-test set for the model's confidence ranking. These queries exposed calibration drift early and became a standing regression suite. They were the trick questions on the exam, and the model needed to learn to say "I'm not sure" instead of guessing confidently.</p>
              </div>
            </div>

            <div className="bg-[#dcf0fb] p-10 max-w-5xl">
              <h4 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-3">
                <span className="text-blue-600 leading-none">❑</span> Key insight from training:
              </h4>
              <p className="text-gray-800 leading-relaxed text-xl">
                The model initially over-indexed on source recency, assigning high confidence to recent but unreliable sources. A blog post from yesterday outranked a government publication from six months ago, which is exactly the kind of logic that makes misinformation spread. I flagged this pattern and worked with ML to add authority weighting alongside recency. That single adjustment improved calibration accuracy by <span className="text-[#3b82f6] font-bold">18 percentage points</span> on our evaluation set.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-24 px-6 lg:px-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-[#c2dcf0] w-fit px-3 py-1 mb-6 rounded-sm">06 — OUTCOMES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">What Shipped, What Changed</h2>
            
            <p className="text-gray-800 text-xl leading-relaxed mb-20 max-w-5xl">
              We rolled out the three-answer confidence-ranked experience to 100% of users over a staged two-week release. I monitored behavioral metrics daily during rollout and ran a post-launch study with 12 users at the four-week mark.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
              <div className="text-center">
                <p className="text-6xl font-light text-gray-800 mb-6">–47%</p>
                <p className="font-bold text-xl text-gray-900 mb-3">External verification</p>
                <p className="text-gray-600">Reduction in external verification behavior</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-light text-gray-800 mb-6">+33%</p>
                <p className="font-bold text-xl text-gray-900 mb-3">Answer acceptance</p>
                <p className="text-gray-600">Increase in answer acceptance rate</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-light text-gray-800 mb-6">–29%</p>
                <p className="font-bold text-xl text-gray-900 mb-3">Session abandonment</p>
                <p className="text-gray-600">Drop in session abandonment on ambiguous queries</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-light text-gray-800 mb-6">4.7</p>
                <p className="font-bold text-xl text-gray-900 mb-3">Trust score</p>
                <p className="text-gray-600">Up from 4.3 on a 5-point Likert scale</p>
              </div>
            </div>

            <p className="text-gray-800 text-xl leading-relaxed mb-20 max-w-5xl">
              The qualitative feedback was just as telling. Users described the experience as feeling like "getting a second and third opinion" and said the confidence bars gave them "permission to trust the top answer." Several enterprise users reported that the source citations alone eliminated their need to cross-reference. The product had become the reference, which is the kind of outcome you frame and put on a wall.
            </p>

            <h3 className="text-3xl font-bold mb-10 text-gray-900">What I'd Do Differently</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-l-[6px] border-blue-500 pl-8 py-2">
                <h4 className="font-bold text-xl mb-4 text-gray-900">Longitudinal calibration study</h4>
                <p className="text-gray-800 text-lg leading-relaxed">If I were to revisit this work, I'd invest earlier in a longitudinal study of confidence calibration perception. We optimized for first-impression comprehension, but I suspect that over time, power users develop a more nuanced mental model of what the percentages actually mean, and the UI should evolve to meet them there.</p>
              </div>
              <div className="border-l-[6px] border-blue-500 pl-8 py-2">
                <h4 className="font-bold text-xl mb-4 text-gray-900">User-controlled confidence threshold</h4>
                <p className="text-gray-800 text-lg leading-relaxed">I'd also explore a user-controlled confidence threshold: let users set a minimum confidence below which answers are suppressed, giving them agency over the noise-to-signal ratio. Some people want three answers. Some people want one good one. The product should be smart enough to accommodate both.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-24 px-6 lg:px-12 bg-[#f9fbff]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.1em] text-gray-700 bg-[#c2dcf0] w-fit px-3 py-1 mb-6 rounded-sm">07 — REFLECTION</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">What I Took Away</h2>
            
            <div className="border-l-[6px] border-blue-500 pl-8 mb-12 py-2">
              <p className="text-3xl font-bold text-gray-900">Transparency is not a feature. It is the product.</p>
            </div>

            <div className="text-gray-800 text-xl leading-relaxed space-y-8 max-w-5xl">
              <p>
                This project solidified a conviction I now carry into every AI-facing design problem: transparency is not a feature. It is the product. The chatbot didn't get smarter when we shipped this. We just stopped hiding how smart (or uncertain) it already was. The trust gains came not from improving the model, but from making its existing behavior legible. Which, if you think about it, is a pretty damning indictment of how most AI products treat their users: capable of handling nuance, but never given the chance.
              </p>
              <p>
                I also learned that designing for probabilistic information demands deep, genuine collaboration with ML. I couldn't have designed the confidence UI without understanding calibration curves, and the ML team couldn't have built a well-calibrated model without the human-evaluation rubric I brought from the design side. The best work happened in the overlap, in the room where the designer and the engineer were both slightly outside their comfort zones and too stubborn to admit it.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}