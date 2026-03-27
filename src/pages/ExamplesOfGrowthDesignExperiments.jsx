import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Target, Lightbulb, UserCheck, TrendingUp, RefreshCw, DollarSign, Activity, ArrowRight, AlertTriangle, Clock } from "lucide-react";
import { createPageUrl } from "@/utils";

const experimentsData = [
{
  phase: "Acquisition",
  icon: null,
  description: "Acquisition experiments focus on the top of the funnel—getting potential users to your product and converting them into sign-ups.",
  experiments: [
  {
    id: "01",
    title: "Hero Copy & CTA Positioning",
    description: "Test different hero section messaging frameworks against each other. Compare benefit-driven copy vs. pain-point copy vs. social proof-led copy. Also test CTA placement: above the fold only, repeated at scroll intervals, or sticky/floating.",
    hypothesis: "If we lead with a pain-point headline and place a sticky CTA on mobile, sign-up conversion will increase by 15–20% compared to our current benefit-driven hero with a single static CTA.",
    metrics: "Primary: Sign-up conversion rate. Secondary: Bounce rate, scroll depth, time on page, CTA click-through rate.",
    variations: "Control (current benefit-driven hero) vs. Pain-point headline vs. Social proof headline. Each with sticky CTA on mobile vs. static CTA.",
    risk: "Low – easily reversible, no product changes required.",
    timeframe: "2–4 weeks per variant pair, minimum 1,000 visitors per variant."
  },
  {
    id: "02",
    title: "Social Proof Density & Placement",
    description: "Experiment with the type, volume, and position of social proof elements on the landing page. Compare logo bars, testimonial cards, live user counters, case study snippets, and trust badges.",
    hypothesis: "If we add a real-time user counter and move testimonials above the fold, visitor-to-signup conversion will improve by 10% because the landing page will feel more credible to first-time visitors.",
    metrics: "Primary: Visitor-to-signup rate. Secondary: CTA click rate, scroll depth, qualitative trust survey.",
    variations: "Control (testimonials below fold) vs. Logo bar above fold + testimonials mid-page vs. Real-time counter + case study snippet above fold.",
    risk: "Low – content and layout changes only.",
    timeframe: "2–3 weeks, minimum 2,000 unique visitors per variant."
  },
  {
    id: "03",
    title: "Referral Incentive Structure",
    description: "Test different referral reward models: one-sided, two-sided, tiered, and altruistic. Also test reward type—credits, extended trials, premium features, or physical goods.",
    hypothesis: "If we switch from a one-sided credit reward to a two-sided model where the invitee gets an extended trial and the referrer gets premium features, referral completion rate will increase by 25%.",
    metrics: "Primary: Referrals sent per user, referral completion rate. Secondary: Referrer retention lift, invitee activation rate, cost per acquired user via referral.",
    variations: "One-sided $10 credit vs. Two-sided (invitee gets 30-day trial, referrer gets premium feature) vs. Tiered (escalating rewards).",
    risk: "Medium – requires backend logic for reward fulfillment and edge cases like abuse/fraud.",
    timeframe: "4–6 weeks, track cohorted referral chains over 30 days post-launch."
  },
  {
    id: "04",
    title: "Invite Flow UX & Timing",
    description: "Test when and how users are prompted to invite others. Compare prompting immediately post-signup vs. after first value moment vs. after a usage milestone.",
    hypothesis: "If we trigger the invite prompt after the user's first value moment instead of during onboarding, invite send rate will increase by 30% because users have experienced the product's benefit.",
    metrics: "Primary: Invite send rate, invites per user. Secondary: Invite acceptance rate, time-to-first-invite, user sentiment.",
    variations: "Control (onboarding invite prompt) vs. Post-aha moment prompt vs. Milestone-triggered prompt.",
    risk: "Low–Medium – requires event tracking for aha/milestone triggers but no structural product changes.",
    timeframe: "3–4 weeks, with 30-day lookback on downstream invite acceptance."
  }]

},
{
  phase: "Activation",
  icon: <UserCheck className="w-6 h-6" />,
  description: "Activation experiments aim to get new users to their 'aha moment'—the point at which they first experience the core value of the product.",
  experiments: [
  {
    id: "05",
    title: "Progressive Disclosure vs. Upfront Setup",
    description: "Compare a minimal onboarding flow that gets users into the product fast against a comprehensive setup wizard that asks users to configure preferences upfront.",
    hypothesis: "If we reduce onboarding to 2 steps (name + one core preference) and progressively disclose features contextually, Day 1 activation rate will increase by 20%.",
    metrics: "Primary: Activation rate. Secondary: Onboarding completion rate, time-to-activation, Day 7 retention, feature discovery rate at Day 14.",
    variations: "Control (5-step wizard) vs. 2-step minimal + progressive disclosure vs. Hybrid (2-step wizard + optional profile nudge).",
    risk: "Medium – significant UX work, but changes are contained to onboarding layer.",
    timeframe: "4–6 weeks for initial conversion data, 8 weeks for retention impact."
  },
  {
    id: "06",
    title: "Personalized vs. Generic Onboarding Paths",
    description: "Test whether asking a few segmentation questions upfront and tailoring the onboarding path improves activation. Compare a generic one-size-fits-all flow against role-based paths.",
    hypothesis: "If we segment users into 3 persona-based onboarding tracks, activation rate will increase by 18% because users will see relevant features faster.",
    metrics: "Primary: Activation rate per segment. Secondary: Onboarding drop-off by step, time-to-first-value, NPS at Day 7.",
    variations: "Generic flow vs. 3 persona-based paths (with custom feature highlights, templates, and tips per path).",
    risk: "Medium–High – requires persona mapping, content creation per track, and routing logic.",
    timeframe: "6–8 weeks, measured per cohort with segment-level analysis."
  },
  {
    id: "07",
    title: "Empty State Design",
    description: "Test different empty state strategies: educational, pre-populated (seed with sample data or templates), action-oriented, or inspirational.",
    hypothesis: "If we replace the blank empty state with pre-populated sample data and a single clear CTA to 'Make it yours,' first action completion will increase by 35%.",
    metrics: "Primary: First core action completion rate. Secondary: Time from sign-up to first action, return rate within 48 hours.",
    variations: "Control (blank state) vs. Pre-populated sample data vs. Template gallery vs. Single prominent CTA with inline tutorial.",
    risk: "Low – design and content changes, no backend modifications.",
    timeframe: "2–3 weeks, minimum 500 new users per variant."
  },
  {
    id: "08",
    title: "Interactive Tutorial vs. Tooltip Tour vs. Video Walkthrough",
    description: "Test different modalities for guiding users through their first experience. Compare an interactive tutorial, a tooltip tour, and a video walkthrough.",
    hypothesis: "If we replace our tooltip tour with an interactive tutorial that requires users to perform 3 real actions, users who complete the tutorial will have 40% higher Day 7 retention.",
    metrics: "Primary: Tutorial completion rate, Day 7 retention. Secondary: Feature adoption breadth at Day 14, support ticket volume.",
    variations: "Tooltip tour (current) vs. Interactive tutorial (3 guided actions) vs. 90-second video walkthrough vs. No onboarding guidance.",
    risk: "Low–Medium – interactive tutorial requires product engineering; video and tooltips are lighter lifts.",
    timeframe: "4–6 weeks, with 14-day retention lookback."
  }]

},
{
  phase: "Engagement",
  icon: <Activity className="w-6 h-6" />,
  description: "Engagement experiments focus on driving habitual use, deepening feature adoption, and increasing the frequency and depth of interaction with the product.",
  experiments: [
  {
    id: "09",
    title: "Push Notification Cadence & Content",
    description: "Test the frequency, timing, and content framing of push notifications or emails designed to bring users back into the product.",
    hypothesis: "If we reduce push notification frequency from daily to 2x/week and shift content from generic digests to personalized recommendations, notification open rate will increase by 25% and DAU/MAU ratio will improve.",
    metrics: "Primary: Notification open rate, DAU/MAU ratio. Secondary: Opt-out/unsubscribe rate, session frequency, notification-attributed sessions.",
    variations: "Daily digest vs. 2x/week personalized recommendations vs. Weekly social trigger summary. Each with morning vs. evening send time.",
    risk: "Medium – over-notifying risks opt-outs and brand damage; under-notifying risks irrelevance. Requires careful guardrails.",
    timeframe: "4–6 weeks, with rolling analysis of opt-out rates."
  },
  {
    id: "10",
    title: "Streaks, Badges & Gamification Mechanics",
    description: "Introduce lightweight gamification to see if it drives habit formation. Test streak counters, achievement badges, progress bars, and leaderboards.",
    hypothesis: "If we introduce a usage streak counter with a gentle reminder on Day 2 of a potential broken streak, weekly active usage will increase by 12% without degrading user satisfaction scores.",
    metrics: "Primary: Weekly active usage frequency, streak length distribution. Secondary: NPS/CSAT impact, feature adoption breadth, churn rate among streak participants.",
    variations: "No gamification (control) vs. Streak counter only vs. Streak + badges for milestones vs. Progress bar for feature adoption.",
    risk: "Medium – gamification can feel patronizing if poorly executed. Requires qualitative research alongside quantitative metrics.",
    timeframe: "6–8 weeks, with a 4-week post-experiment holdout to measure lasting behavior change."
  },
  {
    id: "11",
    title: "Contextual Feature Prompts",
    description: "Test in-product prompts that surface underused features at the moment they’re most relevant, instead of blasting all users with a feature announcement.",
    hypothesis: "If we replace our global feature announcement banner with behavior-triggered contextual prompts, feature adoption for prompted features will increase by 40% while prompt dismissal rate will decrease by 50%.",
    metrics: "Primary: Feature adoption rate for prompted feature. Secondary: Prompt dismissal rate, time-to-adoption, user sentiment.",
    variations: "Global announcement banner (control) vs. Behavior-triggered contextual prompt vs. Coach mark on relevant UI element vs. In-feed suggestion card.",
    risk: "Low – requires event tracking infrastructure but minimal product risk.",
    timeframe: "3–4 weeks per feature prompt, rolling rollout across features."
  },
  {
    id: "12",
    title: "Power User Feature Gating",
    description: "Experiment with making advanced features progressively available based on usage maturity, gating power user features behind usage milestones or opt-in discovery moments.",
    hypothesis: "If we gate advanced analytics behind a 'unlock when you’ve created 10 projects' milestone, power feature adoption will increase by 20% and new user overwhelm will decrease by 30%.",
    metrics: "Primary: Power feature adoption rate, new user support ticket volume. Secondary: Time-to-advanced-feature-use, user satisfaction by segment.",
    variations: "All features visible (control) vs. Milestone-based unlocking vs. Opt-in 'advanced mode' toggle vs. Role-based feature sets.",
    risk: "Medium – can frustrate users who expect full access; requires clear communication about what's gated and why.",
    timeframe: "6–8 weeks, segment analysis by user sophistication level."
  }]

},
{
  phase: "Retention",
  icon: <TrendingUp className="w-6 h-6" />,
  description: "Retention experiments aim to keep users coming back over time. These experiments work on habit formation, value reinforcement, and reducing reasons to churn.",
  experiments: [
  {
    id: "13",
    title: "At-Risk User Intervention Flows",
    description: "Build predictive models to identify users showing churn signals and test different intervention approaches like proactive outreach, in-app value reminders, or re-engagement offers.",
    hypothesis: "If we identify at-risk users at Day 14 of declining engagement and trigger a personalized email highlighting their usage stats plus 2 unused features, 30-day churn rate for this cohort will decrease by 15%.",
    metrics: "Primary: 30-day churn rate for at-risk cohort. Secondary: Re-engagement rate, feature adoption post-intervention, email open/click rate.",
    variations: "No intervention (control) vs. Automated usage stats email vs. Personalized email vs. In-app value reminder modal vs. Premium feature trial unlock.",
    risk: "Medium – requires predictive modeling to identify at-risk users accurately; poorly targeted interventions can feel intrusive.",
    timeframe: "8–12 weeks to observe full churn cycles."
  },
  {
    id: "14",
    title: "Cancellation Flow Optimization",
    description: "Redesign the cancellation experience to understand why users are leaving and offer tailored alternatives. Test immediate cancel vs. multi-step with reason collection and tailored save offers.",
    hypothesis: "If we add a 3-step cancellation flow with reason-based save offers (discount for price-sensitive, feature education for underutilizers, pause option for temporary leavers), save rate will increase from 8% to 18%.",
    metrics: "Primary: Save rate (users who start cancellation but don’t complete). Secondary: Cancellation completion rate, reason distribution, NPS of saved users at Day 30, re-churn rate.",
    variations: "Immediate cancel (control) vs. Reason-based save offers vs. Pause subscription option vs. Downgrade to free tier option.",
    risk: "Medium – dark pattern risk if the flow feels manipulative. Prioritize transparency and genuine alternatives.",
    timeframe: "6–8 weeks, with 60-day re-churn lookback for saved users."
  },
  {
    id: "15",
    title: "Usage Summary & Impact Reports",
    description: "Send users periodic reports showing the value they've gotten from the product (time saved, tasks completed, insights generated) to make invisible value visible.",
    hypothesis: "If we send a monthly 'your impact' email showing personalized usage stats and a comparison to the user's first month, Month 3 retention will improve by 8% because users will have a concrete understanding of the product's value.",
    metrics: "Primary: Month-over-month retention rate. Secondary: Email engagement rate, session frequency in the week after receiving the report, NPS correlation.",
    variations: "No summary (control) vs. Monthly email with usage stats vs. In-app dashboard with real-time stats vs. Weekly micro-summary.",
    risk: "Low – content generation, no product risk. Requires data pipeline for personalized stats.",
    timeframe: "8–12 weeks across 2–3 reporting cycles."
  },
  {
    id: "16",
    title: "Community & Network Effects",
    description: "Test whether building social or collaborative features improves retention, leveraging the hypothesis that users connected to others have higher switching costs.",
    hypothesis: "If we introduce shared workspaces with real-time commenting, users who collaborate with at least one other person will have 2x the 90-day retention rate of solo users.",
    metrics: "Primary: 90-day retention rate segmented by collaboration behavior. Secondary: Invites sent, shared workspace creation rate, comment volume, virality coefficient.",
    variations: "Solo-only product (control) vs. Shared workspaces + commenting vs. Activity feed showing team actions vs. Community forum with user profiles.",
    risk: "High – significant engineering investment, potential privacy concerns, and risk of building features that only a subset of users want.",
    timeframe: "12–16 weeks, with cohort analysis at 30/60/90 days."
  }]

},
{
  phase: "Monetization",
  icon: <DollarSign className="w-6 h-6" />,
  description: "Monetization experiments test how, when, and at what price users convert from free to paid, or how to increase revenue from existing paying customers.",
  experiments: [
  {
    id: "17",
    title: "Paywall Placement & Timing",
    description: "Test when free users encounter the paywall and how it's presented. Compare usage-based limits, time-based trials, feature-based gating, and hybrid models.",
    hypothesis: "If we switch from a 14-day free trial to a usage-based limit (10 free documents) with a soft paywall that lets users preview premium features, free-to-paid conversion will increase by 20%.",
    metrics: "Primary: Free-to-paid conversion rate. Secondary: Time-to-conversion, average revenue per user, trial-to-paid vs. freemium-to-paid paths, user satisfaction.",
    variations: "14-day trial (control) vs. 30-day trial vs. Usage-based limit (10 items) vs. Feature-gated freemium with soft paywall.",
    risk: "High – directly impacts revenue; incorrect paywall timing can either leave money on the table or drive users away before activation.",
    timeframe: "8–12 weeks, with LTV analysis at 90 days."
  },
  {
    id: "18",
    title: "Price Point & Tier Testing",
    description: "Test different pricing structures: per-seat vs. flat rate, monthly vs. annual discount magnitude, number of tiers, and the feature composition of each tier.",
    hypothesis: "If we add a third 'Pro' tier between Free and Enterprise and anchor the Enterprise price 3x higher, mid-tier conversion will increase by 25% due to the decoy/anchoring effect.",
    metrics: "Primary: Revenue per user, tier distribution. Secondary: Upgrade rate, downgrade rate, price sensitivity by segment, annual plan adoption rate.",
    variations: "2-tier (Free + Premium) vs. 3-tier (Free + Pro + Enterprise) vs. 3-tier with high anchor vs. Usage-based pricing.",
    risk: "High – pricing changes are hard to reverse, affect all users, and can damage trust if handled poorly. Requires careful segmentation and rollback plan.",
    timeframe: "8–12 weeks minimum, with price sensitivity analysis."
  },
  {
    id: "19",
    title: "Contextual Upsell Moments",
    description: "Test surfacing upgrade prompts at the exact moment a user hits a limit or tries to use a premium feature, comparing hard blocks against soft prompts or trial-within-a-trial.",
    hypothesis: "If we let users try a premium feature once for free before showing the upgrade prompt, conversion at the upsell moment will increase by 30% compared to a hard block.",
    metrics: "Primary: Upsell conversion rate at feature gate. Secondary: User satisfaction at gate moment, overall free-to-paid conversion, feature usage post-upgrade.",
    variations: "Hard block (control) vs. Soft prompt with value explanation vs. One-time free trial of premium feature vs. Time-limited premium access.",
    risk: "Medium – hard blocks risk frustration; overly generous trials risk cannibalizing paid conversions.",
    timeframe: "4–6 weeks per upsell point, rolling analysis across features."
  },
  {
    id: "20",
    title: "Annual Plan Conversion Nudges",
    description: "Test strategies to move monthly subscribers to annual plans, testing different discount levels, timing of the offer, and framing (total savings vs. months free).",
    hypothesis: "If we offer the annual plan nudge at the 90-day mark with a '2 months free' framing instead of a percentage discount, annual plan adoption will increase by 15%.",
    metrics: "Primary: Annual plan adoption rate. Secondary: LTV of annual vs. monthly cohorts, churn rate difference, revenue impact.",
    variations: "No annual nudge (control) vs. 20% discount at signup vs. '2 months free' at Day 90 vs. 30% discount at renewal.",
    risk: "Low–Medium – mostly messaging and timing changes; requires billing system support for varied discount structures.",
    timeframe: "8–12 weeks, with 12-month LTV projection."
  }]

},
{
  phase: "Resurrection",
  icon: <RefreshCw className="w-6 h-6" />,
  description: "Resurrection experiments focus on re-engaging churned or dormant users. These experiments are often high-leverage because the acquisition cost has already been paid.",
  experiments: [
  {
    id: "21",
    title: "Churned User Re-engagement Sequences",
    description: "Build multi-touch win-back campaigns for users who haven’t logged in for 30+ days, testing different sequences like product updates, re-activation offers, and content roundups.",
    hypothesis: "If we send a 3-email win-back sequence starting at Day 30 of inactivity, we will reactivate 8% of churned users.",
    metrics: "Primary: Reactivation rate. Secondary: Email engagement rates, re-churn rate at Day 60 post-reactivation, LTV of resurrected users.",
    variations: "No win-back (control) vs. Single email (product updates) vs. 3-email sequence vs. 3-email sequence + 30-day premium trial offer.",
    risk: "Low–Medium – email-only variants are low risk; premium trial offers have revenue implications and abuse potential.",
    timeframe: "8–12 weeks, tracking reactivation and re-churn over 60 days."
  },
  {
    id: "22",
    title: "Product-Led Resurrection via New Features",
    description: "Test whether launching a highly requested feature and communicating it directly to churned users (segmented by their stated churn reason) drives reactivation.",
    hypothesis: "If we identify users who churned because of a missing collaboration feature, then launch collaboration and email them a targeted announcement, reactivation rate for this segment will be 3x the rate of a generic product update email.",
    metrics: "Primary: Segment-specific reactivation rate. Secondary: Feature adoption post-reactivation, 30-day retention of resurrected users, NPS of resurrected segment.",
    variations: "Generic product update email vs. Reason-segmented feature announcement vs. Reason-segmented announcement + personalized demo invite.",
    risk: "Medium – requires churn reason data and cross-functional coordination with product/engineering on feature launch timing.",
    timeframe: "6–8 weeks post-feature launch."
  },
  {
    id: "23",
    title: "Returning User Experience",
    description: "Test whether a dedicated returning user experience—a 'welcome back' flow that highlights what’s new and offers to reset preferences—improves second-session retention.",
    hypothesis: "If we detect returning users (30+ days inactive) and show a 'Welcome Back' modal with 3 key updates and a 'fresh start' option, Day 7 retention for returning users will increase by 25%.",
    metrics: "Primary: Day 7 retention for returning users. Secondary: Feature adoption of new features post-return, session depth on return visit, fresh start adoption rate.",
    variations: "Default experience (control) vs. 'Welcome Back' modal with key updates vs. Guided re-onboarding flow vs. Fresh start option.",
    risk: "Low – limited to returning user segment, easily reversible.",
    timeframe: "4–6 weeks, tracking returning user cohorts separately."
  },
  {
    id: "24",
    title: "Account Sunset & Data Portability",
    description: "For users who are truly gone, test whether offering data export, account archiving, and a clear re-entry path increases the likelihood of eventual return.",
    hypothesis: "If we replace our account deletion flow with a 'freeze and return anytime' option and send a quarterly check-in email to frozen accounts, 5% of frozen accounts will reactivate within 12 months.",
    metrics: "Primary: Reactivation rate of frozen accounts. Secondary: Account deletion vs. freeze ratio, quarterly email engagement, user sentiment about data handling.",
    variations: "Hard delete (control) vs. Freeze with quarterly check-in vs. Data export + open door message vs. Freeze + annual summary.",
    risk: "Low – goodwill play with long-term payoff; no product risk.",
    timeframe: "12 months for full cycle analysis."
  }]

}];


