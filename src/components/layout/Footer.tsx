
// src/components/layout/Footer.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: SOCIAL_LINKS.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: SOCIAL_LINKS.twitter,
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: SOCIAL_LINKS.email,
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Samir Pandey
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-md">
                Full-Stack Developer passionate about creating beautiful and functional 
                digital experiences that make a difference.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(social.href, '_blank')}
                  className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-slate-600 dark:text-slate-400">
              <p>pandeysamir040@example.com</p>
              <p>Kathmandu</p>
            </div>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6"
            >
              Let's Work Together
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
              <span>&copy; {currentYear} Samir Pandey, Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>and lots of coffee and cursor</span>
            </div>
            
            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              <span className="ml-1 text-sm">Back to Top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// ===================================
