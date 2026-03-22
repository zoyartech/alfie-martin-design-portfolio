import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MobileNav from "@/components/MobileNav";

export default function PolaroidProject() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1611]">


      <div className="pt-20">
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
        <div className="text-[#ff3131] polaroid-scope" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>);

}

const customCss = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');

  .polaroid-scope {
    --cream: #F5F0E8;
    --cream-dark: #EBE4D4;
    --black: #1A1611;
    --charcoal: #2C2720;
    --yellow: #F2C94C;
    --yellow-pale: #FBF0C4;
    --warm-gray: #8C8378;
    --white: #FDFAF4;
    --red-accent: #C84B31;
    --serif: 'Playfair Display', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
    --mono: 'DM Mono', monospace;
    
    background: var(--cream);
    color: var(--black);
    font-family: var(--sans);
    font-weight: 300;
    line-height: 1.75;
    overflow-x: hidden;
    position: relative;
    text-align: left;
  }

  .polaroid-scope::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 999;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
    background-size: 200px 200px;
  }

  .polaroid-scope .polaroid-frame {
    background: #fff;
    padding: 10px 10px 32px 10px;
    box-shadow: 0 2px 16px rgba(26,22,17,0.15);
    display: inline-block;
  }

  .polaroid-scope .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .polaroid-scope .hero {
    padding: 7rem 0 5rem;
    border-bottom: 1px solid var(--black);
    position: relative;
    overflow: hidden;
  }

  .polaroid-scope .hero-meta {
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 2rem;
  }

  .polaroid-scope .hero-eyebrow {
    display: inline-block;
    background: var(--yellow);
    color: var(--black);
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 12px;
    margin-bottom: 1.5rem;
  }

  .polaroid-scope h1 {
    font-family: var(--serif);
    font-size: clamp(3.2rem, 7vw, 6rem);
    font-weight: 700;
    line-height: 1.0;
    letter-spacing: -0.02em;
    margin-bottom: 0.2em;
  }

  .polaroid-scope h1 em {
    font-style: italic;
    color: var(--warm-gray);
  }

  .polaroid-scope .hero-sub {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.2rem;
    color: var(--warm-gray);
    max-width: 520px;
    margin: 1.5rem 0 3rem;
    line-height: 1.6;
  }

  .polaroid-scope .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .polaroid-scope .tag {
    border: 1px solid var(--black);
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 5px 12px;
    color: var(--charcoal);
  }

  .polaroid-scope .hero-frame-cluster {
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-40%) rotate(4deg);
    opacity: 0.08;
  }

  .polaroid-scope .hero-frame-cluster-inner {
    width: 260px;
    height: 310px;
    background: var(--black);
  }

  .polaroid-scope .stats-bar {
    background: var(--black);
    color: var(--white);
    padding: 3.5rem 0;
    border-top: 1px solid rgba(255,255,255,0.15);
    border-bottom: 1px solid rgba(255,255,255,0.15);
  }

  .polaroid-scope .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 0;
  }

  .polaroid-scope .stat-item {
    padding: 0 2.5rem;
    border-right: 1px solid rgba(255,255,255,0.15);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .polaroid-scope .stat-item::before {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background: var(--yellow);
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }

  .polaroid-scope .stat-item:last-child { border-right: none; }
  .polaroid-scope .stat-item:first-child { padding-left: 0; }

  .polaroid-scope .stat-number {
    font-family: var(--serif);
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: var(--yellow);
    margin-bottom: 0.3rem;
  }

  .polaroid-scope .stat-label {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(253,250,244,0.5);
  }

  .polaroid-scope section {
    padding: 5rem 0;
    border-bottom: 1px solid rgba(26,22,17,0.12);
  }

  .polaroid-scope .section-label {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .polaroid-scope .section-label::after {
    content: '';
    display: block;
    height: 1px;
    width: 48px;
    background: var(--warm-gray);
    opacity: 0.4;
  }

  .polaroid-scope h2 {
    font-family: var(--serif);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }

  .polaroid-scope h2 em { font-style: italic; color: var(--warm-gray); }

  .polaroid-scope h3 {
    font-family: var(--serif);
    font-size: 1.25rem;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 0.75rem;
    color: var(--charcoal);
  }

  .polaroid-scope p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--charcoal);
    margin-bottom: 1.25rem;
    max-width: 640px;
  }

  .polaroid-scope p:last-child { margin-bottom: 0; }

  .polaroid-scope .pullquote {
    border-left: 3px solid var(--yellow);
    padding: 1.25rem 2rem;
    margin: 3rem 0;
    background: var(--yellow-pale);
  }

  .polaroid-scope .pullquote p {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.3rem;
    line-height: 1.6;
    color: var(--black);
    max-width: none;
    margin: 0;
  }

  .polaroid-scope .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  @media (max-width: 680px) {
    .polaroid-scope .two-col { grid-template-columns: 1fr; gap: 2rem; }
    .polaroid-scope .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); padding: 1rem 0; }
    .polaroid-scope .stats-grid { gap: 0; }
  }

  .polaroid-scope .card-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5px;
    background: var(--black);
    border: 1.5px solid var(--black);
    margin: 2.5rem 0;
  }

  .polaroid-scope .card-cell {
    background: var(--cream);
    padding: 1.75rem;
  }

  .polaroid-scope .card-cell-label {
    font-family: var(--mono);
    font-size: 0.55rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 0.75rem;
  }

  .polaroid-scope .card-cell-title {
    font-family: var(--serif);
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--black);
    line-height: 1.3;
  }

  .polaroid-scope .card-cell p {
    font-size: 0.88rem;
    line-height: 1.65;
    margin: 0;
    max-width: none;
  }

  .polaroid-scope .card-cell.accent {
    background: var(--black);
  }

  .polaroid-scope .card-cell.accent .card-cell-label,
  .polaroid-scope .card-cell.accent .card-cell-title,
  .polaroid-scope .card-cell.accent p {
    color: var(--white);
  }

  .polaroid-scope .card-cell.accent .card-cell-label { color: var(--yellow); }

  .polaroid-scope .collab-row {
    display: flex;
    gap: 0;
    border: 1.5px solid var(--black);
    margin: 2rem 0;
    overflow: hidden;
  }

  .polaroid-scope .collab-badge {
    background: var(--black);
    color: var(--yellow);
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.4rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-width: 52px;
    flex-shrink: 0;
  }

  .polaroid-scope .collab-content {
    padding: 1.75rem 2rem;
    flex: 1;
  }

  .polaroid-scope .collab-content h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
    font-family: var(--sans);
    color: var(--black);
  }

  .polaroid-scope .collab-content p {
    font-size: 0.9rem;
    max-width: none;
    margin: 0;
  }

  .polaroid-scope .timeline {
    position: relative;
    padding-left: 2.5rem;
    margin: 2rem 0;
  }

  .polaroid-scope .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: var(--black);
  }

  .polaroid-scope .timeline-item {
    position: relative;
    margin-bottom: 2.25rem;
  }

  .polaroid-scope .timeline-item::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 8px;
    width: 7px;
    height: 7px;
    background: var(--yellow);
    border: 1.5px solid var(--black);
  }

  .polaroid-scope .timeline-item-label {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--warm-gray);
    margin-bottom: 0.25rem;
  }

  .polaroid-scope .timeline-item h3 {
    font-style: normal;
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--sans);
    margin-bottom: 0.4rem;
    color: var(--black);
  }

  .polaroid-scope .timeline-item p {
    font-size: 0.9rem;
    margin: 0;
  }

  .polaroid-scope .role-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5px;
    background: var(--black);
    border: 1.5px solid var(--black);
    margin-bottom: 4rem;
  }

  .polaroid-scope .role-item {
    padding: 1.5rem;
    font-family: var(--sans);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--black);
    background: var(--white);
  }

  .polaroid-scope .role-item span { 
    color: var(--warm-gray); 
    display: block; 
    margin-bottom: 0.4rem; 
    font-family: var(--mono);
    font-size: 0.6rem; 
    letter-spacing: 0.15em; 
    text-transform: uppercase;
  }

  .polaroid-scope .polaroid-cluster {
    display: flex;
    gap: 1.5rem;
    align-items: flex-end;
    margin: 2.5rem 0;
    flex-wrap: wrap;
  }

  .polaroid-scope .polaroid {
    background: #fff;
    padding: 8px 8px 28px 8px;
    border: 0.5px solid rgba(0,0,0,0.1);
    box-shadow: 2px 4px 16px rgba(0,0,0,0.1);
    flex-shrink: 0;
  }

  .polaroid-scope .polaroid-inner {
    background: var(--cream-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-size: 0.55rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--warm-gray);
  }

  .polaroid-scope .polaroid.rotate-left { transform: rotate(-2.5deg); }
  .polaroid-scope .polaroid.rotate-right { transform: rotate(1.8deg); }
  .polaroid-scope .polaroid.rotate-tiny { transform: rotate(0.8deg); }

  .polaroid-scope .case-footer {
    padding: 4rem 0;
    background: var(--black);
    color: var(--white);
  }

  .polaroid-scope .footer-label {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--yellow);
    margin-bottom: 1rem;
  }

  .polaroid-scope .footer-name {
    font-family: var(--serif);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: var(--white);
  }

  .polaroid-scope .footer-note {
    font-size: 0.85rem;
    color: rgba(253,250,244,0.45);
    max-width: none;
    margin: 0;
    font-family: var(--mono);
    letter-spacing: 0.05em;
  }

  .polaroid-scope .em-dash {
    display: inline-block;
    width: 24px;
    height: 1.5px;
    background: var(--yellow);
    vertical-align: middle;
    margin: 0 8px;
  }
