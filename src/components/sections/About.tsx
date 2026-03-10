import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-background relative overflow-hidden section-padding border-t border-border/50">
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Section Header with Ref ID */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/40 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.4em]">REF_01</span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary-text uppercase tracking-tightest leading-none">
                About_Me
              </h2>
            </div>
            <p className="text-lg text-secondary-text max-w-md leading-relaxed font-medium">
              Building high-performance digital systems with architectural precision and a focus on scalability and user impact.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Primary Story Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-8 p-10 bg-surface border border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[11px] uppercase tracking-[0.3em]">
                Bio.Archive
              </div>

              <h3 className="text-2xl font-black text-primary-text mb-8 uppercase tracking-[0.1em]">The_Mission</h3>
              <div className="space-y-6 text-lg text-secondary-text leading-relaxed font-medium max-w-3xl">
                <p>
                  I'm a <span className="text-primary-text font-bold">Full Stack System Engineer</span> based in Kathmandu. My approach combines the technical rigor of software engineering with a minimalist design philosophy.
                </p>
                <p>
                  Specializing in React, Django, and high-performance automation, I focus on building systems that are not just functional, but architectural—clean, maintainable, and highly efficient.
                </p>
              </div>

              {/* Technical Marker Details */}
              <div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Role', value: 'System Eng.' },
                  { label: 'Base', value: 'Kathmandu' },
                  { label: 'Exp', value: '5+ Years' },
                  { label: 'Status', value: 'Operational' }
                ].map(item => (
                  <div key={item.label}>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent/50 mb-1">{item.label}</p>
                    <p className="text-[12px] font-mono font-black text-primary-text uppercase">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability & Goal Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-4 p-10 bg-surface border border-border flex flex-col justify-between group relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[11px] uppercase tracking-[0.3em]">
                Sys.Status
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary-text mb-4 uppercase tracking-[0.1em]">Goal</h3>
                <p className="text-secondary-text leading-relaxed font-medium">
                  Developing state-of-the-art software solutions that solve real-world automation challenges.
                </p>
              </div>

              {/* Glowing Status Indicator */}
              <div className="mt-10 p-5 border border-border bg-background/50 relative">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono font-black text-primary-text tracking-[0.3em] uppercase">Status: Available</p>
                    <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest opacity-80">READY_FOR_DEPLOYMENT</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specialization Cards */}
            {[
              { icon: Code, title: 'Architectural Code', desc: 'Focusing on clean logic and modular scalability.', id: 'logic-ref' },
              { icon: Zap, title: 'High Performance', desc: 'Optimizing for speed, efficiency, and low-latency.', id: 'speed-ref' },
              { icon: ShieldCheck, title: 'System Security', desc: 'Implementing robust, production-ready security protocols.', id: 'auth-ref' }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="lg:col-span-4 p-8 bg-surface border border-border hover:border-accent/40 transition-colors group relative"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10 font-mono text-[10px] tracking-[0.2em] font-black uppercase">
                  {item.id}
                </div>
                <item.icon className="w-8 h-8 text-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <h4 className="text-lg font-black text-primary-text mb-3 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-secondary-text leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;