import React, { useEffect } from 'react';
import { GithubIcon } from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GitOpsBoilerplate() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen relative text-gray-800 font-sans">
      
      <main className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            AWS Infra GitOps Boilerplate
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            An open-source, globally reusable GitOps and Infrastructure-as-Code (IaC) boilerplate designed to bootstrap a production-grade AWS EKS environment with a fully automated, keyless CI/CD pipeline.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1.5 bg-[#a855f7] text-white rounded-full text-sm font-semibold">Terraform</span>
            <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-semibold">AWS EKS</span>
            <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-semibold">Argo CD</span>
            <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-semibold">Helm</span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-[#a855f7]">
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Architecture Visualizations</h2>
          <div className="flex flex-col gap-8 mb-12">
            <div className="bg-white/50 dark:bg-[#111827]/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 group">
               <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-2 uppercase tracking-widest">EKS GitOps Pipeline</p>
               <div className="rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                 <img src="/GITOPS-ARCHTECTURE-ENHANCED.png" alt="GitOps Architecture Enhanced" className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500" />
               </div>
            </div>
            <div className="bg-white/50 dark:bg-[#111827]/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)] transition-all duration-300 group">
               <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-2 uppercase tracking-widest">AWS EC2 Infrastructure</p>
               <div className="rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                 <img src="/GITOPS_EC2.png" alt="GitOps EC2 Infrastructure" className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500" />
               </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Built to solve the operational friction of managing distributed microservices, this repository centralizes infrastructure definition (Terraform) and Kubernetes orchestration into a single, highly governed monorepo. It serves as both a demonstration of advanced Zero-Trust DevOps practices and a plug-and-play template for modern cloud-native deployments.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">GitOps via Argo CD</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The entire cluster state is defined by a single root Helm chart. Dynamic ApplicationSets automatically discover new microservices and deploy them using a DRY Helm blueprint without manual intervention. Automated Image Rollouts securely poll AWS ECR for new Docker tags and push Git commits back to the repository.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Trust Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Keyless CI/CD using GitHub Actions natively integrated with AWS OIDC dynamically assumes temporary roles. Implements a secure IRSA-based CronJob architecture to seamlessly rotate ECR credentials every 8 hours.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Power of Automation</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Manual provisioning of a production EKS architecture (VPCs, Node Groups, ALB Controllers, Prom/Grafana, ArgoCD) typically takes 5-8 hours and introduces significant risk of human error. 
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-3">
            <li><strong>18-Minute Bootstrapping:</strong> The entire platform goes from zero to fully operational entirely passively via Terraform and AWS APIs.</li>
            <li><strong>Instant Microservice Onboarding:</strong> Adding a new microservice is as simple as copying a folder and changing the image name in <code>values.yaml</code>. Argo CD autonomously wires up routing, scaling, and deployment.</li>
            <li><strong>Clean Teardown:</strong> Safely dismantling the entire cluster and networking takes just 10-15 minutes, preventing orphaned resources and unexpected billing.</li>
          </ul>

          <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100">
            <a href="https://github.com/Parth2496Singh/AWS-Infra-Gitops-Boilerplate.git" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-[#a855f7] transition-colors">
              <GithubIcon size={18} /> View Repository
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
