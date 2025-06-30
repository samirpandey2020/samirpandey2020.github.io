import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { fadeInUp, fadeInRight, fastStaggerContainer, fastStaggerItem } from '@/lib/animations';
import { downloadResume } from '@/lib/utils';
import PORTFOLIO_DATA from '@/data/portfolio';

const { personal, social } = PORTFOLIO_DATA;

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 bg-blue-800 rounded-full opacity-30"
        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-800 rounded-full opacity-30"
        animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-800 rounded-full opacity-40"
        animate={{ y: [0, -6, 0], x: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Introduction Content */}
            <motion.div 
              className="text-left"
              variants={fastStaggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Main Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
                variants={fadeInUp}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                {personal.bio}
              </motion.p>

              {/* Skills Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6 md:mb-8"
                variants={fastStaggerContainer}
              >
                {[
                  { name: 'Django', icon: Code, color: 'blue' },
                  { name: 'React', icon: Zap, color: 'cyan' },
                  { name: 'FastAPI', icon: Code, color: 'blue' },
                  { name: 'TypeScript', icon: Zap, color: 'cyan' },
                  { name: 'Python', icon: Code, color: 'blue' },
                  { name: 'AWS', icon: Zap, color: 'cyan' },
                  { name: 'PostgreSQL', icon: Code, color: 'blue' },
                  { name: 'Automation', icon: Zap, color: 'cyan' },
                  { name: 'Selenium', icon: Code, color: 'blue' },
                  { name: 'Ollama', icon: Zap, color: 'cyan' },
                  { name: 'OCR', icon: Code, color: 'blue' },
                  { name: 'Docker', icon: Zap, color: 'cyan' },
                  { name: 'Redis', icon: Code, color: 'blue' }
                ].map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fastStaggerItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-slate-800/90 backdrop-blur-sm border-slate-700 shadow-sm flex items-center gap-1 hover:bg-slate-700/50 transition-colors"
                    >
                      <skill.icon className={`w-3 h-3 text-${skill.color}-400`} />
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

             
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg w-full sm:w-auto"
                    onClick={() => scrollToSection('projects')}
                  >
                    View My Work
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold border-2 border-slate-600 hover:bg-slate-800 shadow-lg text-slate-300 w-full sm:w-auto"
                    onClick={downloadResume}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-3 sm:gap-4"
                variants={fadeInUp}
              >
                {[
                  { icon: Github, href: social.github, label: 'GitHub' },
                  { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: social.email, label: 'Email' }
                ].map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full p-2.5 sm:p-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700 shadow-lg hover:bg-slate-700 text-slate-300"
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Circular Crop Image */}
            <motion.div 
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >

              <div className='flex flex-col items-center'>

              <div className="flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem]">
                <img
                  src={personal.profileImage}
                  alt="Samir Pandey - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
                  loading="lazy"
                  />
              </div>
              <div className='flex flex-col items-center mt-10  '>
                {/* Status Badge */}
                <motion.div 
                className="mb-6 md:mb-8"
                variants={fadeInUp}
              >
                <Badge className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white border border-emerald-700 shadow-sm text-sm font-medium">
                  <Sparkles className="w-3 h-3 mr-2" />
                  {personal.status}
                </Badge>
              </motion.div>

              </div>
                  </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;