`;

const htmlContent = `
<!-- HERO -->
<div class="hero">
  <div class="container">
    <div class="hero-eyebrow">Growth Design &nbsp;·&nbsp; Brand Strategy &nbsp;·&nbsp; Case Study</div>
    <h1>Polaroid<br><em style="color: #3499db;">Reimagined.</em></h1>
    <p class="hero-sub"><span style="color: #ff3131;">Seth Godin once said "Marketing to everyone is marketing to no one". That was the overarching root cause of the problems Polaroid was having since they returned to the market:</span></p>
    <div class="hero-tags">
      <span class="tag">Brand Identity</span>
      <span class="tag">Growth Strategy</span>
      <span class="tag">Social Campaign</span>
      <span class="tag">Partnership Design</span>
      <span class="tag">Content Strategy</span>
      <span class="tag">Collaborations</span>
    </div>
    <div style="margin-top: 4rem; margin-bottom: 2rem;">
      <div style="display: flex; justify-content: center; margin-bottom: 4rem;">
        <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6663586c6_IMG_3289.PNG" alt="Polaroid App Store screens" style="width: 100%; max-width: 800px; height: auto;" />
      </div>
      <h3>Narration along with visuals serve as emotional reminders of why polaroid is so special</h3>
      <p style="white-space: pre-wrap; margin-top: 1rem;">what does it take to capture a moment it takes light
