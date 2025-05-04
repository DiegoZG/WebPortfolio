"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "💻",
  Backend: "🛠️",
  Database: "🗄️",
  Tools: "⚙️",
};

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
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {TECH_STACK.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-8 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl md:text-3xl">
                  {CATEGORY_ICONS[category.category] || ""}
                </span>
                <h3 className="text-xl font-semibold text-primary bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary/20 to-blue-900/40 text-primary border border-primary/30 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:from-primary/40 hover:to-blue-900/60 hover:shadow-lg"
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