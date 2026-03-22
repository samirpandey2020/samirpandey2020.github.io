import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, ArrowUpRight } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { projects } = PORTFOLIO_DATA;

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-background relative section-padding overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/40 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.4em]">REF_03</span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary-text uppercase tracking-tightest leading-none">
                Project Archive
              </h2>
            </div>
            <p className="text-lg text-secondary-text max-w-md leading-relaxed font-medium">
              A curated selection of industrial automation, financial systems, and high-performance digital architectures.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative bg-surface border border-border overflow-hidden hover:border-accent/40 transition-all duration-700"
              >
                {/* Background Grid Pattern for Card */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-grid opacity-20 pointer-events-none"></div>

                <div className="p-8 md:p-12 lg:p-16 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Project Metadata & Number */}
                    <div className="lg:w-1/3 space-y-8">
                      <div className="flex items-center gap-6">
                        <span className="text-4xl md:text-6xl font-black text-secondary-text/10 font-mono tracking-tightest">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-border/40"></div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-text uppercase tracking-tightest leading-tight md:leading-[0.9] break-words md:break-normal">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                          {project.technologies.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-background border border-border text-[10px] font-mono font-bold uppercase tracking-widest text-accent opacity-60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Description & Links */}
                    <div className="lg:w-2/3 flex flex-col justify-between gap-12">
                      <div className="space-y-8">
                        <p className="text-xl text-secondary-text leading-relaxed font-medium max-w-3xl">
                          {project.description}
                        </p>

                        {/* Tech Stack IDs */}
                        <div className="flex items-center gap-6 text-[11px] font-mono text-secondary-text/40 uppercase tracking-[0.2em] font-black">
                          <Terminal className="w-4 h-4" />
                          <span>Runtime: Production_Release_v1.0</span>
                          <span className="hidden md:inline">|</span>
                          <span className="hidden md:inline">Status: Operational</span>
                        </div>
                      </div>

                      {/* <div className="flex flex-wrap gap-6 md:gap-12 pt-8 border-t border-border/30">
                        <a
                          href={project?.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-primary-text hover:text-accent transition-colors"
                          aria-label={`View live site for ${project.title}`}
                        >
                          <span className="border-b-2 border-accent/20 group-hover/btn:border-accent pb-1 transition-all">Execute_Live</span>
                          <ExternalLink className="w-4 h-4 mb-1 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.3em] text-secondary-text hover:text-primary-text transition-colors"
                          aria-label={`View source code for ${project.title}`}
                        >
                          <span className="border-b-2 border-border group-hover/btn:border-primary-text pb-1 transition-all">Source_Code</span>
                          <Github className="w-4 h-4 mb-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Footer Metadata */}
          <div className="pt-20 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.5em] font-black">
              <ArrowUpRight className="w-4 h-4" />
              <span>Archive_Ref: Total Projects {projects.length}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-accent/20"></div>
              <span className="text-[11px] font-mono uppercase tracking-[0.4em] font-black">Secure_Protocol_v2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;