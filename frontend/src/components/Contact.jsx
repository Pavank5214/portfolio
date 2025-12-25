// FILE: src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import { HackerText } from './HackerText';
import { MagneticWrapper } from './MagneticWrapper';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-slate-900/50">

      {/* Background Gradient for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-3 bg-emerald-500/10 rounded-xl mb-6">
            <Terminal className="w-8 h-8 text-emerald-400" />
          </div>


          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <HackerText text="Ready to ship?" />
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I am currently open to <span className="text-emerald-400 font-medium">Full Stack Engineer</span> roles.
            If you need someone who can handle the entire stack—from hardware to frontend—let's talk.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20"
        >
          {/* Primary CTA */}
          <MagneticWrapper className="w-full md:w-auto">
            <a
              href="mailto:your.email@example.com"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-slate-950 font-bold text-lg rounded-xl hover:bg-emerald-400 transition-all duration-300 w-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <Mail className="mr-3 w-5 h-5" />
              <span>Send Email</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticWrapper>

          {/* Secondary Actions */}
          <div className="flex gap-4 w-full md:w-auto justify-center">
            <SocialButton
              href="https://github.com/yourusername"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialButton
              href="https://linkedin.com/in/yourusername"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm"
        >
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-slate-300 font-medium">Pavan Kumar K</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono">
            <span>Built with React + Tailwind</span>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span>Deployed on Vercel</span>
          </div>
        </motion.footer>

      </div>
    </section>
  );
};

// Helper Component for Social Buttons
const SocialButton = ({ href, icon, label }) => (
  <MagneticWrapper>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-800/50 text-slate-300 font-medium rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-slate-700 transition-all duration-300"
    >
      {icon}
      <span>{label}</span>
    </a>
  </MagneticWrapper>
);

export default Contact;