import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectCard = ({ title, subtitle, description, stack, linkUrl }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-[#111827] p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-800 hover:shadow-[0_15px_30px_rgb(168,85,247,0.15)] dark:hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] transition-shadow duration-300 flex flex-col h-full group"
  >
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#a855f7] transition-colors">{title}</h3>
    <p className="text-sm font-semibold text-[#a855f7] mb-4 uppercase tracking-wide">{subtitle}</p>
    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-1 leading-relaxed">{description}</p>
    <div className="flex gap-2 flex-wrap mb-8 mt-auto">
      {stack.map(t => (
        <span key={t} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs font-semibold">{t}</span>
      ))}
    </div>
    <Link to={linkUrl} className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#a855f7] bg-transparent border border-[#a855f7] px-6 py-3 rounded-lg transition-all duration-300 w-full group-hover:bg-[#a855f7] group-hover:text-white group-hover:shadow-lg shadow-purple-500/20">
      Read Case Study <ExternalLink size={16} />
    </Link>
  </motion.div>
);
