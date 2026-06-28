import React, { useEffect } from 'react';
import { GithubIcon } from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DevOpsNotes() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          DevOps Notes Portal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          A fully deployed MkDocs static site serving as an internal wiki for Docker security, FinOps strategies, and CI/CD best practices.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-semibold">MkDocs</span>
          <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold">Docker</span>
          <span className="px-4 py-1.5 bg-[#a855f7] text-white rounded-full text-sm font-semibold">Markdown</span>
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-[#a855f7]">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Engineering Knowledge Base</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Robust documentation is the cornerstone of great Platform Engineering. This project compiles advanced operational runbooks and architectural patterns into a highly navigable, static documentation portal built using MkDocs and the Material for MkDocs theme.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Content Domains</h2>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl mb-8 border border-purple-100 dark:border-purple-900/30">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li><strong className="text-purple-900 dark:text-purple-300">Container Security:</strong> Extensive guides on building rootless Docker images, multi-stage builds, and implementing static analysis scanning tools like Trivy.</li>
            <li><strong className="text-purple-900 dark:text-purple-300">CI/CD Patterns:</strong> Reusable boilerplate workflows for GitHub Actions, Jenkins declarative pipelines, and ArgoCD application definitions.</li>
            <li><strong className="text-purple-900 dark:text-purple-300">FinOps Playbook:</strong> Strategies for optimizing cloud spend utilizing AWS Spot Instances, Auto Scaling Groups, and lifecycle TTL expirations.</li>
          </ul>
        </div>

        <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <a href="#" className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-[#a855f7] dark:hover:bg-[#a855f7] transition-colors">
            <GithubIcon size={18} /> View Repository
          </a>
        </div>
      </article>
    </main>
  );
}
