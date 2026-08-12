import { useState } from 'react';

const navigationLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Ecosystem', href: '#ecosystem' }
];

const pillars = [
  {
    id: 'pillar-1',
    title: 'Pillar I: Emerging Threat Exploration',
    subtitle: 'Vulnerability & Surface Analysis',
    points: [
      {
        heading: 'Zero-Day & N-Day Dissection',
        desc: 'Isolating root causes, evaluating exploitation conditions, and mapping blast radiuses during novel disclosures.'
      },
      {
        heading: 'Cloud & Hybrid Infrastructure Risks',
        desc: 'Analyzing architectural weaknesses across AWS, GCP, and Azure, focusing on IAM, container escapes, and supply chain vectors.'
      },
      {
        heading: 'Next-Gen Attack Vectors',
        desc: 'Proactively researching threats in dApps, automated API pipelines, and AI/ML enterprise integrations.'
      }
    ]
  },
  {
    id: 'pillar-2',
    title: 'Pillar II: Adversarial Tactics & Emulation',
    subtitle: 'Red Teaming & Offensive Mechanics',
    points: [
      {
        heading: 'Malware Reverse Engineering',
        desc: 'Dissecting advanced ransomware strains and custom C2 frameworks to pinpoint IoCs and IoAs.'
      },
      {
        heading: 'Living-off-the-Land (LotL)',
        desc: 'Investigating native OS binary abuses designed to bypass conventional EDR solutions.'
      },
      {
        heading: 'Living Threat Intelligence',
        desc: 'Mapping real-world threat actor behaviors directly to the MITRE ATT&CK framework for high-fidelity emulation.'
      }
    ]
  },
  {
    id: 'pillar-3',
    title: 'Pillar III: Pragmatic Defensive Engineering',
    subtitle: 'Blue Teaming & Production Hardening',
    points: [
      {
        heading: 'Infrastructure as Code (IaC) Hardening',
        desc: 'Publishing secure, out-of-the-box Zero Trust baseline templates (Terraform, Ansible, CloudFormation).'
      },
      {
        heading: 'Detection Engineering',
        desc: 'Authoring high-precision SIEM/EDR rules (Sigma, Yara, Snort) optimized to minimize false positives.'
      },
      {
        heading: 'Incident Response Playbooks',
        desc: 'Step-by-step SOC runbooks built to contain breaches quickly and accelerate evidence-based remediation.'
      }
    ]
  }
];

const pipelineSteps = [
  {
    title: 'Threat Identification',
    desc: 'Isolating raw telemetry and emerging zero-day activity.',
    icon: '🔎'
  },
  {
    title: 'Granular Deconstruction',
    desc: 'Breaking down complex mechanics into core byte-sized modules.',
    icon: '🧩'
  },
  {
    title: 'Code-Level Remediation',
    desc: 'Developing precise, production-ready fixes and patches.',
    icon: '🛠️'
  },
  {
    title: 'Operational Deployment',
    desc: 'Integrating hardened frameworks directly into active CI/CD pipelines.',
    icon: '🚀'
  }
];

const ecosystemHighlights = [
  {
    title: 'Deep-Dive Technical Manifestos',
    desc: 'Exhaustive architectural flaw breakdowns and mitigation strategies.'
  },
  {
    title: 'Open-Source Tooling & Rules',
    desc: 'Automation scripts and detection rules (Sigma, Yara) ready for CI/CD integration.'
  },
  {
    title: 'Operational Blueprints',
    desc: 'Architectural checklists tailored for technical leaders making rapid decisions.'
  }
];

type SectionHeaderProps = {
  overline: string;
  title: string;
  description: string;
};

type TabButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

type FeatureCardProps = {
  heading: string;
  desc: string;
};

type StepCardProps = {
  step: {
    title: string;
    desc: string;
    icon: string;
  };
  index: number;
};

