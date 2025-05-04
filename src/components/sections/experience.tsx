"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants/portfolio";
import { formatDate } from "@/lib/utils";

export function Experience() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary">
                  {experience.title}
                </h3>
                <p className="text-gray-300 mb-2">{experience.company}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {formatDate(experience.startDate)} - {experience.endDate}
                </p>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 