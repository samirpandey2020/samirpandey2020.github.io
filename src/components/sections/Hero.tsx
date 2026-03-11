import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
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
            <span className="text-accent">_</span>
          </motion.h1>

          {/* Role & Mission Statement and Profile Image */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-secondary-text max-w-2xl leading-relaxed mb-0 font-medium tracking-tight">
                <span className="text-primary-text font-black uppercase mr-2">System Engineer</span>
                specializing in high-performance automation, architectural integrity, and purposeful digital ecosystems.
              </p>
            </motion.div>

            {/* Technical Profile Image Frame */}
            <motion.div 
              variants={fadeInUp} 
              className="lg:col-span-4 relative group"
            >
              <div className="relative w-full aspect-square max-w-[300px] mx-auto lg:ml-auto overflow-hidden border border-border/50 bg-surface/50 p-2">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/40 z-30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/40 z-30"></div>
                
                {/* Image Container with Filters */}
                <div className="relative w-full h-full overflow-hidden bg-background">
                  <motion.img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Scanline Overlay Effect */}
                  <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none z-10"></div>
                  
                  {/* Subtle technical overlay */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-20"></div>
                </div>

                {/* Technical Label */}
                <div className="absolute -bottom-6 right-0 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-secondary-text font-black">Archive_ID: P-04</span>
                  <div className="h-px w-6 bg-accent/40"></div>
                </div>
              </div>
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