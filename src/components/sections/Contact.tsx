import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Terminal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import emailjs from '@emailjs/browser';

const { personal, social } = PORTFOLIO_DATA;

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormState('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      setFormState('error');
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormState('success');
      })
      .catch((error: any) => {
        console.error('Email sending failed:', error);
        setFormState('error');
      });
  };

  return (
    <section id="contact" className="bg-background relative section-padding overflow-hidden border-t border-border/50">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>

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
                <span className="text-[11px] font-mono text-accent font-black tracking-[0.4em]">REF_05</span>
                <div className="h-px w-8 bg-accent/30"></div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-primary-text uppercase tracking-tightest leading-none">
                Contact System
              </h2>
            </div>
            <p className="text-lg text-secondary-text max-w-md leading-relaxed font-medium">
              Opening direct communication channels for high-performance collaborations, system inquiries, or project proposals.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-10">
                <motion.div variants={fadeInUp} className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-surface border border-border hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-5 font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                    MAIL_P
                  </div>
                  <div className="p-4 bg-background border border-border text-accent shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="text-center md:text-left space-y-2 overflow-hidden w-full">
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/50 font-black">Direct_Email</p>
                    <p className="text-xl font-black text-primary-text tracking-tightest uppercase select-all break-all">{personal.email}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-surface border border-border hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-5 font-mono text-[10px] uppercase tracking-[0.2em] font-black">
                    GEO_R
                  </div>
                  <div className="p-4 bg-background border border-border text-accent shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="text-center md:text-left space-y-2">
                    <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/50 font-black">Location</p>
                    <p className="text-xl font-black text-primary-text tracking-tightest uppercase">{personal.location}</p>
                    <p className="text-[11px] font-mono text-secondary-text/40 tracking-[0.2em]">KTM_NP // 27.7N, 85.3E</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Navigation */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-mono uppercase tracking-[0.4em] text-accent/40 font-black mb-6">Social_Communication_Grid</h3>
                <div className="flex gap-8">
                  {[
                    { icon: Github, href: social.github, label: 'GitHub Core' },
                    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn Professional' },
                    { icon: Twitter, href: social.twitter, label: 'Twitter Feed' }
                  ].map((link, idx) => (
                    <motion.a
                      key={link.label}
                      variants={fadeInUp}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-text hover:text-primary-text transition-all duration-300 transform hover:scale-110"
                      aria-label={link.label}
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 mt-8 lg:mt-0"
            >
              <div className="p-6 sm:p-10 bg-surface border border-border relative overflow-hidden">
                {/* Decorative Box Grid */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-grid opacity-10 pointer-events-none"></div>

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-2 shadow-[0_0_30px_rgba(16,185,129,0.3)]" />
                    <h3 className="text-3xl font-black text-primary-text uppercase tracking-widest">Message_Received</h3>
                    <p className="text-secondary-text max-w-sm leading-relaxed font-medium">
                      Transmission successful. Your inquiry has been logged, and I will get back to you within 24 operational hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormState('idle')}
                      className="mt-8 border-border text-xs tracking-[0.4em] uppercase py-6 px-10 rounded-none hover:bg-accent hover:text-background transition-all font-black"
                    >
                      Reset_Terminal
                    </Button>
                  </motion.div>
                ) : formState === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                      <span className="text-red-500 font-black text-2xl">!</span>
                    </div>
                    <h3 className="text-3xl font-black text-primary-text uppercase tracking-widest text-red-500">Signal_Lost</h3>
                    <p className="text-secondary-text max-w-sm leading-relaxed font-medium">
                      Transmission failed. The communication channel encountered an error. Please check your connection or try again.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormState('idle')}
                      className="mt-8 border-red-500/50 text-red-500 text-xs tracking-[0.4em] uppercase py-6 px-10 rounded-none hover:bg-red-500 hover:text-white transition-all font-black"
                    >
                      Retry_Link
                    </Button>
                  </motion.div>
                ) : (
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/60 font-black ml-1">01. Access_ID (Name)</label>
                        <input
                          id="name"
                          name="user_name"
                          type="text"
                          required
                          placeholder="IDENTIFY YOURSELF"
                          className="w-full bg-background border border-border h-16 px-5 focus:outline-none focus:border-accent/40 text-[12px] font-mono tracking-widest placeholder:text-secondary-text/20 uppercase font-black"
                          aria-label="Your Name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/60 font-black ml-1">02. Return_Signal (Email)</label>
                        <input
                          id="email"
                          name="user_email"
                          type="email"
                          required
                          placeholder="USER@DOMAIN.COM"
                          className="w-full bg-background border border-border h-16 px-5 focus:outline-none focus:border-accent/40 text-[12px] font-mono tracking-widest placeholder:text-secondary-text/20 uppercase font-black"
                          aria-label="Your Email"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-[0.3em] text-accent/60 font-black ml-1">03. Communication_Payload (Message)</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="TRANSMIT YOUR MESSAGE HERE..."
                        className="w-full bg-background border border-border min-h-[220px] p-5 focus:outline-none focus:border-accent/40 text-[12px] font-mono tracking-widest placeholder:text-secondary-text/20 uppercase font-black leading-loose resize-none"
                        aria-label="Your Message"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-accent text-background hover:bg-white hover:scale-[1.01] h-18 text-[12px] font-black uppercase tracking-[0.5em] rounded-none transition-all duration-500 shadow-2xl relative"
                    >
                      <div className="flex items-center gap-4">
                        <Send className="w-4 h-4" />
                        <span>{formState === 'sending' ? 'TRANSMITTING...' : 'EXECUTE_SEND'}</span>
                      </div>
                      {/* Secondary Label Marker */}
                      <span className="absolute bottom-1 right-3 text-[10px] opacity-30 font-mono tracking-widest hidden md:block">CMD.SECURE</span>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Section Footer */}
          <div className="pt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border/40 opacity-40">
            <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.5em] font-black">
              <Terminal className="w-4 h-4" />
              <span>Security_Handshake_Active // Port:443</span>
            </div>
            <p className="text-[11px] font-mono uppercase tracking-[0.4em] font-black">
              Version.03.2025 // Production_Stable
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;