"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function TechStack() {
  const techStackRef = useScrollAnimation();

  return (
    <section 
      ref={techStackRef as any}
      className="py-20 slide-in-right"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_STACK.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/50 p-6 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 