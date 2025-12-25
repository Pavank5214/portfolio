// FILE: src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { RevealOnScroll } from './components/RevealOnScroll';
import ScrollBackground from './components/ScrollBackground';
import { SmoothScroll } from './components/SmoothScroll';
import { MobileAwareCursor } from './components/MobileAwareCursor';
import { ScrollProgress } from './components/ScrollProgress';
import './components/Spotlight.css';

function App() {
  return (
    <>
      <MobileAwareCursor />
      <ScrollProgress />
      <SmoothScroll>
        <div className="min-h-screen text-slate-200 selection:bg-emerald-500/30">
          <Navbar />
          <main className="max-w-5xl mx-auto px-6">

            {/* Hero doesn't need scroll reveal because it's at the top */}
            <Hero />

            {/* 3D Background Animation */}
            <ScrollBackground />

            <RevealOnScroll>
              <About />
            </RevealOnScroll>

            <RevealOnScroll>
              <Skills />
            </RevealOnScroll>

            <RevealOnScroll>
              <Projects />
            </RevealOnScroll>

            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>

          </main>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;