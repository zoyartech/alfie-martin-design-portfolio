import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function TCSAttrition() {
  const [expandedStep, setExpandedStep] = useState(1);

  const designSteps = [
    {
      id: 1,
      weeks: "Weeks 1–4",
      title: "Content Architecture",
      desc: "Built a taxonomy of learnable domains — Research Methods, Deliverable Standards, Stakeholder Communication, Tool Configuration, Project Lifecycle — each subdivided into single-objective modules. Workshopped with 6 senior designers and 2 managers."
    },
    {
      id: 2,
      weeks: "Weeks 5–7",
      title: "Interaction Model & Wireframes",
      desc: "Prototyped three paradigms: linear course-based, choose-your-own-path, and contextual recommendation. Testing with 5 recent hires favored the recommendation model. Landed on a hybrid: a recommended daily path with full browse access."
    },
    {
      id: 3,
      weeks: "Weeks 8–10",
      title: "Visual Design & Content Prototyping",
      desc: "Designed a visual system that broke from TCS's corporate brand — restrained palette with intentional warmth, generous whitespace, and typographic hierarchy prioritizing scannability. Content built around annotated screenshots, short video walkthroughs, and interactive knowledge checks."
    },
    {
      id: 4,
      weeks: "Weeks 11–12",
      title: "Usability Testing & Iteration",
      desc: "Two rounds of moderated testing with 12 participants. Removed badges and streaks (felt patronizing) in favor of a simple completion map. Added playback speed controls and chapter markers to videos. Reframed knowledge checks as reflection prompts."
    },
    {
      id: 5,
      weeks: "Weeks 13–14",
      title: "Engineering Handoff & Pilot Launch",
      desc: "Built detailed annotation documents for every screen. Daily standups during the build sprint. Launched a pilot with the incoming January campus cohort — 32 new designers across four NA offices."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">UX STRATEGY</p>
          <h1 className="text-4xl md:text-5xl font-light mb-12">Using Design to lower Attrition Rates at TCS</h1>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex justify-center p-8">
            <img
              loading="lazy"
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3da751d03_Screenshot2026-03-21at30849PM.png"
              alt="Using Design to lower Attrition Rates at TCS"
              className="max-w-full h-auto object-contain shadow-sm rounded-md bg-white" />
            
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 flex flex-col items-center">
            <h2 className="text-[#333] mb-6 text-3xl font-black">Descript Version Case Study</h2>
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px', border: '1px solid #E5DDF5', backgroundColor: '#f8fafc' }}>
              <iframe
              src="https://share.descript.com/embed/KW7DYW6OXNO"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen>
            </iframe>
            </div>
        </motion.div>

        {/* Designing For Learning Design Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-24 pt-16 border-t border-gray-100">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">CASE STUDY</p>
          <h2 className="text-4xl md:text-5xl font-light mb-12">Designing For Learning Design</h2>
          
          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Role</p>
              <p className="text-gray-900 font-medium">Lead Product Designer</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Timeline</p>
              <p className="text-gray-900 font-medium">14 Weeks</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Team</p>
              <p className="text-gray-900 font-medium">2 Designers, 1 PM, 3 Engineers</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-gray-500 mb-2 uppercase">Platform</p>
              <p className="text-gray-900 font-medium">Internal Web App (Desktop-first)</p>
            </div>
          </div>

          {/* 01. Context */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider rounded-full mb-6">01. CONTEXT</span>
            <h3 className="text-3xl font-light mb-6">The design departments were bleeding talent</h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>When I joined this initiative at TCS Interactive, the North American design practice faced a crisis leadership could no longer frame as "normal churn." Attrition across UX, visual design, and research had climbed to <strong className="text-pink-500 font-medium">nearly 38% within the first twelve months</strong> — more than double the company-wide average. Recruiting costs, delayed timelines, overburdened senior staff, and a compounding knowledge gap made every departure harder to absorb.</p>
              <p>Exit interviews told a consistent story: new campus hires felt "thrown in the deep end." TCS Interactive had a distinct UX practice — specific cadences, deliverable expectations, stakeholder norms — but none of it was documented. Onboarding was a two-day corporate orientation, then immediate staffing on active accounts. The expectation was that designers would learn by osmosis. They burned out instead.</p>
            </div>
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl text-blue-900 text-lg">
              <p>The core problem was not a talent quality issue or a compensation gap. It was a <strong>knowledge transfer failure at the point of highest vulnerability</strong> — the first ninety days — compounded by the absence of any learning infrastructure designed for how designers actually learn.</p>
            </div>
          </div>

          {/* 02. Discovery & Research */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider rounded-full mb-6">02. DISCOVERY & RESEARCH</span>
            <h3 className="text-3xl font-light mb-6">Understanding why the gap existed</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">I led a four-week discovery phase combining qualitative depth with quantitative signal. I conducted <strong>18 semi-structured interviews</strong> across three cohorts — recent hires who left within a year, designers who thrived past year one, and design managers. A <strong>diary study with 8 campus hires</strong> over six weeks logged moments of confusion, confidence, and friction. I also audited every existing onboarding artifact.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-medium mb-3">Knowledge was tribal, not documented</h4>
                <p className="text-gray-600">Critical workflow knowledge — how to scope a heuristic evaluation, what a stakeholder deck should look like — lived entirely in senior designers' heads. When they left, the knowledge vanished.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-medium mb-3">No protected learning time</h4>
                <p className="text-gray-600">New hires were immediately billable. Utilization targets meant mentoring was always the first thing deprioritized.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-medium mb-3">Confidence collapsed at weeks 3–4</h4>
                <p className="text-gray-600">Hires who survived past week eight without a major "failure moment" were significantly more likely to stay past twelve months. The window was narrow and predictable.</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-medium mb-3">Generic L&D content didn't land</h4>
                <p className="text-gray-600">The corporate LMS offered content too generic or too dense for TCS's specific practice context. Engagement rates sat below 12%.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-b border-gray-100 py-10">
              <div>
                <p className="text-4xl font-light text-gray-900 mb-2">38%</p>
                <p className="text-sm font-medium text-gray-900 mb-1">First-Year Attrition</p>
                <p className="text-xs text-gray-500">Across NA design teams</p>
              </div>
              <div>
                <p className="text-4xl font-light text-gray-900 mb-2">12%</p>
                <p className="text-sm font-medium text-gray-900 mb-1">L&D Engagement</p>
                <p className="text-xs text-gray-500">Existing platform content</p>
              </div>
              <div>
                <p className="text-4xl font-light text-gray-900 mb-2">Wk 3-4</p>
                <p className="text-sm font-medium text-gray-900 mb-1">Critical Drop Window</p>
                <p className="text-xs text-gray-500">Confidence collapse point</p>
              </div>
              <div>
                <p className="text-4xl font-light text-gray-900 mb-2">0</p>
                <p className="text-sm font-medium text-gray-900 mb-1">Documented Artifacts</p>
                <p className="text-xs text-gray-500">TCS-specific UX process docs</p>
              </div>
            </div>
          </div>

          {/* 03. Strategy */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider rounded-full mb-6">03. STRATEGY</span>
            <h3 className="text-3xl font-light mb-6">Why micro-learning was the right frame</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">The research made one thing clear: the solution could not be another corporate training course. Existing L&D failed precisely because it treated learning as a discrete event. What new designers needed was a continuous, low-friction, context-specific experience woven into their daily workflow during the critical first ninety days.</p>
            
            <div className="grid md:grid-cols-2 gap-10 mb-8">
              <div className="p-8 bg-blue-50 rounded-xl">
                <h4 className="text-xl font-medium mb-4 text-blue-900">Why Micro-Learning?</h4>
                <ul className="space-y-4 text-blue-800 list-disc list-outside ml-4">
                  <li>Short, focused modules with spaced repetition outperform marathon sessions for skill transfer</li>
                  <li>Billability constraints demanded 5–10 minute learning windows, not half-day workshops</li>
                  <li>Natural structure for capturing "how we do UX at TCS" knowledge, one module per process</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-4">Design Principles</h4>
                <ul className="space-y-4 text-gray-600 list-disc list-outside ml-4">
                  <li><strong>Contextual over comprehensive</strong> — every module anchored to a real TCS scenario</li>
                  <li><strong>Five minutes or less</strong> — if it couldn't be taught in five minutes, break it smaller</li>
                  <li><strong>Show the work, not just the rules</strong> — annotated walkthroughs of real TCS deliverables</li>
                  <li><strong>Confidence is the KPI</strong> — self-reported confidence tracked alongside completion rates</li>
                </ul>
              </div>
            </div>

            <div className="pl-6 border-l-4 border-pink-500 text-lg text-gray-800 italic">
              Give every new designer access to the mentor they should have had — available on demand, structured for how the brain actually retains information.
            </div>
          </div>

          <div className="w-full flex justify-center mb-20">
            <img
              loading="lazy"
              src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b6f41cae8_aaaaaa-TCS-lms.png"
              alt="TCS LMS App"
              className="max-w-full h-auto object-contain" />
          </div>

          {/* 04. Design Process */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold tracking-wider rounded-full mb-6">04. DESIGN PROCESS</span>
            <h3 className="text-3xl font-light mb-10">From research to shipped product</h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
              
              {designSteps.map((step) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white ${expandedStep === step.id ? 'bg-blue-600' : 'bg-blue-400'} text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300`}>
                    {step.id}
                  </div>
                  <div 
                    onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                    className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-xl border shadow-sm bg-white cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${expandedStep === step.id ? 'border-blue-200 shadow-md ring-1 ring-blue-50' : 'border-gray-100 hover:border-blue-100'}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-semibold text-blue-500">{step.weeks}</div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedStep === step.id ? 'rotate-180 text-blue-500' : ''}`} />
                    </div>
                    <h4 className="text-lg font-medium">{step.title}</h4>
                    
                    <AnimatePresence>
                      {expandedStep === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          <div className="mb-20 flex justify-center">
            <div className="w-full max-w-[60%] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-black">
              <video
                src="https://base44.app/api/apps/6974e154f708f4918a2b8d02/files/mp/public/6974e154f708f4918a2b8d02/15be67358_UX-micro-learning-lms.mov"
                controls
                className="w-full h-auto"
                poster="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/b6f41cae8_aaaaaa-TCS-lms.png">
                
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* 05. Key Design Decisions */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold tracking-wider rounded-full mb-6">05. KEY DESIGN DECISIONS</span>
            <h3 className="text-3xl font-light mb-8">What the product looked and felt like</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 border border-blue-200 rounded-xl bg-white shadow-sm">
                <h4 className="text-xl font-medium mb-3 text-gray-900">Adaptive Learning Path</h4>
                <p className="text-gray-600">The dashboard surfaced a personalized "Today's Path" — 2-3 modules based on project assignment, tenure week, and completion history. Removed decision fatigue for new hires while keeping the full library one click away.</p>
              </div>
              <div className="p-8 border border-blue-200 rounded-xl bg-white shadow-sm">
                <h4 className="text-xl font-medium mb-3 text-gray-900">Annotated Artifact Walkthroughs</h4>
                <p className="text-gray-600">Real, anonymized TCS project artifacts — research plans, journey maps, stakeholder decks — became interactive walkthroughs with clickable hotspots explaining decisions, TCS-specific expectations, and common mistakes. Directly addressed the tribal knowledge problem.</p>
              </div>
              <div className="p-8 border border-blue-200 rounded-xl bg-white shadow-sm">
                <h4 className="text-xl font-medium mb-3 text-gray-900">Confidence Pulse Checks</h4>
                <p className="text-gray-600">Lightweight self-rating prompts embedded at module end and weekly intervals. Responses fed the adaptive path algorithm and a manager-facing dashboard — giving leads early signal on who needed support, without making new hires feel surveilled.</p>
              </div>
              <div className="p-8 border border-blue-200 rounded-xl bg-white shadow-sm">
                <h4 className="text-xl font-medium mb-3 text-gray-900">Manager Insight Dashboard</h4>
                <p className="text-gray-600">A companion view aggregating anonymized confidence trends, completion rates, and engagement patterns. Surfaced which knowledge domains had the widest gaps — shifting managers from "hope they figure it out" to informed, proactive mentorship. No individual performance rankings.</p>
              </div>
            </div>
          </div>

          {/* 06. Outcomes */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider rounded-full mb-6">06. OUTCOMES</span>
            <h3 className="text-3xl font-light mb-6">What changed after launch</h3>
            <p className="text-gray-600 text-lg mb-10">The pilot ran for twelve weeks with the January campus cohort. I tracked quantitative metrics weekly and conducted qualitative check-ins with eight participants at the four-week and ten-week marks.</p>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-5xl font-light text-gray-900 w-24 shrink-0">52%</div>
                <div className="text-gray-700">Reduction in first-year attrition — projected twelve-month rate dropped from <strong className="text-gray-900">38% to an estimated 18%</strong> versus the prior year's January cohort.</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-5xl font-light text-gray-900 w-24 shrink-0">4.2&times;</div>
                <div className="text-gray-700">Engagement versus the legacy LMS — averaging <strong className="text-gray-900">3.4 sessions per week per user</strong>, compared to the 12% baseline engagement rate.</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-5xl font-light text-gray-900 w-24 shrink-0">41%</div>
                <div className="text-gray-700">Self-reported confidence lift across all measured domains between <strong className="text-gray-900">week one and week ten</strong> of the pilot.</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-5xl font-light text-gray-900 w-24 shrink-0">89%</div>
                <div className="text-gray-700">Module completion rate — pilot participants completed recommended modules within the suggested timeframe, versus the <strong className="text-gray-900">12% engagement baseline</strong>.</div>
              </div>
            </div>
          </div>

          {/* 07. Reflections */}
          <div className="mb-20">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider rounded-full mb-6">07. REFLECTIONS</span>
            <h3 className="text-3xl font-light mb-10">What I learned and what I'd do differently</h3>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                   The content was harder than the product
                </h4>
                <p className="text-gray-600">Getting senior designers to record walkthroughs and contribute content was the hardest part — not the interaction design. I underestimated the organizational effort. Next time, I'd allocate dedicated content production time from day one, not run it in parallel.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                   Removing gamification was the right call
                </h4>
                <p className="text-gray-600">Badges, streaks, and leaderboards felt condescending to professionals learning their job — not children collecting stickers. The simple completion map and confidence trajectory drove higher engagement because people trusted the platform's intent.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                   The manager dashboard changed the conversation
                </h4>
                <p className="text-gray-600">Design leads said visibility into where new hires felt least confident gave them permission — and a framework — for more targeted mentoring. Several described it as "finally having a shared language about readiness."</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-3 flex items-center gap-3">
                   This was a systems design problem disguised as a product problem
                </h4>
                <p className="text-gray-600">DesignBase was a lever, not a fix. Root causes — billability pressure, absent documentation culture, unclear growth paths — required organizational shifts. I advocated post-launch for protected non-billable learning time, a peer mentorship matching program, and a quarterly content review process. Some happened. Others are still in progress.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>);

}