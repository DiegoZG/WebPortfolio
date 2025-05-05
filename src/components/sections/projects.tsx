"use client";

import { useRef, useState } from "react";
import { PROJECTS } from "@/constants/portfolio";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedPikachu } from "@/components/icons/AnimatedPikachu";

const PLACEHOLDER = "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Preview";


export function Projects() {
  const [activeIdx, setActiveIdx] = useState<number|null>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  const getImageTop = () => {
    if (typeof window === "undefined" || activeIdx === null) return 0;
    const row = rowRefs.current[activeIdx];
    if (!row) return 0;
    const rect = row.getBoundingClientRect();
    const containerRect = row.parentElement?.getBoundingClientRect();
    if (!containerRect) return 0;
    return rect.top - containerRect.top;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 relative">
        {/* Left: Project List */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center mb-10 bg-gradient-to-r from-primary via-blue-700 to-primary bg-clip-text text-transparent">
            <AnimatedPikachu /> Featured Projects
          </h2>
          <ul className="flex flex-col gap-6 relative"
            onMouseLeave={() => setActiveIdx(null)}
          >
            {PROJECTS.map((project, idx) => (
              <li
                key={project.id}
                ref={el => { rowRefs.current[idx] = el; }}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                tabIndex={0}
                className={`group cursor-pointer flex flex-col md:flex-row md:items-center md:gap-6 p-4 rounded-xl transition-all duration-200 ${activeIdx === idx ? "bg-primary/10 shadow-lg scale-[1.03]" : "bg-white/5"}`}
              >
                {/* Mobile image preview */}
                <div className="block md:hidden mb-3 w-full">
                  <Image
                    src={project.image || PLACEHOLDER}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-40"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-mono text-gray-500">{String(idx + 1).padStart(2, "0")}.</span>
                    <span className={`text-2xl md:text-3xl font-bold ${activeIdx === idx ? "text-primary" : "text-gray-300"}`}>{project.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies?.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Image Preview (desktop only, absolutely positioned) */}
        <div className="hidden md:block flex-1 min-w-[320px] max-w-md relative">
          <AnimatePresence mode="wait">
            {activeIdx !== null && (
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: getImageTop(),
                  transition: { type: "spring", stiffness: 120, damping: 18, duration: 0.4 },
                }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[340px] flex items-center justify-center absolute left-0"
                style={{ top: 0 }}
              >
                <Image
                  src={PROJECTS[activeIdx]?.image || PLACEHOLDER}
                  alt={PROJECTS[activeIdx]?.title || "Project Preview"}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 