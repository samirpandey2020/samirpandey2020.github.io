import React from 'react';
import { Heart, Terminal, Globe, Cpu } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';

const { personal } = PORTFOLIO_DATA;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden bg-grid border-t border-border mt-32">
      <div className="container mx-auto px-8 lg:px-12 py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 pb-24">
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3 text-accent opacity-40">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">System_Core_v2.0</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-primary-text mb-6 uppercase tracking-tightest leading-none">
              {personal.name}<span className="text-accent">_</span>
            </h3>
            <p className="text-lg text-secondary-text max-w-sm leading-relaxed opacity-60">
              Software Engineer specialized in high-performance automation, architectural systems, and purposeful digital experiences.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-accent opacity-40">// CONTACT_PROTO</h4>
            <div className="space-y-6 text-[12px] font-bold uppercase tracking-[0.2em] text-secondary-text">
              <p className="hover:text-primary-text transition-colors cursor-default select-all">{personal.email}</p>
              <p className="hover:text-primary-text transition-colors cursor-default">{personal.location}</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-accent opacity-40">// SOCIAL_SIGNAL</h4>
            <div className="space-y-6 text-[12px] font-bold uppercase tracking-[0.2em] text-secondary-text">
              <a href={PORTFOLIO_DATA.social.github} target="_blank" className="block hover:text-primary-text transition-colors">GitHub_Archive</a>
              <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" className="block hover:text-primary-text transition-colors">LinkedIn_Profile</a>
              <a href={PORTFOLIO_DATA.social.twitter} target="_blank" className="block hover:text-primary-text transition-colors">Twitter_Feed</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center text-[10px] font-mono uppercase tracking-[0.3em] text-secondary-text/30">
            <span>&copy; {currentYear} [SAMIR_PANDEY]</span>
            <span className="mx-6 opacity-20">|</span>
            <span className="flex items-center gap-2">
              <Terminal className="w-3 h-3 opacity-40" />
              DEPLOYED_VIA_CLOUDFLARE
            </span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.4em] text-secondary-text/20 font-black">
            <span>PROTOCOL:05.11.2025</span>
            <Heart className="w-3 h-3 opacity-20 fill-current" />
            <span>AUTH:SECURE</span>
          </div>
        </div>
      </div>

      {/* Background Decal */}
      <div className="absolute -bottom-10 -right-20 pointer-events-none select-none opacity-[0.02] text-[15vw] font-black leading-none text-primary-text uppercase">
        TERMINAL_01
      </div>
    </footer>
  );
};

export default Footer;
