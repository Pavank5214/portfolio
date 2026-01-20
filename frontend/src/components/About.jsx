import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu, Zap, Activity, Server, Database, Lock } from 'lucide-react';
import { HackerText } from './HackerText';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <HackerText text="About Me" />
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN: Narrative / "Driver Info" */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-invert text-slate-400 leading-relaxed text-lg">
              <p>
                <span className="text-emerald-400 font-mono text-sm block mb-2">{`> CURRENT_STATUS: ACTIVE`}</span>
                I am a <strong>Full Stack Developer</strong> with hands-on experience building real-world MERN applications including billing systems, e-commerce platforms, and AI-assisted dashboards.
              </p>
              <p>
                Strong in backend development, authentication, and payment workflows. I have solved <strong>100+ DSA problems</strong> using Java and extensively apply AI for automation and productivity.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/40 border border-emerald-500/20 rounded-lg">
                <div className="text-emerald-400 text-3xl font-bold font-mono">3+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Major Projects</div>
              </div>
              <div className="p-4 bg-slate-900/40 border border-emerald-500/20 rounded-lg">
                <div className="text-emerald-400 text-3xl font-bold font-mono">100+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">DSA Solved</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: "Hardware" Specs Grid */}
          <div className="grid grid-cols-1 gap-4">

            {/* Spec Line 1 */}
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-emerald-500/30 transition-colors group">
              <div className="p-2 bg-emerald-500/10 rounded-md text-emerald-400 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <div>
                <h3 className="text-white font-mono text-sm font-bold">CORE_PROCESSORS</h3>
                <p className="text-slate-400 text-sm">React, Next.js, Java Spring Boot</p>
              </div>
            </div>

            {/* Spec Line 2 */}
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/30 transition-colors group">
              <div className="p-2 bg-cyan-500/10 rounded-md text-cyan-400 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <div>
                <h3 className="text-white font-mono text-sm font-bold">MEMORY_BANKS</h3>
                <p className="text-slate-400 text-sm">MongoDB, PostgreSQL, Redis</p>
              </div>
            </div>

            {/* Spec Line 3 */}
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-purple-500/30 transition-colors group">
              <div className="p-2 bg-purple-500/10 rounded-md text-purple-400 group-hover:scale-110 transition-transform">
                <Server size={24} />
              </div>
              <div>
                <h3 className="text-white font-mono text-sm font-bold">INFRASTRUCTURE</h3>
                <p className="text-slate-400 text-sm">AWS, Docker, IoT (Raspberry Pi)</p>
              </div>
            </div>

            {/* Spec Line 4 */}
            <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-orange-500/30 transition-colors group">
              <div className="p-2 bg-orange-500/10 rounded-md text-orange-400 group-hover:scale-110 transition-transform">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="text-white font-mono text-sm font-bold">SECURITY_PROTOCOLS</h3>
                <p className="text-slate-400 text-sm">OAuth 2.0, JWT, HTTPS</p>
              </div>
            </div>

          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="h-px w-full bg-slate-800/50 mb-12" />

          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-emerald-500 font-mono text-lg">02.</span>
            <HackerText text="Education" />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Degree 1 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 size={40} />
              </div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Bachelor of Engineering</h4>
                  <p className="text-slate-400 text-sm mt-1">Mechanical Engineering</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-500/80 font-mono text-xs px-2 py-1 bg-emerald-500/10 rounded block mb-2">2022 - 2025</span>
                  <span className="text-xs text-slate-500">CGPA: 8.0 / 10</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-2 font-medium">Don Bosco Institute of Technology</p>
            </div>

            {/* Degree 2 */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={40} />
              </div>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Diploma</h4>
                  <p className="text-slate-400 text-sm mt-1">Mechanical Engineering</p>
                </div>
                <div className="text-right">
                  <span className="text-emerald-500/80 font-mono text-xs px-2 py-1 bg-emerald-500/10 rounded block">2019 - 2022</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-2 font-medium">Shanthinikethan Group of Institutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;