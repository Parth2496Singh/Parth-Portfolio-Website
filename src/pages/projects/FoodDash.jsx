import React, { useEffect } from 'react';
import { GithubIcon } from '../../components/Layout';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoodDash() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen relative text-gray-800 font-sans">
      
      <main className="max-w-4xl mx-auto px-8 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#a855f7] mb-8 transition-colors font-medium">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Food-Dash: Containerized Enterprise Architecture
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A production-grade, container-first food delivery platform serving as a comprehensive showcase of DevOps orchestration, Docker containerization, and Polyglot Microservices.
          </p>
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm font-semibold">Docker</span>
            <span className="px-4 py-1.5 bg-green-600 text-white rounded-full text-sm font-semibold">NGINX</span>
            <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-semibold">AWS</span>
            <span className="px-4 py-1.5 bg-[#a855f7] text-white rounded-full text-sm font-semibold">Terraform</span>
          </div>
        </header>

        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-[#a855f7]">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Contribution: DevOps & Containerization</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The primary focus of this project is its robust deployment architecture. Rather than relying on fragile local environments, the entire stack (spanning 4 different programming languages and 4 different databases) is heavily containerized and orchestrated using advanced Docker Compose patterns and a secure custom bridge network.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Architectural Workflow</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The system is fully decoupled. A React frontend is served by an NGINX API Gateway, which natively bypasses CORS restrictions by proxying all requests directly to an internal backend cluster over the Docker network:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-3">
            <li><strong>Restaurant Service (Node.js/MongoDB):</strong> NGINX routes restaurant browsing requests.</li>
            <li><strong>Menu Service (Python/PostgreSQL):</strong> Handles menu queries dynamically.</li>
            <li><strong>Order Service (Go/MySQL):</strong> Processes cart payloads with high concurrency.</li>
            <li><strong>Delivery Service (Java/Redis):</strong> Receives an asynchronous internal webhook directly from the Go service across the Docker network to handle real-time dispatch tracking.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure & Resilience</h2>
          <div className="bg-purple-50 p-6 rounded-2xl mb-8 border border-purple-100">
            <ul className="space-y-4 text-gray-700">
              <li><strong className="text-purple-900">Infrastructure as Code:</strong> Utilized Terraform to automate the provisioning of the AWS EC2 environment, employing remote S3 state management and DynamoDB state locking to prevent deployment collisions.</li>
              <li><strong className="text-purple-900">Graceful Degradation (Mock Fallback):</strong> Engineered built-in fallback mechanics. If a microservice fails to connect to its remote database (like AWS RDS), it intelligently intercepts the fatal crash and gracefully degrades to in-memory datasets or local SQLite databases to ensure zero downtime during local testing or outages.</li>
              <li><strong className="text-purple-900">Intelligent Healthchecks:</strong> Strict dependency trees ensure upstream services (like the Order Service) wait for downstream JVMs (like the Delivery Service) to fully boot before initializing webhooks.</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100">
            <a href="https://github.com/Parth2496Singh/Food-Dash-Monorepo-Microservices.git" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-[#a855f7] transition-colors">
              <GithubIcon size={18} /> View Repository
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
