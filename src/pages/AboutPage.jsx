import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Target } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="max-w-7xl mx-auto px-8 md:px-16 py-16 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          About & Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          I am a Computer Science undergraduate specializing in DevOps and Platform Engineering. My passion lies in designing production-grade deployment platforms that simplify cloud operations through automation, GitOps, and Infrastructure as Code.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-200 dark:before:via-purple-900/50 before:to-transparent">
        
        {/* Active Pursuits */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFCF8] dark:border-[#0b0f19] bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Target size={16} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Active Pursuits & Certifications</h3>
              <span className="text-sm font-semibold text-orange-500">Target: Aug 2026</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
              Currently preparing for major industry certifications to validate my cloud and infrastructure expertise.
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">AWS SAA</span>
               <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">CKA (Kubernetes)</span>
               <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">Terraform Associate</span>
            </div>
          </div>
        </motion.div>

        {/* Current Experience */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFCF8] dark:border-[#0b0f19] bg-[#a855f7] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Briefcase size={16} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Open Source Platform Engineer</h3>
              <span className="text-sm font-semibold text-[#a855f7]">Current</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
              Architecting production-grade cloud environments and self-service deployment platforms.
            </p>
            <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-3 mt-4">
              <li>Engineered <strong>Velzion</strong>, a BYOC Control Plane reducing deployment time to 2.5 minutes.</li>
              <li>Developed secure AWS EKS GitOps platforms using ArgoCD and GitHub Actions.</li>
              <li>Containerized polyglot microservices for resilient system degradation.</li>
            </ul>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFCF8] dark:border-[#0b0f19] bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <Award size={16} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Hackathons & Achievements</h3>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Top Competitor</span>
            </div>
            <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-3 mt-3">
              <li><strong>Builderverse National Hackathon:</strong> Presented the initial Velzion BYOC platform, ranking #4 out of 670+ teams in Round 1 and advancing to the Grand Finale (Top 20).</li>
              <li><strong>Oriented TechHack 2.0:</strong> Built and deployed GiftHaven infrastructure under intense hackathon time constraints.</li>
            </ul>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFCF8] dark:border-[#0b0f19] bg-gray-400 dark:bg-gray-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <GraduationCap size={16} />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">B.Tech in Computer Science</h3>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">2024 - 2028</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-3">Lakshmi Narain College of Technology (LNCT), Bhopal</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Specializing in Artificial Intelligence & Machine Learning while actively cultivating deep expertise in cloud-native infrastructure, operating systems, and automated deployment systems.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