to illuminate the moment?
what we see and what we feel it takes chemistry to turn that light into matter
and passion to continuously evolve our process a Polaroid photograph is a beautifully complex thing where each
light-sensitive negative is made up of 15 layers thinner than a hair and
designed to mimic the human eye the image comes to life as the dyes activate painting a photograph from
right before our eyes it is the magic that happens
at the intersection of art and science:</p>
    </div>
    <div style="margin-top: 2rem; position: relative; width: 100%; padding-bottom: 56.25%;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.1);" src="https://www.youtube.com/embed/JwJFN61YDaM?si=kuPUZIvNw8XQt6k2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  <div class="hero-frame-cluster" style="display: none;"><div class="hero-frame-cluster-inner"></div></div>
</div>

<!-- STATS BAR -->
<div class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">2</div>
        <div class="stat-label">Luxury Collabs Launched</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">23</div>
        <div class="stat-label">Instagram Contests Run</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">01</div>
        <div class="stat-label">Iconic Brand Rebuilt</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">60+</div>
        <div class="stat-label">Years of Heritage Leveraged</div>
      </div>
    </div>
  </div>
</div>

<!-- ROLE + CONTEXT -->
<section>
  <div class="container">
    <div class="section-label"><strong style="color: var(--black);">Context</strong></div>
    <div class="role-strip">
      <div class="role-item"><span>Role</span>Brand &amp; Growth Designer</div>
      <div class="role-item"><span>Scope</span>Identity · Campaign · Partnership</div>
      <div class="role-item"><span>Channel</span>Instagram · Retail · Collaborations</div>
      <div class="role-item"><span>Era</span>Post-Hiatus Return</div>
    </div>

    <div class="two-col">
      <div>
        <h2>The <em style="color: #3499db;">Challenge.</em></h2>
        <p>When Polaroid returned to actively selling products after its extended hiatus, the brand faced a paradox that most companies would envy and dread simultaneously: everyone knew the name, and almost no one knew what it stood for anymore.</p>
        <p>The challenge wasn't recognition it was relevance. Polaroid had become nostalgia without a body, a feeling without a product. My job was to give that feeling somewhere to live again, and to build a growth strategy that could convert sentiment into sales.</p>
        <p>I needed to identify the people who had made Polaroid iconic in the first place the early adopters, the artists, the experimenters and give them a reason to come back. Not as a retro curiosity. As something that still meant something.</p>
      </div>
      <div>
        <div class="polaroid-cluster" style="justify-content: center;">
          <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/714a7daec_IMG_1931.jpg" alt="Polaroids" style="width: 100%; max-width: 320px; height: auto; transform: rotate(-2deg); box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
        </div>
        <div class="pullquote">
          <p>"The brand had become nostalgia without a body a feeling without a product."</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- BRAND IDENTITY -->
