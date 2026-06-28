import React, { useEffect } from 'react';
import { GithubIcon } from '../../components/Layout';
import { Mermaid } from '../../components/Mermaid';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Velzion() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen relative text-gray-800 font-sans">
      
      <main className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Project Velzion: The Open-Source BYOC Control Plane
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            An enterprise-grade orchestration brain that turns a company’s private AWS infrastructure into a self-hosted, automated app platform with zero vendor premium markups.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-semibold">Django</span>
            <span className="px-4 py-1.5 bg-[#a855f7] text-white rounded-full text-sm font-semibold">Terraform</span>
            <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-semibold">AWS</span>
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold">Kubernetes</span>
            <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-semibold">n8n</span>
          </div>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-[#a855f7]">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Architecture</h2>
          <div className="mb-12">
            <Mermaid chart={`
graph TD
    User([Developer / GitHub PR]) -->|Webhook Event| Django[Django Control Plane]
    
    subgraph Control_Plane [Velzion BYOC Matrix]
        Django -->|Trigger Deploy/Destroy| n8n[n8n Workflow Automation]
        Django ---|State/Telemetry| DB[(PostgreSQL Database)]
        
        n8n -->|Generate IaC & Inject STS| TF[Terraform Engine]
        TF -.->|Assumes Temp IAM Role| AWS[AWS Cloud]
    end

    subgraph AWS_Cloud [User AWS Account]
        AWS -->|Provisions VPC & Instances| EC2[EC2 Dedicated/Spot Node]
        EC2 -->|OTLP Telemetry| Django
        EC2 -->|Wildcard Proxy| Nginx[Nginx Reverse Proxy]
        Nginx -->|Routes Traffic| AppContainer[Deployed Docker App]
    end
            `} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Small to mid-sized engineering teams struggle with two massive operational bottlenecks: the PaaS financial markup trap (where hosted platforms charge massive premium markups over raw AWS compute costs) and the persistent staging server waste (where a single shared staging server creates developer friction, migration conflicts, and wastes thousands of dollars on idle compute hours).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution: Dual-Engine BYOC Architecture</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Velzion orchestrates infrastructure directly inside the user's secure AWS environment using a decoupled, event-driven architecture split into two execution pipelines:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-3">
            <li><strong>Velzard (The Production Engine):</strong> Automates infrastructure provisioning directly inside the user's AWS account. It configures dedicated EC2 On-Demand resources, Nginx reverse proxy routing, and launches the application via production-hardened configurations.</li>
            <li><strong>Zegion (The Ephemeral Preview Engine):</strong> Eliminates the single staging server bottleneck entirely. Powered by n8n, Zegion listens for GitHub Pull Request events, dynamically boots ultra-cheap AWS Spot instances, compiles code using CNCF Buildpacks, posts a live wildcard preview link to the PR comments, and tears the infrastructure down the second the PR is closed.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">FinOps & Operational Innovations</h2>
          <div className="bg-purple-50 p-6 rounded-2xl mb-8 border border-purple-100">
            <ul className="space-y-4 text-gray-700">
              <li><strong className="text-purple-900">Scale-to-Zero Preview Lifecycle:</strong> Ephemeral environments have a strict TTL expiration. When a PR sits idle, n8n auto-destructs the Spot instance saving 100% of compute costs.</li>
              <li><strong className="text-purple-900">Deterministic CNCF Buildpacks:</strong> Zegion utilizes the official CNCF `pack` CLI to automatically compile optimized, OCI-compliant container images—bypassing Dockerfiles entirely.</li>
              <li><strong className="text-purple-900">1-Click Trust Model:</strong> Eliminated the need for long-lived AWS Access Keys by implementing an Enterprise IAM Role Binding architecture using CloudFormation and AWS STS for temporary credentials.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Control Plane Infrastructure</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The core Velzion Control Plane operates as a cloud-native application deployed to Amazon EKS. We utilize a strict GitOps model via ArgoCD, continuous integration through Jenkins with SonarQube and Trivy for DevSecOps, and secure Terraform execution states bound to an AWS S3 remote backend.
          </p>

          <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100">
            <a href="https://github.com/Parth2496Singh/VELZION.git" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-[#a855f7] transition-colors">
              <GithubIcon size={18} /> View Repository
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
