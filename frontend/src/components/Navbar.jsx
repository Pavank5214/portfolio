// FILE: src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Github, Linkedin } from 'lucide-react';
import { MagneticWrapper } from './MagneticWrapper';
import { useUISound } from '../hooks/useUISound';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useUISound();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg shadow-emerald-900/5'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
              <Terminal size={20} className="text-emerald-400" />
            </div>
            <span className="font-bold text-lg text-slate-100 tracking-tight">
              Pavan Kumar K<span className="text-emerald-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <MagneticWrapper key={link.name}>
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors block p-2"
                >
                  {link.name}
                </motion.a>
              </MagneticWrapper>
            ))}

            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.9 }}
              className="h-6 w-px bg-slate-800"
            />

            <div className="flex gap-4">
              <MagneticWrapper>
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              </MagneticWrapper>
              <MagneticWrapper>
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </MagneticWrapper>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              playClick();
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    playClick();
                  }}
                  className="text-3xl font-bold text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="w-12 h-1 bg-slate-800 rounded-full my-4" />

              <div className="flex gap-8">
                <a href="#" className="p-4 bg-slate-900 rounded-xl text-slate-400 hover:text-white border border-slate-800">
                  <Github size={28} />
                </a>
                <a href="#" className="p-4 bg-slate-900 rounded-xl text-slate-400 hover:text-white border border-slate-800">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;