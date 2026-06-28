import React, { useEffect } from 'react';
import { GithubIcon } from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LostAndFound() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Lost & Found Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Production-ready Kubernetes orchestration for a community Lost & Found service, leveraging EKS, Route53, and strict IAM Role bindings.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-semibold">AWS EKS</span>
          <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold">Kubernetes</span>
          <span className="px-4 py-1.5 bg-[#a855f7] text-white rounded-full text-sm font-semibold">Helm</span>
        </div>
      </header>

      <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-[#a855f7]">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Architecture Highlights</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Designed a robust Kubernetes deployment strategy to run stateful and stateless services in harmony. The platform utilizes AWS EBS CSI drivers for persistent volume claims (PVCs) for databases, and AWS Load Balancer Controllers for ingress routing.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Infrastructure Security</h2>
        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl mb-8 border border-purple-100 dark:border-purple-900/30">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li><strong className="text-purple-900 dark:text-purple-300">Least Privilege IAM:</strong> Implemented IRSA (IAM Roles for Service Accounts) to ensure Pods only have access to the exact AWS resources they need, entirely eliminating the use of long-lived access keys.</li>
            <li><strong className="text-purple-900 dark:text-purple-300">Automated DNS & TLS:</strong> Integrated ExternalDNS and cert-manager to automatically bind Route53 domains to the ALB and provision Let's Encrypt SSL certificates.</li>
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
