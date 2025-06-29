import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams"
    },
    {
      icon: Users,
      title: "Integration",
      description: "Integrating systems and APIs"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <Badge className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              A passionate developer who loves{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                building things that matter
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              I'm dedicated to creating innovative solutions that make a difference in people's lives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Who I Am
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    I'm a full-stack developer with a passion for creating clean, efficient, and user-friendly applications. 
                    I enjoy solving complex problems and turning ideas into reality through code.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    With a strong foundation in both frontend and backend development, I bring ideas to life with modern technologies and best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    What I Do
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    I specialize in building web applications using modern technologies like React, Django, and Python. 
                    I focus on writing clean, maintainable code and creating intuitive user experiences.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    From concept to deployment, I handle every aspect of the development process with attention to detail and user-centric design.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  My Approach
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
                  I believe in writing code that's not just functional, but also readable and maintainable. 
                  I'm always learning new technologies and best practices to deliver better solutions. 
                  When I'm not coding, you can find me exploring new technologies or contributing to open source projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16"
            variants={staggerContainer}
          > 
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;