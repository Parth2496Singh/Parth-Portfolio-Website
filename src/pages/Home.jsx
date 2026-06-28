import React from 'react';
import { Link } from 'react-router-dom';
import { Download, User, Cloud, Shield, TerminalSquare, Box, Rocket, Server, Terminal, Activity, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

// Floating SVG Icons for Hero
const OrbitingIcons = () => (
  <>
    {/* AWS */}
    <div className="absolute top-[10%] right-[20%] text-[#FF9900] opacity-70 orbit-1 z-20 pointer-events-none drop-shadow-lg bg-white dark:bg-[#111827] p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M11.13,15.65c-2.31,1.15-5.18,1.75-7.79,1.75-1.12,0-2.18-.11-3.15-.31.84,1.21,2.83,1.93,5,1.93,3.02,0,5.77-1.16,7.85-3.05a10.97,10.97,0,0,0,2.16,1.44C13.88,16.65,12.24,16.03,11.13,15.65ZM23.86,13.23c-.32-1.35-1.57-2.07-3.17-2.27-1.29-.16-2.93.18-4.22.68l.45,1.23c1.08-.43,2.46-.72,3.46-.6.76.09,1.38.38,1.6,1.01a1.27,1.27,0,0,1-.13.88c-.62-1-1.89-1.55-3.32-1.53-2.13.04-3.56,1.21-3.56,2.78,0,1.52,1.1,2.6,2.85,2.6,1.45,0,2.63-.64,3.29-1.55l.23,1.4h1.56c-.18-.94-.34-1.92-.34-2.92C22.56,14.07,23.36,13.72,23.86,13.23Zm-4.94,3.42c-1.12,0-1.87-.72-1.87-1.56s.81-1.63,2.13-1.65c1.01-.02,1.82.32,2.33.87C21.13,15.35,20.08,16.65,18.92,16.65Zm-6.75-4.43c-1.56,0-2.58,1.04-3.07,2.22l-.11-2.07H7.66c.07,1.01.16,2.38.16,3.81v3.42h1.49v-4.14c0-1.42.79-2.31,1.89-2.31.95,0,1.54.55,1.54,1.7v4.75h1.49v-5.11C14.23,13.1,13.4,12.22,12.17,12.22ZM3.98,9.75c-1.07,0-1.78.69-2.03,1.6l-.16-1.42H.45c.07,1,.13,2.34.13,3.77v3.52H2.07v-3.79c0-1.58.74-2.67,1.96-2.67.92,0,1.44.47,1.44,1.62v4.84h1.49v-5.13C6.96,10.6,6.13,9.75,4.9,9.75Z"/></svg>
    </div>
    {/* Docker */}
    <div className="absolute bottom-[20%] left-[10%] text-[#2496ED] opacity-70 orbit-2 z-20 pointer-events-none drop-shadow-lg bg-white dark:bg-[#111827] p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M13.98 12.01h2.51V9.52h-2.51zm0 2.97h2.51v-2.49h-2.51zm-2.95-2.97h2.5v-2.49h-2.5zm0 2.97h2.5v-2.49h-2.5zm-2.94-2.97h2.49v-2.49H8.09zm0 2.97h2.49v-2.49H8.09zm-2.95-2.97H7.6v-2.49H5.14zm0 2.97H7.6v-2.49H5.14zm-2.94-2.97h2.5v-2.49h-2.5zm0 2.97h2.5v-2.49h-2.5zm8.83-8.89h2.51V3.62h-2.51zm0 2.95h2.51V6.58h-2.51zM24 13.93c-.02-.13-.08-.26-.14-.37-.73-1.43-1.89-2.19-3.25-2.31-1.39-.12-2.73.53-3.66 1.77-1.47-.53-3-.79-4.54-.79-2.4 0-4.71.69-6.73 2.01-1.8 1.18-3.3 2.82-4.39 4.79C.34 20.91 0 22.95 0 24h21.05c1.47 0 2.76-1 2.93-2.46l.02-.14c.16-1.53-.29-3.04-1.28-4.22a5.41 5.41 0 0 0 1.28-3.25z"/></svg>
    </div>
    {/* K8s */}
    <div className="absolute top-[30%] left-[-5%] text-[#326CE5] opacity-70 orbit-3 z-20 pointer-events-none drop-shadow-lg bg-white dark:bg-[#111827] p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.002 0l-5.69 3.284v6.57L1.242 12.78l5.69 3.284v6.57l5.07-2.928 5.07 2.928v-6.57l5.69-3.284-5.69-3.285v-6.57z"/></svg>
    </div>
    {/* Terraform */}
    <div className="absolute bottom-[5%] right-[5%] text-[#844FBA] opacity-70 orbit-4 z-20 pointer-events-none drop-shadow-lg bg-white dark:bg-[#111827] p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M1.44 0v7.625l6.562 3.844V3.782zM22.56 12.188v7.625l-6.563 3.843v-7.687zm-7.938-4.656v7.625l-6.562 3.875V11.437zM8.063 2.438v7.625l6.562 3.781V6.281z"/></svg>
    </div>
  </>
);

const SkillBadge = ({ icon: Icon, title, skills }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_15px_30px_rgb(168,85,247,0.15)] transition-all duration-300"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-amber-50 dark:from-purple-900/30 dark:to-yellow-900/10 rounded-xl flex items-center justify-center text-[#a855f7] mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(s => (
        <span key={s} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-700/50">{s}</span>
      ))}
    </div>
  </motion.div>
);

