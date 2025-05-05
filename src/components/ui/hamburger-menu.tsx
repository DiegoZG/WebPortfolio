"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  function handleNav(id: string) {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }

  return (
    <>
      <button
        aria-label="Open navigation menu"
        className="fixed top-6 right-6 z-[100] p-2 rounded-md bg-background/80 border border-white/10 shadow-lg hover:bg-background/90 transition-colors"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-7 h-7 text-primary" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex justify-end"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: 80 }}
              animate={{ x: 0 }}
              exit={{ x: 80 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-64 h-full bg-background border-l border-white/10 shadow-2xl flex flex-col gap-8 p-8 pt-16 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                aria-label="Close navigation menu"
                className="absolute top-4 right-4 text-gray-400 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                <span className="text-2xl">×</span>
              </button>
              <ul className="flex flex-col gap-6 mt-8">
                {SECTIONS.map(section => (
                  <li key={section.id}>
                    <button
                      className="w-full text-left text-lg font-semibold text-gray-200 hover:text-primary transition-colors"
                      onClick={() => handleNav(section.id)}
                    >
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 