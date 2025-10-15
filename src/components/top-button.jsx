"use client";

import { ArrowUp } from "@/assets/icons";
import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressDegree, setProgressDegree] = useState(0);

  // Keep track of the progress degree with event listener
  useEffect(() => {
    const handleScroll = () => {
      // Update visible state when user scrolls past initial window height
      setIsVisible(window.scrollY > window.innerHeight);

      // Calculate new progress degree from current window scroll position
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const degree = (window.scrollY / maxScrollY) * 360;

      // Update progress degree state
      setProgressDegree(Math.round(degree));
    };

    // Initialize button states
    handleScroll();

    // Add the event listener for when the user scrolls
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      style={{
        backgroundImage: `conic-gradient(var(--color-sky-400) ${progressDegree}deg, white ${progressDegree}deg)`,
      }}
      className={cn(
        "fixed right-4 bottom-4 z-50 flex size-10 items-center justify-center rounded-4xl border-4 border-white transition-transform duration-300 motion-safe:border-0 md:right-5 md:bottom-5 md:size-12",
        {
          "translate-0": isVisible,
          "motion-safe:translate-y-20": !isVisible,
        }
      )}
      onClick={() => window.scrollTo(0, 0)}
      title="Scroll To Top"
    >
      <span className="sr-only">Scroll To Top</span>
      <ArrowUp className="size-8 fill-slate-900 md:size-10" aria-hidden="true" />
    </button>
  );
}
