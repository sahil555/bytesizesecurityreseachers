import React, { useState } from 'react';
import {
  ShieldAlert,
  Cpu,
  Layers,
  Code2,
  Users,
  Eye,
  GitBranch,
  Terminal,
  Lock,
  ChevronRight,
  Server,
  FileCode,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function App() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "pillar-1",
      title: "Pillar I: Emerging Threat Exploration",
      subtitle: "Vulnerability & Surface Analysis",
      icon: <ShieldAlert className="w-6 h-6 text-cyan-400" />,
      points: [
        {
          heading: "Zero-Day & N-Day Dissection",
          desc: "Isolating root causes, evaluating exploitation conditions, and mapping blast radiuses during novel disclosures."
        },
        {
          heading: "Cloud & Hybrid Infrastructure Risks",
          desc: "Analyzing architectural weaknesses across AWS, GCP, and Azure, focusing on IAM, container escapes, and supply chain vectors."
        },
        {
          heading: "Next-Gen Attack Vectors",
          desc: "Proactively researching threats in dApps, automated API pipelines, and AI/ML enterprise integrations."
        }
      ]
    },
    {
      id: "pillar-2",
      title: "Pillar II: Adversarial Tactics & Emulation",
      subtitle: "Red Teaming & Offensive Mechanics",
      icon: <Terminal className="w-6 h-6 text-red-400" />,
      points: [
        {
          heading: "Malware Reverse Engineering",
          desc: "Dissecting advanced ransomware strains and custom C2 frameworks to pinpoint IoCs and IoAs."
        },
        {
          heading: "Living-off-the-Land (LotL)",
          desc: "Investigating native OS binary abuses designed to bypass conventional EDR solutions."
        },
        {
          heading: "Living Threat Intelligence",
          desc: "Mapping real-world threat actor behaviors directly to the MITRE ATT&CK framework for high-fidelity emulation."
        }
      ]
    },
    {
      id: "pillar-3",
      title: "Pillar III: Pragmatic Defensive Engineering",
      subtitle: "Blue Teaming & Production Hardening",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      points: [
        {
          heading: "Infrastructure as Code (IaC) Hardening",
          desc: "Publishing secure, out-of-the-box Zero Trust baseline templates (Terraform, Ansible, CloudFormation)."
        },
        {
          heading: "Detection Engineering",
          desc: "Authoring high-precision SIEM/EDR rules (Sigma, Yara, Snort) optimized to minimize false positives."
        },
        {
          heading: "Incident Response Playbooks",
          desc: "Step-by-step SOC runbooks built to contain breaches quickly and accelerate evidence-based remediation."
        }
      ]
    }
  ];

  const pipelineSteps = [
    { title: "Threat Identification", desc: "Isolating raw telemetry and emerging zero-day activity.", icon: <Eye className="w-5 h-5 text-cyan-400" /> },
    { title: "Granular Deconstruction", desc: "Breaking down complex mechanics into core byte-sized modules.", icon: <Cpu className="w-5 h-5 text-purple-400" /> },
    { title: "Code-Level Remediation", desc: "Developing precise, production-ready fixes and patches.", icon: <Code2 className="w-5 h-5 text-emerald-400" /> },
    { title: "Operational Deployment", desc: "Integrating hardened frameworks directly into active CI/CD pipelines.", icon: <Server className="w-5 h-5 text-amber-400" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              ByteSize<span className="text-cyan-400">.Security</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#mission" className="hover:text-cyan-400 transition-colors">Mission</a>
            <a href="#philosophy" className="hover:text-cyan-400 transition-colors">Philosophy</a>
            <a href="#pillars" className="hover:text-cyan-400 transition-colors">Pillars</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Pipeline</a>
            <a href="#ecosystem" className="hover:text-cyan-400 transition-colors">Ecosystem</a>
          </div>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-cyan-500/20">
            Join Research Hub
          </button>
        </div>
      </nav>

      {/* Hero Section / Executive Summary */}
      <section id="mission" className="relative py-24 px-6 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Community Manifesto & Operational Framework</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Bridging Theory and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Real-World Defense</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            ByteSize Security Researchers is an elite, collaborative community dedicated to deconstructing emerging digital threats and translating complex telemetry into actionable, production-ready engineering.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="#pillars" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium rounded-lg transition-all flex items-center space-x-2">
              <span>Explore Research Pillars</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-cyan-400 font-mono text-sm tracking-wider uppercase">02. Core Philosophy</div>
            <h2 className="text-3xl font-bold text-white">"Byte-Sized" but Deep-Dive</h2>
            <p className="text-slate-400 leading-relaxed">
              The modern security landscape suffers from <strong className="text-slate-200">data obesity</strong>—analysts are overwhelmed by massive threat feeds, complex regulatory documentation, and convoluted exploit write-ups that lack immediate real-world utility.
            </p>
            <p className="text-slate-400 leading-relaxed">
              "ByteSize" represents our commitment to absolute clarity and systemic modularity. We take monolithic technical data—such as kernel vulnerability dynamics and multi-stage APT campaigns—and break them down into modular, verified components.
            </p>
          </div>
          
          {/* Card Graphic */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-xs text-slate-500">methodology.config</span>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="text-slate-500">// Monolithic Threat Feed Input</div>
              <div className="p-3 bg-slate-950 rounded border border-red-500/20 text-red-400 text-xs">
                - Data Obesity: 10,000+ Unfiltered Logs
              </div>
              <div className="text-center text-cyan-400 py-1">↓ Modular Deconstruction Process ↓</div>
              <div className="p-3 bg-slate-950 rounded border border-emerald-500/30 text-emerald-400 text-xs space-y-1">
                <div>+ Precise Root Cause isolated</div>
                <div>+ Code-Level Patch Verified</div>
                <div>+ Actionable Detection Rule Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-20 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-cyan-400 font-mono text-sm tracking-wider uppercase">03. Operational Domains</div>
          <h2 className="text-3xl font-bold text-white">Pillars of Research</h2>
          <p className="text-slate-400">Our research community operates across three interconnected domains to provide total operational coverage.</p>
        </div>

        {/* Pillar Tabs */}
        <div className="flex justify-center mb-8 border-b border-slate-800">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium text-sm transition-all border-b-2 ${
                activePillar === idx
                  ? 'border-cyan-400 text-cyan-400 bg-cyan-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {pillar.icon}
              <span className="hidden sm:inline">{pillar.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Content */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
              {pillars[activePillar].icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{pillars[activePillar].title}</h3>
              <p className="text-sm text-slate-400">{pillars[activePillar].subtitle}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars[activePillar].points.map((point, index) => (
              <div key={index} className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-2 text-sm">{point.heading}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-20 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-cyan-400 font-mono text-sm tracking-wider uppercase">04. Execution Framework</div>
          <h2 className="text-3xl font-bold text-white">Theory to Production Implementation</h2>
          <p className="text-slate-400">Every piece of published intelligence undergoes our strict, localized lab validation cycle.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {pipelineSteps.map((step, idx) => (
            <div key={idx} className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-600 font-bold">0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-slate-200 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 px-6 max-w-7xl mx-auto border-b border-slate-800/80">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-cyan-400 font-mono text-sm tracking-wider uppercase">05. Collaborative Impact</div>
            <h2 className="text-3xl font-bold text-white">Community Ecosystem</h2>
            <p className="text-slate-400 leading-relaxed">
              ByteSize is a meritocratic ecosystem composed of penetration testers, malware analysts, security architects, DevOps engineers, and academic researchers. We encourage cross-disciplinary collaboration to solve complex, systemic challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FileCode className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Deep-Dive Technical Manifestos</h4>
                  <p className="text-xs text-slate-400">Exhaustive architectural flaw breakdowns and mitigation strategies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GitBranch className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Open-Source Tooling & Rules</h4>
                  <p className="text-xs text-slate-400">Automation scripts and detection rules (Sigma, Yara) ready for CI/CD integration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Layers className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Operational Blueprints</h4>
                  <p className="text-xs text-slate-400">Architectural checklists tailored for technical leaders making rapid decisions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Callout */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>06. Forward-Looking Vision</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Securing Tomorrow</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              As automated code generation, quantum cryptographic demands, and global supply chains expand, ByteSize remains committed to staying ahead of the curve. We democratize deep security knowledge to equip defensive teams everywhere.
            </p>
            <div className="pt-4 border-t border-slate-800">
              <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center space-x-2">
                <span>Contribute to Research</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-slate-500 text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} ByteSize Security Researchers. Open-Source Security Intelligence.</p>
      </footer>

    </div>
  );
}