function SectionHeader({ overline, title, description }: SectionHeaderProps) {
  return (
    <div className="section-heading">
      <span className="section-overline">{overline}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TabButton({ label, active, onClick }: TabButtonProps) {
  return (
    <button type="button" className={`tab-button ${active ? 'tab-active' : ''}`} onClick={onClick} aria-pressed={active}>
      <span className="tab-icon">•</span>
      <span>{label}</span>
    </button>
  );
}

function FeatureCard({ heading, desc }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <h3>{heading}</h3>
      <p>{desc}</p>
    </article>
  );
}

function StepCard({ step, index }: StepCardProps) {
  return (
    <article className="step-card">
      <div className="step-card-header">
        <span className="step-icon">{step.icon}</span>
        <span className="step-index">0{index + 1}</span>
      </div>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </article>
  );
}

export default function App() {
  const [activePillar, setActivePillar] = useState(0);
  const currentPillar = pillars[activePillar];

  return (
    <div className="app-shell">
      <div className="page-glow" aria-hidden="true" />
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">BS</span>
          <div>
            <p className="brand-name">ByteSize<span className="brand-accent">.Security</span></p>
            <p className="brand-subtitle">Research-Led Defense Intelligence</p>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          {navigationLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <button type="button" className="nav-cta" href="https://www.linkedin.com/company/bytesize-security-researchers">
          Join Research Hub
        </button>
      </header>

      <main className="page-content">
        <section id="mission" className="hero-section">
          <div className="hero-copy">
            <span className="label-pill">Community Manifesto & Operational Framework</span>
            <h1>
              Bridging Theory and <span className="highlight">Real-World Defense</span>
            </h1>
            <p>
              ByteSize Security Researchers is an elite, collaborative community dedicated to deconstructing emerging digital threats and translating complex telemetry into actionable, production-ready engineering.
            </p>
            <div className="hero-actions">
              <a className="hero-button" href="#pillars">Explore Research Pillars</a>
            </div>
          </div>
        </section>

        <section id="philosophy" className="section-block split-section">
          <div>
            <SectionHeader
              overline="02. Core Philosophy"
              title={'"Byte-Sized" but Deep-Dive'}
              description="We break monolithic threat intelligence into modular, verified insights that security teams can use immediately."
            />
            <p className="section-copy">
              The modern security landscape suffers from data obesity — analysts are overwhelmed by massive threat feeds, regulatory noise, and exploit write-ups that lack immediate real-world utility.
            </p>
            <p className="section-copy">
              ByteSize commits to clarity and systemic modularity by turning kernel vulnerability dynamics and multi-stage campaigns into concise, decision-ready engineering guidance.
            </p>
          </div>

          <aside className="info-card">
            <div className="info-card-head">
              <div className="window-controls">
                <span />
                <span />
                <span />
              </div>
              <span className="info-label">methodology.config</span>
            </div>
            <div className="info-block">
              <p className="info-meta">{'// Monolithic Threat Feed Input'}</p>
              <div className="info-highlight">- Data Obesity: 10,000+ Unfiltered Logs</div>
              <p className="info-divider">↓ Modular Deconstruction Process ↓</p>
              <div className="info-list">
                <span>+ Precise Root Cause isolated</span>
                <span>+ Code-Level Patch Verified</span>
                <span>+ Actionable Detection Rule Generated</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="pillars" className="section-block">
          <SectionHeader
            overline="03. Operational Domains"
            title="Pillars of Research"
            description="Our research community operates across three interconnected domains to provide total operational coverage."
          />

          <div className="pillar-tabs">
            {pillars.map((pillar, index) => (
              <TabButton
                key={pillar.id}
                label={pillar.title.split(':')[0]}
                active={activePillar === index}
                onClick={() => setActivePillar(index)}
              />
            ))}
          </div>

          <div className="pillar-panel">
            <div className="pillar-panel-header">
              <span className="pillar-badge">•</span>
              <div>
                <h3>{currentPillar.title}</h3>
                <p>{currentPillar.subtitle}</p>
              </div>
            </div>
            <div className="pillar-grid">
              {currentPillar.points.map((point) => (
                <FeatureCard key={point.heading} heading={point.heading} desc={point.desc} />
              ))}
            </div>
          </div>
        </section>

        <section id="pipeline" className="section-block">
          <SectionHeader
            overline="04. Execution Framework"
            title="Theory to Production Implementation"
            description="Every piece of published intelligence undergoes our strict, localized lab validation cycle."
          />
          <div className="pipeline-grid">
            {pipelineSteps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>

        <section id="ecosystem" className="section-block split-section">
          <div>
            <SectionHeader
              overline="05. Collaborative Impact"
              title="Community Ecosystem"
              description="ByteSize brings together penetration testers, malware analysts, security architects, DevOps engineers, and researchers to solve systemic challenges."
            />
            <div className="ecosystem-list">
              {ecosystemHighlights.map((item) => (
                <div key={item.title} className="ecosystem-item">
                  <span className="ecosystem-icon">▹</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="vision-card">
            <div className="vision-badge">
              <span>🌐</span>
              <span>06. Forward-Looking Vision</span>
            </div>
            <h3>Securing Tomorrow</h3>
            <p>
              As automated code generation, quantum cryptographic demands, and global supply chains expand, ByteSize remains committed to staying ahead of the curve.
            </p>
            <button type="button" className="vision-button">Contribute to Research</button>
          </aside>
        </section>
      </main>

      <footer className="page-footer">
        <p>© {new Date().getFullYear()} ByteSize Security Researchers. Open-Source Security Intelligence.</p>
      </footer>
    </div>
  );
}
