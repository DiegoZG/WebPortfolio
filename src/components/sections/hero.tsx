"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Hero() {
  const heroRef = useScrollAnimation();

  return (
    <section
      ref={heroRef as any}
      className="min-h-[90vh] flex flex-col justify-center px-4 md:items-start md:text-left items-center text-center fade-in md:px-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 w-full max-w-3xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-white-700 to-white to-primary bg-clip-text text-transparent flex items-center">
          DIEGO 
        </h1>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 ml-4 bg-gradient-to-r from-primary via-blue-700 bg-clip-text text-transparent flex items-center"> ZEGARRA </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Hi! I'm Diego, a creative frontend developer with 5+ years of experience
          building scalable, high-performance web applications.
        </p>
        <div className="flex gap-4 md:justify-start justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 