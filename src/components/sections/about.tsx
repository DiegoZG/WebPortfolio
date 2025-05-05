"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const aboutRef = useScrollAnimation();

  return (
    <section
      ref={aboutRef as any}
      className="py-24 fade-in"
      id='about'
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="flex-1 w-full md:w-1/2 text-left">
            <p className="text-gray-400 mb-2 text-lg">This is me.</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex items-center"> Hi, I'm Diego.</h1>
          </div>
          <div className="flex-1 w-full md:w-1/2 text-gray-300 text-lg space-y-6 leading-relaxed">
            <p>
              I'm a frontend web developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.
            </p>
            <p>
              My approach focuses on building scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 