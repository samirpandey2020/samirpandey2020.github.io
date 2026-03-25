import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, FileDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme/theme-provider';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { personal, social } = PORTFOLIO_DATA;

const Sidebar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('hero');

    const navLinks = [
        { href: '#hero', label: 'Home', id: 'hero' },
        { href: '#about', label: 'About', id: 'about' },
        { href: '#skills', label: 'Skills', id: 'skills' },
        { href: '#projects', label: 'Projects', id: 'projects' },
        { href: '#experience', label: 'Experience', id: 'experience' },
        { href: '#contact', label: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        navLinks.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        { icon: Github, href: social.github, label: 'GitHub Account' },
        { icon: Linkedin, href: social.linkedin, label: 'LinkedIn Profile' },
        { icon: Twitter, href: social.twitter, label: 'Twitter Feed' },
        { icon: Mail, href: `mailto:${personal.email}`, label: 'Send Email' }
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background hidden lg:flex flex-col z-50">
            {/* Logo/Identity Section */}
            <div className="p-10 pb-10 border-b border-border/30 relative">
                <div className="absolute top-0 right-0 p-2 opacity-30 transform rotate-90 origin-top-right select-none">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">System.v2</span>
                </div>

                <motion.a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, '#hero')}
                    className="text-2xl font-black tracking-tight text-primary-text block mb-1 group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {personal.name.split(' ')[0]}
                    <span className="text-accent transition-transform group-hover:translate-x-1 inline-block">.</span>
                </motion.a>
                <p className="text-[11px] text-secondary-text font-bold uppercase tracking-[0.2em] leading-relaxed opacity-60 font-mono">
                    System Engineer
                </p>

                {/* Theme Toggle Button */}
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="absolute bottom-6 right-10 p-2 text-secondary-text hover:text-accent transition-colors"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-8 py-12">
                <motion.ul
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    {navLinks.map((link) => (
                        <motion.li key={link.href} variants={staggerItem}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`group flex items-center py-1 text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${activeSection === link.id
                                        ? 'text-primary-text'
                                        : 'text-secondary-text hover:text-primary-text'
                                    }`}
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                <span className={`h-px bg-accent transition-all duration-700 mr-0 ${activeSection === link.id ? 'w-10 mr-4' : 'w-0 group-hover:w-4 group-hover:mr-3'
                                    }`}></span>
                                {link.label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>

            {/* Bottom Section with Technical Metadata */}
            <div className="p-10 border-t border-border/30 space-y-10">
                {/* Coordinates & Location */}
                <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] font-black">Origin / Loc</p>
                    <p className="text-[11px] font-mono tracking-widest text-secondary-text leading-relaxed">
                        27.712° N, 85.312° E <br />
                        Kathmandu, Nepal
                    </p>
                </div>

                {/* Socials & Status */}
                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        {socialLinks.slice(0, 3).map((link, idx) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary-text hover:text-primary-text transition-all duration-300"
                                aria-label={link.label}
                                title={link.label}
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: 0.5 + idx * 0.1 }}
                            >
                                <link.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                        <motion.a
                            href={personal.resume}
                            download
                            className="p-2 bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-sm group relative"
                            aria-label="Download Resume PDF"
                            title="Download Resume PDF"
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: 0.8 }}
                        >
                            <FileDown className="w-4 h-4" />
                            <span className="absolute left-full ml-4 px-2 py-1 bg-surface border border-border text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                                Download_Resume
                            </span>
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary-text opacity-60">
                            Available-03.2025
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
