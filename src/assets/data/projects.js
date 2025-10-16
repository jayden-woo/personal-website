import connected from "@/assets/images/connected.png";
import pathfindingVisualizer from "@/assets/images/pathfinding-visualizer.png";
import personalWebsite from "@/assets/images/personal-website.png";
import rayTracer from "@/assets/images/ray-tracer.png";
import snacksInAVan from "@/assets/images/snacks-in-a-van.png";
import untitledFightingGame from "@/assets/images/untitled-fighting-game.png";

const PROJECTS_DATA = [
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive web app for visualizing pathfinding and maze generation algorithms. Users can generate mazes with built-in algorithms or design their own custom layouts. The visualization runs step by step with options to adjust speed, pause, or resume at any time. Real-time statistics, such as nodes visited and path length, provide deeper insight into the algorithm's performance.",
    image: pathfindingVisualizer,
    link: "https://jayden-woo.github.io/pathfinding-visualizer",
    github: "https://github.com/jayden-woo/pathfinding-visualizer",
    technologies: ["Javascript", "React", "Redux", "Material UI", "SCSS", "GitHub Pages"],
  },
  {
    title: "Personal Website",
    description:
      "First attempt at a portfolio website to showcase my projects, skills I've learned or used previously, and a bit about myself. It's fully responsive for a seamless experience on any device, and its clean, simple design was inspired by a few websites I found and really liked.",
    image: personalWebsite,
    link: "https://jayden-woo.vercel.app/",
    github: "https://github.com/jayden-woo/personal-website",
    technologies: ["Javascript", "Next", "React", "Tailwind CSS", "GitHub Pages"],
  },
  {
    title: "Connected",
    description:
      "Developed as my final-year capstone project using the MERN stack (MongoDB, Express, React, Node). This web app helps small businesses engage with their customers through an interactive platform where users can post questions, receive answers, join forum discussions, and respond to surveys, all in one place.",
    image: connected,
    link: "https://connected-inwy.onrender.com/",
    github: "https://github.com/jayden-woo/connected",
    technologies: [
      "Javascript",
      "React",
      "Bootstrap",
      "Styled-Components",
      "Node",
      "Express",
      "MongoDB",
      "Render",
    ],
  },
  {
    title: "Snacks in a Van",
    description:
      "First web app I built for my final year web development class. It contains two responsive web apps for a food truck startup: a customer app to locate vans, browse menus, place and track orders, and a vendor app to update locations and manage orders. Key features included authentication, order timestamping for discounts, and database-driven menus.",
    image: snacksInAVan,
    link: "https://snack-in-a-van.onrender.com/",
    github: "https://github.com/jayden-woo/snacks-in-a-van",
    technologies: ["Javascript", "Handlebars", "Node", "Express", "MongoDB", "Render"],
  },
  {
    title: "Ray Tracer",
    description:
      "One of my favourite university projects which involved developing a ray tracer from scratch in C#. Key features included ray-entity intersections (spheres, triangles, planes), multiple material types (diffuse, reflective, refractive), shadow rays simulation, Fresnel effects, anti-aliasing, and depth-of-field, producing photorealistic 3D scenes entirely programmatically.",
    image: rayTracer,
    technologies: ["C#"],
    github: "https://github.com/jayden-woo/ray-tracer",
  },
  {
    title: "Untitled Fighting Game",
    description:
      "A 2.5D fighting game built in Unity as part of the University of Melbourne's Graphics and Interaction course. The game features six playable characters with unique abilities, three hand-crafted stages, and both single-player (AI) and local multiplayer modes.",
    image: untitledFightingGame,
    technologies: ["Unity", "C#"],
  },
];

export default PROJECTS_DATA;
