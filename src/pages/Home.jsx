import React from 'react';
import { Link } from 'react-router-dom';
import { Download, User, Cloud, Shield, TerminalSquare, Box, Rocket, Server, Terminal, Activity, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';

// Floating SVG Icons removed

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
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-[4.5rem] font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-2 tracking-tight">
            Parth Singh Kushwaha
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
            <span className="text-[#a855f7]">DevOps</span> & Platform Engineer <span className="animate-pulse inline-block w-3 h-3 bg-[#a855f7] rounded-full ml-1"></span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
            I architect resilient cloud infrastructure, enforce strict GitOps workflows, and orchestrate containerized microservices to build scalable, self-service developer platforms.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mb-16 flex-wrap">
            <Link to="/projects" className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3.5 rounded-lg font-bold transition-transform duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
              View Architectures
            </Link>
            <a href="https://portfolio-parth-bucket-24.s3.us-east-1.amazonaws.com/Parth%20Singh%20Kushwaha's%20Resume%202026.pdf" target="_blank" rel="noreferrer" className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-lg font-bold transition-all duration-300 hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] flex items-center gap-2">
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

        {/* Right Column - Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-full h-[600px] flex justify-end items-center"
        >
          <div className="w-[90%] h-[95%] bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.05)] dark:shadow-none border-2 border-white/50 dark:border-gray-800 group-hover:border-[#a855f7]/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] overflow-hidden relative group z-10 transition-all duration-500">
             <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
               <img 
                 src="/profile.jpg" 
                 alt="Parth Singh Kushwaha" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="hidden flex-col items-center justify-center absolute inset-0 text-gray-400 dark:text-gray-500 bg-gray-50/30 dark:bg-gray-800/20">
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
