import React from "react";
import { motion } from "framer-motion";

export default function AdinaProject() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-pink-100 selection:text-pink-900 pb-0 pt-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-serif {
          font-family: "PT Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
        .font-sans {
          font-family: "DM Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24">
          
            
            <h2 className="text-[#9a3c5a] mb-6 text-base font-semibold tracking-tight leading-[1.1] md:text-6xl">Help Without Asking.

          </h2>
            <p className="text-neutral-950 text-xs font-light leading-relaxed md:text-2xl max-w-4xl">A community-powered mobile app I'm building for people who need help but aren't ready  or willing  to call the authorities. One button. Real people. No system. Watch Descript Video with audio been below :

          </p>
        </motion.div>

        <div className="flex justify-center mb-24">
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px', border: '1px solid #E5DDF5' }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fXCXFWn0jCo?si=uPBB_bzc52Z6cegl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

        {/* The Problem */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-base font-serif md:text-5xl">The Problem</h2>
            <div className="inline-block bg-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-8 rounded uppercase font-sans">
                THE SYSTEM WASN'T BUILT FOR EVERYONE
            </div>
            <div className="text-lg md:text-xl text-slate-700 space-y-6">
                <p className="text-sm">I started building this product because I kept running into the same fundamental gap: the options people have when they're in trouble don't map to the actual situations people find themselves in. Calling 911 requires a specific kind of trust that not everyone has, for reasons that are entirely valid — past experience, immigration status, fear of escalation, mental health situations, or simply not wanting a police response to a problem that doesn't need one.</p>
                <p className="text-sm">The absence of an alternative wasn't a design oversight. It was a design choice someone else made. I decided to make a different one.</p>
                <p className="text-sm">The second problem I was solving for was equally well-documented and equally ignored: the bystander effect. The more people who witness a crisis, the less likely any individual is to act — because each person assumes someone else already has. I needed to break that loop at the product level, not the behavioral level.</p>
            </div>
        </section>

        {/* How It Works */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-base font-serif md:text-5xl">How It Works</h2>
            <div className="inline-block bg-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-12 rounded uppercase font-sans">
                FOUR STEPS. ONE BUTTON.
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
                <div>
                    <p className="text-5xl font-serif text-slate-900 mb-4 font-light">38%</p>
                    <p className="font-bold text-slate-900 mb-2 font-serif text-xl">Fear of Response</p>
                    <p className="text-slate-600 text-xs font-sans text-left">of people in the US do not call 911 during an emergency due to fear of the response</p>
                </div>
                <div>
                    <p className="text-5xl font-serif text-slate-900 mb-4 font-light">↓75%</p>
                    <p className="font-bold text-slate-900 mb-2 font-serif text-xl">Bystander Effect</p>
                    <p className="text-slate-600 text-xs font-sans">reduction in likelihood of helping when bystanders believe others will act</p>
                </div>
                <div>
                    <p className="text-5xl font-serif text-slate-900 mb-4 font-light">0</p>
                    <p className="font-bold text-slate-900 mb-2 font-serif text-xl">Existing Solutions</p>
                    <p className="text-slate-600 text-xs font-sans">apps exist that address both problems simultaneously at the community level</p>
                </div>
                <div>
                    <p className="text-5xl font-serif text-slate-900 mb-4 font-light">1</p>
                    <p className="font-bold text-slate-900 mb-2 font-serif text-xl">Button</p>
                    <p className="text-slate-600 text-xs font-sans">is all I believe it should take to reach the people around you</p>
                </div>
            </div>

            <p className="text-slate-700 text-xs md:text-xl">The product logic is intentionally minimal. Complexity is friction, and friction costs time. I designed the core flow so that a person under stress — potentially impaired, scared, or in a public setting where they need to be discreet — can activate help in a single gesture.

          </p>
        </section>

        <div className="flex justify-center mb-24">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2bde4714f_Screenshot2026-03-21at10216PM.png" alt="Adina Emergency Alert App UI on a phone" className="w-full max-w-2xl rounded-2xl shadow-sm border border-gray-100" />
        </div>

        {/* The Four Steps */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-10 text-2xl font-light md:text-5xl">The Four Steps</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {[
            { title: "Signal Sent", text: "The user presses and holds the central button. A geolocation-anchored alert goes out silently to nearby app users within a set radius." },
            { title: "Nearby Users Notified", text: "Community members in range receive a push alert. No personal details are shared — just proximity and the fact that someone nearby needs help." },
            { title: "Response Is Visible", text: "This is the core intervention: when a community member responds, that action becomes visible to other nearby users. The bystander loop is broken in real time." },
            { title: "Situation Resolved", text: "The person in need can mark the situation resolved, or a timeout clears the alert. No record is kept. No data stored beyond the session." }].
            map((step, i) =>
            <div key={i} className="border border-[#E5DDF5] rounded-lg overflow-hidden bg-white shadow-sm">
                        <div className="bg-[#ffd1ea] text-[#553696] py-3 text-xl font-bold text-center">{i + 1}</div>
                        <div className="p-8">
                            <h3 className="text-slate-900 mb-4 text-xl font-medium">{step.title}</h3>
                            <p className="text-slate-700 text-base font-sans">{step.text}</p>
                        </div>
                    </div>
            )}
            </div>
        </section>

        {/* Core Design Problem */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-xl font-serif md:text-5xl">Core Design Problem</h2>
            <div className="inline-block bg-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-8 rounded uppercase font-sans">
                KILLING THE BYSTANDER EFFECT
            </div>
            
            <div className="text-slate-950 mb-10 pl-6 py-2 text-xl font-serif border-l-4 border-[#6A42C1] md:text-2xl italic">
                "Showing that someone has already responded doesn't just inform — it gives the next person permission to act. That's the product doing the behavioral work."
            </div>

            <div className="text-lg md:text-xl text-slate-700 space-y-6 mb-12">
                <p className="text-sm">The bystander effect isn't a character flaw. It's a rational response to incomplete information. When you don't know if anyone else has seen what you've seen, the default human behavior is to wait and see what others do. This is especially true in crowd situations, where diffusion of responsibility compounds with social uncertainty.</p>
                <p className="text-sm">I built the response visibility feature specifically to make that information available in real time. When you can see that two people have already responded to an alert, the question stops being "should I do something" and becomes "should I go too." That's a different cognitive calculation, and it produces a different answer.</p>
                <p className="text-sm">The design decision wasn't about guilt or social pressure. It was about removing ambiguity. Ambiguity is where the bystander effect lives.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-10 bg-white rounded-lg border border-red-100 shadow-sm">
                    <h3 className="text-[#E15A85] mb-6 text-xl font-bold">Without ADINA</h3>
                    <ul className="list-disc pl-6 space-y-4 text-slate-700 font-sans text-lg">
                        <li>5 people see the alert.</li>
                        <li>No one knows who else has seen it.</li>
                        <li>Each person assumes someone else responded.</li>
                        <li>No one moves.</li>
                    </ul>
                </div>
                <div className="p-8 md:p-10 bg-[#6A42C1] text-white rounded-lg shadow-xl">
                    <h3 className="text-white mb-6 text-xl font-bold">With ADINA</h3>
                    <ul className="list-disc pl-6 space-y-4 text-white/90 font-sans text-lg">
                        <li>2 responded. Remaining 3 can see it.</li>
                        <li>Ambiguity removed.</li>
                        <li>Response becomes visible.</li>
                        <li>Others calibrate. The loop breaks.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-2xl font-light md:text-5xl">Design Philosophy</h2>
            <div className="inline-block bg-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-8 rounded uppercase font-sans">
                COMMUNITY, NOT SYSTEM
            </div>
            <p className="text-slate-700 mb-12 text-xs md:text-xl">I made a deliberate choice not to integrate with emergency services, and I want to be clear that this wasn't an oversight or a feature I'm planning to add later. The decision to exclude authority systems from the product loop is the product. The entire value proposition rests on it.

          </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 md:p-10 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-[#E15A85] mb-6 text-lg font-normal">Calling 911 requires</h3>
                    <ul className="list-disc pl-6 space-y-4 text-slate-700 font-sans text-lg">
                        <li>Trust in law enforcement response</li>
                        <li>Legal exposure for the caller or subject</li>
                        <li>Immigration status safety</li>
                        <li>Risk of situation escalation</li>
                        <li>Willingness to involve the state</li>
                        <li>Confidence that the response fits the situation</li>
                        <li>Access to phone or voice capability</li>
                    </ul>
                </div>
                <div className="p-8 md:p-10 bg-[#6A42C1] text-white rounded-lg shadow-xl">
                    <h3 className="text-white mb-6 text-lg font-normal">ADINA requires</h3>
                    <ul className="list-disc pl-6 space-y-4 text-white/90 font-sans text-lg">
                        <li>A community of nearby users</li>
                        <li>One tap</li>
                        <li>No verbal communication</li>
                        <li>No personal identification</li>
                        <li>No interaction with state systems</li>
                        <li>No record kept after the session</li>
                        <li>Nothing except the willingness to ask</li>
                    </ul>
                </div>
            </div>

            <p className="text-slate-700 text-sm md:text-xl">I am not building an alternative to emergency services for emergencies that require them. I am building an alternative to nothing — the current option available to people whose situations don't fit the existing model. That is a large population, and it has been underserved by product design for a long time.

          </p>
        </section>

        <div className="flex justify-center mb-24">
            <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/d5b6ec5f8_Screenshot2026-03-21at10226PM.png" alt="Adina UI Profile and Settings" className="w-full max-w-2xl rounded-2xl shadow-sm border border-gray-100" />
        </div>

        {/* Key Design Decisions */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-xl font-normal md:text-5xl">Key Design Decisions</h2>
            <div className="inline-block bg-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-8 rounded uppercase font-sans">
                EVERY CHOICE WAS INTENTIONAL
            </div>
            <p className="text-slate-700 mb-12 text-sm md:text-xl">Building a product in this space means that design decisions carry real weight. Getting the privacy model wrong, or the interaction wrong, or the information architecture wrong doesn't result in a bad product review — it results in someone being harmed. I treated every decision accordingly.

          </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
            { title: "01 — Press & Hold, Not Tap", text: "Accidental activation is a trust-destroying event. I chose press-and-hold as the primary gesture to introduce just enough friction to prevent false alerts without slowing genuine need." },
            { title: "02 — No Identity, Only Proximity", text: "Responders do not see who sent the alert. They see that someone nearby needs help. This protects the person in need and lowers the barrier to sending an alert in the first place." },
            { title: "03 — Response Count Is Public to Nearby Users", text: "The number of people who have responded is visible to all nearby community members. This is the direct behavioral intervention against the bystander effect and the product's most load-bearing design choice." },
            { title: "04 — Session-Only Data", text: "No alert history is stored after a session closes. I made this decision early and it constrained other features — I accepted those trade-offs. Trust is the product's core asset." },
            { title: "05 — No Chat, No Instructions", text: "The first version does not include in-app communication between the person in need and responders. I removed it from scope intentionally. The product's job is to put nearby humans in physical proximity — what they do from there is human, not product." }].
            map((item, i) =>
            <div key={i} className="bg-white border-l-4 border-[#6A42C1] shadow-sm rounded-r-lg p-8 flex flex-col">
                        <h3 className="font-serif font-bold text-xl mb-4 text-slate-900">{item.title}</h3>
                        <p className="text-slate-700 text-sm font-sans">{item.text}</p>
                    </div>
            )}
            </div>
        </section>

        {/* What I'm Testing Right Now */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-6 text-base font-light md:text-5xl">What I'm Testing Right Now</h2>
            <div className="inline-block bg-white border border-[#E5DDF5] text-[#553696] text-xs font-bold tracking-wider px-3 py-1 mb-8 rounded uppercase font-sans">
                PRODUCT · EARLY BUILD
            </div>
            <div className="text-lg md:text-xl text-slate-700 space-y-6 mb-12">
                <p className="text-sm">ADINA is currently in early testing. The core loop alert, notify, respond, display  is functional. What I'm focused on in this phase is less about feature validation and more about trust and activation rate. A safety product lives or dies on whether people actually have it installed before they need it, and whether they trust it enough to use it when they do.</p>
                <p className="text-sm">I'm testing with a small, closed group across different neighborhood types  dense urban, mid-density residential, and transit-heavy corridors to understand how geographic density affects the product's core utility. A tool that alerts nearby users only works if there are nearby users.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#E5DDF5] p-8 rounded-lg flex flex-col">
                    <h3 className="font-serif font-bold text-xl mb-3 text-slate-900">✓ Complete Alpha</h3>
                    <p className="text-slate-700 text-base font-sans">Core alert loop. Single-button activation. Geolocation notification to nearby users.</p>
                </div>
                <div className="bg-[#E5DDF5] p-8 rounded-lg flex flex-col">
                    <h3 className="font-serif font-bold text-xl mb-3 text-slate-900">☐ Active Now — Closed Beta</h3>
                    <p className="text-slate-700 text-base font-sans">Response visibility feature live. Testing trust, activation rates, and density thresholds across neighborhood types.</p>
                </div>
                <div className="bg-[#E5DDF5] p-8 rounded-lg flex flex-col">
                    <h3 className="font-serif font-bold text-xl mb-3 text-slate-900">→ Upcoming Open Beta</h3>
                    <p className="text-slate-700 text-base font-sans">Expanding user base. Community building tools. Onboarding to increase passive install base in target areas.</p>
                </div>
            </div>
        </section>

        <div className="flex justify-center mb-24">
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '12px', border: '1px solid #E5DDF5' }}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/d0EHTrD07dQ?si=VVxcFKdgu8qdXiGF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

        {/* What I don't Know Yet */}
        <section className="mb-24">
            <h2 className="text-[#E15A85] mb-12 text-2xl font-normal md:text-5xl">What I don't Know Yet</h2>
            <div className="space-y-10">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">What is the minimum viable community density?</h3>
                    <p className="text-slate-700 text-sm md:text-xl">The product requires a critical mass of installed users within a given radius to function. I don't yet know what that number is, or how it changes by geography, time of day, or context type.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">How do I build the passive install base before it's needed?</h3>
                    <p className="text-slate-700 text-sm md:text-xl">People install safety tools reactively, after a close call. The challenge is getting the app installed in advance which means building ambient community value beyond the emergency use case.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">What does a false alert do to community trust?</h3>
                    <p className="text-slate-700 text-xs font-light md:text-xl">The press-and-hold gesture reduces accidental activations, but I'm watching early testing data closely to understand how even a small rate of false alerts affects whether community members stay engaged and responsive.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">How do I handle situations that escalate beyond what community help can address?</h3>
                    <p className="text-slate-700 text-xs md:text-xl">There will be cases where the right response is emergency services, even for people who didn't want to call. The product needs a design-level answer to this that doesn't undermine its core promise.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">What is the right expansion model?</h3>
                    <p className="text-slate-700 text-sm md:text-xl">Building community-first means geographic growth has to be intentional and density-aware. I'm still developing the playbook for how to launch in a new area without launching before the network is thick enough to work.</p>
                </div>
            </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-sm text-gray-500">© 2024 Alfie Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>);

}