<section>
  <div class="container">
    <div class="section-label">01 Brand Identity</div>
    <h2>Designing for <em style="color: #3499db;">the People<br>Who Invented the Culture.</em></h2>
    <p>I began by going back to the source. Polaroid's original audience wasn't nostalgic they were radical. They were artists who wanted immediacy, experimenters who liked happy accidents, and innovators who believed a photograph you could hold in your hand, still warm from the camera, was a different thing entirely than one you sent to a lab.</p>
    <p>I redesigned the brand identity to speak directly to that lineage. The visual language I developed honored the physical and tactile qualities that made Polaroid distinct the frame, the weight of the paper, the specific color quality of instant film while stripping away the layer of kitschy nostalgia that had accumulated over the hiatus years.</p>

    <div class="card-strip">
      <div class="card-cell">
        <div class="card-cell-label">Principle 01</div>
        <div class="card-cell-title">Tactile Over Digital</div>
        <p>I centered the identity on physicality the frame, the texture, the immediacy of a print in hand. Every design decision was anchored in what makes an instant photograph irreplaceable.</p>
      </div>
      <div class="card-cell">
        <div class="card-cell-label">Principle 02</div>
        <div class="card-cell-title">Innovators, Not Nostalgists</div>
        <p>I positioned the brand not as a relic but as a living creative tool. The identity spoke to makers and early adopters the community that built the brand's original cultural gravity.</p>
      </div>
      <div class="card-cell accent">
        <div class="card-cell-label">Principle 03</div>
        <div class="card-cell-title">Sentimental With Intent</div>
        <p>Sentimentality was a lever, not a crutch. I built it into the content design and strategy as a purposeful emotional mechanism not a default aesthetic.</p>
      </div>
    </div>

    <p>I infused the content design with a deliberate sentimentality not the soft-focus, sepia-toned kind, but something more honest. The kind of feeling you get when you find an old photograph in a drawer. The brand voice I developed was warm without being saccharine, and specific without being niche.</p>
    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/722c93dac_uuid26B9BE02-044A-4DC8-85FA-1C794DBDAE64code001library1type1mode1loctruecaptrue.png" alt="Polaroid Logo" style="width:100%; height:auto; margin-top: 3rem; mix-blend-mode: multiply;" />
  </div>
</section>

