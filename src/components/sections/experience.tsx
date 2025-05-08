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
        <div className="relative flex">
          {/* Timeline vertical line */}
          <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-primary via-blue-700 to-primary rounded-full opacity-70 z-10" />
          <div className="flex flex-col gap-16 w-full ml-0 md:ml-0">
            {EXPERIENCES.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center group min-h-[180px]">
                {/* Timeline dot */}
                <span className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-primary via-blue-700 to-primary shadow-lg border-4 border-background group-hover:scale-110 transition-transform duration-300" />
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="ml-24 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-8 w-full max-w-2xl relative z-30"
                >
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
                        className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-900/40 text-white border border-primary/30 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:from-primary/40 hover:to-blue-900/60 hover:shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Pointer to dot */}
                  <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-primary/70 to-transparent rounded-l-full z-20" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 