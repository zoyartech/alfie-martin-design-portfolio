import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Smartphone, ArrowRightLeft, PieChart, Users, Download, Bell, Settings, Link2 } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function RockefellerCapital() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 pb-20 pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        .font-serif { font-family: "PT Serif", serif; }
        .font-sans { font-family: "DM Sans", sans-serif; }
      `}</style>
      
      <div className="max-w-5xl mx-auto px-6 mb-8 mt-4">
        <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gray-500 hover:text-slate-900 transition-colors uppercase font-sans">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="inline-block bg-slate-200 text-slate-700 text-xs font-bold tracking-wider px-3 py-1 mb-6 uppercase font-sans">
          Lead UX Designer • Mobile Experience
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight leading-[1.1]">
          Rockefeller Capital Management
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-3xl mb-12">
          Practical Solutions To Improving The User Experience Of Digital Products for High Net Worth Individuals.
        </p>
      </div>

      {/* Intro & Context */}
      <div className="bg-white border-y border-slate-200 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Introduction</h2>
            <p className="font-sans text-slate-700 text-lg mb-6 leading-relaxed">
              When I was first assigned to Rockefeller Capital Management as lead UX Designer in Mobile Experiences, I took the time to thoroughly research the firm, its digital offerings, and overall brand values, so that I could familiarize myself with the project.
            </p>
            <p className="font-sans text-slate-700 text-lg leading-relaxed">
              My manager Lisa Doyle sent me over product metrics and recordings of qualitative interviews with current users of the app. This gave me a strong point to start from prior to my first meeting with the client.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
            <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Context</h2>
            <p className="font-sans text-slate-700 text-lg leading-relaxed">
              Over the past 5 years, there has been an increasing need to enhance the user experience of RCM's mobile app. This shift is primarily due to a change in their client base, with a <strong>significant influx of younger HNWI</strong> (High Net Worth Individuals) who have expressed their preference for utilizing a mobile app.
            </p>
          </div>
        </div>
      </div>

      {/* Problems */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl font-bold mb-12 text-slate-900">Areas of Friction</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-sky-900 text-slate-50 p-8 rounded-xl shadow-sm border border-slate-100">
            <Shield className="text-slate-200 mb-4 lucide lucide-shield w-8 h-8" />
            <h3 className="text-slate-50 mb-3 text-xl font-bold">1. Security</h3>
            <p className="text-slate-50 font-sans">Enhancing the overall security measures to ensure the confidentiality and privacy of client information.</p>
          </div>
          <div className="bg-blue-500 p-8 rounded-xl shadow-sm border border-slate-100">
            <Smartphone className="text-slate-100 mb-4 lucide lucide-smartphone w-8 h-8" />
            <h3 className="text-slate-200 mb-3 text-xl font-bold">2. Ease of Use</h3>
            <p className="text-slate-50 font-sans">Streamlining the user interface and interactions to make the mobile app more intuitive and user-friendly.</p>
          </div>
          <div className="bg-sky-300 p-8 rounded-xl shadow-sm border border-slate-100">
            <ArrowRightLeft className="text-slate-950 mb-4 lucide lucide-arrow-right-left w-8 h-8" />
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">3. Integration</h3>
            <p className="font-sans text-slate-600">Enabling the integration of outside accounts into the current app, providing a comprehensive view of the clients' financial portfolio.</p>
          </div>
          <div className="bg-blue-300 p-8 rounded-xl shadow-sm border border-slate-100">
            <PieChart className="text-zinc-950 mb-4 lucide lucide-chart-pie w-8 h-8" />
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">4. Portfolio Visualization</h3>
            <p className="text-slate-950 font-sans">Introducing visual representations that display the clients' entire portfolio, allowing for a holistic understanding of their investments.</p>
          </div>
          <div className="bg-sky-200 p-8 rounded-xl shadow-sm border border-slate-100">
            <Users className="text-slate-950 mb-4 lucide lucide-users w-8 h-8" />
            <h3 className="font-serif text-xl font-bold mb-3 text-slate-900">5. Low Adoption Rate</h3>
            <p className="text-zinc-950 font-sans">Currently, only a small percentage of the older client demographic actively uses the app. We need to encourage wider adoption and usage.</p>
          </div>
        </div>
      </div>

      {/* The Business Problem */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold mb-8">The Business Problem</h2>
          <div className="font-sans text-lg text-slate-300 space-y-6 max-w-3xl">
            <p>
              The younger clients, who form a significant portion of RCM's clientele, exhibit less engagement with their accounts. They are less likely to proactively contact their advisors for updates on potential investment opportunities or to add new interests to their portfolios.
            </p>
            <p>
              It was important to address these challenges in order to improve client engagement, enhance the user experience for all clients, and ensure that RCM's mobile app meets the expectations of their evolving user base.
            </p>
            <p className="p-6 bg-slate-800 rounded-lg text-white border border-slate-700">
              Because the mobile app is not available to the public, I asked the team at RCM to create a test profile login for me so I could audit the current UX, heuristics, user journey, and content.
            </p>
          </div>
        </div>
      </div>

      {/* Role & Constraints */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-slate-900 border-b border-slate-200 pb-4">My Role</h2>
            <ul className="space-y-4 font-sans text-lg text-slate-700">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> UX End To End</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Lead a Small Team Of Designers</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Internal/External Stakeholder Management</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Data Analysis</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Prototyping, Collaboration and Ideation</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Creation of a New Design System</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 text-slate-900 border-b border-slate-200 pb-4">Constraints</h2>
            <div className="space-y-6 font-sans text-lg text-slate-700">
              <p><strong>Time:</strong> We only had 2 months to design the app entirely.</p>
              <p><strong>Research Pushback:</strong> RCM's team could not clearly see a distinct link between validation of ideas and research, therefore I anticipated some pushback concerning research.</p>
              <p><strong>Confidentiality:</strong> Clients confidentiality had to be maintained, so any details beyond HNWIs we were not privy to.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Prototype */}
      <div className="max-w-5xl mx-auto px-6 pb-16 md:pb-24">
        <h2 className="font-serif text-3xl font-bold mb-8 text-slate-900 border-b border-slate-200 pb-4">Interactive Prototype</h2>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src="https://embed.figma.com/proto/gKgJCUkjqplxnb43ZiI4Vb/Untitled?page-id=0%3A1&type=design&node-id=1-7066&viewport=289%2C343%2C1&scaling=min-zoom&starting-point-node-id=2%3A26670&embed-host=share"
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-slate-100 py-16 md:py-24 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold mb-16 text-slate-900 text-center">Key Features & Solutions</h2>
          
          <div className="space-y-16">
            {/* Security */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div>
                <Shield className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">New User Journey with Added Security</h3>
                <p className="font-sans text-lg text-slate-600">
                  We added extra security measures. In addition to these new features, if the app was dormant for more than 2 minutes it would lock again. In order to change a passcode, a client would have to call their advisor. And in order to register, the same was applicable.
                </p>
              </div>
            </div>

            {/* Engagement */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div className="order-2 md:order-1">
                <p className="font-sans text-lg text-slate-600">
                  After looking over product metrics and seeing very low engagement and DAU, we designed a curated feed with articles related to finance of the client's interests through a filtering function below the nav bar. This would give them an incentive to interact with the app again.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Smartphone className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Driving Engagement</h3>
              </div>
            </div>

            {/* Reports */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div>
                <Download className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Downloadable Reports</h3>
                <p className="font-sans text-lg text-slate-600 mb-6">
                  During usability testing, participants noted the previous app was "boring" and visually they didn't want to see all of their account info in such a small screen. To remedy this, we added an option to download the reports in their entirety.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 italic text-slate-700">
                  "I found being able to download my reports to be useful so that I could later print them out or view them on a larger screen... This feature is perfect, no one wants to look at the equivalent of an excel spreadsheet on their phone."
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div className="order-2 md:order-1">
                <p className="font-sans text-lg text-slate-600">
                  One of the most common complaints stated in the research reports given to us by RCM was a lack of notifications of changes in their portfolio/accounts. We designed a modal that was neutral in its tone as far as content goes to keep users informed without alarm.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Bell className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Proactive Notifications</h3>
              </div>
            </div>

            {/* Drag & Drop */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div>
                <Settings className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">Customizable Visualization</h3>
                <p className="font-sans text-lg text-slate-600">
                  In contrast to the rest of the app, we created drag and drop designs and let the users choose how to customize their data visuals as far as colors and types of charts, what accounts to include or exclude from their portfolio.
                </p>
                <p className="font-sans text-lg text-slate-600 mt-4">
                  This part took the longest, and we went through 4 rounds of usability testing of our designs before participants reacted in ways that were more aligned with the "Ah ha" moment we were really designing for.
                </p>
              </div>
            </div>

            {/* Integrations */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
              <div className="order-2 md:order-1">
                <p className="font-sans text-lg text-slate-600">
                  With collaboration from RCM's engineering team and the use of a number of integrations and APIs, we designed screens to include a frictionless way for users to add accounts they had outside of RCM into the app. The goal was for users to be able to view their portfolio in its entirety on the app.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Link2 className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4 text-slate-900">External Integrations</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Consistency & Trust */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl font-bold mb-10 text-slate-900">Why Does Consistency Result in Trust?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="font-sans text-lg text-slate-700 space-y-6">
            <p>Historically, trust between consumers and their financial institutions is at an all-time low.</p>
            <blockquote className="border-l-4 border-blue-600 pl-6 py-2 text-xl font-medium text-slate-900 italic">
              "When asked about the most critical factor in choosing a financial services provider, 83 percent of respondents cited a high-quality user experience. Delivering a consistent, reliable experience for customers that's easy to navigate easily represents a key element in fostering trust." <br /><span className="text-sm text-slate-500 font-normal">— Research by Forrester and BAI</span>
            </blockquote>
          </div>
          <div className="font-sans text-lg text-slate-700 space-y-6">
            <p>
              When I was mapping out the user journey, what I noticed immediately was a lack of consistency in the mobile app with its interactions, its visuals, and a lack of a design system.
            </p>
            <p>
              That is where we began. Ultimately, the short time window left us with little room to design an expansive system. But I made sure the foundational elements were there, that it aligned strongly with RCM's visual brand identity, and that the design system was easily scalable.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold mb-12">In Summary</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 font-sans text-lg text-slate-300">
              <h3 className="text-2xl font-bold text-white">Navigating Frustrations</h3>
              <p>
                The client was under a lot of stress in a highly politicized office environment. I knew from the first few meetings that I needed to show that I and the team I was leading could be trusted to get the results that they wanted.
              </p>
              <p>
                The best way to do that, and because of my prior experience with working directly for HNWIs, was to bring solutions to the client when we came across problems. Transparency and effective communication with their team and the staff at RCM that was leading this initiative.
              </p>
            </div>
            <div className="space-y-6 font-sans text-lg text-slate-300">
              <h3 className="text-2xl font-bold text-white">Outcomes & Process</h3>
              <p>
                Prior to meeting with the client, I researched RCM down to the details of the types of roles their employees had. So when we required qualitative research, I remembered they had Qualitative researchers on their staff. I designed and handed off questions that their staff researchers could conduct with their clients and cross-checked their insight reports for any unconscious biases. This, in conjunction with usability testing we conducted, helped us arrive at the solutions we implemented.
              </p>
              <p>
                The app experience was well received on completion by both Rockefeller Capital Management and their clients. RCM reported <strong>increased adoption, MAU, DAU</strong>, early on the initial relaunch.
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-700">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Team & Collaboration</h3>
            <ul className="space-y-2 font-sans text-slate-400">
              <li><strong>Moura Mcdaniels</strong> — Usability testing, prototyping</li>
              <li><strong>Sauruh Hanbey</strong> — Wireframes, usability testing, prototyping</li>
              <li><strong>Jake Horowitz</strong> — VP of Engineering (Most Frequently Collaborated Directly with)</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>);

}