import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { experience } = PORTFOLIO_DATA;

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-background relative section-padding overflow-hidden border-t border-border/50 bg-grid">
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
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.4em]">REF_04</span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary-text uppercase tracking-tightest leading-none">
                Work History
              </h2>
            </div>
            <p className="text-lg text-secondary-text max-w-md leading-relaxed font-medium">
              Professional evolution across full-stack engineering, system automation, and digital leadership.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                variants={fadeInUp}
                className="group p-10 bg-surface border border-border hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
              >
                {/* Internal Box Markers */}
                <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em]">
                  EXP_MODULE_{String(idx + 1).padStart(2, '0')}
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                  {/* Timeline & Company Info */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-4 text-accent">
                      <Calendar className="w-5 h-5 opacity-60" />
                      <span className="text-[12px] font-mono font-black uppercase tracking-[0.2em]">{exp.period}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-primary-text uppercase tracking-tightest mb-2">{exp.company}</h3>
                      <div className="flex items-center gap-4 text-secondary-text opacity-60">
                        <div className="h-px w-4 bg-border"></div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em]">{exp.location}</p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-4 px-4 py-2 bg-background border border-border text-[11px] font-mono font-bold uppercase tracking-widest text-accent/80">
                      <Briefcase className="w-4 h-4" />
                      {exp.title}
                    </div>
                  </div>

                  {/* Role Description */}
                  <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                    <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-medium max-w-3xl">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.slice(0, 6).map(tech => (
                        <span key={tech} className="px-3 py-1 border border-border/40 text-[10px] font-mono uppercase tracking-widest text-secondary-text/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Technical Visualization */}
          <div className="pt-10 flex items-center justify-center opacity-10 grayscale">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.4em] font-black">
              <ArrowUpRight className="w-4 h-4" />
              <span>Career_Protocol_Active // Total_Exp:05_Years</span>
              <div className="h-px w-40 bg-primary-text"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;