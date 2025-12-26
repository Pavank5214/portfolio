// FILE: src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone, MessageCircle, Terminal } from 'lucide-react';
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
            <HackerText text="Let's Connect" />
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I am currently open to <span className="text-emerald-400 font-medium">Full Stack Engineer</span> roles.
            Reach out directly via email or WhatsApp!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {/* Email Card - Click to Open Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pavank5214@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center gap-4 hover:border-emerald-500/50 transition-colors cursor-pointer group"
          >
            <div className="p-4 bg-emerald-500/10 rounded-full group-hover:bg-emerald-500/20 transition-colors">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-center">
              <h3 className="text-slate-500 text-sm font-medium mb-1">Email</h3>
              <p className="text-white text-lg font-semibold select-all">pavank5214@gmail.com</p>
            </div>
          </a>

          {/* Phone/WhatsApp Card */}
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center gap-4 hover:border-emerald-500/50 transition-colors">
            <div className="p-4 bg-emerald-500/10 rounded-full">
              <div className="flex gap-2">
                <Smartphone className="w-6 h-6 text-emerald-400" />
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-slate-500 text-sm font-medium mb-1">Phone / WhatsApp</h3>
              <p className="text-white text-lg font-semibold select-all">+91 9380400291</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons (Socials) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <SocialButton
            href="https://github.com/Pavank5214"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
          />
          <SocialButton
            href="https://www.linkedin.com/in/pavan-kumar-k-870a95278/"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialButton
            href="https://wa.me/919380400291"
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
          />
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
  <MagneticWrapper className="w-full sm:w-auto">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-800/50 text-slate-300 font-medium rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-slate-700 transition-all duration-300 w-full"
    >
      {icon}
      <span>{label}</span>
      {/* External Link Arrow hidden but implied by target blank */}
    </a>
  </MagneticWrapper>
);

export default Contact;