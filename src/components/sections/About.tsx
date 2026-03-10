import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, ShieldCheck, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Scalable Logic-01"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Visual Core-02"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized-03"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team Ops-04"
    },
    {
      icon: ShieldCheck,
      title: "Security",
      description: "Protection-05"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden bg-grid">
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
                // SELECTION_01 / CORE_IDENTITY
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary-text tracking-tightest leading-none uppercase">
                Purposeful <br />
                <span className="text-secondary-text opacity-40">Engineering.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right opacity-20">
              <p className="text-[9px] font-mono uppercase tracking-widest">Type: Resident_Eng</p>
              <p className="text-[9px] font-mono tracking-widest">Status: Active_Process</p>
            </div>
          </motion.div>

          {/* Bento Grid layout */}
          <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
            {/* Large Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-8 p-12 bg-background relative group hover:bg-surface transition-colors corner-tl"
            >
              <div className="absolute top-4 right-4 text-[9px] font-mono uppercase opacity-10">Module.01</div>
              <h3 className="text-xl font-bold text-primary-text mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
                <Cpu className="w-4 h-4 text-accent" />
                Philosophy
              </h3>
              <p className="text-xl text-secondary-text leading-relaxed mb-8 max-w-2xl">
                I'm a full-stack developer with a passion for creating clean, efficient, and user-friendly applications.
                I enjoy solving complex problems and turning ideas into reality through code.
              </p>
              <p className="text-xl text-secondary-text leading-relaxed max-w-2xl">
                I believe in writing code that's not just functional, but also readable and maintainable.
                I'm always learning new technologies and best practices to deliver better solutions.
              </p>
            </motion.div>

            {/* Small Side Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-4 p-12 bg-background relative flex flex-col justify-between corner-br border-l border-border/30"
            >
              <div className="space-y-10">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-primary-text uppercase tracking-[0.2em]">Status</h3>
                  <span className="text-[8px] font-mono opacity-20">SYSTEM_UP</span>
                </div>

                <p className="text-secondary-text leading-relaxed text-lg">
                  Dedicated to creating innovative solutions that make a difference in people's lives through modern technology and design.
                </p>

                <div className="inline-flex items-center gap-4 px-5 py-3 border border-emerald-500/20 bg-emerald-500/5 rounded-none shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-500 mt-0.5">Available for work</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/30">
                <span className="text-6xl font-black text-primary-text opacity-[0.03] select-none">CORE.01</span>
              </div>
            </motion.div>

            {/* Bottom Row Highlights */}
            <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-5 gap-px">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight.title}
                  variants={staggerItem}
                  className="p-10 bg-background relative hover:bg-surface transition-colors group"
                >
                  <div className="absolute top-2 right-2 text-[7px] font-mono opacity-20">REF.{idx + 10}</div>
                  <highlight.icon className="w-5 h-5 text-secondary-text group-hover:text-primary-text transition-colors mb-6 group-hover:rotate-12 duration-500" />
                  <h4 className="text-[10px] font-black text-primary-text uppercase tracking-[0.2em] mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-[9px] font-mono text-secondary-text leading-relaxed tracking-widest uppercase opacity-40">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;