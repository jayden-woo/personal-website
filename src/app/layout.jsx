import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jayden Woo",
  description: "Jayden Woo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative text-slate-400 antialiased`}>{children}</body>
    </html>
  );
}
