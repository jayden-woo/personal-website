import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jayden Woo",
  description:
    "Hi, I'm Jayden Woo! Explore my projects, skills, and experience in software development, and get to know more about my journey in tech.",
  openGraph: {
    title: "Jayden Woo",
    description:
      "Hi, I'm Jayden Woo! Explore my projects, skills, and experience in software development, and get to know more about my journey in tech.",
    images: [
      {
        url: "/opengraph-image.png", // Next.js automatically prepends your domain
        width: 1200,
        height: 630,
        alt: "Jayden Woo personal website preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "relative text-slate-400 antialiased")}>{children}</body>
    </html>
  );
}
