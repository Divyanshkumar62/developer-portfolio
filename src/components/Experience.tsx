import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Backend + QA Intern",
      company: "Stapubox",
      period: "Oct 2025 – Present",
      location: "Greater Noida",
      type: "Remote",
      description: [
        "Developed backend services in Spring Boot, including WhatsApp integration and scalable CRUD APIs.",
        "Optimized database structure and query patterns, reducing redundant DB calls by 55% and improving overall system performance.",
        "Designed and executed QA test cases, performed integration testing on new features and webhooks, ensuring platform stability before deployments."
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Swednet",
      period: "May 2025 – Jul 2025",
      location: "Estonia",
      type: "Remote",
      description: [
        "Built Beautify, a salon-booking web platform using React, Redux, Tailwind CSS, and TypeScript.",
        "Integrated Supabase authentication and Node.js APIs; improved load time and UI responsiveness.",
        "Delivered complete web + Android app prototype (Capacitor) within a 6-week release cycle."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl inline-block relative">
            Experience
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-text-primary/30 rounded-full" />
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 bg-surface-strong/30 hover:border-text-primary/30 transition-all duration-300 relative group shimmer-container"
            >
              <div className="shimmer-effect" />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1 group-hover:translate-x-1 transition-transform">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-text-secondary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-text-tertiary">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={16} />
                    {exp.type}
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary shrink-0 shadow-[0_0_8px_rgba(162,238,222,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
