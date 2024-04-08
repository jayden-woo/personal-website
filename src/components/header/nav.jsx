"use client";

import { CONTENT_SECTIONS } from "@/assets/data/constants";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [onScreen, setOnScreen] = useState([]);

  // Keep track of which section is on the screen and dynamically update the nav bar
  useEffect(() => {
    // Create a new instance and pass a callback function
    const observer = new IntersectionObserver(
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
        // TODO: Check and adjust the threshold
        // Set the visible threshold of the section before deciding it is intersecting
        threshold: [0.1],
      }
    );

    // Find and target the sections to be observed
    Object.values(CONTENT_SECTIONS).forEach((section) => {
      observer.observe(document.getElementById(section));
    });

    // Clean up function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  // Keep track of which content is on the screen and animate them into view
  useEffect(() => {
    // TODO: Adjust the threshold (currently set at 12% of the screen height) (10%/12%/14%/15%)
    // Calculate the threshold height relative to current viewport height to force start animation
    const thresholdHeight = window.innerHeight * 0.12;
    // Create a new instance and pass a callback function
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          // Filter out the invalid sections
          .filter((entry) => {
            // Allow entering and currently non-visible sections only (with opacity-0)
            if (entry.isIntersecting && !entry.target.checkVisibility({ opacityProperty: true }))
              // Include section if it is already fully visible or the intersected height surpasses the preset threshold
              return (
                entry.intersectionRatio == 1 || entry.intersectionRect.height > thresholdHeight
              );
            // Reject any other sections
            return false;
          })
          .forEach(({ target }, index) => {
            // Define the keyframes for the animation fading in from the right
            const keyFrames = {
              transform: ["translateX(2rem)", "translateX(0)"],
              opacity: [0, 1],
              filter: ["blur(5px)", "blur(0)"],
            };
            // Calculate the delay for each consecutive element
            const delay = 200 * index;
            // Define the animation options
            const options = {
              delay,
              duration: 500,
              easing: "ease-in-out",
            };

            // Unobserve the section to ensure each element is only loaded once
            observer.unobserve(target);
            // Add a small delay to match the animation timeline for smoother visuals
            setTimeout(() => {
              // Replace all opacity-0 classes (including media queries and other state selectors) to opacity-100
              target.className = target.className.replace(/opacity-0/g, "opacity-100");
            }, delay + 100);
            // Start the animation on the intersecting section with the defined keyframes and options
            target.animate(keyFrames, options);

            const parent = target.parentElement;
            // Perform the same routine on the :before pseudo element if section is the first child
            if (target === parent.firstElementChild) {
              // Add a small delay to the initial delay to fix animation glitch
              setTimeout(() => {
                parent.className = parent.className.replace(
                  /(?<=before:)opacity-0/g,
                  "opacity-100"
                );
              }, delay + 50);
              parent.animate(keyFrames, {
                ...options,
                // Add an extra option to target the before pseudo element
                pseudoElement: ":before",
              });
            }

            // Perform the same routine on the :after pseudo element if section is the last child
            if (target === parent.lastElementChild) {
              // Add a small delay to the initial delay to fix animation glitch
              setTimeout(() => {
                parent.className = parent.className.replace(/(?<=after:)opacity-0/g, "opacity-100");
              }, delay + 50);
              parent.animate(keyFrames, {
                ...options,
                // Add an extra option to target the after pseudo element
                pseudoElement: ":after",
              });
            }
          });
      },
      {
        // TODO: Check and adjust the threshold
        // Set the visible thresholds of the section before checking if it is intersecting
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    // Find the elements that contain any opacity-0 class in them
    document.querySelectorAll("[class*='opacity-0']").forEach((element) => {
      // Only observe the element that doesn't include any pseudo elements
      if (!element.className.includes("before:") && !element.className.includes("after:")) {
        observer.observe(element);
      }
    });

    // Clean up function to disconnect the observer
    return () => observer.disconnect;
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="my-8 w-fit uppercase">
        {Object.values(CONTENT_SECTIONS).map((section, index) => (
          <li key={section} className="md:motion-safe:opacity-0">
            <a
              href={`#${section}`}
              className={clsx("group flex items-center py-3", {
                active: section === onScreen.at(0),
              })}
            >
              <span className="mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-focus-visible:w-16 group-[.active]:w-16 group-[.active]:bg-sky-400 motion-safe:transition-all" />
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