<!-- CONTENT STRATEGY -->
<section>
  <div class="container">
    <div class="section-label">02 Content Strategy</div>
    <div class="two-col">
      <div>
        <h2>Sentimentality as <em style="color: #3499db;">Strategy.</em></h2>
        <p>I approached content strategy as an emotional architecture problem. The question wasn't what to post it was what to make people feel, and in what sequence, so that purchasing film felt like a natural extension of that feeling.</p>
        <p>I built a content system anchored in specific emotional beats: the moment before a photo is taken, the wait while it develops, the ritual of sharing a physical print with someone. These beats became the rhythm of our content calendar and the framework for how we approached every touchpoint.</p>
        <p>By mapping content to emotional states rather than product features, I was able to connect the brand to something more durable than trend cycles the fundamental human desire to hold a moment still.</p>
      </div>
      <div>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-item-label">Phase One</div>
            <h3>Reestablish the Emotional Contract</h3>
            <p>Content that reminded the audience what Polaroid had always been about not a camera, but a way of seeing. Archival imagery, artist voices, community memory.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-item-label">Phase Two</div>
            <h3>Connect Feeling to Product</h3>
            <p>Introduced film and hardware through the lens of experience what it feels like, not what it does. Soft product integration through community-submitted content.</p>
          </div>
          <div class="timeline-item">
            <div class="timeline-item-label">Phase Three</div>
            <h3>Activate the Purchase Loop</h3>
            <p>Instagram contests, limited edition collabs, and community challenges created urgency and desire with film purchase as the price of participation.</p>
          </div>
        </div>
      </div>
    </div>
    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/2624b7a29_IMG_1930.jpg" alt="Content Strategy Polaroids" style="width:100%; height:auto; margin-top: 4rem;" />
  </div>
</section>

<!-- INSTAGRAM / SOCIAL -->
<section>
  <div class="container">
    <div class="section-label">03 Social Campaign</div>
    <h2>Turning Instagram Into <em style="color: #3499db;">a Film Counter.</em></h2>
    <p>The insight I was working from was simple: Instagram had become the place people went to see photographs, but Polaroid was about making them. The contest structure I designed was built to bridge that gap to make participating on Instagram inseparable from purchasing and using film.</p>

    <div class="card-strip">
      <div class="card-cell">
        <div class="card-cell-label">Contest Design</div>
        <div class="card-cell-title">Film First, Caption Second</div>
        <p>Every contest I designed required participants to shoot on Polaroid film to enter. No filter aesthetics, no digital simulations entries had to be scans or photos of actual prints. Film purchase became the cost of participation.</p>
      </div>
      <div class="card-cell">
        <div class="card-cell-label">Community Mechanic</div>
        <div class="card-cell-title">Themed, Not Seasonal</div>
        <p>Rather than tying campaigns to retail calendar moments, I developed thematic prompts memory, discovery, accident, light that activated the creative community and generated submissions that functioned as organic brand content.</p>
      </div>
      <div class="card-cell">
        <div class="card-cell-label">Follower Loop</div>
        <div class="card-cell-title">From Passive Audience to Active Shooter</div>
        <p>Contest entries were featured and amplified by the brand, turning participants into ambassadors. The loop: follow → buy film → shoot → submit → get featured → encourage others to follow.</p>
      </div>
    </div>

    <div class="pullquote">
      <p>"I designed the contests so that using a Polaroid camera was the only way to have a voice in the community we were building."</p>
    </div>

    <p>The contests served a dual purpose: they drove film sales directly, and they generated an enormous volume of authentic, community-created brand content that populated our feed and kept the emotional register of the account exactly where I wanted it alive, specific, and physical.</p>
    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/21bb97f0b_two-iphone-ui-design-presentation-mockup-template-69b89b3889b2477e52ba9358-2x.png" alt="Social Campaign UI" style="width:100%; height:auto; margin-top: 4rem;" />
  </div>
</section>

