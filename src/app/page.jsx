import Background from "@/components/background";
import {
  About,
  // Activities,
  Contact,
  // Education,
  // Experiences,
  Footer,
  Projects,
  Skills,
} from "@/components/content";
import { Intro, Nav, Socials } from "@/components/header";
import Link from "@/components/link";
import { LINK_VARIANTS } from "@/assets/data/constants";
import ScrollToTopButton from "@/components/top-button";

export default function Page() {
  return (
    <>
      <Background />
      <Link href="#content" variant={LINK_VARIANTS.Skip}>
        Skip to Content
      </Link>
      <div className="mx-auto min-h-screen max-w-7xl gap-x-4 px-6 py-10 md:px-12 md:py-10 lg:flex lg:px-20 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
          <div>
            <Intro />
            <Nav />
          </div>
          <Socials />
        </header>
        <main id="content" className="pt-14 lg:w-1/2 lg:py-20">
          <About />
          <Projects />
          <Skills />
          {/* <Education />
          <Activities />
          <Experiences /> */}
          <Contact />
          <Footer />
          <ScrollToTopButton />
        </main>
      </div>
    </>
  );
}