const useCounter = (end, duration) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return count;
};

export default function Home() {
  const projects = useCounter(6, 2);
  const iac = useCounter(100, 2.5);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
      {/* HERO SECTION */}
      <main id="home" className="max-w-7xl mx-auto px-8 md:px-16 pt-8 pb-24 grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[85vh]">
        
        {/* Left Column - Text Content */}
        <motion.div 
          className="flex flex-col items-start pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-[#a855f7] rounded-full text-sm font-semibold mb-6 border border-purple-100 dark:border-purple-800/30">
            <MapPin size={14} /> Bhopal, Madhya Pradesh, India
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-[5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight relative">
            Hello, I'm<br />Parth Singh Kushwaha<span className="text-[#a855f7] font-normal animate-blink">|</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
            Computer Science undergraduate specializing in <span className="font-semibold text-gray-900 dark:text-white bg-purple-500/15 dark:bg-purple-500/20 px-1 rounded-md">DevOps</span> and <span className="font-semibold text-gray-900 dark:text-white bg-purple-500/15 dark:bg-purple-500/20 px-1 rounded-md">Platform Engineering</span>. I enjoy designing production-grade deployment platforms that simplify cloud operations through automation, GitOps, and Infrastructure as Code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mb-16 flex-wrap">
            <Link to="/projects" className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-lg font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
              View Architectures
            </Link>
            <a href="https://portfolio-parth-bucket-24.s3.amazonaws.com/Parth%20Singh%20Kushwaha%20Resume%202026.pdf" target="_blank" rel="noreferrer" className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-lg font-bold transition-all duration-300 hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] flex items-center gap-2">
              <Download size={18} className="group-hover:text-white transition-colors" /> Resume
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={itemVariants} className="flex gap-4 w-full">
            <div className="flex-1 bg-white/60 dark:bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl text-center border border-purple-100/50 dark:border-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {projects}+
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">Open Source Projects</p>
            </div>
            <div className="flex-1 bg-white/60 dark:bg-[#111827]/60 backdrop-blur-md p-6 rounded-xl text-center border border-purple-100/50 dark:border-purple-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {iac}%
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">Infrastructure as Code</p>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column - Image Card with Orbiting Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-full h-[600px] flex justify-end items-center"
        >
          <OrbitingIcons />
          <div className="w-[90%] h-[95%] bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] dark:shadow-none border border-white/50 dark:border-gray-800 overflow-hidden relative group z-10">
             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 bg-gray-50/30 dark:bg-gray-800/20 group-hover:bg-gray-50/10 dark:group-hover:bg-gray-800/10 transition-colors z-10">
               <img 
                 src="/profile.jpg" 
                 alt="Parth Singh Kushwaha" 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="hidden flex-col items-center justify-center absolute inset-0">
                 <User size={80} className="text-gray-300 dark:text-gray-600 mb-4 drop-shadow-sm" />
                 <p className="font-medium text-gray-500 dark:text-gray-400 text-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">Save your photo as public/profile.jpg</p>
               </div>
             </div>
          </div>
        </motion.div>
      </main>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">My complete stack for designing, deploying, and maintaining highly available cloud architectures.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillBadge icon={Cloud} title="Cloud Platforms" skills={['AWS', 'EC2', 'EKS', 'VPC', 'S3', 'DynamoDB', 'Route53']} />
          <SkillBadge icon={TerminalSquare} title="Infrastructure as Code" skills={['Terraform']} />
          <SkillBadge icon={Box} title="Containers & Orchestration" skills={['Docker', 'Kubernetes', 'Helm', 'Docker Compose']} />
          <SkillBadge icon={Rocket} title="GitOps & CI/CD" skills={['Jenkins', 'Argo CD', 'GitHub Actions']} />
          
          <SkillBadge icon={Server} title="Languages & Backend" skills={['Python', 'Django', 'Django REST']} />
          <SkillBadge icon={Terminal} title="Scripting & OS" skills={['Linux', 'Bash Scripting']} />
          <SkillBadge icon={Shield} title="Security & IAM" skills={['AWS STS', 'IAM', 'Trivy', 'SonarQube', 'OWASP']} />
          <SkillBadge icon={Activity} title="Observability" skills={['Prometheus', 'Grafana']} />
        </div>
      </section>

      {/* PORTFOLIO SECTION (Featured) */}
      <section id="portfolio" className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">A selection of my best work in cloud architecture, infrastructure automation, and container orchestration.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Project Velzion"
            subtitle="BYOC Control Plane"
            description="Engineered an open-source BYOC control plane enabling one-click, UI-driven infrastructure provisioning inside customer AWS accounts. Architected dual deployment engines reducing production deployment time from 5–6 mins to 2.5 mins."
            stack={['Django', 'Terraform', 'AWS', 'Kubernetes']}
            linkUrl="/projects/velzion"
          />
          <ProjectCard 
            title="AWS Infra & GitOps Platform"
            subtitle="Open Source Boilerplate"
            description="Built an IaC and GitOps platform for provisioning AWS EKS and EC2 environments, reducing deployment time from 5–8 hours to ~18 mins. Implemented secure keyless CI/CD using GitHub Actions with AWS OIDC."
            stack={['Terraform', 'AWS EKS', 'ArgoCD', 'GitHub Actions']}
            linkUrl="/projects/gitops"
          />
          <ProjectCard 
            title="Food-Dash Platform"
            subtitle="Containerized Microservices"
            description="Containerized a polyglot microservices application using Docker Compose with an NGINX API Gateway. Automated AWS infrastructure via Terraform and designed a resilient system with graceful database degradation."
            stack={['Docker', 'Nginx', 'AWS', 'Terraform']}
            linkUrl="/projects/food-dash"
          />
        </div>
        
        <div className="mt-16 text-center">
           <a href="/projects" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-purple-200 dark:border-purple-800 rounded-full text-[#a855f7] font-bold hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] transition-all group shadow-sm hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
             View All Projects Archive
             <span className="transform transition-transform group-hover:translate-x-1">→</span>
           </a>
        </div>
      </section>
    </>
  );
}
