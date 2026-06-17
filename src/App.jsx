import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Server, Trophy, GraduationCap, Mail, FileCode, ChevronDown, ChevronUp, GitCommit, ShieldCheck, Activity } from 'lucide-react';

// --- BACKGROUND COMPONENTS ---
const DiagonalRiftBackground = () => (
  <div className="fixed inset-0 -z-30 overflow-hidden bg-[#fdfbf7]">
    <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="absolute top-0 left-0 w-full h-full object-cover">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a0845" />
          <stop offset="40%" stopColor="#6b21a8" />
          <stop offset="60%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="8" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <path fill="url(#purpleGradient)" d="M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200 L1600,1000 L-200,1000 Z">
        <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200 L1600,1000 L-200,1000 Z; M-200,850 C250,750 450,250 850,150 C1250,50 1550,-50 1600,-150 L1600,1000 L-200,1000 Z; M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200 L1600,1000 L-200,1000 Z" />
      </path>
      <path fill="none" stroke="#fde047" strokeWidth="4" filter="url(#glow)" d="M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200">
        <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200; M-200,850 C250,750 450,250 850,150 C1250,50 1550,-50 1600,-150; M-200,800 C300,700 400,200 800,100 C1200,0 1500,-100 1600,-200" />
      </path>
      <path fill="none" stroke="#fef08a" strokeWidth="2" filter="url(#glow)" opacity="0.6" d="M-200,850 C320,720 380,240 780,130 C1180,20 1500,-80 1600,-180" />
    </svg>
  </div>
);

const FloatingSparks = () => {
  const sparks = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i, size: Math.random() * 3 + 1, x: Math.random() * 100, y: Math.random() * 100, duration: Math.random() * 4 + 4, delay: Math.random() * 5,
  })), []);
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {sparks.map((spark) => (
        <motion.div key={spark.id} className="absolute bg-yellow-300 rounded-full" style={{ width: spark.size, height: spark.size, left: `${spark.x}vw`, top: `${spark.y}vh`, boxShadow: `0 0 ${spark.size * 3}px #fde047` }} animate={{ y: [0, -80, -150], x: [0, Math.random() * 40 - 20], opacity: [0, 1, 0] }} transition={{ duration: spark.duration, repeat: Infinity, delay: spark.delay, ease: "easeInOut" }} />
      ))}
    </div>
  );
};

