import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import { fadeInUp, fastStaggerContainer, fastStaggerItem } from '@/lib/animations';
import { downloadResume } from '@/lib/utils';
import PORTFOLIO_DATA from '@/data/portfolio';

const { personal } = PORTFOLIO_DATA;

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'Django', 'React', 'FastAPI', 'TypeScript', 'Python', 'AWS',
    'PostgreSQL', 'Automation', 'Docker', 'Redis'
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-background bg-grid pt-32 pb-20 lg:pt-10 lg:pb-0">
      {/* Decorative Technical Metadata Overlay */}
      <div className="absolute top-10 right-10 hidden lg:block text-right opacity-20 select-none">
        <p className="text-[9px] font-mono uppercase tracking-[0.3em] mb-1">Build / 2025.03.v2</p>
        <p className="text-[8px] font-mono tracking-widest text-secondary-text">
          STACK: RE-TS-DJ-PG-RD-RB
        </p>
      </div>

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side - Content */}
          <motion.div
            className="lg:col-span-8 xl:col-span-12"
            variants={fastStaggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-surface mb-10 relative corner-tl">
              <Terminal className="w-3 h-3 text-emerald-500" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-secondary-text mt-0.5">
                {personal.status}
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl xl:text-[10rem] font-black text-primary-text mb-10 tracking-tightest leading-[0.8] uppercase flex flex-col"
              variants={fadeInUp}
            >
              <span>ENGINEERING</span>
              <span className="flex items-center gap-4">
                DIGITAL
                <span className="text-accent">_</span>
              </span>
              <span className="text-secondary-text opacity-40">SYSTEMS</span>
            </motion.h1>

            <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
              <motion.p
                className="lg:col-span-5 text-lg md:text-xl text-secondary-text leading-relaxed tracking-tight"
                variants={fadeInUp}
              >
                {personal.bio}
              </motion.p>

              <motion.div
                className="lg:col-span-6 flex flex-wrap gap-2 pt-2"
                variants={fastStaggerContainer}
              >
                {skills.map((skill) => (
                  <motion.div key={skill} variants={fastStaggerItem}>
                    <Badge
                      variant="outline"
                      className="px-4 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] border-border text-secondary-text/60 hover:text-primary-text hover:border-accent transition-all duration-300 rounded-none bg-surface/30"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-px bg-border border border-border"
              variants={fadeInUp}
            >
              <Button
                size="lg"
                className="bg-primary-text text-background hover:bg-accent transition-all duration-500 px-12 py-9 text-[11px] font-black uppercase tracking-[0.3em] rounded-none group flex-1"
                onClick={() => scrollToSection('#projects')}
              >
                Launch Projects
                <ArrowDown className="ml-3 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-surface border-none text-primary-text hover:bg-background transition-all duration-500 px-12 py-9 text-[11px] font-black uppercase tracking-[0.3em] rounded-none group flex-1"
                onClick={downloadResume}
              >
                <Download className="mr-3 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Access Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decal */}
      <div className="absolute -bottom-20 -left-10 pointer-events-none select-none opacity-[0.02] text-[20vw] font-black leading-none text-primary-text whitespace-nowrap uppercase">
        01.BASE
      </div>
    </section>
  );
};

export default Hero;