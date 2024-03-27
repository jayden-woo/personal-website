import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jayden Woo",
  description: "Jayden Woo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={clsx(`${inter.className} relative text-slate-400 antialiased`)}>
        {children}
      </body>
    </html>
  );
}