const ImpactCalculator = ({ exp }) => {
  // Try to extract a percentage from the hypothesis text, default to 15 if not found
  const extractedLift = exp.hypothesis.match(/(\d+)(?:–\d+)?%/);
  const defaultLift = extractedLift ? parseInt(extractedLift[1], 10) : 15;

  const [baseline, setBaseline] = useState(1000);
  const [lift, setLift] = useState(defaultLift);

  const estimatedOutcome = baseline * (1 + lift / 100);
  const absoluteImpact = estimatedOutcome - baseline;

  return (
    <div className="mt-8 bg-white p-5 md:p-6 rounded-xl border border-slate-200 shadow-sm">
      <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-4 flex items-center gap-2">
        <Activity className="w-3.5 h-3.5" /> Sandbox: Impact Calculator
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-2">Baseline Metric (e.g., Traffic, Conversions)</label>
          <input
            type="number"
            value={baseline}
            onChange={(e) => setBaseline(Number(e.target.value))}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
          
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-2">Projected Lift (%)</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="-10"
              max="100"
              value={lift}
              onChange={(e) => setLift(Number(e.target.value))}
              className="w-full accent-blue-600" />
            
            <span className="text-sm font-bold text-slate-700 w-12 text-right">{lift}%</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 md:p-5 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-xl border border-blue-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-blue-600/70 font-bold uppercase tracking-wider mb-1">Estimated Outcome</p>
          <p className="text-2xl md:text-3xl font-black text-slate-900">{Math.round(estimatedOutcome).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-blue-600/70 font-bold uppercase tracking-wider mb-1">Absolute Impact</p>
          <p className={`text-lg md:text-xl font-bold ${absoluteImpact >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {absoluteImpact > 0 ? '+' : ''}{Math.round(absoluteImpact).toLocaleString()}
          </p>
        </div>
      </div>
    </div>);

};

const ExperimentCard = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all scroll-mt-24">
      <div
        className="p-4 md:p-6 cursor-pointer flex justify-between items-start md:items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}>
        
        <div className="flex flex-row gap-6 md:gap-8 items-center flex-1">
          <span className="text-[10px] md:text-xs font-mono text-blue-700 bg-blue-100/50 px-2.5 py-1 rounded-full font-bold tracking-wider shrink-0 border border-blue-200/50">EXP {exp.id}</span>
          <h4 className="text-sm md:text-lg font-bold text-slate-900 leading-snug">{exp.title}</h4>
        </div>
        <div className="mt-0.5 md:mt-0 bg-slate-100 p-1.5 rounded-full shrink-0">
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-slate-100 bg-slate-50/50">
          
            <div className="p-4 md:p-6 space-y-6 md:space-y-8">
              <div>
                <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2">Description</h5>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">{exp.description}</p>
              </div>
              
              <div className="bg-blue-50/50 p-4 md:p-5 rounded-xl border border-blue-100 shadow-sm">
                <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-blue-800 uppercase mb-2 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-blue-600" /> Hypothesis</h5>
                <p className="text-slate-800 font-medium italic text-sm md:text-base leading-relaxed">"{exp.hypothesis}"</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2"><Target className="w-3.5 h-3.5" /> Key Metrics</h5>
                  <p className="text-slate-600 text-sm leading-relaxed bg-white p-3 md:p-4 rounded-lg border border-slate-100 shadow-sm h-full">{exp.metrics}</p>
                </div>
                <div>
                  <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-2 flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5" /> Variations</h5>
                  <p className="text-slate-600 text-sm leading-relaxed bg-white p-3 md:p-4 rounded-lg border border-slate-100 shadow-sm h-full">{exp.variations}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-5 md:pt-6 border-t border-slate-200">
                <div>
                  <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5 flex items-center gap-2"><AlertTriangle className="w-3.5 h-3.5" /> Risk Level</h5>
                  <p className="text-slate-700 font-medium text-xs md:text-sm">{exp.risk}</p>
                </div>
                <div>
                  <h5 className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1.5 flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Timeframe</h5>
                  <p className="text-slate-700 font-medium text-xs md:text-sm">{exp.timeframe}</p>
                </div>
              </div>

              <ImpactCalculator exp={exp} />
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

};

export default function ExamplesOfGrowthDesignExperiments() {
  const phases = experimentsData.map((d) => d.phase);
  const [activeSection, setActiveSection] = useState(phases[0]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24">
      {/* Navigation Header */}
      <div className="pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto mb-6 md:mb-10">
        <Link to={createPageUrl("Writing")} className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors uppercase font-bold bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm border border-slate-200">
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4" /> Back to Writing
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10">
            <p className="text-blue-600 mb-4 text-lg font-bold uppercase tracking-[0.25em] md:text-xs md:mb-6 flex items-center gap-2">GROWTH DESIGN PLAYBOOK

            </p>
            <h1 className="text-slate-900 mb-6 text-3xl font-normal tracking-tight leading-[1.15] md:text-5xl lg:text-6xl md:mb-8">Examples of Different
Experiments in Growth Design
            </h1>
            <p className="text-slate-900 text-base font-normal leading-relaxed md:text-xl max-w-3xl">A comprehensive reference for product and growth designers running experiments across the user lifecycle from acquisition through retention, monetization, and resurrection.

            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        
        {/* Mobile/Tablet Sticky Nav */}
        <div className="lg:hidden sticky top-[72px] md:top-20 z-40 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 -mx-4 md:-mx-6 px-4 md:px-6 py-3 mb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] shadow-sm">
          <div className="flex items-center gap-2 w-max">
            {phases.map((phase) =>
            <a
              key={phase}
              href={`#${phase.toLowerCase()}`}
              onClick={() => setActiveSection(phase)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border ${activeSection === phase ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'}`}>
              
                {phase}
              </a>
            )}
          </div>
        </div>

        {/* Desktop Sidebar Nav */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase mb-6 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" /> Table of Contents
            </h3>
            <nav className="flex flex-col gap-1.5">
              {phases.map((phase) =>
              <a
                key={phase}
                href={`#${phase.toLowerCase()}`}
                onClick={() => setActiveSection(phase)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeSection === phase ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                
                  {phase} Experiments
                </a>
              )}
            </nav>
          </div>
        </div>

        {/* Experiments Content */}
        <div className="flex-1 space-y-16 md:space-y-24">
          {experimentsData.map((phaseData, idx) =>
          <motion.section
            key={idx}
            id={phaseData.phase.toLowerCase()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setActiveSection(phaseData.phase)}
            className="scroll-mt-32 md:scroll-mt-40">
            
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
                

              
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 md:mb-3">{phaseData.phase} Experiments</h2>
                  <p className="text-slate-600 text-sm md:text-lg max-w-3xl leading-relaxed">{phaseData.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {phaseData.experiments.map((exp) =>
              <ExperimentCard key={exp.id} exp={exp} />
              )}
              </div>
            </motion.section>
          )}
        </div>
      </div>
      
      {/* Footer Meta */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-24 md:mt-32 pt-8 md:pt-12 border-t border-slate-200">
        <div className="bg-slate-100 p-6 md:p-8 rounded-2xl text-center">
          <p className="text-xs md:text-sm text-slate-500 font-mono">Prepared for growth teams, product designers, and cross-functional stakeholders.</p>
        </div>
      </div>
    </div>);

}