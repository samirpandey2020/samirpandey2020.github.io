import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import PORTFOLIO_DATA from '@/data/portfolio';

const { experience } = PORTFOLIO_DATA;

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden bg-grid">
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
                                // TIMELINE_04 / PROGRESSION
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary-text tracking-tightest leading-none uppercase">
                Professional <br />
                <span className="text-secondary-text opacity-40">System.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right opacity-20">
              <p className="text-[9px] font-mono uppercase tracking-widest">Type: Industrial_Exp</p>
              <p className="text-[9px] font-mono tracking-widest">Build: Production_Ready</p>
            </div>
          </motion.div>

          <div className="space-y-px bg-border border border-border">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="bg-background flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 p-12 lg:p-14 relative group hover:bg-surface transition-all duration-700"
              >
                <div className="absolute top-4 right-4 text-[8px] font-mono uppercase opacity-10">Role.Ref / 0{experience.length - idx}</div>

                <div className="md:col-span-3 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-none"></div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-primary-text">
                      {exp.period}
                    </span>
                  </div>
                  <div className="space-y-2 opacity-50">
                    <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-secondary-text">
                      <Building2 className="w-3 h-3" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-secondary-text">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-9 space-y-10">
                  <h3 className="text-3xl md:text-4xl font-black text-primary-text uppercase tracking-tightest leading-none">
                    {exp.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <p className="text-lg text-secondary-text leading-relaxed opacity-80">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 6).map((tech) => (
                          <span key={tech} className="text-[8px] font-mono border border-border px-2 py-0.5 text-secondary-text uppercase tracking-[0.2em] bg-surface/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">// Achievements</h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-4 group/ach">
                            <div className="w-1.5 h-px bg-accent/30 mt-2.5 group-hover/ach:w-4 transition-all duration-300"></div>
                            <span className="text-sm text-secondary-text leading-relaxed group-hover/ach:text-primary-text transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;