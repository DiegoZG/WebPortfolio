"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants/portfolio";
import { formatDate } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedPikachu } from "@/components/icons/AnimatedPikachu";

export function Experience() {
  const expRef = useScrollAnimation();

  return (
    <section
      ref={expRef as any}
      className="py-20 fade-in"
      id='experience'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold flex items-center mb-12 bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
          <AnimatedPikachu /> Experience
        </h2>
        <div className="relative pl-6 md:pl-10">
          {/* Timeline vertical line */}
          <div className="absolute left-2 md:left-4 top-0 h-full w-1 bg-gradient-to-b from-primary via-blue-700 to-primary rounded-full opacity-60" />
          <div className="space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline dot */}
                <span className="absolute -left-5 md:-left-7 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary via-blue-700 to-primary shadow-lg border-2 border-white/20 animate-pulse" />
                <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 ml-2 md:ml-6 transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
                    {experience.title}
                  </h3>
                  <p className="text-base text-gray-300 mb-1 font-medium">
                    {experience.company}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    {formatDate(experience.startDate)} - {experience.endDate}
                  </p>
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-900/40 text-primary border border-primary/30 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:from-primary/40 hover:to-blue-900/60 hover:shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 