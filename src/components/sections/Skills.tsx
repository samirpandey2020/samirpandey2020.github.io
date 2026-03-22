import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Shield, Terminal, Zap } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { skills } = PORTFOLIO_DATA;

const iconMap = {
  'Frontend Development': Layout,
  'Backend Development': Database,
  'DevOps & Cloud': Terminal,
  'Database & Cloud': Database,
  'DevOps & Tools': Shield,
  'Security': Shield,
  'Performance': Zap,
  'Core Engineering': Code2
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-background relative section-padding overflow-hidden border-t border-border/50 bg-grid">
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
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.4em]">REF_02</span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary-text uppercase tracking-tightest leading-none">
                Technical Skills
              </h2>
            </div>
            <p className="text-[13px] md:text-sm font-mono text-secondary-text uppercase tracking-[0.2em] opacity-60">
              Engineering Stack.2025 // Core Capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.categories.map((skillGroup, idx) => {
              const Icon = iconMap[skillGroup.title as keyof typeof iconMap] || Code2;
              return (
                <motion.div
                  key={skillGroup.title}
                  variants={fadeInUp}
                  className="p-10 bg-surface border border-border hover:border-accent/30 transition-all duration-500 group relative"
                >
                  {/* Technical Box Markers */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px] uppercase tracking-[0.2em]">
                    SKILL_MODULE_{idx.toString().padStart(2, '0')}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-background border border-border group-hover:border-accent/40 transition-colors">
                      <Icon className="w-6 h-6 text-accent opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-black text-primary-text uppercase tracking-widest">{skillGroup.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-background border border-border text-[11px] font-mono font-bold uppercase tracking-widest text-secondary-text hover:text-accent hover:border-accent transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Progress Dots - Representation of Mastery */}
                  <div className="mt-10 flex gap-1 items-center opacity-20">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`h-1 w-1 rounded-full ${i < 7 ? 'bg-accent' : 'bg-border'}`}></div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Tag Cloud */}
          <motion.div variants={fadeInUp} className="pt-10">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.4em] text-accent/40 font-black mb-6">Additional_Capabilities</h4>
            <div className="flex flex-wrap gap-3">
              {skills.additionalSkills.map(skill => (
                <span key={skill} className="text-[12px] font-bold uppercase tracking-wider text-secondary-text/60 border-b border-border/40 pb-1 hover:text-primary-text hover:border-accent transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
