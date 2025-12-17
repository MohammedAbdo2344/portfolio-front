"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Server,
  Globe,
  Database,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Shield,
  Cpu,
  Palette,
  Smartphone
} from "lucide-react";
import { title } from "process";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "Node.js", "Express", "Django",]
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: ["Docker", "GitHub", "Linux"]
  },
  {
    title: "Architecture",
    icon: GitBranch,
    skills: ["Microservices", "REST APIs", "Event-Driven", "Clean Code"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["JWT", "OAuth 2.0", "HTTPS", "Encryption", "Authentication"]
  },
  {
    title:"Api development Tools",
    icon: Code2,
    skills: ["Postman", "ApiDog", "Swagger"]
  },
  {
    title:"Task Management Tools",
    icon: Container,
    skills: ["ClickUp", "Jira"]
  }
];

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technologies & Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and adapting to new technologies. My focus is on building
            scalable, maintainable solutions that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
