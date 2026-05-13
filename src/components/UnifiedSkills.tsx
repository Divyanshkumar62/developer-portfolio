import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layout, 
  Server, 
  Code2,
  Cloud,
  Laptop
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="text-text-primary" size={20} />,
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "Java", "Python", "C"]
  },
  {
    title: "Frontend",
    icon: <Layout className="text-text-primary" size={20} />,
    skills: ["React.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5/CSS3", "Responsive Design", "UI/UX", "Next.js"]
  },
  {
    title: "Backend",
    icon: <Server className="text-text-primary" size={20} />,
    skills: ["Node.js", "Express.js", "Spring Boot", "REST API Design", "Redis", "Firebase"]
  },
  {
    title: "Databases",
    icon: <Database className="text-text-primary" size={20} />,
    skills: ["MongoDB", "SQL", "MySQL"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="text-text-primary" size={20} />,
    skills: ["Docker", "AWS", "Cloudflare", "CI/CD", "Git", "GitHub", "Linux"]
  },
  {
    title: "Others",
    icon: <Laptop className="text-text-primary" size={20} />,
    skills: ["Postman", "Grafana", "Jest / Mocha", "JMeter", "Browser DevTools"]
  }
];

const UnifiedSkills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl inline-block relative">
            Skills
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-text-primary/30 rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-card p-6 bg-surface-strong/30 hover:border-text-primary/30 transition-all duration-300 group shimmer-container"
            >
              <div className="shimmer-effect" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-surface-muted/20 rounded-lg shrink-0">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-text-secondary font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedSkills;
