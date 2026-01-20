// FILE: src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Cpu, ShoppingCart } from 'lucide-react';
import { HackerText } from './HackerText';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce for 3D Designs",
      category: "Full Stack & E-commerce",
      description: "A specialized marketplace for custom 3D-printed designs with complete order lifecycle management and secure payments.",
      tech: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      links: { demo: "https://www.anuveshanatechnologies.in/", code: "https://github.com/Pavank5214/anuveshana" },
      icon: <ShoppingCart size={20} className="text-emerald-400" />,
      features: [
        "Implemented secure user authentication and checkout flow.",
        "Integrated online payment gateway handling success/failure states.",
        "Developed admin dashboard for product and order management."
      ]
    },
    {
      title: "Construction Mgmt Dashboard",
      category: "SaaS & AI Integration",
      description: "A comprehensive system to track construction projects, materials, costs, and logs with AI-powered insights.",
      tech: ["React", "Node.js", "MongoDB", "AI Integration"],
      links: { demo: "https://buildtrack.pavankumar.site/", code: "https://github.com/Pavank5214/paripoorna" },
      icon: <Zap size={20} className="text-orange-400" />,
      features: [
        "Integrated AI assistant to query live database via natural language.",
        "Built interactive charts for project progress and budget limits.",
        "Implemented role-based authentication and authorization."
      ]
    },
    {
      title: "AI-Powered Billing System",
      category: "Automation & Finance",
      description: "A billing platform for factory operations with automated invoice generation and AI documentation parsing.",
      tech: ["React", "Node.js", "PDF Generation", "AI Automation"],
      links: { demo: "https://billflow.pavankumar.site/", code: "https://github.com/Pavank5214/charan" },
      icon: <Shield size={20} className="text-blue-400" />,
      features: [
        "Integrated AI to parse raw text into pre-filled billing forms.",
        "Developed PDF invoice/quotation generation with email sharing.",
        "Designed dashboards for revenue tracking and financial summaries."
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