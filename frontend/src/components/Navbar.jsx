// FILE: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { MagneticWrapper } from './MagneticWrapper';
import { useUISound } from '../hooks/useUISound';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useUISound();

  const navLinks = [
    { name: 'About me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Source Code', href: 'https://github.com/yourusername/portfolio', external: true },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">

          {/* --- LEFT: Logo --- */}
          <a
            href="#"
            className="flex items-center gap-2 group relative z-20"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
              <Terminal size={22} className="text-cyan-400" />
            </div>
            <span className="font-bold text-lg text-slate-100 tracking-tight">
              John Doe
            </span>
          </a>

          {/* --- CENTER: Floating Pill Navigation (Desktop) --- */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 absolute left-1/2 -translate-x-1/2 shadow-lg shadow-purple-500/5">
            {navLinks.map((link, i) => (
              <MagneticWrapper key={link.name}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                  onMouseEnter={playHover}
                  onClick={playClick}
                >
                  {link.name}
                </a>
              </MagneticWrapper>
            ))}
          </div>

          {/* --- RIGHT: Social Icons (Desktop) --- */}
          <div className="hidden md:flex items-center gap-4 relative z-20">
            <MagneticWrapper>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                onMouseEnter={playHover}
              >
                {/* Replaced Github with Instagram based on image usually, but sticking to standard icons requested or generic */}
                {/* Image had generic icons. Let's use what we had but maybe generic loop? */}
                {/* Image shows: Instagram, Facebook, Twitter. I'll stick to relevant dev ones + maybe twitter/socials matching existing */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.51" />
                </svg>
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                onMouseEnter={playHover}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" height="20"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                onMouseEnter={playHover}
              >
                <Twitter size={20} />
              </a>
            </MagneticWrapper>

          </div>

          {/* --- RIGHT: Mobile Menu Toggle --- */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2 relative z-20"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              playClick();
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden overflow-hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-slate-300 hover:text-white"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;