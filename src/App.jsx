import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Terminal, Cpu, Server, Trophy, GraduationCap, Mail, FileCode, ChevronDown, ChevronUp, GitCommit, ShieldCheck, Activity, ExternalLink, Download } from 'lucide-react';

// --- 3D BACKGROUND ---
const Starfield = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 60;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Stars ref={ref} radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const ThreeBackground = () => (
  <div className="fixed inset-0 -z-30 bg-[#030014]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] z-0"></div>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Starfield />
    </Canvas>
  </div>
);

// --- CUSTOM SVG ICONS ---
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.01a4.8 4.8 0 0 0-1.3-3.31a4.5 4.5 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a11.9 11.9 0 0 0-6 0C7.1 2.55 6 2.9 6 2.9a4.5 4.5 0 0 0-.1 3.2A4.8 4.8 0 0 0 4.6 9.4c0 5.4 3.3 6.67 6.5 7.01a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);
const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

// --- KINETIC SPOTLIGHT CARD ---
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden glass ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

// --- EXPANDABLE PROJECT CARD ---
const ProjectCard = ({ title, subtitle, description, bullets, stack, links, notes }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SpotlightCard className="flex flex-col h-full">
      <div className="p-6 md:p-8 flex-1">
        <h4 className="text-2xl font-bold text-white mb-1">{title}</h4>
        <p className="text-purple-400 font-semibold text-sm tracking-wide mb-4 font-mono uppercase">{subtitle}</p>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5 opacity-80">▹</span> {bullet}
            </li>
          ))}
        </ul>
        
        <div className="flex gap-2 flex-wrap mb-8 mt-auto">
          {stack.map(tag => (
            <span key={tag} className="text-xs font-medium px-3 py-1 bg-gray-900 text-gray-300 rounded-md border border-gray-700 font-mono">{tag}</span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors group">
              {link.icon} 
              <span className="border-b border-transparent group-hover:border-purple-400 transition-colors">{link.label}</span>
              <ExternalLink size={14} className="opacity-0 -ml-1 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>

      <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex justify-between items-center px-6 py-4 bg-gray-950/50 border-t border-gray-800/50 text-gray-400 hover:text-white transition-colors focus:outline-none">
        <span className="font-semibold text-sm tracking-wide uppercase">Engineering Postmortem</span>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-gray-950/80 border-t border-gray-800/50 text-gray-300 text-sm">
            <div className="p-6 md:p-8 space-y-6">
              <div className="bg-red-950/20 p-4 rounded-lg border border-red-900/30">
                <strong className="text-red-400 block mb-2 flex items-center gap-2 font-mono"><Activity size={16}/> ISSUE / BOTTLENECK</strong>
                <p className="leading-relaxed text-gray-300">{notes.problem}</p>
              </div>
              <div className="bg-green-950/20 p-4 rounded-lg border border-green-900/30">
                <strong className="text-green-400 block mb-2 flex items-center gap-2 font-mono"><ShieldCheck size={16}/> ARCHITECTURAL RESOLUTION</strong>
                <p className="leading-relaxed text-gray-300">{notes.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SpotlightCard>
  );
};

// --- SCROLL ANIMATION WRAPPER ---
const FadeInSection = ({ children, className = "", delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen relative text-gray-200">
      <ThreeBackground />

      <main className="max-w-6xl mx-auto px-6 py-12 md:px-8 space-y-24 relative z-10">
        
        {/* 1. HERO BENTO BOX */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-8">
          {/* Main Intro Tile */}
          <SpotlightCard className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-8 uppercase tracking-wider font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Available for New Opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
                Parth Singh <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">Kushwaha</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6 font-mono">
                &gt; DevOps Engineer & Cloud Architect
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
                I engineer resilient infrastructure, enforce GitOps workflows, and orchestrate containerized microservices. Focused on AWS EKS, automated BYOC control planes, and strict DevSecOps pipelines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 font-semibold px-6 py-3 bg-white text-gray-950 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download size={18} /> Resume (PDF)
                </a>
                <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
                  <GithubIcon size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold px-6 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </SpotlightCard>

          {/* Quick Stats / Tech Stack Tiles */}
          <div className="flex flex-col gap-4 md:gap-6">
            <SpotlightCard className="p-8 flex-1 flex flex-col justify-center">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-5 font-mono">Core Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS EKS', 'Kubernetes', 'Terraform', 'Docker', 'ArgoCD', 'Jenkins', 'Helm', 'React', 'Python'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-gray-900/80 border border-gray-700/50 rounded-md text-sm text-gray-200 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="p-8 flex-1 flex flex-col justify-center bg-gradient-to-br from-purple-900/10 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-4xl mb-1">10+</h3>
                  <p className="text-gray-400 text-sm font-mono uppercase">Deployments</p>
                </div>
                <div className="h-12 w-px bg-gray-800"></div>
                <div>
                  <h3 className="text-white font-bold text-4xl mb-1">4</h3>
                  <p className="text-gray-400 text-sm font-mono uppercase">Architectures</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* 2. ENGINEERING ARSENAL */}
        <FadeInSection>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
            <Cpu size={28} className="text-purple-400" /> Technical Domains
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { tool: 'Kubernetes & Helm', used: 'EKS, StatefulSets, ArgoCD' },
              { tool: 'AWS Infrastructure', used: 'EKS, EC2 Spot, S3, VPC' },
              { tool: 'Docker & Buildpacks', used: 'OCI Images, Multi-stage' },
              { tool: 'GitOps (ArgoCD)', used: 'Dual-Repo, Image Updater' },
              { tool: 'CI / DevSecOps', used: 'Jenkins, Trivy, SonarQube' },
              { tool: 'Terraform (IaC)', used: 'BYOC Control Planes' },
            ].map((skill, idx) => (
              <SpotlightCard key={idx} className="p-6">
                <span className="font-bold text-white text-lg block mb-2">{skill.tool}</span>
                <span className="text-gray-400 text-sm font-mono">→ <span className="text-purple-300 font-medium">{skill.used}</span></span>
              </SpotlightCard>
            ))}
          </div>
        </FadeInSection>

        {/* 3. CORE ARCHITECTURE PROJECTS */}
        <FadeInSection className="space-y-8">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
            <Server size={28} className="text-purple-400" /> Architecture & Deployments
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard 
              title="Project Velzion"
              subtitle="Open-Source BYOC Control Plane & FinOps Engine"
              description="Engineered a dual-engine control plane to eliminate PaaS markups. 'Velzard' manages highly available EC2 deployments, while 'Zegion' dynamically boots cheap AWS Spot Instances for ephemeral pull request previews."
              bullets={[
                "Implemented a 1-Click Trust Model using CloudFormation and AWS STS for secure, zero-key infrastructure access.",
                "Utilized CNCF Buildpacks and n8n to bypass Dockerfiles and automate language compilation.",
                "Designed a Scale-to-Zero preview lifecycle, tearing down infrastructure automatically to achieve $0 idle costs."
              ]}
              stack={['Django / React', 'Terraform', 'n8n', 'AWS EC2 Spot', 'CNCF Buildpacks']}
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
          </div>
        </FadeInSection>

        {/* 4. EVIDENCE & EXPERIENCE */}
        <FadeInSection className="grid md:grid-cols-2 gap-6">
          <SpotlightCard className="p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <Trophy size={24} className="text-yellow-400" /> Hackathons & Awards
            </h3>
            <ul className="space-y-8 text-gray-300">
              <li className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-transparent rounded-full"></div>
                <strong className="text-white block text-lg mb-1">Buildverse Hackathon 2026</strong>
                <span className="text-yellow-400 font-bold mb-2 block text-sm tracking-wide uppercase">Ranked #4 / 670 Teams</span>
                <p className="leading-relaxed">Engineered the Velzion BYOC Control Plane under strict time constraints, reaching the Grand Finale.</p>
              </li>
              <li className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
                <strong className="text-white block text-lg mb-1">Oriented TechHack 2.0</strong>
                <p className="leading-relaxed mt-2">Successfully deployed the GiftHaven GitOps infrastructure alongside 200 competing teams.</p>
              </li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <GraduationCap size={24} className="text-purple-400" /> Education
            </h3>
            <div className="text-gray-300">
              <strong className="text-white block text-xl mb-1">Lakshmi Narain College of Technology</strong>
              <p className="font-semibold text-purple-300 mb-4">Bhopal, Madhya Pradesh</p>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <p className="mb-2 font-medium">Bachelor of Technology in Computer Science and Engineering (AIML)</p>
                <p className="text-gray-500 text-sm font-mono tracking-wide uppercase mt-4">Timeline: 2024 – 2028</p>
              </div>
            </div>
          </SpotlightCard>
        </FadeInSection>

        {/* 5. FOOTER */}
        <footer className="pt-10 pb-20 border-t border-gray-800 flex justify-center gap-8">
          <a href="mailto:parthsinghkushwaha24@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-semibold">
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </footer>

      </main>
    </div>
  );
}