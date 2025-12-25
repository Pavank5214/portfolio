// FILE: src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MagneticWrapper } from './MagneticWrapper';

const Hero = () => {
  // Mouse Position Setup for Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the center of the hero section
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  // Transform mouse position into movement for layers
  // The grid moves slowly (feels far away)
  const gridX = useTransform(x, [-500, 500], [-15, 15]);
  const gridY = useTransform(y, [-500, 500], [-15, 15]);

  // The orbs move slightly faster (feel closer)
  const orbX = useTransform(x, [-500, 500], [-30, 30]);
  const orbY = useTransform(y, [-500, 500], [-30, 30]);


  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden"
    >

      {/* --- BACKGROUND LAYER (Interactive Parallax) --- */}
      <div className="absolute inset-0 -z-10 bg-slate-950">

        {/* Interactive Grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <motion.div
            style={{ x: gridX, y: gridY }} // Reacts to mouse
            className="absolute inset-0 opacity-20"
            // Keep the slow drifting animation as well
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            css={{
              backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Interactive Glowing Orbs */}
        <motion.div
          style={{ x: orbX, y: orbY }} // Reacts to mouse
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: orbX, y: orbY }} // Reacts to mouse (inverted for depth effect)
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* --- CONTENT LAYER (Static position, Animated Entrance) --- */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none"> {/* pointer-events-none allows mouse pass-through to background */}
        <div className="max-w-4xl space-y-8 pointer-events-auto"> {/* Re-enable events for buttons/links */}

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Status: Online & Available
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            I build production <br className="hidden md:block" />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"
            >
              systems that scale.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Full Stack Engineer (MERN + Java + IoT). I bridge the gap between hardware constraints and scalable web architecture. No fluff, just shipping.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticWrapper>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#34d399" }} // Emerald-400
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/20"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>
            </MagneticWrapper>

            <MagneticWrapper>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }} // Slate-800
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg border border-slate-700 flex items-center gap-2 transition-colors"
              >
                Download CV <Download size={20} />
              </motion.a>
            </MagneticWrapper>
          </motion.div>

          {/* Tech Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 flex items-center gap-6 text-slate-500 font-mono text-sm border-t border-slate-800/50 w-fit mt-8"
          >
            <span>React</span>
            <span className="text-slate-700">•</span>
            <span>Node.js</span>
            <span className="text-slate-700">•</span>
            <span>Java</span>
            <span className="text-slate-700">•</span>
            <span>IoT</span>
            <span className="text-slate-700">•</span>
            <span>System Design</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;