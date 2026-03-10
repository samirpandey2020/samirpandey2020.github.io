import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Github, Linkedin, Terminal } from 'lucide-react';
import { downloadResume } from '@/lib/utils';
import PORTFOLIO_DATA from '@/data/portfolio';

const { personal, social } = PORTFOLIO_DATA;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home', ref: '00' },
    { href: '#about', label: 'About', ref: '01' },
    { href: '#skills', label: 'Skills', ref: '02' },
    { href: '#projects', label: 'Projects', ref: '03' },
    { href: '#experience', label: 'Experience', ref: '04' },
    { href: '#contact', label: 'Contact', ref: '05' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:hidden ${isScrolled || isMobileMenuOpen
        ? 'bg-background border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-8 h-20 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('#hero')}
          className="text-xl font-black tracking-tighter text-primary-text uppercase"
        >
          {personal.name.split(' ')[0]}<span className="text-secondary-text">.</span>
        </button>

        <div className="flex items-center gap-4">
          {!isMobileMenuOpen && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-border bg-surface/50">
              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-mono uppercase tracking-widest text-secondary-text">Sys_Ready</span>
            </div>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary-text p-2 -mr-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background bg-grid z-40 p-10 flex flex-col justify-between animate-in fade-in duration-500 overflow-hidden">
          {/* Decorative Decal */}
          <div className="absolute top-10 right-10 opacity-10 font-mono text-[8px] tracking-[0.4em] uppercase transform rotate-90 origin-top-right">
            Protocol / Mobile_AX
          </div>

          <nav className="space-y-4 mt-12 relative z-10">
            {navLinks.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="group flex items-end gap-6 w-full text-left"
              >
                <span className="text-[10px] font-mono text-accent opacity-30 mb-2">{link.ref}</span>
                <span className="text-5xl font-black text-primary-text hover:text-accent transition-all duration-300 tracking-tightest uppercase leading-none">
                  {link.label}
                </span>
                <span className="h-px flex-1 bg-border/20 mb-2 group-hover:bg-accent transition-colors"></span>
              </button>
            ))}
          </nav>

          <div className="space-y-12 relative z-10">
            <div className="flex items-center justify-between border-t border-border pt-12">
              <div className="flex gap-8">
                <a href={social.github} target="_blank" className="text-secondary-text hover:text-primary-text transition-colors"><Github className="w-5 h-5" /></a>
                <a href={social.linkedin} target="_blank" className="text-secondary-text hover:text-primary-text transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
              <div className="flex items-center gap-3">
                <Terminal className="w-3 h-3 text-accent opacity-40" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-secondary-text opacity-40">Build.2025</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full py-9 border-border text-primary-text text-[11px] font-black uppercase tracking-[0.4em] rounded-none bg-surface/30 hover:bg-accent hover:text-background transition-all duration-500 group"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4 mr-3 group-hover:-translate-y-1 transition-transform" />
              Access Cloud Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
