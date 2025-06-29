import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import PORTFOLIO_DATA from '@/data/portfolio';

const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        { name: "Python", level: 92 },
        { name: "Django", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "FastAPI", level: 80 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Redis", level: 65 },
        {name: 'RabbitMQ', level: 80}
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Postman", level: 80 },

      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      
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
            <Badge className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 mb-4">
              Skills & Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Technologies I work with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                on a daily basis
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          variants={staggerItem}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-700 dark:text-slate-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div 
            className="mt-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  Additional Skills & Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Vite', 'JWT', 'OAuth', 'WebSockets',
                    'CI/CD',
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge 
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
