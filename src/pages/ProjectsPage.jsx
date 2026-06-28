import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="max-w-7xl mx-auto px-8 md:px-16 py-16 min-h-[80vh]">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          All Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          A complete archive of my engineering portfolio, including infrastructure templates, microservice architectures, and operational runbooks.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="Project Velzion"
            subtitle="BYOC Control Plane"
            description="Engineered an open-source BYOC control plane enabling one-click, UI-driven infrastructure provisioning inside customer AWS accounts."
            stack={['Django', 'Terraform', 'AWS', 'Kubernetes']}
            linkUrl="/projects/velzion"
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="AWS Infra & GitOps Platform"
            subtitle="Open Source Boilerplate"
            description="Built an IaC and GitOps platform for provisioning AWS EKS and EC2 environments, reducing deployment time from 5–8 hours to ~18 mins."
            stack={['Terraform', 'AWS EKS', 'ArgoCD']}
            linkUrl="/projects/gitops"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="Food-Dash Platform"
            subtitle="Containerized Microservices"
            description="Containerized a polyglot microservices application using Docker Compose with an NGINX API Gateway. Automated AWS infrastructure via Terraform."
            stack={['Docker', 'Nginx', 'AWS', 'Terraform']}
            linkUrl="/projects/food-dash"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="Lost & Found Platform"
            subtitle="K8s Workload Architecture"
            description="Production-ready Kubernetes orchestration for a community Lost & Found service, leveraging EKS, Route53, and strict IAM Role bindings."
            stack={['AWS EKS', 'Kubernetes', 'Helm']}
            linkUrl="/projects/lost-and-found"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="Terraform AWS Portfolio"
            subtitle="Enterprise IaC Patterns"
            description="A comprehensive library of reusable Terraform modules for deploying secure VPCs, ALBs, and robust Auto-Scaling Groups."
            stack={['Terraform', 'AWS VPC', 'EC2']}
            linkUrl="/projects/terraform-aws"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <ProjectCard 
            title="DevOps Notes Portal"
            subtitle="MkDocs Knowledge Base"
            description="A fully deployed MkDocs static site serving as an internal wiki for Docker security, FinOps strategies, and CI/CD best practices."
            stack={['MkDocs', 'Docker', 'Markdown']}
            linkUrl="/projects/devops-notes"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
