import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Moon, Sun, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.6 6.52-7.01a4.8 4.8 0 0 0-1.3-3.31a4.5 4.5 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a11.9 11.9 0 0 0-6 0C7.1 2.55 6 2.9 6 2.9a4.5 4.5 0 0 0-.1 3.2A4.8 4.8 0 0 0 4.6 9.4c0 5.4 3.3 6.67 6.5 7.01a4.8 4.8 0 0 0-1 3.03v4"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
);
export const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`relative group transition-colors py-2 ${isActive ? 'text-[#a855f7] font-bold' : 'text-gray-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-[#a855f7]'}`}
    >
      {children}
      <span className={`absolute left-0 bottom-0 h-0.5 bg-[#a855f7] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
};

export const Navbar = ({ toggleDarkMode, isDark }) => (
  <nav className="flex items-center justify-between py-6 px-8 md:px-16 max-w-7xl mx-auto w-full relative z-50">
    <Link to="/" className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-purple-500/30">
        P
      </div>
      <span className="font-bold text-2xl text-gray-900 dark:text-white tracking-tight">Parth Singh Kushwaha</span>
    </Link>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <a href="https://parth2496singh.github.io/DevOps-Notes-By-Parth/" target="_blank" rel="noreferrer" className="relative group text-gray-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors py-2 flex items-center gap-1">
        Wiki <BookOpen size={14} />
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#a855f7] transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
      <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="relative group text-gray-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors py-2">
        Github
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#a855f7] transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
      <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="relative group text-gray-600 dark:text-gray-400 hover:text-[#a855f7] dark:hover:text-[#a855f7] transition-colors py-2">
        LinkedIn
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#a855f7] transition-all duration-300 ease-out group-hover:w-full"></span>
      </a>
    </div>

    <div className="flex items-center gap-4">
      <button 
        onClick={toggleDarkMode} 
        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <a href="mailto:parthsinghkushwaha24@gmail.com" className="hidden md:inline-flex bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
        Contact
      </a>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="bg-white dark:bg-[#0b0f19] border-t border-gray-100 dark:border-gray-800/50 py-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#eab308] flex items-center justify-center text-white font-bold text-sm">P</div>
          <span className="font-bold text-xl text-gray-900 dark:text-white">Parth Singh Kushwaha</span>
        </div>
        <span className="text-sm text-gray-500 ml-11">Bhopal, Madhya Pradesh, India</span>
      </div>
      
      <div className="flex gap-6">
        <a href="https://github.com/Parth2496Singh" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-[#a855f7] dark:hover:text-[#a855f7] hover:-translate-y-1 transition-all duration-300"><GithubIcon size={24} /></a>
        <a href="https://www.linkedin.com/in/parth-singh-kushwaha2496/" target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-[#a855f7] dark:hover:text-[#a855f7] hover:-translate-y-1 transition-all duration-300"><LinkedinIcon size={24} /></a>
        <a href="mailto:parthsinghkushwaha24@gmail.com" className="text-gray-400 dark:text-gray-500 hover:text-[#a855f7] dark:hover:text-[#a855f7] hover:-translate-y-1 transition-all duration-300"><Mail size={24} /></a>
      </div>
    </div>
  </footer>
);

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDarkStored = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] dark:bg-[#0b0f19] relative text-gray-800 dark:text-gray-200 font-sans selection:bg-purple-200 dark:selection:bg-purple-900/50 transition-colors duration-300 flex flex-col">
      <div className="absolute top-0 right-0 w-[80%] h-[900px] bg-gradient-to-bl from-[#e9d5ff] via-[#fef08a] to-[#ccfbf1] dark:from-[#3b0764]/30 dark:via-[#854d0e]/20 dark:to-[#0f172a]/30 -z-10 rounded-bl-full blur-[100px] opacity-50 dark:opacity-70 pointer-events-none transition-all duration-500" />
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <AnimatePresence mode="wait">
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
