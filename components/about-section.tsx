"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Backend-focused Software Engineer with extensive experience in 
              designing and implementing scalable microservices architectures. My expertise spans 
              across multiple technologies and frameworks, allowing me to choose the right tools 
              for each unique challenge.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With a strong foundation in backend development, I specialize in building robust, 
              high-performance systems that can handle complex business requirements. My experience 
              with Laravel, Node.js, and Django has given me a deep understanding of different 
              architectural patterns and best practices.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-4 bg-background rounded-lg border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">Backend Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized in server-side architecture and API design
                </p>
              </motion.div> */}
              
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center p-4 bg-background rounded-lg border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">Microservices</h3>
                <p className="text-sm text-muted-foreground">
                  Expert in distributed systems and service-oriented architecture
                </p>
              </motion.div> */}
              
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center p-4 bg-background rounded-lg border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">Scalable Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Building solutions that grow with your business needs
                </p>
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
