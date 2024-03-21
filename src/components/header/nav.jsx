"use client";

import { CONTENT_SECTIONS } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [onScreen, setOnScreen] = useState([]);
  const navObserver = useRef(null);
  const contentObserver = useRef(null);

  // Keep track of which section is on the screen and dynamically update the nav bar
  useEffect(() => {
    // Create a new instance and pass a callback function
    navObserver.current = new IntersectionObserver(
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
      navObserver.current.observe(document.getElementById(section));
    });

    // Cleanup function to remove and disconnect the nav observer
    return () => {
      Object.values(CONTENT_SECTIONS).forEach((section) => {
        navObserver.current.unobserve(document.getElementById(section));
      });
      navObserver.current.disconnect();
    };
  }, []);

  // Keep track of which content is on the screen and add a show class to them
  useEffect(() => {
    // Create a new instance and pass a callback function
    contentObserver.current = new IntersectionObserver(
      (entries) => {
        entries
          // Filter out the exiting sections
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
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
            contentObserver.current.unobserve(entry.target);
            // Set a delay for removing the opacity-0 class to match the animation timeline
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
            }, delay + 100);
            // Start the animation on the intersecting section with the defined keyframes and options
            entry.target.animate(keyFrames, options);

            // Perform the same routine on the before pseudo element if section is the first child
            if (entry.target === entry.target.parentElement.firstElementChild) {
              setTimeout(() => {
                entry.target.parentElement.classList.remove("before:opacity-0");
                // Add a small delay to the initial delay to fix animation glitch
              }, delay + 50);
              entry.target.parentElement.animate(keyFrames, {
                ...options,
                // Add an extra option to target the before pseudo element
                pseudoElement: ":before",
              });
            }

            // Perform the same routine on the after pseudo element if section is the last child
            if (entry.target === entry.target.parentElement.lastElementChild) {
              setTimeout(() => {
                entry.target.parentElement.classList.remove("after:opacity-0");
                // Add a small delay to the initial delay to fix animation glitch
              }, delay + 50);
              entry.target.parentElement.animate(keyFrames, {
                ...options,
                // Add an extra option to target the after pseudo element
                pseudoElement: ":after",
              });
            }
          });
      },
      {
        // TODO: Check and adjust the threshold
        // Set the visible threshold of the section before deciding it is intersecting
        threshold: [1],
      }
    );

    // Find and target the content with the opacity-0 class
    const content = document.querySelectorAll(".opacity-0");
    content.forEach((element) => {
      contentObserver.current.observe(element);
    });

    // Cleanup function to remove and disconnect the content observer
    return () => {
      content.forEach((element) => contentObserver.current.unobserve(element));
      contentObserver.current.disconnect;
    };
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="my-8 w-fit uppercase">
        {Object.values(CONTENT_SECTIONS).map((section, index) => (
          <li key={section} className="opacity-0">
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
