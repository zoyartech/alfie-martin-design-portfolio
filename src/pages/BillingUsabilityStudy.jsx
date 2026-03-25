import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PieChart, Monitor, Lightbulb } from 'lucide-react';
import { createPageUrl } from "@/utils";

export default function BillingUsabilityStudy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Back button */}
      <div className="fixed top-24 left-6 z-40">
        <Link to={createPageUrl("CaseStudies")} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors uppercase font-bold bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full pointer-events-auto border border-slate-200 shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      <div className="pt-20">
        {/* Slide 1 */}
        <section className="bg-[#e7efff] min-h-[80vh] flex flex-col justify-center relative border-b border-l-8 border-l-[#fbfae1] border-b-[#fbfae1]">
          <div className="absolute top-8 right-8 border border-slate-900 rounded-full px-4 py-1 text-sm font-mono bg-[#fbfae1]">
            Alfie Martin
          </div>
          <div className="max-w-5xl mx-auto px-6 w-full">
            <h1 className="text-6xl md:text-8xl font-medium mb-6 tracking-tight">Billing & Payments</h1>
            <p className="text-3xl md:text-4xl font-light">Usability Study</p>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="bg-[#e7efff] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Study Objective</h2>
            <p className="text-3xl leading-relaxed font-light">
              Evaluate the usability of the updated <br/>
              <strong>'Bill is Ready'</strong> email, <br/>
              the discoverability of the <br/>
              <strong>'My Bill Insights'</strong> page from the email, and <br/>
              the clarity and usefulness of the information <br/>
              on the <strong>'My Bill Insights'</strong> page.
            </p>
          </div>
        </section>

        {/* Slide 3 */}
        <section className="bg-[#fbfae1] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-medium mb-16">Study Details</h2>
            <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
              <div className="text-xl pr-8 border-r-4 border-slate-900">
                Users were given the following scenario then asked to complete seven related Tasks :
              </div>
              <div className="bg-[#f0e6ff] p-8 text-lg italic leading-relaxed shadow-sm">
                Imagine you've just received your monthly utility bill in your inbox. The bill was higher than expected, so you want to check the details to understand what's driving your bill. You're going to open the email and search for more information about your usage and charges
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">METHODOLOGY</h3>
                <ul className="space-y-3 text-lg list-disc list-outside ml-5">
                  <li>Unmoderated Usability Study via UserZoom</li>
                  <li>Eight Participants</li>
                  <li>Opco Mix</li>
                  <li>Average 12 minutes per session</li>
                  <li>Results include screen recordings, transcript,</li>
                  <li>Task success and questionnaire responses</li>
                </ul>
              </div>
            </div>
            <p className="text-xl">
              The study concluded with a five-part final reflection questionnaire designed to assess users' affinity for the designs presented.
            </p>
          </div>
        </section>

        {/* Slide 4 */}
        <section className="bg-[#e7efff] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
              <p className="text-xl mb-8 leading-relaxed">
                The usability study validated the appeal, clarity, and discoverability of the authenticated 'My Bill Insights' page and enhanced 'Bill is Ready' email, while also surfacing future opportunities to elevate the post-MVP experience.
              </p>
              <ul className="space-y-4 text-lg">
                <li>• Participants mentioned how easy, smooth and straightforward the experience was overall</li>
                <li>• The amount of information or specificity of information (such as the energy use breakdown) was a pleasant surprise to participants</li>
                <li>Many participants first clicked 'View Bill' from the 'Bill is Ready' email when asked to find more information on their bill, indicating the 'My Bill Insights' page could be even more discoverable if linked from the bill itself</li>
                <li>Six of eight participants were 'extremely likely' to use this webpage in the future to understand their bill</li>
              </ul>
            </div>
            <div className="bg-[#fbfae1] p-10 border border-slate-300 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">FUTURE OPPORTUNITIES</h3>
              <ul className="space-y-4 text-lg">
                <li>• Position link to 'My Bill Insights' page on bill itself</li>
                <li>• Include more support options in addition to FAQs</li>
                <li>• Explore feasibility of more granular usage chart for customers to see peak usage times (daily or hourly)</li>
                <li className="mt-6 pt-6 border-t border-yellow-200">Separate personalized tips from Home Energy Analysis breakdown, or make more discoverable (QPower)</li>
                <li>• Make the Home Energy Analysis breakdown more interactive (ie. Clicking into usage)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 5 */}
        <section className="flex flex-col md:flex-row min-h-[70vh] border-l border-slate-300">
          <div className="bg-[#fbfae1] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            <h2 className="text-2xl font-bold mb-2">Open Email</h2>
            <h3 className="text-xl font-bold mb-4">TASK</h3>
            <p className="text-xl underline underline-offset-4 mb-12">
              Please review the email as if you had just received it in your inbox.
            </p>
            <ul className="space-y-6 text-xl">
              <li>• Two of eight participants found the 'My Bill Insights' page without prompting</li>
              <li>• Participants commented on how clean and organized the email appeared</li>
            </ul>
          </div>
          <div className="bg-[#f0e6ff] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">QUESTIONNAIRE</h3>
            <p className="text-xl underline underline-offset-4 mb-10">
              What is your first impression of this email?<br/>
              Please describe what you see.
            </p>
            <div className="space-y-8 text-xl">
              <p>"Appreciate how clean it is, not an overwhelming amount of information"</p>
              <p>"...feels organized and not overwhelming"</p>
              <p>"Explore your bill insights probably covers the changes [to my bill]"</p>
            </div>
          </div>
        </section>

        {/* Slide 6 */}
        <section className="bg-[#e7efff] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-4">Open Webpage</h2>
              <h3 className="text-xl font-bold mb-6">• TASK</h3>
              <p className="text-xl underline underline-offset-4 mb-16">
                If you haven't yet, click the link under "Explore Your Bill Insights" that reads: "View Details"
              </p>
              <div className="flex items-center gap-6">
                <span className="text-xl">QUESTIONNAIRE:</span>
                <svg viewBox="0 0 100 50" className="w-32 h-16 drop-shadow-md">
                  <path d="M0,15 L60,15 L60,0 L100,25 L60,50 L60,35 L0,35 Z" fill="#cf9aff" stroke="#000" strokeWidth="0.5"/>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-2xl underline underline-offset-4 mb-8">
                What did you expect to see after clicking 'View Details'?
              </p>
              <ul className="space-y-6 text-xl italic font-medium">
                <li className="text-green-700">"A comparison of the prior month to the current month showing the difference,"</li>
                <li className="text-purple-700">"I expected to be shown the reasons for the change"</li>
                <li className="text-yellow-700">"I expected to see a comparison for usage or a change in cost"</li>
                <li className="text-red-700">"I thought I'd see like a general, this is what people use"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 7 */}
        <section className="flex flex-col lg:flex-row min-h-[80vh] border-l border-slate-300 bg-white">
          <div className="bg-[#fbfae1] w-full lg:w-1/3 p-12 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-300">
            <h2 className="text-3xl italic mb-12 font-serif">First Impressions</h2>
            <h3 className="text-xl font-bold mb-8">TASK:</h3>
            <p className="text-2xl leading-relaxed">
              You've arrived at the Bill Insights page. Take a moment to look around and try to understand your charges.
            </p>
          </div>
          <div className="bg-[#e5e5e5] w-full lg:w-2/3 p-8 md:p-16 flex flex-col relative overflow-hidden">
            <div className="bg-[#e7efff] border border-slate-300 p-8 shadow-sm max-w-xl mx-auto md:ml-12 mt-12 mb-16 relative">
              <span className="text-7xl text-blue-800 absolute -top-8 -left-6 font-serif leading-none">"</span>
              <p className="text-xl font-bold text-center leading-relaxed relative z-10">
                This feels like everything I would want to know if I was going to call [my utility company]
              </p>
              <span className="text-7xl text-blue-800 absolute -bottom-16 -right-6 font-serif leading-none">"</span>
            </div>
            
            <div className="bg-white border border-slate-300 shadow-sm p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 shrink-0 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e0e0e0" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#372c8a" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="60" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-bold">Total Amount<br/>Due</span>
                  </div>
                  <div className="absolute top-4 -left-8 text-[10px] flex items-center gap-1"><PieChart className="w-3 h-3"/> Taxes & Fees</div>
                  <div className="absolute bottom-4 -left-4 text-[10px] flex items-center gap-1"><Monitor className="w-3 h-3"/> Delivery</div>
                  <div className="absolute top-1/2 -right-12 -translate-y-1/2 text-[10px] flex items-center gap-1"><Lightbulb className="w-3 h-3"/> Supply</div>
                </div>
                <div>
                  <h4 className="text-2xl font-light mb-6">Whats Included in My Monthly Bill?</h4>
                  <p className="mb-4">Your total bill consists primarily of::</p>
                  <div className="space-y-4 text-sm">
                    <p><strong>Supply</strong> - The cost of generating electricity.</p>
                    <p><strong>Distribution and Delivery</strong> - The expense of transporting electricity across long distances.</p>
                    <p><strong>Taxes & Fees</strong> - State and local taxes, fees, and</p>
                  </div>
                </div>
              </div>
              <p className="text-xl italic text-center mt-12">"I love an infographic, I love how easy it is to absorb."</p>
            </div>
          </div>
        </section>

        {/* Slide 8 */}
        <section className="flex flex-col md:flex-row min-h-[60vh] border-l border-slate-300">
          <div className="bg-[#f0e6ff] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            <h2 className="text-4xl font-bold mb-16">QUESTIONNAIRE</h2>
            <p className="text-xl underline underline-offset-4">
              What do you understand about your bill from this page?
            </p>
          </div>
          <div className="bg-[#fbfae1] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-10">
            <p className="text-xl italic font-medium text-purple-400">
              "I understand that my bill is higher than this month, mainly due to increased energy costs, a longer billing period and more usage likely caused by the weather conditions, and also the 10% increase."
            </p>
            <div>
              <p className="text-xl italic font-medium text-red-800 mb-4">
                "I can see what part of my home I'm using the most electricity like the electronics"
              </p>
              <p className="text-xl font-bold text-red-800">
                Is anything confusing or unclear?
              </p>
            </div>
            <p className="text-xl italic font-medium text-blue-600">
              "No, everything seems very clear. The layout is easy to follow, and the explanation is simple."<br/><br/>
              "there was nothing confusing or unclear at all in my opinion"
            </p>
          </div>
        </section>

        {/* Slide 9 */}
        <section className="bg-[#fbfae1] py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl mb-2">Bill Increase</h2>
            <h3 className="text-xl underline underline-offset-4 mb-10">TASK</h3>
            
            <p className="text-xl font-bold italic mb-6">
              Based on the information available, what do you think could explain the increase in your bill this month?
            </p>
            <ul className="text-xl space-y-2 mb-16 list-disc list-inside">
              <li>Six of eight participants cited the rate increase mentioned in the editable module</li>
              <li>All participants used the monthly comparison widget to understand the higher cost (citing weather, bill period etc.)</li>
            </ul>

            <div className="bg-[#fbfae1] space-y-8 text-lg">
              <p className="font-medium text-xl">Likely reasons your electricity charges are about $28 more</p>
              
              <div>
                <p className="underline underline-offset-4 mb-1 uppercase tracking-wider text-sm font-semibold">Weather Conditions or Daylight Hours</p>
                <p>You used more electricity due to changes in weather.</p>
                <p className="font-medium mt-1">+ $9.73</p>
              </div>
              
              <div>
                <p className="underline underline-offset-4 mb-1 uppercase tracking-wider text-sm font-semibold">Bill Period</p>
                <p className="text-sm">÷ $6.85</p>
                <p>You used more electricity because this bill period was 1 day(s) longer.</p>
                <p className="font-medium mt-1">+ $11.42</p>
              </div>

              <div>
                <p className="underline underline-offset-4 mb-1 uppercase tracking-wider text-sm font-semibold">Energy Cost/Energy Use</p>
                <p className="max-w-3xl">Your bill may have changed due to differences in your energy consumption or adjustments in energy prices. To get a breakdown of your energy use, update the information about your home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10 */}
        <section className="flex flex-col md:flex-row min-h-[60vh] border-l border-slate-300">
          <div className="bg-white w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            <h3 className="text-2xl mb-8">QUESTIONNAIRE</h3>
            <p className="text-xl font-bold italic mb-8">
              How easy or difficult was it to find an explanation for the increase in your bill?
            </p>
            <p className="text-xl mb-12">Six of eight answered "very easy"</p>

            <p className="text-xl text-[#3a207b] mb-8">
              • One participant thought a granular breakdown of usage over time. (minutes, hours) would be most helpful:
            </p>
            <p className="text-xl text-blue-500 italic">
              "Perhaps a chart that shows you the time breakdown of your usage, so you could narrow down what is causing the increase, whether it s your air conditioning or the usage of electronics."
            </p>
          </div>
          <div className="bg-[#e5e5e5] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-12">
            <h3 className="text-2xl font-bold italic">Where did you look first?</h3>
            <p className="text-xl">
              "Well, right at the top... it answered the question immediately."
            </p>
            <p className="text-xl">
              "where I looked first: I, I loved the breakdown... The first point is the energy costs rose, and then I looked at the breakdown of the weather and the extra day....."
            </p>
          </div>
        </section>

        {/* Slide 11 */}
        <section className="bg-[#e7efff] py-24 md:py-32 border-l border-slate-300 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold italic mb-12">Where did you look first?</h2>
              <div className="space-y-12 text-xl mb-16">
                <p>"Well, right at the top... it answered the question immediately."</p>
                <p>"where I looked first: I, I loved the breakdown... The first point is the energy costs rose, and then I looked at the breakdown of the weather and the extra day....."</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-bold text-xl mb-4">Electronics</p>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold">27%</span>
                    <div className="bg-white border border-slate-300 px-4 py-2 font-mono shadow-sm relative text-sm">
                      See a Personalized Tip
                      <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-b border-r border-slate-300 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full flex flex-col justify-center mt-12 md:mt-0">
              <div className="absolute -top-16 -right-4 md:right-0 z-10 bg-[#e7efff]/80 md:bg-transparent px-4 py-2">
                <span className="text-7xl md:text-8xl font-bold">73%</span>
              </div>
              <div className="w-full aspect-[4/3] bg-[#4220c5] relative flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm mt-8">
                 <div className="w-[80%] h-[60%] bg-[#b7adff] mt-auto rounded-t-lg border-2 border-slate-900 relative flex justify-center shadow-inner">
                    <div className="w-[90%] h-8 bg-[#d8d3ff] border-2 border-slate-900 absolute top-4 flex justify-center items-center gap-4">
                       <div className="w-4 h-1 bg-slate-900 rounded-full"></div>
                       <div className="w-20 h-1 bg-slate-900 rounded-full"></div>
                    </div>
                    {/* Computer monitor */}
                    <div className="absolute bottom-[100%] right-8">
                       <div className="w-12 h-24 bg-[#a496ff] border-2 border-slate-900 flex flex-col items-center justify-evenly py-2">
                          <div className="w-6 h-1 bg-slate-900"></div>
                          <div className="w-6 h-1 bg-slate-900"></div>
                          <div className="w-6 h-1 bg-slate-900"></div>
                       </div>
                    </div>
                    <div className="absolute bottom-[100%] right-32 flex flex-col items-center">
                       <div className="w-32 h-20 bg-[#a496ff] border-2 border-slate-900 mb-2"></div>
                       <div className="w-8 h-4 bg-[#8b79ff] border-2 border-slate-900"></div>
                       <div className="w-16 h-2 bg-slate-900"></div>
                    </div>
                    {/* Plant */}
                    <div className="absolute bottom-[100%] left-8">
                       <div className="w-16 h-20 bg-transparent flex flex-wrap gap-1 justify-center items-end pb-4 relative z-10">
                          <div className="w-6 h-6 rounded-full bg-[#8fe1f9] border border-slate-900 absolute top-0 left-0"></div>
                          <div className="w-6 h-6 rounded-full bg-[#8fe1f9] border border-slate-900 absolute top-4 right-0"></div>
                          <div className="w-8 h-8 rounded-full bg-[#8fe1f9] border border-slate-900 absolute top-6 left-2"></div>
                       </div>
                       <div className="w-10 h-8 mx-auto bg-[#c5f0fd] border-2 border-slate-900 rounded-b-md relative z-20"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 12 */}
        <section className="flex flex-col md:flex-row min-h-[60vh] border-l border-slate-300">
          <div className="bg-[#fbfae1] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300">
            <h3 className="text-2xl mb-2">More Information</h3>
            <h4 className="text-xl mb-6">TASK</h4>
            <p className="text-xl font-bold underline underline-offset-4 mb-12 leading-relaxed">
              You are still looking for support on your high bill and want to find more answers to bill-related questions. Where would you go to find more information?
            </p>
            <div className="space-y-6 text-xl">
              <p>Seven of eight participants pointed to the FAQs to find more information on bill-related questions</p>
              <ul className="list-disc list-inside space-y-4">
                <li>One participant thought FAQs were generally unhelpful because they didn't address his uncommon questions</li>
                <li>Opportunity to explore pathways to more support options in this real estate</li>
              </ul>
              <p className="italic mt-8">
                "I hate [FAQs] because I must not have frequently asked questions... I must have isolated individual questions."
              </p>
            </div>
          </div>
          <div className="bg-[#dcdcdc] w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-12">QUESTIONNAIRE</h3>
            <div className="space-y-10 text-xl">
              <div>
                <p className="underline underline-offset-4 mb-6">Were you able to find information on ways to reduce your energy bill?</p>
                <p className="font-bold mb-2">Six of eight answered 'Yes'</p>
                <p className="italic">"The whole lower half of this page has things that can help me"</p>
              </div>
              <div>
                <p className="underline underline-offset-4 mb-6">How easy or difficult was it to find ways to reduce your energy bill?</p>
                <p className="font-bold">Seven of eight answered 'very easy”</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 13 */}
        <section className="bg-white py-24 md:py-32 border-l border-slate-300">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Follow Up Questionnaire</h2>
            <p className="text-xl underline underline-offset-4 mb-8">
              Users were asked how they would describe the overall experience, if anything surprised or confused them and if there is anything they would improve.
            </p>
            <ul className="text-xl space-y-4 mb-12 list-disc list-outside ml-6">
              <li>
                Participants mentioned how <strong>easy, smooth and straightforward the experience</strong> was overall<br/>
                <span className="text-lg text-slate-600 block mt-2">The amount of information or specificity of information (such as the energy use breakdown) was surprising to some participants</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold mb-6">Ideas for improvement included:</h3>
            <ul className="space-y-4 text-xl list-none">
              <li>Phone number or chat to contact support</li>
              <li>More granular usage chart (daily or hourly)</li>
              <li>Make the breakdown more interactive to explain the categories in more detail</li>
            </ul>
          </div>
        </section>

        {/* Slide 14 */}
        <section className="bg-[#fbfae1] py-24 md:py-32 border-l border-slate-300 mb-12">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl mb-12">Opportunities Summary</h2>
            <ul className="text-xl space-y-6 list-disc list-outside ml-6 leading-relaxed">
              <li>Because users first clicked 'View Bill' when prompted to find more information on their charges, consider positioning link to 'My Bill Insights' page on bill itself</li>
              <li>Consider including more support pathways on the bottom of the page (ie. Chat or other unassisted support options)</li>
              <li>Explore feasibility of more granular usage chart for customers interested in seeing peak usage times on a daily or hourly basis</li>
              <li>Because so few customers discovered the personalized tips from Home Energy Analysis breakdown, make them more discoverable either in UI design or break them out into a separate widget (OPower)</li>
              <li>Consider how to make the Home Energy Analysis breakdown more interactive to allow users to click into categories for more information</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}