<!-- COLLABORATIONS -->
<section>
  <div class="container">
    <div class="section-label">04 Collaborations</div>
    <h2>Partnerships That <em style="color: #3499db;">Meant Something.</em></h2>
    <p>The collaborations I pursued weren't about borrowed heat they were about shared DNA. I looked for partners that had their own relationship to the ideas Polaroid stood for: immediacy, craft, cultural specificity, and the handmade. The two most significant partnerships I developed were with the Keith Haring estate and with Fendi.</p>

    <div class="collab-row">
      <div class="collab-badge">Keith Haring</div>
      <div class="collab-content">
        <h3>Keith Haring Estate</h3>
        <p>I partnered with the Keith Haring estate to develop a collaboration that reconnected Polaroid to the New York art world that had embraced instant photography as a medium in the 1980s. Haring had famously used Polaroids as a documentation and creation tool, and the collaboration was rooted in that authentic history. The resulting product and content series honored the estate's brand standards while giving Polaroid a direct line back into the fine art conversation. More than a licensed print run, this was a story about how two visual cultures had always been in dialogue.</p>
      </div>
    </div>

    <div class="collab-row">
      <div class="collab-badge">Fendi</div>
      <div class="collab-content">
        <h3>Fendi</h3>
        <p>The Fendi collaboration was built around a different kind of logic: the luxury of the impermanent. I developed the partnership around the idea that Polaroid and Fendi shared a commitment to craft, to the physical object, and to the idea that what you make with your hands has a value that reproduction can't capture. The collaboration gave Polaroid entry into a luxury lifestyle conversation without compromising its roots and gave Fendi a way to articulate its own relationship to analog values in an increasingly digital world. The campaign visuals I designed for the partnership lived at the intersection of both brand worlds with deliberate precision.</p>
      </div>
    </div>

    <div class="card-strip" style="margin-top:2.5rem;">
      <div class="card-cell">
        <div class="card-cell-label">Collaboration Criteria</div>
        <div class="card-cell-title">Shared Heritage, Not Just Shared Audience</div>
        <p>Every partner I brought to the table had a genuine historical or philosophical relationship with what Polaroid represented. The partnerships were credible because they were earned.</p>
      </div>
      <div class="card-cell accent">
        <div class="card-cell-label">Strategic Outcome</div>
        <div class="card-cell-title">Repositioned in the Cultural Conversation</div>
        <p>The collaborations moved Polaroid from the nostalgia shelf into the contemporary cultural marketplace where its strongest potential buyers already lived.</p>
      </div>
    </div>
    <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/5a757ad07_IMG_1932.jpg" alt="Collaboration Polaroid" style="width:100%; height:auto; margin-top: 2rem;" />
  </div>
</section>

<!-- REFLECTION -->
<section style="border-bottom: none;">
  <div class="container">
    <div class="section-label">Reflection</div>
    <div class="two-col">
      <div>
        <h2>What I <em style="color: #3499db;">Learned.</em></h2>
        <p>The Polaroid project taught me that the most complex brand problems are rarely about awareness. People knew Polaroid. The work was about belief rebuilding the conviction that this thing was still worth caring about, still worth spending money on, still worth getting your hands on.</p>
        <p>Growth design, in that context, meant something specific: it meant understanding that the path to purchase ran through feeling, and that feeling had to be designed with the same precision you'd apply to a funnel or a conversion rate. The contests, the identity, the collaborations each one was a designed emotional argument.</p>
        <p>What I came away with was a sharper understanding of how legacy brands create permission. When you have a brand with real cultural history, you don't invent relevance you excavate it. You find what was always true about it, strip away what accumulated on top, and hand it back to the people who made it matter in the first place.</p>
      </div>
      <div style="padding-top: 0.5rem;">
        <div class="polaroid rotate-tiny" style="width: 100%;">
          <div class="polaroid-inner" style="width: 100%; height: 220px; font-size: 0.6rem;">THE WORK</div>
        </div>
        <div style="margin-top: 2rem; padding-left: 0.5rem;">
          <div class="card-cell-label" style="margin-bottom:1rem;">Key Disciplines Applied</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Brand Identity Design
            </div>
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Growth Strategy &amp; Campaign Architecture
            </div>
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Content Strategy &amp; Emotional Architecture
            </div>
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Social Campaign Design (Instagram)
            </div>
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Partnership Development &amp; Collaboration Design
            </div>
            <div style="display: flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 0.62rem; letter-spacing: 0.08em; color: var(--charcoal);">
              <div style="width: 6px; height: 6px; background: var(--yellow); border: 1.5px solid var(--black); flex-shrink: 0;"></div>
              Community Building &amp; Ambassador Mechanics
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<div class="case-footer">
  <div class="container">
    <div class="footer-label">Case Study Growth Design</div>
    <div class="footer-name">Polaroid</div>
    <p class="footer-note">Brand Identity &nbsp;·&nbsp; Growth Campaign &nbsp;·&nbsp; Instagram Strategy &nbsp;·&nbsp; Keith Haring Estate &nbsp;·&nbsp; Fendi Collaboration</p>
  </div>
</div>
`;