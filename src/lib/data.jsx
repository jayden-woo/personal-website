import { Facebook, GitHub, Instagram, LinkedIn } from "@/lib/icons";

export const CONTENT_SECTIONS = Object.freeze({
  About: "about",
  Projects: "projects",
  Skills: "skills",
  Education: "education",
  Activities: "activities",
  Experiences: "experiences",
});

export const SOCIAL_MEDIA = [
  {
    name: "GitHub",
    icon: <GitHub />,
    link: "https://github.com/jayden-woo",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://linkedin.com/in/junchengwoo",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://facebook.com/junchengwoo",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://instagram.com/jayden.wjc",
  },
];

export const LINK_VARIANTS = Object.freeze({
  Text: Symbol("text"),
  Icon: Symbol("icon"),
  Title: Symbol("title"),
  Skip: Symbol("skip"),
});
