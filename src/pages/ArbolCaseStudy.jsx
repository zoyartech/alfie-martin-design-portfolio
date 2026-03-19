import React, { useEffect } from 'react';

export default function ArbolCaseStudy() {
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div className="arbol-case-study">
      <style dangerouslySetInnerHTML={{ __html: `
        .arbol-case-study {
            --lime: #88df72;
            --lime-dim: #6eb25b;
            --bg: #0a0c08;
            --bg2: #0f120c;
            --bg3: #151a10;
            --border: rgba(136,223,114,0.15);
            --text: #d4dbc8;
            --text-dim: #7a8870;
            --white: #f0f4e8;
            background: linear-gradient(180deg, #0d1228 0%, #1d3f44 100%);
            color: var(--text);
            font-family: 'DM Sans', sans-serif;
            font-weight: 300;
            line-height: 1.7;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }

        .arbol-case-study::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 1000;
            opacity: 0.35;
        }

        .arbol-case-study header {
            padding: 3rem 4rem 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 1px solid var(--border);
            padding-bottom: 2rem;
        }

        .arbol-case-study .logo-mark {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.7rem;
            color: var(--lime);
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }

        .arbol-case-study .breadcrumb {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.65rem;
            color: var(--text-dim);
            letter-spacing: 0.12em;
            text-align: right;
            line-height: 1.8;
        }

        .arbol-case-study .hero {
            padding: 6rem 4rem 5rem;
            position: relative;
            overflow: hidden;
        }

        .arbol-case-study .hero::after {
            content: '';
            position: absolute;
            bottom: 0; right: -10%;
            width: 55vw; height: 55vw;
            background: radial-gradient(circle, rgba(136,223,114,0.04) 0%, transparent 70%);
            pointer-events: none;
        }

        .arbol-case-study .hero-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.65rem;
            color: var(--lime);
            letter-spacing: 0.25em;
            text-transform: uppercase;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .arbol-case-study .hero-label::before {
            content: '';
            display: block;
            width: 2.5rem;
            height: 1px;
            background: var(--lime);
        }

        .arbol-case-study h1 {
            font-family: 'DM Serif Display', serif;
            font-size: clamp(2.8rem, 6vw, 5.5rem);
            font-weight: 400;
            color: var(--white);
            line-height: 1.08;
            letter-spacing: -0.02em;
            max-width: 16ch;
            margin-bottom: 2.5rem;
        }

        .arbol-case-study h1 em {
            font-style: italic;
            color: var(--lime);
        }

        .arbol-case-study .hero-meta {
            display: grid;
            grid-template-columns: repeat(4, auto);
            gap: 3rem;
            margin-top: 4rem;
            padding-top: 2.5rem;
            border-top: 1px solid var(--border);
            width: fit-content;
        }

        .arbol-case-study .meta-item label {
            display: block;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            color: var(--text-dim);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-bottom: 0.4rem;
        }

        .arbol-case-study .meta-item span {
            font-size: 0.85rem;
            color: var(--white);
            font-weight: 400;
        }

        .arbol-case-study section {
            padding: 5rem 4rem;
            border-bottom: 1px solid var(--border);
            position: relative;
        }

        .arbol-case-study .section-number {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            color: var(--lime);
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-bottom: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .arbol-case-study .section-number::before {
            content: '';
            display: block;
            width: 1.5rem;
            height: 1px;
            background: var(--lime);
        }

        .arbol-case-study h2 {
            font-family: 'DM Serif Display', serif;
            font-size: clamp(1.8rem, 3.5vw, 2.8rem);
            font-weight: 400;
            color: var(--white);
            line-height: 1.15;
            letter-spacing: -0.015em;
            margin-bottom: 1.5rem;
        }

        .arbol-case-study h2 em { font-style: italic; color: var(--lime); }

        .arbol-case-study h3 {
            font-family: 'DM Serif Display', serif;
            font-size: 1.25rem;
            font-weight: 400;
            color: var(--white);
            margin-bottom: 0.75rem;
        }

        .arbol-case-study p {
            font-size: 1.05rem;
            color: var(--text);
            max-width: 66ch;
            line-height: 1.75;
        }

        .arbol-case-study p + p { margin-top: 1.2rem; }

        .arbol-case-study .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .arbol-case-study .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 2.5rem;
        }

        .arbol-case-study .stat-bar {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border: 1px solid var(--border);
            margin: 3rem 0;
        }

        .arbol-case-study .stat-item {
            padding: 2rem;
            border-right: 1px solid var(--border);
        }

        .arbol-case-study .stat-item:last-child { border-right: none; }

        .arbol-case-study .stat-num {
            font-family: 'DM Serif Display', serif;
            font-size: 3rem;
            color: var(--lime);
            display: block;
            line-height: 1;
            margin-bottom: 0.5rem;
        }

        .arbol-case-study .stat-desc {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.7rem;
            color: var(--text-dim);
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .arbol-case-study .callout {
            border-left: 2px solid var(--lime);
            padding: 1.5rem 2rem;
            background: rgba(136,223,114,0.03);
            margin: 2rem 0;
        }

        .arbol-case-study .callout p {
            font-family: 'DM Serif Display', serif;
            font-size: 1.3rem;
            font-style: italic;
            color: var(--white);
            max-width: 55ch;
            line-height: 1.5;
        }

        .arbol-case-study .card {
            border: 1px solid var(--border);
            padding: 2rem;
            background: var(--bg2);
        }

        .arbol-case-study .card-tag {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            color: var(--lime);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-bottom: 1rem;
            display: block;
        }

        .arbol-case-study .process-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0;
            margin-top: 3rem;
            border: 1px solid var(--border);
        }

        .arbol-case-study .process-step {
            padding: 2rem 1.75rem;
            border-right: 1px solid var(--border);
            position: relative;
        }

        .arbol-case-study .process-step:last-child { border-right: none; }

        .arbol-case-study .step-num {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            color: var(--lime);
            letter-spacing: 0.2em;
            display: block;
            margin-bottom: 1rem;
        }

        .arbol-case-study .process-step h3 {
            font-size: 1rem;
            margin-bottom: 0.6rem;
        }

        .arbol-case-study .process-step p {
            font-size: 0.85rem;
            color: var(--text-dim);
            max-width: none;
        }

        .arbol-case-study .insight-list {
            list-style: none;
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .arbol-case-study .insight-list li {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
            padding: 1.25rem 1.5rem;
            border: 1px solid var(--border);
        }

        .arbol-case-study .insight-list li::before {
            content: '→';
            font-family: 'IBM Plex Mono', monospace;
            color: var(--lime);
            flex-shrink: 0;
            margin-top: 0.1rem;
        }

        .arbol-case-study .insight-list li span {
            font-size: 0.95rem;
            color: var(--text);
            line-height: 1.65;
        }

        .arbol-case-study .flow {
            display: flex;
            align-items: center;
            gap: 0;
            margin: 3rem 0;
            overflow-x: auto;
        }

        .arbol-case-study .flow-node {
            flex-shrink: 0;
            background: var(--bg3);
            border: 1px solid var(--border);
            padding: 1.2rem 1.5rem;
            text-align: center;
            min-width: 140px;
        }

        .arbol-case-study .flow-node.active {
            border-color: var(--lime);
            background: rgba(136,223,114,0.05);
        }

        .arbol-case-study .flow-node .node-label {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            color: var(--text-dim);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.4rem;
        }

        .arbol-case-study .flow-node .node-title {
            font-size: 0.85rem;
            color: var(--white);
            font-weight: 400;
        }

        .arbol-case-study .flow-arrow {
            flex-shrink: 0;
            width: 2.5rem;
            height: 1px;
            background: var(--border);
            position: relative;
        }

        .arbol-case-study .flow-arrow::after {
            content: '▶';
            position: absolute;
            right: -6px;
            top: -7px;
            font-size: 0.5rem;
            color: var(--lime);
        }

        .arbol-case-study .decision-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2.5rem;
            font-size: 0.9rem;
        }

        .arbol-case-study .decision-table th {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--lime);
            text-align: left;
            padding: 0.8rem 1.25rem;
            border-bottom: 1px solid var(--border);
        }

        .arbol-case-study .decision-table td {
            padding: 1.1rem 1.25rem;
            border-bottom: 1px solid var(--border);
            vertical-align: top;
            color: var(--text);
            line-height: 1.6;
        }

        .arbol-case-study .decision-table tr:hover td {
            background: rgba(136,223,114,0.02);
        }

        .arbol-case-study .decision-table td:first-child {
            color: var(--white);
            font-weight: 400;
            width: 22%;
        }

        .arbol-case-study .outcome-banner {
            background: rgba(136,223,114,0.05);
            border: 1px solid var(--lime);
            padding: 3rem 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 3rem;
            margin-top: 3rem;
        }

        .arbol-case-study .outcome-item .outcome-val {
            font-family: 'DM Serif Display', serif;
            font-size: 2.5rem;
            color: var(--lime);
            display: block;
            line-height: 1;
            margin-bottom: 0.5rem;
        }

        .arbol-case-study .outcome-item .outcome-desc {
            font-size: 0.85rem;
            color: var(--text-dim);
            line-height: 1.6;
        }

        .arbol-case-study .reflection {
            background: var(--bg2);
        }

        .arbol-case-study footer {
            padding: 3rem 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .arbol-case-study footer .footer-note {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.65rem;
            color: var(--text-dim);
            letter-spacing: 0.1em;
        }

        .arbol-case-study .tag-pill {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--lime);
            border: 1px solid var(--lime);
            padding: 0.3rem 0.75rem;
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .arbol-case-study .tag-row { margin-top: 2rem; }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .arbol-case-study .hero-label, .arbol-case-study h1, .arbol-case-study .hero-meta {
            animation: fadeUp 0.7s ease both;
        }

        .arbol-case-study h1 { animation-delay: 0.1s; }
        .arbol-case-study .hero-meta { animation-delay: 0.2s; }

        .arbol-case-study .v-rule {
            position: absolute;
            left: 2.5rem;
            top: 0; bottom: 0;
            width: 1px;
            background: var(--border);
            pointer-events: none;
        }

        @media (max-width: 900px) {
            .arbol-case-study header, .arbol-case-study section, .arbol-case-study .hero, .arbol-case-study footer { padding-left: 2rem; padding-right: 2rem; }
            .arbol-case-study .two-col, .arbol-case-study .three-col, .arbol-case-study .process-row, .arbol-case-study .stat-bar { grid-template-columns: 1fr; }
            .arbol-case-study .hero-meta { grid-template-columns: repeat(2, auto); gap: 2rem; }
            .arbol-case-study .outcome-banner { grid-template-columns: 1fr; padding: 2rem; }
            .arbol-case-study .process-step { border-right: none; border-bottom: 1px solid var(--border); }
        }
      ` }} />

      <div className="pt-20"></div>
      <header>
        <div className="logo-mark">Arbol Inc. — Case Study</div>
        <div className="breadcrumb">
          Product Design<br />
          AI/ML Underwriter + Smart Contract UX<br />
          2022–2023
        </div>
      </header>

      <div style={{ width: '100%', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <img src="https://media.base44.com/images/public/6974e154f708f4918a2b8d02/6f52faf32_Screenshot2026-03-19at45017AM.png" alt="Arbol Hero Image" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <div className="hero">
        <div className="hero-label">Case Study 001</div>
        <h1>Designing trust into <em>automated</em> climate risk</h1>

        <div className="hero-meta">
          <div className="meta-item">
            <label>Role</label>
            <span>Product Designer</span>
          </div>
          <div className="meta-item">
            <label>Focus</label>
            <span>AI UX · Smart Contracts</span>
          </div>
          <div className="meta-item">
            <label>Duration</label>
            <span>14 months</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>Web · Broker Portal</span>
          </div>
        </div>
      </div>

      <section>
        <div className="section-number">01 — Overview</div>
        <div className="two-col">
          <div>
            <h2>Climate risk, <em>reimagined</em> from the ground up</h2>
            <p>Arbol is a parametric climate risk platform that uses real-time weather data, AI-driven underwriting, and blockchain-anchored smart contracts to deliver insurance payouts automatically — no claims, no adjusters, no delays.</p>
            <p>I joined the product team as a senior product designer with a mandate to make the AI/ML underwriter and smart contract execution flow legible, trustworthy, and operable for a diverse set of users: agricultural brokers in rural Texas, energy traders, and enterprise risk managers at global banks. These were not typical SaaS users.</p>
          </div>
          <div>
            <div className="callout">
              <p>"The system was technically remarkable — but users had no window into how it was making decisions. We had a trust problem wrapped inside an opacity problem."</p>
            </div>
            <div className="tag-row">
              <span className="tag-pill">Parametric Insurance</span>
              <span className="tag-pill">AI/ML Underwriting</span>
              <span className="tag-pill">Smart Contracts</span>
              <span className="tag-pill">Climate Risk</span>
              <span className="tag-pill">Fintech</span>
              <span className="tag-pill">AgriTech</span>
            </div>
          </div>
        </div>

        <div className="stat-bar">
          <div className="stat-item">
            <span className="stat-num">$2B+</span>
            <span className="stat-desc">Notional risk transferred through the platform</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-desc">Countries utilizing Arbol products</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">50%</span>
            <span className="stat-desc">Clients with no prior access to climate risk coverage</span>
          </div>
        </div>
      </section>

      <section>
        <div className="section-number">02 — The Problem</div>
        <div className="two-col">
          <div>
            <h2>Automated decisions that <em>no one understood</em></h2>
            <p>Arbol's core technical infrastructure was formidable: petabyte-scale climate datasets from NOAA, NASA, and ESA fed into ML pricing models, and Chainlink oracles triggered smart contract payouts on-chain when weather thresholds were crossed. It was genuinely novel technology.</p>
            <p>But the user experience around it had been designed by engineers, for engineers. Brokers enrolling a cotton gin in West Texas couldn't interpret a pricing curve. Underwriters couldn't explain to a client why a contract was priced the way it was. And no one had a clear mental model of what would actually happen — and when — if a triggering weather event occurred.</p>
            <p>The result was friction at the point of sale, erosion of trust at the point of payout, and an inability to scale into new verticals without heavy hand-holding from Arbol's internal team.</p>
          </div>
          <div>
            <ul className="insight-list">
              <li><span><strong style={{ color: 'var(--white)' }}>Opaque pricing logic.</strong> The AI underwriter output a premium price with no legible rationale — brokers were expected to trust a number that materialized from a black box.</span></li>
              <li><span><strong style={{ color: 'var(--white)' }}>Invisible contract state.</strong> Once a policy was bound, users had no live view of how close weather conditions were to triggering a payout.</span></li>
              <li><span><strong style={{ color: 'var(--white)' }}>Smart contracts without a human narrative.</strong> Blockchain execution was technically verifiable but experientially inert — users received no meaningful confirmation or explanation when payouts executed.</span></li>
              <li><span><strong style={{ color: 'var(--white)' }}>Mismatch in user sophistication.</strong> The same platform served commodity traders and first-generation farmers. Existing UI assumed the former.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="section-number">03 — Discovery & Research</div>
        <h2>Listening before designing</h2>
        <p>Before touching wireframes, I ran three rounds of contextual inquiry and concept testing over eight weeks. I interviewed fifteen brokers and agents, four enterprise risk managers, three of Arbol's internal underwriters, and three clients from the agriculture vertical — including a cotton gin operator in Lamesa, Texas who had already received a payout.</p>

        <div className="three-col">
          <div className="card">
            <span className="card-tag">Brokers & Agents</span>
            <h3>They needed to sell confidence</h3>
            <p style={{ fontSize: '0.9rem' }}>Brokers weren't just purchasing a product — they were endorsing it to their clients. They needed the platform to give them language and logic they could hand across a table. A premium they couldn't explain was a premium they couldn't sell.</p>
          </div>
          <div className="card">
            <span className="card-tag">Enterprise Clients</span>
            <h3>They needed audit trails</h3>
            <p style={{ fontSize: '0.9rem' }}>Risk managers at banks and energy firms needed payout documentation that satisfied internal compliance. Blockchain finality was irrelevant to them — what mattered was a paper trail that read like a legitimate insurance settlement.</p>
          </div>
          <div className="card">
            <span className="card-tag">Small Business Clients</span>
            <h3>They needed simplicity and reassurance</h3>
            <p style={{ fontSize: '0.9rem' }}>First-time parametric insurance users — small farmers, co-ops, gin operators — didn't need to understand the mechanism. They needed to feel certain the product would work and that someone would tell them when it did.</p>
          </div>
        </div>

        <div className="callout" style={{ marginTop: '2.5rem' }}>
          <p>"The insight that reframed everything: users weren't afraid of automation. They were afraid of being invisible inside it — of having no way to know what was happening or whether anyone would tell them."</p>
        </div>
      </section>

      <section>
        <div className="section-number">04 — Design Challenges</div>
        <h2>Three distinct problems requiring <em>distinct solutions</em></h2>

        <div className="process-row">
          <div className="process-step">
            <span className="step-num">Challenge 01</span>
            <h3>Explainable AI pricing</h3>
            <p>How do you surface machine learning pricing logic to a non-technical broker in a way that builds confidence rather than confusion?</p>
          </div>
          <div className="process-step">
            <span className="step-num">Challenge 02</span>
            <h3>Contract state visibility</h3>
            <p>How do you give users a live sense of where they stand relative to a weather trigger — without overwhelming them with data they can't act on?</p>
          </div>
          <div className="process-step">
            <span className="step-num">Challenge 03</span>
            <h3>Smart contract as human event</h3>
            <p>How do you translate an on-chain execution event into a communication artifact that feels meaningful, auditable, and emotionally complete?</p>
          </div>
          <div className="process-step">
            <span className="step-num">Challenge 04</span>
            <h3>Multi-tier user mental models</h3>
            <p>How do you design a single platform that serves users across a spectrum from commodity trader to subsistence farmer without patronizing either end?</p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-number">05 — Design Decisions</div>
        <h2>What I built, and <em>why</em></h2>

        <table className="decision-table">
          <thead>
            <tr>
              <th>Decision</th>
              <th>Approach</th>
              <th>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Pricing Explainability</td>
              <td>I introduced a pricing breakdown panel that decomposed each premium into weighted contributing factors: historical event frequency, geographic risk index, coverage window length, and selected trigger threshold. Each factor was rendered as a plain-English sentence and a proportional visual bar — not a formula.</td>
              <td>Brokers needed to internalize and then re-externalize the logic to a client. Giving them a structured narrative they could read aloud was more useful than numerical precision they couldn't translate.</td>
            </tr>
            <tr>
              <td>Trigger Proximity Monitor</td>
              <td>I designed a persistent contract status widget — present on the client dashboard throughout the active policy period — showing current weather conditions against the contracted trigger threshold. It updated on a 24-hour delay to match data refresh cycles and used a single, unambiguous proximity indicator rather than a dashboard of raw weather metrics.</td>
              <td>Users didn't need meteorological literacy. They needed to know one thing: how close is this to paying out. The single-metric approach reduced cognitive load and support volume significantly.</td>
            </tr>
            <tr>
              <td>Smart Contract Settlement UX</td>
              <td>When a Chainlink oracle confirmed a threshold crossing and a payout executed on-chain, the platform generated a Settlement Record: a human-readable document combining plain-language event description, the specific data source and timestamp that confirmed the trigger, the smart contract transaction hash, and the payout amount. Delivered by email and available in-platform as a downloadable PDF.</td>
              <td>The blockchain transaction was verifiable but not legible to most users. The Settlement Record served as the "official document" that users needed for records, compliance, and their own sense of closure.</td>
            </tr>
            <tr>
              <td>Progressive Disclosure by Role</td>
              <td>I introduced a role-aware information architecture that surfaced different levels of detail based on whether the logged-in user was a broker, an enterprise risk manager, or a direct client. Brokers saw pricing model inputs; enterprise clients saw compliance-ready documentation; direct clients saw weather-to-payout narratives.</td>
              <td>The same underlying data had vastly different utility depending on who was reading it. Designing one universal information density was a false economy — it served no one well.</td>
            </tr>
            <tr>
              <td>Contract Builder Interaction Model</td>
              <td>I redesigned the contract parameterization flow from a form-first to a map-first experience. Users began by selecting a geographic location on a satellite map, which then seeded historical weather data visualizations specific to that location — rainfall distributions, temperature ranges, historical payout frequency. Contract parameters were set against this location-anchored context.</td>
              <td>Abstracting location into a coordinate field stripped all context. Grounding the configuration flow in a visible, specific place made risk feel concrete and made contract parameters feel consequential rather than arbitrary.</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '3rem' }}>
          <div className="section-number" style={{ marginBottom: '1rem', fontSize: '0.6rem' }}>Smart Contract Execution Flow — As Designed</div>
          <div className="flow">
            <div className="flow-node">
              <span className="node-label">Step 1</span>
              <span className="node-title">Contract Bound</span>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node">
              <span className="node-label">Step 2</span>
              <span className="node-title">Policy Active &amp; Monitored</span>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node active">
              <span className="node-label">Step 3</span>
              <span className="node-title">Threshold Crossed</span>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node active">
              <span className="node-label">Step 4</span>
              <span className="node-title">Oracle Verifies Data</span>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node active">
              <span className="node-label">Step 5</span>
              <span className="node-title">Payout Executes On-Chain</span>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node">
              <span className="node-label">Step 6</span>
              <span className="node-title">Settlement Record Delivered</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-number">06 — Process & Collaboration</div>
        <div className="two-col">
          <div>
            <h2>Working across <em>hard boundaries</em></h2>
            <p>This project required sustained collaboration with three teams whose professional vocabularies didn't naturally intersect: the data science team building the ML pricing models, the blockchain engineering team maintaining the smart contract infrastructure, and the commercial team selling to brokers and enterprise clients.</p>
            <p>I ran weekly translation sessions — meetings where I would present back to engineers what I understood their systems to do in plain language, and they would correct me. Those corrections became the source material for interface copy, explanatory UI patterns, and the Settlement Record language.</p>
            <p>I also embedded myself in three broker sales calls during the research phase. Watching how the commercial team narrated the product to prospective clients gave me the clearest possible picture of what the interface needed to say on their behalf.</p>
          </div>
          <div>
            <ul className="insight-list">
              <li><span>Ran <strong style={{ color: 'var(--white)' }}>15 user interviews</strong> across broker, enterprise, and direct client segments — with sessions conducted remotely and on-location in agricultural contexts.</span></li>
              <li><span>Delivered <strong style={{ color: 'var(--white)' }}>4 rounds of prototype testing</strong>, from low-fidelity concept validation through high-fidelity usability testing with live data.</span></li>
              <li><span>Produced a <strong style={{ color: 'var(--white)' }}>component library</strong> covering data visualization patterns, contract state indicators, and settlement documentation templates.</span></li>
              <li><span>Authored an <strong style={{ color: 'var(--white)' }}>AI explainability content guide</strong> that became the standard for how the data science team communicated model outputs to non-technical stakeholders across the organization.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="section-number">07 — Outcomes</div>
        <h2>What changed after <em>the work shipped</em></h2>
        <p>The redesigned AI underwriter and smart contract UX rolled out across the broker portal in Q3 2023 and was incrementally extended to the direct client dashboard through Q4. Outcomes were tracked across a mix of quantitative platform metrics and qualitative broker feedback.</p>

        <div className="outcome-banner">
          <div className="outcome-item">
            <span className="outcome-val">↓ 60%</span>
            <span className="outcome-desc">Reduction in broker support tickets related to pricing explanation requests after launch of the AI explainability panel</span>
          </div>
          <div className="outcome-item">
            <span className="outcome-val">↑ 3×</span>
            <span className="outcome-desc">Increase in contracts bound per broker per month in the twelve months following the contract builder redesign</span>
          </div>
          <div className="outcome-item">
            <span className="outcome-val">100%</span>
            <span className="outcome-desc">Of payout-receiving clients reported understanding why and how they received their settlement — up from less than 40% before Settlement Records</span>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <p>Beyond metrics, the design work materially changed how Arbol presented itself to new verticals. The map-first contract builder was specifically cited by the commercial team as a pivotal sales tool in expanding into energy derivatives and travel verticals — categories where the risk-to-geography relationship was central to a prospect's ability to imagine the product working for them.</p>
          <p>The Settlement Record format also became a template used by the commercial team in prospect demonstrations — showing a completed payout document from an actual agricultural client was a more effective sales artifact than any pitch deck slide.</p>
        </div>
      </section>

      <section className="reflection">
        <div className="section-number">08 — Reflection</div>
        <div className="two-col">
          <div>
            <h2>What this project <em>taught me</em></h2>
            <p>Designing at the intersection of AI and financial automation required me to resist two common failure modes: over-engineering transparency (turning every model weight into a visible knob) and under-engineering it (hiding complexity behind false simplicity).</p>
            <p>The right level of explainability isn't determined by what's technically possible to surface — it's determined by what users actually need to do next. A broker needs to sell. An enterprise risk manager needs to file. A farmer needs to feel certain. The design challenge was building systems that served all three without treating any of them as the default user.</p>
            <p>Smart contracts, in particular, presented a design problem I hadn't encountered before: how do you make an event that happened entirely outside human action feel human? The answer, I came to believe, was in the documentation layer — not in making the contract mechanism visible, but in giving the outcome meaning through language, context, and format.</p>
          </div>
          <div>
            <div className="card">
              <span className="card-tag">Key Takeaway</span>
              <h3>Algorithmic trust is a design problem</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>When AI makes a consequential decision and a smart contract executes it without human intervention, the design of the surrounding experience — what users see, read, and receive — is the entire trust infrastructure. There is no human adjuster to compensate for an interface that fails to communicate. The design is the relationship.</p>
            </div>
            <div className="card" style={{ marginTop: '1.5rem' }}>
              <span className="card-tag">What I'd Do Differently</span>
              <h3>Earlier collaboration with compliance</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>The Settlement Record format went through three revision cycles with the legal and compliance teams after initial design — a friction point that delayed the feature. In retrospect, embedding a compliance review at the research phase rather than the review phase would have saved significant iteration time and likely produced stronger documentation standards from the start.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        


        
        


        
      </footer>
    </div>);

}