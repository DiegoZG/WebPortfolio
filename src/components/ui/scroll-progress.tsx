"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    }
    window.addEventListener("scroll", updateProgress);
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 h-1/4 flex flex-col items-center pointer-events-none">
      <div className="w-2 h-full bg-white/10 rounded-full relative overflow-hidden">
        <div
          className="absolute left-0 top-0 w-2 rounded-full bg-gradient-to-b from-primary via-blue-700 to-primary shadow-lg transition-all duration-200"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
} 