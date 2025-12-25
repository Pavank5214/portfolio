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
            <HackerText text="System Specifications" />
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
                I architect solutions where precision meets scale. My "hardware-first" mindset ensures that every line of code I write is optimized for memory, speed, and reliability.
              </p>
              <p>
                From configuring bare-metal servers to deploying serverless edge functions, I operate across the full spectrum of the stack using the <strong>MERN</strong> ecosystem and <strong>Java</strong>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/40 border border-emerald-500/20 rounded-lg">
                <div className="text-emerald-400 text-3xl font-bold font-mono">100%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Uptime</div>
              </div>
              <div className="p-4 bg-slate-900/40 border border-emerald-500/20 rounded-lg">
                <div className="text-emerald-400 text-3xl font-bold font-mono">&lt;50ms</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Latency</div>
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
      </div>
    </section>
  );
};

export default About;