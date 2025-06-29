import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Loader2 } from 'lucide-react';
import PORTFOLIO_DATA from '@/data/portfolio';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

// EmailJS interface
interface EmailJS {
  send: (serviceId: string, templateId: string, templateParams: Record<string, string>, publicKey: string) => Promise<void>;
}

interface WindowWithEmailJS extends Window {
  emailjs?: EmailJS;
}

const { personal, social } = PORTFOLIO_DATA;

const Contact: React.FC = () => {
  const [form, setForm] = useState({ first: '', last: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const emailjs = (window as WindowWithEmailJS).emailjs;
      
      if (emailjs) {
        // Method 1: EmailJS (if configured)
        const mainEmailParams = {
          from_name: `${form.first} ${form.last}`,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: personal.email,
        };

        // Send main email to you
        await emailjs.send(
          'your_service_id', // Replace with your EmailJS service ID
          'your_template_id', // Replace with your EmailJS template ID
          mainEmailParams,
          'your_public_key' // Replace with your EmailJS public key
        );

        setStatus('success');
        setForm({ first: '', last: '', email: '', subject: '', message: '' });
      } else {
        // Method 2: Fallback to mailto link (opens user's email client)
        const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
          `Name: ${form.first} ${form.last}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )}`;
        window.open(mailtoLink, '_blank');
        setStatus('success');
        setForm({ first: '', last: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's work together! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <Card className="border-0 shadow-2xl bg-white/10 dark:bg-slate-900/30 backdrop-blur-lg rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div 
                      className="relative"
                      variants={staggerItem}
                    >
                      <input
                        name="first"
                        value={form.first}
                        onChange={handleChange}
                        required
                        className="peer w-full px-4 py-3 bg-transparent border-b-2 border-slate-400 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
                        placeholder="First Name"
                      />
                      <label className="absolute left-4 top-3 text-slate-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-semibold">
                        First Name
                      </label>
                    </motion.div>
                    <motion.div 
                      className="relative"
                      variants={staggerItem}
                    >
                      <input
                        name="last"
                        value={form.last}
                        onChange={handleChange}
                        required
                        className="peer w-full px-4 py-3 bg-transparent border-b-2 border-slate-400 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
                        placeholder="Last Name"
                      />
                      <label className="absolute left-4 top-3 text-slate-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-semibold">
                        Last Name
                      </label>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="relative"
                    variants={staggerItem}
                  >
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="peer w-full px-4 py-3 bg-transparent border-b-2 border-slate-400 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
                      placeholder="Email"
                    />
                    <label className="absolute left-4 top-3 text-slate-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-semibold">
                      Email
                    </label>
                  </motion.div>
                  <motion.div 
                    className="relative"
                    variants={staggerItem}
                  >
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="peer w-full px-4 py-3 bg-transparent border-b-2 border-slate-400 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition"
                      placeholder="Subject"
                    />
                    <label className="absolute left-4 top-3 text-slate-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-semibold">
                      Subject
                    </label>
                  </motion.div>
                  <motion.div 
                    className="relative"
                    variants={staggerItem}
                  >
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="peer w-full px-4 py-3 bg-transparent border-b-2 border-slate-400 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition resize-none"
                      placeholder="Message"
                    />
                    <label className="absolute left-4 top-3 text-slate-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:font-semibold">
                      Message
                    </label>
                  </motion.div>
                  {status === 'success' && (
                    <motion.div 
                      className="flex items-center gap-2 text-green-400 font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="h-5 w-5" /> Message sent successfully!
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      className="flex items-center gap-2 text-red-400 font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span>❌</span> Please fill all fields correctly.
                    </motion.div>
                  )}
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Methods & Socials */}
          <motion.div 
            className="flex flex-col gap-8"
            variants={fadeInUp}
          >
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                variants={staggerItem}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-slate-300">{personal.email}</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={staggerItem}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-slate-300">{personal.phone}</div>
                </div>
              </motion.div>
              
              <motion.div
                variants={staggerItem}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-slate-300">{personal.location}</div>
                </div>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: Github, href: social.github, label: 'GitHub' },
                { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' }
              ].map((socialLink) => (
                <motion.div
                  key={socialLink.label}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gradient-to-br from-slate-800 to-blue-900 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg transition-all duration-300"
                    onClick={() => window.open(socialLink.href, '_blank')}
                    aria-label={socialLink.label}
                  >
                    <socialLink.icon className="h-6 w-6" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 