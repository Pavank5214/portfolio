// FILE: src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Cpu, Wrench, Database, Code } from 'lucide-react';
import { HackerText } from './HackerText';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: ["Node.js", "Express", "Java (DSA)", "REST APIs", "Auth & RBAC", "Payment flows"]
    },
    {
      title: "Frontend Ecosystem",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: ["React.js", "JavaScript", "HTML / CSS", "Tailwind", "Framer Motion", "Vite"]
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      skills: ["Python", "Gemini API", "Automation", "Raspberry Pi", "OpenCV", "IoT"]
    },
    {
      title: "Data & Tools",
      icon: <Database className="w-6 h-6 text-orange-400" />,
      skills: ["MongoDB Atlas", "Vercel", "Git / GitHub", "Postman", "Linux", "Docker"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <HackerText text="Technical Arsenal" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1 w-20 bg-emerald-500 rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.4)' }}
              onMouseMove={handleMouseMove}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 p-8 rounded-2xl hover:bg-slate-900/40 transition-all duration-300 group spotlight-card relative z-10"
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-slate-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-md border border-slate-700/50 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DSA & Problem Solving Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Algorithmic Foundation</h3>
              <p className="text-slate-400 max-w-lg">
                Strong grasp of Data Structures & Algorithms (Java).
                Comfortable with Graphs, Trees, and Recursion for complex problem solving.
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">LeetCode</div>
            </div>
            <div className="w-px bg-slate-700 h-12"></div>
            <div>
              <div className="text-2xl font-bold text-white">Java</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Strict Typing</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;