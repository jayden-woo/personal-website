"use client";

import { CONTENT_SECTIONS } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [onScreen, setOnScreen] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    // Create a new instance and pass a callback function
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // Remove the section exiting the viewport
            setOnScreen((prev) => prev.filter((section) => section !== entry.target.id));
          } else if (entry.boundingClientRect.top < 0) {
            // Add the section in front of the rest if intersecting from the top
            setOnScreen((prev) => [entry.target.id, ...prev]);
          } else {
            // Add the section behind the rest otherwise
            setOnScreen((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        // TODO: Check and adjust on threshold
        // Set the visible threshold of the section before deciding it is intersecting
        threshold: [0.1],
      }
    );

    // Find and target the sections to be observed
    Object.values(CONTENT_SECTIONS).forEach((section) => {
      observer.current.observe(document.getElementById(section));
    });

    // Cleanup function to remove and disconnect observer
    return () => {
      Object.values(CONTENT_SECTIONS).forEach((section) => {
        observer.current.unobserve(document.getElementById(section));
      });
      observer.current.disconnect();
    };
  }, []);

  return (
    <nav className="my-8 hidden w-fit uppercase md:block">
      <ul>
        {Object.values(CONTENT_SECTIONS).map((section, index) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`group flex items-center py-3${section === onScreen.at(0) ? " active" : ""}`}
            >
              <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-focus-visible:w-16 group-[.active]:w-16 group-[.active]:bg-sky-400" />
              <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-slate-400 group-focus-visible:text-slate-400 group-[.active]:font-extrabold group-[.active]:text-sky-400">
                {`0${index + 1}. ${section}`}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
