import { LINK_VARIANTS } from "@/assets/data/constants";
import Link from "@/components/link";

export default function Footer() {
  return (
    <footer className="mb-16 max-w-md text-sm text-slate-500 lg:mb-0">
      <p className="md:motion-safe:invisible">
        Designed & developed by Jayden Woo with inspiration from{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://brittanychiang.com/">
          Brittany Chiang
        </Link>{" "}
        and{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://www.sarahdayan.dev/">
          Sarah Dayan
        </Link>
        . Built with{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://nextjs.org/">
          Next.js
        </Link>{" "}
        and{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://tailwindcss.com/">
          Tailwind CSS
        </Link>{" "}
        in{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://code.visualstudio.com/">
          Visual Studio Code
        </Link>
        , deployed with{" "}
        <Link variant={LINK_VARIANTS.Footer} href="https://vercel.com/">
          Vercel
        </Link>
        .
      </p>
    </footer>
  );
}
