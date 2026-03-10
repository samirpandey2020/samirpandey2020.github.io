import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import PORTFOLIO_DATA from '@/data/portfolio';

const { skills } = PORTFOLIO_DATA;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden bg-grid">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          className="max-w-6xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="mb-24 flex justify-between items-end border-b border-border pb-12"
            variants={fadeInUp}
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent mb-6 block opacity-50">
                                // CAPABILITIES_02 / TECH_STACK
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary-text tracking-tightest leading-none uppercase">
                Technical <br />
                <span className="text-secondary-text opacity-40">Core.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right opacity-20">
              <p className="text-[9px] font-mono uppercase tracking-widest">Stack: Full-Scale</p>
              <p className="text-[9px] font-mono tracking-widest">Build: Production_Ready</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {skills.categories.map((category, idx) => (
              <motion.div
                key={category.title}
                variants={staggerItem}
                className="bg-background p-12 relative group hover:bg-surface transition-all duration-500"
              >
                <div className="absolute top-4 right-4 text-[8px] font-mono uppercase opacity-10">Module.Ref / 0{idx + 1}</div>

                <h3 className="text-xs font-black text-primary-text uppercase tracking-[0.3em] mb-10 flex items-center gap-4">
                  <span className="w-10 h-px bg-accent/30 group-hover:w-16 transition-all duration-700"></span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border-border text-secondary-text rounded-none bg-surface/30 hover:text-primary-text hover:border-accent transition-all duration-500 relative group/skill"
                    >
                      <span className="absolute -top-1 -left-1 w-1 h-1 bg-accent/0 group-hover/skill:bg-accent transition-colors"></span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Metadata Footer */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6 opacity-30 px-2"
          >
            <div className="space-y-2">
              <p className="text-[8px] font-mono uppercase tracking-widest mb-2">Process / Dev_Ops</p>
              <div className="flex flex-wrap gap-3">
                {["CI/CD", "DOCKER", "AWS", "AUTOMATION"].map(t => (
                  <span key={t} className="text-[8px] font-mono border border-white/20 px-2 py-0.5">{t}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[8px] font-mono uppercase tracking-widest mb-2">Eng / Metrics</p>
              <div className="flex flex-wrap gap-3">
                {["99.9%_UP", "RE-SCALABLE", "INTENTIONAL"].map(t => (
                  <span key={t} className="text-[8px] font-mono border border-white/20 px-2 py-0.5">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
