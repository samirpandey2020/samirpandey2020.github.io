import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Globe, MessageSquare } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const { personal } = PORTFOLIO_DATA;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ first: '', last: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.first} ${form.last}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ first: '', last: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden bg-grid">
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
                  // INQUIRY_05 / PROTOCOL
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary-text tracking-tightest leading-none uppercase">
                Start <br />
                <span className="text-secondary-text opacity-40">Conversation.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right opacity-20">
              <p className="text-[9px] font-mono uppercase tracking-widest">Type: Comm_Protocol</p>
              <p className="text-[9px] font-mono tracking-widest">Status: Ready_For_Inbound</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
            {/* Left Column: Form */}
            <div className="lg:col-span-8 bg-background p-12 lg:p-14 relative corner-tl">
              <div className="absolute top-4 right-4 text-[8px] font-mono uppercase opacity-10">Inquiry.Ref / 2025-AX</div>
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid md:grid-cols-2 gap-16">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-secondary-text opacity-50">First_Name</label>
                    <input
                      name="first"
                      value={form.first}
                      onChange={handleChange}
                      required
                      placeholder="Jane"
                      className="w-full bg-transparent border-b border-border py-6 text-primary-text focus:border-accent transition-colors outline-none font-bold text-lg tracking-tightest uppercase placeholder:opacity-20"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-secondary-text opacity-50">Last_Name</label>
                    <input
                      name="last"
                      value={form.last}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full bg-transparent border-b border-border py-6 text-primary-text focus:border-accent transition-colors outline-none font-bold text-lg tracking-tightest uppercase placeholder:opacity-20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-secondary-text opacity-50">Email_Address</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-transparent border-b border-border py-6 text-primary-text focus:border-accent transition-colors outline-none font-bold text-lg tracking-tightest uppercase placeholder:opacity-20"
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-secondary-text opacity-50">Message_Payload</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your architectural needs..."
                    className="w-full bg-transparent border-b border-border py-6 text-primary-text focus:border-accent transition-colors outline-none font-bold text-lg tracking-tightest uppercase placeholder:opacity-20 resize-none"
                  />
                </div>

                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-primary-text text-background hover:bg-accent transition-all duration-500 px-16 py-10 text-[11px] font-black uppercase tracking-[0.4em] rounded-none group h-auto"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    ) : (
                      <Send className="h-4 w-4 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    )}
                    {status === 'loading' ? 'Transmitting...' : 'Execute Submission'}
                  </Button>
                </div>

                {status === 'success' && (
                  <motion.div
                    className="flex items-center gap-4 text-emerald-500 font-mono font-black text-[10px] uppercase tracking-[0.3em]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="h-4 w-4" /> // Transmission_Confirmed
                  </motion.div>
                )}
              </form>
            </div>

            {/* Right Column: Info */}
            <div className="lg:col-span-4 bg-background p-12 lg:p-14 relative flex flex-col justify-between corner-br border-l border-border/30">
              <div className="space-y-16">
                <div className="space-y-10">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-3">
                    <Globe className="w-3 h-3" />
                    Origin / Data
                  </h3>
                  <div className="space-y-8">
                    <div className="group cursor-default">
                      <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-secondary-text opacity-50 mb-4">Email_Endpoint</p>
                      <p className="text-primary-text font-black tracking-tightest text-xl group-hover:text-accent transition-colors uppercase">{personal.email}</p>
                    </div>
                    <div className="group cursor-default">
                      <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-secondary-text opacity-50 mb-4">Global_Coords</p>
                      <p className="text-primary-text font-black tracking-tightest text-xl group-hover:text-accent transition-colors uppercase">{personal.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-3">
                    <MessageSquare className="w-3 h-3" />
                    Social_Signals
                  </h3>
                  <div className="flex flex-col gap-6">
                    <a href={PORTFOLIO_DATA.social.github} target="_blank" className="text-primary-text font-black tracking-tightest text-xl hover:text-accent transition-colors uppercase">GitHub</a>
                    <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" className="text-primary-text font-black tracking-tightest text-xl hover:text-accent transition-colors uppercase">LinkedIn</a>
                    <a href={PORTFOLIO_DATA.social.twitter} target="_blank" className="text-primary-text font-black tracking-tightest text-xl hover:text-accent transition-colors uppercase">Twitter</a>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-border/30">
                <span className="text-6xl font-black text-primary-text opacity-[0.03] select-none">COMM_05</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;