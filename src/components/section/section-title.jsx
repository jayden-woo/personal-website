"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

export default function SectionTitle({ children }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const classes = clsx(
          // Add styles for a sticky heading in smaller screen sizes
          "sticky top-0 z-40 -mx-6 border-b border-slate-50/6 bg-gray-950/75 px-6 backdrop-blur-sm md:-mx-12 md:px-12",
          // Add styles to undo the previous heading styles in larger screens
          "lg:static lg:mx-0 lg:border-none lg:bg-transparent lg:px-0 lg:filter-none"
        ).split(" ");
        if (entry.isIntersecting) {
          entry.target.classList.remove(...classes);
        } else {
          entry.target.classList.add(...classes);
        }
      },
      {
        // Add a small pixel offset at the top to detect when the heading is in sticky mode
        rootMargin: "-1px 0px 0px",
        threshold: [1],
      }
    );

    // Target and observe the current section heading
    observer.observe(titleRef.current);

    // Clean up function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={titleRef}
      className="-my-2 py-4 text-2xl font-bold tracking-tight text-slate-200 sm:text-4xl md:-my-3 md:py-5 md:motion-safe:invisible lg:my-0 lg:py-2"
    >
      {children}
    </h2>
  );
}
