"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const aboutRef = useScrollAnimation();

  return (
    <section 
      ref={aboutRef as any}
      className="py-20 slide-in-left"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
          "I believe in user-centered design — every project I build is tailored to
          real user needs."
        </blockquote>
        <p className="text-lg text-gray-400 leading-relaxed">
          I'm a frontend web developer focused on turning ideas into seamless,
          intuitive user experiences. I prioritize performance, accessibility, and
          clean design to drive business value.
        </p>
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 