import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { personal, social } = PORTFOLIO_DATA;

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden bg-background pt-32 pb-20 lg:pt-0 lg:pb-0">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none"></div>

      {/* Global Grain Texture */}
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-10"></div>

      <div className="container mx-auto px-8 lg:px-12 relative z-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl"
        >
          {/* System Metadata Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-accent/30"></div>
            <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-accent/60 font-black">
              System.Build.03.2025 // Core_v2.6
            </span>
          </motion.div>

          {/* High-Impact Name Header */}
          <motion.h1
            variants={fadeInUp}
            className="text-7xl md:text-9xl font-black text-primary-text mb-8 uppercase tracking-tightest leading-[0.85] filter drop-shadow-2xl"
          >
            {personal.name.split(' ')[0]}<br />
            <span className="text-secondary-text/30">{personal.name.split(' ')[1]}</span>
            {/* <span className="text-accent">_</span> */}
          </motion.h1>

          {/* Role & Mission Statement */}
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <motion.div variants={fadeInUp} className="lg:col-span-12">
              <p className="text-xl md:text-2xl text-secondary-text max-w-2xl leading-relaxed mb-0 font-medium tracking-tight">
                <span className="text-primary-text font-black uppercase mr-2">System Engineer</span>
                specializing in high-performance automation, architectural integrity, and purposeful digital ecosystems.
              </p>
            </motion.div>
          </div>

          {/* Primary Actions & Social Status */}
          <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap items-center gap-10">
            <div className="flex gap-8 border-r border-border/40 pr-10">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-primary-text transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-primary-text transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-secondary-text hover:text-primary-text transition-all duration-300 transform hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personal.resume}
                download
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-background font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-secondary-text font-bold">
                Auth.Session: Secure
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vertical Aesthetic Metadata */}
      <div className="absolute right-10 bottom-10 hidden lg:block opacity-10">
        <div className="flex flex-col items-center gap-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.6em] rotate-90 origin-center translate-y-20 whitespace-nowrap font-black">
            Protocol.Alpha_Sector
          </span>
          <div className="h-40 w-px bg-primary-text mt-32"></div>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;