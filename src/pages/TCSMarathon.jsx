import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Map, Bell, Trophy, Activity } from "lucide-react";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function TCSMarathon() {
  return (
    <div className="min-h-screen bg-[#F3F2EC] text-[#222222]">


      {/* Main Content */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
            <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
                <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
            </Link>
        </div>

        {/* Hero */}
        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight text-[#333]">TCS NYC Marathon App — Race-Day Experience Redesign</h1>
              <p className="text-sm tracking-[0.2em] text-gray-500 mb-4 font-semibold">OVERVIEW</p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                I was brought on to redesign the race-day experience inside the TCS NYC Marathon mobile app — one of the most complex fan and participant experiences in live sports. With 50,000 runners and millions of spectators descending on five boroughs simultaneously, the design challenge wasn't just visual polish. It was real-time data architecture made human.
              </p>
            </motion.div>
            <motion.div className="flex-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
               <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/4ddd293aa_BLUEMAP.png" alt="TCS Marathon App Hero" className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        {/* Stats & Role */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
                <div>
                    <p className="text-5xl font-medium mb-2 text-[#333]">50K</p>
                    <p className="text-lg text-gray-600 font-medium">Active Runners</p>
                </div>
                <div>
                    <p className="text-5xl font-medium mb-2 text-[#333]">5</p>
                    <p className="text-lg text-gray-600 font-medium">Boroughs</p>
                </div>
                <div>
                    <p className="text-5xl font-medium mb-2 text-[#333]">26.2</p>
                    <p className="text-lg text-gray-600 font-medium">Miles Tracked</p>
                </div>
                <div>
                    <p className="text-5xl font-medium mb-2 text-[#333]">1M+</p>
                    <p className="text-lg text-gray-600 font-medium">Spectators</p>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-medium mb-6 text-[#333]">My Role</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                    <span className="bg-[#E7E5DD] px-6 py-4 rounded font-medium text-gray-800 flex-1 min-w-[200px] text-center">UX Research</span>
                    <span className="bg-[#E7E5DD] px-6 py-4 rounded font-medium text-gray-800 flex-1 min-w-[200px] text-center">Interaction Design</span>
                    <span className="bg-[#E7E5DD] px-6 py-4 rounded font-medium text-gray-800 flex-1 min-w-[200px] text-center">Prototyping</span>
                    <span className="bg-[#E7E5DD] px-6 py-4 rounded font-medium text-gray-800 flex-1 min-w-[200px] text-center">Stakeholder Presentations</span>
                    <span className="bg-[#E7E5DD] px-6 py-4 rounded font-medium text-gray-800 flex-1 min-w-[200px] text-center">Handoff</span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed max-w-5xl">
                    I led the end-to-end design of the interactive runner tracking and race-day dashboard features, working directly with engineers at NYRR and the TCS technology partnership team. I owned the design from discovery through final handoff, presenting iteratively to both product leads and executive stakeholders.
                </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-medium mb-8 text-[#333]">The Problem: A Fractured Experience at the Worst Moment</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The previous app had been built feature-by-feature over several years, and it showed. Spectators trying to find their runner on race day were navigating a confusing hierarchy of nested menus, unreliable GPS updates, and a map interface that locked up under load. Notifications were delayed or never arrived. The app felt like it had been designed for a press release rather than a person standing on First Avenue in the rain.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Runners, meanwhile, had no confidence their splits were transmitting correctly, couldn't share their progress naturally to social platforms, and the post-race experience dropped off entirely once they crossed the finish line. We had two core audiences with almost zero feature overlap, and we'd been designing for neither.
                </p>
            </div>
            <div className="flex-1">
                <div className="bg-[#2A2A2A] text-[#F3F2EC] p-10 md:p-16 h-full flex flex-col justify-center shadow-lg">
                    <p className="text-2xl font-medium mb-8 leading-snug">"Where is my husband? He was supposed to be here twenty minutes ago."</p>
                    <p className="text-lg text-gray-300">That's the user story we were really solving for.</p>
                </div>
            </div>
          </div>
        </section>

        {/* Discovery */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-medium mb-8 text-[#333]">Discovery: Research in the Wild</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-5xl">
                I ran a contextual inquiry at the prior year's marathon, stationed at four spectator hotspots along the course — the Queensboro Bridge at mile 15, First Avenue, Central Park South, and the finish line at Tavern on the Green. I watched what people actually did with their phones: screenshots texted to group chats, refreshing Safari when the app lagged, gathering in clusters around someone with a working signal.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-5xl">
                I also interviewed twelve runners in a post-race debrief. The consistent theme: they wanted the app to be a record of what they'd done, not just a broadcast tool for others. They wanted to feel seen.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-300 bg-[#E7E5DD]/50 p-8">
                    <h4 className="text-xl font-medium mb-3 text-[#333]">Queensboro Bridge</h4>
                    <p className="text-gray-600">Mile 15 — high-density spectator cluster, signal congestion</p>
                </div>
                <div className="border border-gray-300 bg-[#E7E5DD]/50 p-8">
                    <h4 className="text-xl font-medium mb-3 text-[#333]">First Avenue</h4>
                    <p className="text-gray-600">Peak crowd volume, single-hand phone use observed</p>
                </div>
                <div className="border border-gray-300 bg-[#E7E5DD]/50 p-8">
                    <h4 className="text-xl font-medium mb-3 text-[#333]">Central Park South</h4>
                    <p className="text-gray-600">Emotional peak — families converging near finish</p>
                </div>
                <div className="border border-gray-300 bg-[#E7E5DD]/50 p-8">
                    <h4 className="text-xl font-medium mb-3 text-[#333]">Finish Line</h4>
                    <p className="text-gray-600">Tavern on the Green — complete dead zone in the app experience</p>
                </div>
            </div>
          </div>
        </section>

        {/* Key Insights & Design Process */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-medium mb-12 text-[#333]">Key Insights from Research</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-24">
                <div className="bg-white shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#B6CFFF] text-center py-3 font-medium text-lg text-[#333]">1</div>
                    <div className="p-8 flex-1 border border-t-0 border-[#B6CFFF]">
                        <h4 className="text-xl font-medium mb-4 text-[#333]">Update Frequency Felt Untrustworthy</h4>
                        <p className="text-gray-600">Spectators refreshed the tracker an average of <strong>22 times per hour</strong> — the update frequency felt untrustworthy, not insufficient.</p>
                    </div>
                </div>
                <div className="bg-white shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#B6CFFF] text-center py-3 font-medium text-lg text-[#333]">2</div>
                    <div className="p-8 flex-1 border border-t-0 border-[#B6CFFF]">
                        <h4 className="text-xl font-medium mb-4 text-[#333]">Group Coordination Was the Real Use Case</h4>
                        <p className="text-gray-600"><strong>80% of spectators</strong> used the app to coordinate with other spectators, not just to track their runner — group features were entirely absent.</p>
                    </div>
                </div>
                <div className="bg-white shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#B6CFFF] text-center py-3 font-medium text-lg text-[#333]">3</div>
                    <div className="p-8 flex-1 border border-t-0 border-[#B6CFFF]">
                        <h4 className="text-xl font-medium mb-4 text-[#333]">Confidence in Data Mattered</h4>
                        <p className="text-gray-600">Runners consistently underestimated their own split accuracy. <strong>Confidence in data mattered as much as the data itself.</strong></p>
                    </div>
                </div>
                <div className="bg-white shadow-sm overflow-hidden flex flex-col">
                    <div className="bg-[#B6CFFF] text-center py-3 font-medium text-lg text-[#333]">4</div>
                    <div className="p-8 flex-1 border border-t-0 border-[#B6CFFF]">
                        <h4 className="text-xl font-medium mb-4 text-[#333]">The Finish Line Was a Dead Zone</h4>
                        <p className="text-gray-600">The finish line moment was a complete dead zone — <strong>no celebration state, no shareable summary, no keepsake.</strong></p>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-medium mb-12 text-[#333]">Design Process: How I Got There</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 relative">
                {/* Visual line connecting boxes could go here, omitting for simplicity/cleanliness */}
                <div className="border-2 border-[#333] rounded-[30px] p-6 text-center w-full md:w-[18%] bg-transparent z-10 min-h-[160px] flex flex-col justify-center">
                    <h4 className="mb-2 text-lg font-bold">Research</h4>
                    <p className="text-sm text-gray-600">Collect user insights and metrics</p>
                </div>
                <div className="border-2 border-[#333] rounded-[30px] p-6 text-center w-full md:w-[18%] bg-transparent z-10 min-h-[160px] flex flex-col justify-center">
                    <h4 className="font-medium text-lg mb-2">Jobs-to-be-Done</h4>
                    <p className="text-sm text-gray-600">Define user tasks and outcomes</p>
                </div>
                <div className="border-2 border-[#333] rounded-[30px] p-6 text-center w-full md:w-[18%] bg-transparent z-10 min-h-[160px] flex flex-col justify-center">
                    <h4 className="font-medium text-lg mb-2">Information Architecture</h4>
                    <p className="text-sm text-gray-600">Organize content and flows</p>
                </div>
                <div className="border-2 border-[#333] rounded-[30px] p-6 text-center w-full md:w-[18%] bg-transparent z-10 min-h-[160px] flex flex-col justify-center">
                    <h4 className="font-medium text-lg mb-2">Wireframes</h4>
                    <p className="text-sm text-gray-600">Sketch layouts and interactions</p>
                </div>
                <div className="border-2 border-[#333] rounded-[30px] p-6 text-center w-full md:w-[18%] bg-transparent z-10 min-h-[160px] flex flex-col justify-center">
                    <h4 className="font-medium text-lg mb-2">Prototype Testing</h4>
                    <p className="text-sm text-gray-600">Validate with real users</p>
                </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
                I reframed the product around two distinct jobs-to-be-done: the <strong>spectator's job</strong> — find, follow, and celebrate my runner — and the <strong>runner's job</strong> — feel supported, track my progress, and commemorate what I did. These jobs shared almost no screens.
            </p>
          </div>
        </section>

        {/* Restructuring the Architecture */}
        <section className="py-20 px-6 lg:px-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-medium mb-12 text-[#333]">Restructuring the Architecture</h2>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="bg-[#2A2A2A] text-[#F3F2EC] p-8 md:p-12 shadow-md">
                    <h3 className="text-2xl font-medium mb-4">The Insight</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I restructured the information architecture from a feature list into two explicit modes. Onboarding asked users to identify themselves up front — spectator or participant — and the app adapted accordingly. This single change <strong>reduced navigational errors by over 60%</strong> in usability testing.
                    </p>
                </div>
                <div className="p-8 md:p-12 border border-gray-200 bg-[#F9F9F9]">
                    <h3 className="text-2xl font-medium mb-4 text-[#333]">The Prototype</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I built a mid-fidelity prototype in Figma focused entirely on the spectator tracking flow and ran five hallway tests in the NYRR offices. Three rounds of iteration later, I had a map interaction model that surfaced runner position, projected arrival, and a one-tap "I'm here" pin — all above the fold, no navigation required.
                    </p>
                </div>
            </div>
            
            <div className="bg-[#ffffff] mb-8 p-8 text-center rounded-lg md:p-16 border border-gray-200 overflow-hidden">
                 <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/c303508d6_2screens.png" alt="App Screens Modes" className="mx-auto max-h-[600px] object-contain rounded shadow-sm" />
            </div>
          </div>
        </section>

        {/* Key Features Designed */}
        <section className="bg-[#bfcbd4] text-slate-950 px-6 py-24 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-5xl font-medium mb-6 text-[#333]">Key Features Designed</h2>
                <p className="text-lg text-slate-800">Building for the chaotic environment of race day meant focusing on immediacy, clarity, and emotional resonance.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-slate-900 shrink-0"><Map className="w-8 h-8" strokeWidth={1.5} /></div>
                    <div>
                        <h4 className="text-2xl font-medium mb-3 text-[#333]">Live Runner Map</h4>
                        <p className="text-slate-800 text-lg leading-relaxed">Redesigned map experience with projected arrival windows and "meet here" spectator pins — optimized for single-hand use in a crowd.</p>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-slate-900 shrink-0"><Bell className="w-8 h-8" strokeWidth={1.5} /></div>
                    <div>
                        <h4 className="text-2xl font-medium mb-3 text-[#333]">Smart Notifications</h4>
                        <p className="text-slate-800 text-lg leading-relaxed">Predictive push alerts based on pace data — notified spectators <strong>10–12 minutes before runner arrival</strong> at their location.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-slate-900 shrink-0"><Trophy className="w-8 h-8" strokeWidth={1.5} /></div>
                    <div>
                        <h4 className="text-2xl font-medium mb-3 text-[#333]">Finish Line Moment</h4>
                        <p className="text-slate-800 text-lg leading-relaxed">A full-screen celebration state triggered at crossing — personalized with the runner's final time, course map, and shareable graphic.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-white/60 p-4 rounded-2xl shadow-sm text-slate-900 shrink-0"><Activity className="w-8 h-8" strokeWidth={1.5} /></div>
                    <div>
                        <h4 className="text-2xl font-medium mb-3 text-[#333]">Split Dashboard</h4>
                        <p className="text-slate-800 text-lg leading-relaxed">Runner-facing pace card with confidence indicators — subtle visual cues that communicated GPS lock status without technical language.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#000000] mb-16 text-3xl font-medium lg:text-4xl">Outcome: What Shipped, What Moved</h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div>
                    <p className="text-[#000000] mb-4 text-5xl font-medium">4.4★</p>
                    <p className="text-lg font-medium text-[#333] mb-2">App Store Rating</p>
                    <p className="text-sm text-gray-600">Up from 2.8 stars following the redesigned race-day release</p>
                </div>
                <div>
                    <p className="text-[#000000] mb-4 text-5xl font-medium">+34%</p>
                    <p className="text-lg font-medium text-[#333] mb-2">Session Length</p>
                    <p className="text-sm text-gray-600">Increased on race day — users stayed in the app rather than falling back to mobile browsers</p>
                </div>
                <div>
                    <p className="text-[#000000] mb-4 text-5xl font-medium">41%</p>
                    <p className="text-lg font-medium text-[#333] mb-2">Finish Line Shares</p>
                    <p className="text-sm text-gray-600">Of finishers used the shareable in year one — an unplanned viral mechanic driving organic reach for NYRR</p>
                </div>
                <div>
                    <p className="text-[#000000] mb-4 text-5xl font-medium">-52%</p>
                    <p className="text-lg font-medium text-[#333] mb-2">Support Tickets</p>
                    <p className="text-sm text-gray-600">Tracking-related tickets dropped year-over-year — the largest single-year reduction in NYRR's product history</p>
                </div>
            </div>

            <div className="border-l-4 border-[#333] pl-6 py-2 mb-16">
                <p className="text-stone-950 text-xl leading-relaxed italic">The best outcome wasn't a metric. It was watching a woman in Central Park burst into tears when the notification arrived — her daughter was two blocks away.

              </p>
            </div>

            <div>
                <h3 className="text-[#000000] mb-4 text-2xl font-medium">Reflection</h3>
                <p className="text-zinc-950 text-lg leading-relaxed">This project taught me that designing for live events is a fundamentally different discipline from designing for static utility. The stakes are emotional, the context is chaotic, and the user's patience is approximately zero. Every interaction had to work on first touch, in a crowd, on a cellular network under catastrophic load, with cold hands.

              </p>
            </div>
          </div>
        </section>

        {/* The Last 5% */}
        <section className="py-20 px-6 lg:px-12 bg-[#F3F2EC]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
                <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/3f043b281_BLUEMAP.png" alt="App Screens Detail" className="w-full max-h-[600px] object-contain drop-shadow-xl rounded-xl" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl lg:text-5xl font-medium mb-8 text-[#333]">The Last 5%</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    I also learned to design for the moment after the main event. The finish line feature almost didn't make it into scope. I fought for it in three separate stakeholder reviews.
                </p>
                <div className="bg-[#cceaff] p-8 rounded border border-[#D5D3CA]">
                    <div className="flex gap-4">
                        <div className="mt-1"><div className="text-slate-950 rounded-sm w-5 h-5 border-2 border-gray-500"></div></div>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            That last 5% of the experience — the one that happens when everything else is over — turned out to be the thing people remembered most.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}