// FILE: src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Cpu, ShoppingCart } from 'lucide-react';
import { HackerText } from './HackerText';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Invoicing SaaS",
      category: "Full Stack Web",
      description: "A comprehensive billing solution managing multi-tenant data, automated invoice generation, and financial reporting.",
      tech: ["MERN Stack", "JWT Auth", "Chart.js", "RBAC"],
      links: { demo: "#", code: "#" },
      icon: <Shield size={20} className="text-emerald-400" />,
      features: [
        "Implemented Role-Based Access Control (RBAC) for data isolation.",
        "Architected complex MongoDB aggregations for financial reports.",
        "Built dynamic PDF generation pipeline for invoices."
      ]
    },
    {
      title: "Edge AI Voice Assistant",
      category: "Hardware & AI",
      description: "A latency-optimized voice assistant running on Raspberry Pi, integrating Gemini LLM for conversational intelligence.",
      tech: ["Python", "Raspberry Pi", "Gemini API", "WebSockets"],
      links: { demo: null, code: "#" }, // Demo null for hardware
      icon: <Cpu size={20} className="text-purple-400" />,
      features: [
        "Optimized audio buffer handling to reduce TTS latency.",
        "Engineered fault-tolerant networking for unstable connections.",
        "Synchronized video avatar lip-sync with audio stream."
      ]
    },
    {
      title: "Construction Firm Platform",
      category: "Client Production",
      description: "A high-performance digital presence for a construction business, focused on SEO, lead generation, and mobile responsiveness.",
      tech: ["React", "Vite", "Tailwind", "EmailJS"],
      links: { demo: "#", code: "#" },
      icon: <Zap size={20} className="text-orange-400" />,
      features: [
        "Achieved 95+ Lighthouse performance score via code-splitting.",
        "Implemented custom form validation and lead routing logic.",
        "Designed fully responsive UI for field-access on mobile devices."
      ]
    },
    {
      title: "3D Print E-commerce",
      category: "Backend Systems",
      description: "A specialized marketplace for digital 3D models and physical prints, handling inventory states and secure checkout.",
      tech: ["Node.js", "MongoDB", "Redux", "Stripe API"],
      links: { demo: "#", code: "#" },
      icon: <ShoppingCart size={20} className="text-blue-400" />,
      features: [
        "Designed database schema for dual inventory (Digital vs Physical).",
        "Implemented secure cart state management with Redux.",
        "Integrated robust API error handling and validation middleware."
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <HackerText text="Featured Projects" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 bg-emerald-500 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Extracted Card Component for cleanness
const ProjectCard = ({ project, index }) => {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full spotlight-card"
    >
      {/* Card Content */}
      <div className="p-8 flex flex-col h-full relative z-20">

        {/* Header: Title & Links */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
              {project.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Code">
                <Github size={20} />
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-medium text-emerald-400/80 bg-emerald-500/10 rounded-full border border-emerald-500/10">
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features List (The "Engineering" part) */}
        <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Engineering:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start text-sm text-slate-400">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;