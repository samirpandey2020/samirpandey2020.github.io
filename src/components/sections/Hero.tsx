import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { personal, social } = PORTFOLIO_DATA;
const roles = ["System Engineer", "Full-Stack Developer", "UI/UX Designer", "Automation Specialist"];

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[90vh] flex items-center relative overflow-hidden bg-background pt-32 pb-20 lg:pt-0 lg:pb-0">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none"></div>

      {/* Global Grain Texture */}
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none z-10"></div>

      <div className="container mx-auto px-8 lg:px-12 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
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
              className="text-7xl md:text-8xl lg:text-9xl font-black text-primary-text mb-8 uppercase tracking-tightest leading-[0.85] filter drop-shadow-2xl"
            >
              {personal.name.split(' ')[0]}<br />
              <span className="text-secondary-text/30">{personal.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Role & Mission Statement */}
            <motion.div variants={fadeInUp} className="max-w-xl">
              <div className="text-xl md:text-2xl text-secondary-text leading-relaxed font-medium tracking-tight h-8 mb-4 overflow-hidden flex items-center gap-2">
                <div className="flex flex-col relative h-full">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-primary-text font-black uppercase whitespace-nowrap"
                  >
                    {roles[currentRoleIndex]}
                  </motion.div>
                </div>
                <span className="opacity-40">//</span>
              </div>
              <p className="text-lg md:text-xl text-secondary-text leading-relaxed opacity-80">
                Specializing in high-performance automation, architectural integrity, and purposeful digital ecosystems.
              </p>
            </motion.div>

            {/* Primary Actions & Social Status */}
            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex gap-6 border-r border-border/40 pr-8">
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

              <a
                href={personal.resume}
                download
                className="flex items-center gap-2 px-6 py-2.5 bg-accent text-background font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>

              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-secondary-text/60 font-bold">
                  Status: Optimized
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Technical Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative p-4 group">
              {/* Corner Decorative Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-sm transition-all group-hover:scale-110"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/40 rounded-tr-sm transition-all group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/40 rounded-bl-sm transition-all group-hover:scale-110"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-sm transition-all group-hover:scale-110"></div>

              {/* Monospace Metadata Labels */}
              <div className="absolute -top-6 left-0 text-[9px] font-mono font-black text-accent/40 uppercase tracking-widest">
                Scanning_Identity // 2.0.25
              </div>
              <div className="absolute -bottom-6 right-0 text-[9px] font-mono font-black text-accent/40 uppercase tracking-widest">
                Auth.Session: Established
              </div>

              {/* Image Container with Scanning Effect */}
              <div className="relative w-[340px] h-[420px] bg-surface overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100">
                {/* Horizontal Scanline Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-20 w-full animate-scanline -z-0 opacity-20"></div>
                
                {/* Profile Image (Using descriptive alt for potential placeholders) */}
                <img 
                  src={personal.profileImage} 
                  alt="Samir Pandey Portrait" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />

                {/* Technical Overlay */}
                <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-noise opacity-30"></div>
              </div>
              
              {/* External Floating Elements */}
              <div className="absolute -right-8 top-1/4 h-32 w-px bg-accent/20"></div>
              <div className="absolute -left-8 bottom-1/4 h-32 w-px bg-accent/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Aesthetic Metadata (Repositioned for 2-column) */}
      <div className="absolute right-6 bottom-10 hidden lg:block opacity-10">
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