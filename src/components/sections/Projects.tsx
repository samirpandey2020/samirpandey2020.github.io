import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Monitor, Cpu, Database } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import PORTFOLIO_DATA from '@/data/portfolio';

const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden bg-grid">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          className="max-w-6xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="mb-24 flex justify-between items-end border-b border-border pb-12"
            variants={fadeInUp}
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-6 block opacity-50">
                                // PORTFOLIO_03 / REPOSITORIES
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary-text tracking-tightest leading-none uppercase">
                Selected <br />
                <span className="text-secondary-text opacity-40">Engineering.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right opacity-20">
              <p className="text-[9px] font-mono uppercase tracking-widest">Type: Comm_OpenSource</p>
              <p className="text-[9px] font-mono tracking-widest">Build: Production_Ready</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                className="bg-background p-12 lg:p-14 relative group hover:bg-surface transition-all duration-700 flex flex-col justify-between corner-br"
              >
                <div className="absolute top-4 right-4 text-[8px] font-mono uppercase opacity-10">Module.v2 / 0{index + 1}</div>

                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-px bg-accent/30 group-hover:w-20 transition-all duration-700 mt-2"></div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-secondary-text uppercase block">Category</span>
                      <span className="text-[10px] font-black text-primary-text uppercase tracking-widest mt-1 block group-hover:text-accent transition-colors">{project.category}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-primary-text mb-8 tracking-tightest leading-none uppercase group-hover:translate-x-2 transition-transform duration-700">
                    {project.title}
                  </h3>

                  <p className="text-lg text-secondary-text leading-relaxed mb-10 max-w-md opacity-80">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 mb-12 border-t border-border/30 pt-8">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent/40 rounded-full"></div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-secondary-text/60">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-10">
                  <div className="flex items-center gap-4 text-[8px] font-mono opacity-20 uppercase tracking-[0.3em]">
                    <Monitor className="w-3 h-3" />
                    <span>Status: Live_Deploy</span>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary-text hover:text-accent transition-all duration-300 group/link"
                  >
                    Execute
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-20 flex flex-col items-center gap-8"
          >
            <div className="h-px w-24 bg-border"></div>
            <a
              href="https://github.com/samirpandey2020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-mono font-bold uppercase tracking-[0.4em] text-secondary-text hover:text-primary-text transition-all duration-300 group"
            >
                            // Access_Full_Archive [Github]
              <span className="block h-px w-0 bg-accent group-hover:w-full transition-all duration-500 mt-2"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;