// --- CUSTOM SVG ICONS ---
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.01a4.8 4.8 0 0 0-1.3-3.31a4.5 4.5 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a11.9 11.9 0 0 0-6 0C7.1 2.55 6 2.9 6 2.9a4.5 4.5 0 0 0-.1 3.2A4.8 4.8 0 0 0 4.6 9.4c0 5.4 3.3 6.67 6.5 7.01a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);
const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// --- EXPANDABLE PROJECT CARD ---
const ProjectCard = ({ title, subtitle, description, bullets, stack, links, notes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div layout className="bg-gray-900/90 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h4 className="text-2xl font-bold text-gray-100 mb-1">{title}</h4>
        <p className="text-purple-400 font-bold text-sm tracking-wide uppercase mb-4">{subtitle}</p>
        <p className="text-gray-300 font-medium mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-yellow-500 mt-0.5">▹</span> {bullet}
            </li>
          ))}
        </ul>
        
        <div className="flex gap-2 flex-wrap mb-6">
          {stack.map(tag => (
            <span key={tag} className="text-xs font-bold px-3 py-1 bg-gray-800 text-gray-300 rounded border border-gray-600">{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold bg-gray-800 text-white px-4 py-2 rounded border border-gray-600 hover:bg-gray-700 transition-colors">
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex justify-between items-center px-6 py-3 bg-gray-950 border-t border-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none">
        <span className="font-bold text-sm uppercase tracking-wider">Engineering Notes & Troubleshooting</span>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-gray-950 border-t border-gray-800 text-gray-300 text-sm">
            <div className="p-6 md:p-8 space-y-5">
              <div>
                <strong className="text-red-400 block mb-1 flex items-center gap-2"><Activity size={16}/> The Problem / Bottleneck</strong>
                <p className="leading-relaxed text-gray-400">{notes.problem}</p>
              </div>
              <div>
                <strong className="text-green-400 block mb-1 flex items-center gap-2"><ShieldCheck size={16}/> Architectural Solution</strong>
                <p className="leading-relaxed text-gray-400">{notes.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans relative text-gray-200">
      <DiagonalRiftBackground />
      <FloatingSparks />

      <main className="max-w-5xl mx-auto px-6 py-12 md:px-8 space-y-24 relative z-10">
        
        {/* 1. HERO SECTION */}
        <section className="bg-gray-900/90 backdrop-blur-2xl p-10 md:p-16 border border-gray-700 shadow-2xl rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Parth Singh Kushwaha
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-6">
            DevOps Engineer & CS Student
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl leading-relaxed">
            I engineer resilient infrastructure, enforce GitOps workflows, and orchestrate containerized microservices. Focused on AWS EKS, automated BYOC control planes, and strict DevSecOps pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="font-bold px-6 py-3 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400 transition-colors">
              Resume (PDF)
            </a>
            <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold px-6 py-3 bg-gray-800 text-white rounded border border-gray-600 hover:bg-gray-700 transition-colors">
              <GithubIcon size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold px-6 py-3 bg-gray-800 text-white rounded border border-gray-600 hover:bg-gray-700 transition-colors">
              <LinkedinIcon size={20} /> LinkedIn
            </a>
          </div>
        </section>

        {/* 2. ENGINEERING ARSENAL */}
        <section>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <Cpu size={28} className="text-yellow-400" /> Engineering Arsenal
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tool: 'Kubernetes & Helm', used: 'EKS, StatefulSets, ArgoCD' },
              { tool: 'AWS Infrastructure', used: 'EKS, EC2 Spot, S3, VPC' },
              { tool: 'Docker & Buildpacks', used: 'OCI Images, Multi-stage' },
              { tool: 'GitOps (ArgoCD)', used: 'Dual-Repo, Image Updater' },
              { tool: 'CI / DevSecOps', used: 'Jenkins, Trivy, SonarQube' },
              { tool: 'Terraform (IaC)', used: 'BYOC Control Planes' },
            ].map((skill, idx) => (
              <div key={idx} className="bg-gray-900/90 backdrop-blur-xl p-5 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-colors">
                <span className="font-bold text-white text-lg block mb-1">{skill.tool}</span>
                <span className="text-gray-400 text-sm">→ Applied in: <span className="text-purple-300 font-medium">{skill.used}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CORE ARCHITECTURE PROJECTS */}
        <section id="projects" className="space-y-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
            <Server size={28} className="text-yellow-400" /> Architecture & Deployments
          </h3>
          
          <ProjectCard 
            title="Project Velzion"
            subtitle="Open-Source BYOC Control Plane & FinOps Engine"
            description="Engineered a dual-engine control plane to eliminate PaaS markups. 'Velzard' manages highly available EC2 deployments, while 'Zegion' dynamically boots cheap AWS Spot Instances for ephemeral pull request previews."
            bullets={[
              "Implemented a 1-Click Trust Model using CloudFormation and AWS STS for secure, zero-key infrastructure access.",
              "Utilized CNCF Buildpacks and n8n to bypass Dockerfiles and automate language compilation.",
              "Designed a Scale-to-Zero preview lifecycle, tearing down infrastructure automatically to achieve $0 idle costs."
            ]}
            stack={['Django / React', 'Terraform', 'n8n', 'AWS EC2 Spot', 'CNCF Buildpacks', 'PostgreSQL']}
            links={[
              { label: 'Control Plane Repo', url: 'https://github.com/Parth2496Singh/VELZION.git', icon: <GithubIcon size={16}/> },
              { label: 'GitOps Manifests', url: 'https://github.com/Parth2496Singh/VELZION-GITOPS.git', icon: <FileCode size={16}/> }
            ]}
            notes={{
              problem: "Managing asynchronous state between the n8n automation webhook and the Django database led to race conditions during the scale-to-zero destruction of AWS Spot instances.",
              solution: "Implemented strict REST state polling, DB transaction locks, and AWS STS temporary credentials. This ensured the Tier 2 Spot networking safely disconnected before updating the PostgreSQL state machine."
            }}
          />

          <ProjectCard 
            title="Lost & Found Platform (V4)"
            subtitle="Enterprise Dual-Repo DevSecOps Pipeline"
            description="Transitioned a monolith Django application into a strict Dual-Repo GitOps workflow, cleanly separating application source code from Kubernetes deployment state."
            bullets={[
              "Wrote a custom Jenkins Shared Library in Groovy to standardize CI logic across multiple microservices.",
              "Integrated Trivy (container scanning), SonarQube (quality gates), and OWASP dependency checks into the Jenkinsfile.",
              "Automated CD using ArgoCD Image Updater to detect new semver tags and write them back to the GitOps repo.",
              "Reduced pipeline debugging and manual deployment time by over 65%."
            ]}
            stack={['Kubernetes', 'ArgoCD', 'Jenkins', 'Helm', 'Trivy', 'SonarQube']}
            links={[
              { label: 'Source Code', url: 'https://github.com/Parth2496Singh/Lost-and-Found-Platform-V2.git', icon: <GithubIcon size={16}/> },
              { label: 'GitOps Repo', url: 'https://github.com/Parth2496Singh/Lost-and-Found-GitOps.git', icon: <FileCode size={16}/> }
            ]}
            notes={{
              problem: "A standard single-repository CI/CD setup caused an infinite build loop. When ArgoCD updated the image tag in the deployment manifest, it triggered another Jenkins build, which created another tag.",
              solution: "Architected a strict Dual-Repo structure. Jenkins only interacts with the source code repo. The ArgoCD Image Updater modifies the independent GitOps repository, breaking the loop entirely."
            }}
          />

          <ProjectCard 
            title="MERN E-Commerce Store"
            subtitle="Stateful Kubernetes Architecture on AWS EKS"
            description="Provisioned an Amazon EKS cluster to host a 3-tier microservices platform. Focused heavily on real-world cloud networking, storage constraints, and horizontal autoscaling."
            bullets={[
              "Deployed MongoDB natively on Kubernetes using StatefulSets and Persistent Volume Claims (PVC).",
              "Implemented an NGINX Ingress Controller for domain-based routing.",
              "Configured a Horizontal Pod Autoscaler (HPA) to dynamically scale Node.js backends based on CPU thresholds.",
              "Established cloud-native observability using the kube-prometheus-stack."
            ]}
            stack={['AWS EKS', 'StatefulSets', 'Prometheus', 'Grafana', 'NGINX Ingress']}
            links={[
              { label: 'Frontend & Backend', url: 'https://github.com/Parth2496Singh/MERN-E-Commerce-Website-K8s.git', icon: <GithubIcon size={16}/> },
              { label: 'Helm Charts', url: 'https://github.com/Parth2496Singh/MERN-E-Commerce-Website-K8s-Gitops.git', icon: <FileCode size={16}/> }
            ]}
            notes={{
              problem: "During EKS deployment, worker nodes began throwing fatal ImagePullBackOff and ErrImagePull errors. Inspection revealed 'no space left on device'.",
              solution: "Discovered the default AWS EBS volumes attached to EKS worker nodes were exhausted by heavy Node.js/Mongo images. Resolved by configuring custom EC2 Launch Templates for worker nodes with expanded EBS capacity."
            }}
          />

          <ProjectCard 
            title="GiftHaven Platform"
            subtitle="Containerized Deployment & HPA Routing"
            description="Engineered the complete DevOps lifecycle for an AI-powered e-commerce application utilizing a decoupled React frontend and Supabase edge-function backend."
            bullets={[
              "Created a multi-stage Dockerfile to compile the Vite/React app and serve it via a lightweight Nginx container.",
              "Orchestrated deployments through ArgoCD ApplicationSets.",
              "Configured ArgoCD Notifications via ConfigMaps to trigger real-time SMTP email alerts on cluster sync status."
            ]}
            stack={['Docker Multi-stage', 'ArgoCD Notifications', 'Kubernetes HPA', 'Supabase']}
            links={[
              { label: 'Application Source', url: 'https://github.com/Parth2496Singh/GiftHaven-K8s.git', icon: <GithubIcon size={16}/> },
              { label: 'K8s Manifests', url: 'https://github.com/Parth2496Singh/GiftHaven-K8s-GitOps.git', icon: <FileCode size={16}/> }
            ]}
            notes={{
              problem: "The static replica count couldn't handle simulated traffic spikes during testing without causing frontend latency.",
              solution: "Deployed the Kubernetes Metrics Server and implemented a Horizontal Pod Autoscaler targeting 60% CPU utilization, allowing the deployment to seamlessly scale between 1 and 5 pods."
            }}
          />
        </section>

        {/* 4. EVIDENCE & EXPERIENCE */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/90 backdrop-blur-xl p-8 border border-gray-700 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <Trophy size={24} className="text-yellow-400" /> Hackathons & Awards
            </h3>
            <ul className="space-y-6 text-gray-300">
              <li className="border-l-2 border-yellow-500 pl-4">
                <strong className="text-white block text-base mb-1">Buildverse Hackathon 2026</strong>
                <span className="text-yellow-400 font-bold mb-1 block">Ranked #4 / 670 Teams</span>
                Engineered the Velzion BYOC Control Plane under strict time constraints, reaching the Grand Finale.
              </li>
              <li className="border-l-2 border-purple-500 pl-4">
                <strong className="text-white block text-base mb-1">Oriented TechHack 2.0</strong>
                Successfully deployed the GiftHaven GitOps infrastructure alongside 200 competing teams.
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-xl p-8 border border-gray-700 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <GraduationCap size={24} className="text-yellow-400" /> Education
            </h3>
            <div className="text-gray-300">
              <strong className="text-white block text-lg mb-1">Lakshmi Narain College of Technology</strong>
              <p className="font-medium text-purple-300 mb-2">Bhopal, Madhya Pradesh</p>
              <p className="mb-2">Bachelor of Technology in Computer Science and Engineering (AIML)</p>
              <p className="text-gray-500 text-sm font-bold tracking-wide">2024 – 2028</p>
            </div>
          </div>
        </section>

        {/* 5. FOOTER */}
        <footer className="pt-10 pb-20 border-t border-gray-800 flex justify-center gap-8">
          <a href="mailto:parthsinghkushwaha24@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
            <Mail size={20} /> Email
          </a>
          <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
            <GithubIcon size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold">
            <LinkedinIcon size={20} /> LinkedIn
          </a>
        </footer>

      </main>
    </div>
  );
}