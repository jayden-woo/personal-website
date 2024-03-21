import Background from "@/components/background";
import {
  About,
  Activities,
  Education,
  Experiences,
  Footer,
  Projects,
  Skills,
} from "@/components/content";
import { Intro, Nav, Socials } from "@/components/header";
import Link from "@/components/link";
import { LINK_VARIANTS } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Background />
      <Link href="#content" variant={LINK_VARIANTS.Skip}>
        Skip to Content
      </Link>
      <div className="mx-auto min-h-screen max-w-screen-xl gap-x-4 px-20 lg:flex">
        <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-20">
          <div>
            <Intro />
            <Nav />
          </div>
          <Socials />
        </header>
        <main id="content" className="w-1/2 py-20">
          <About />
          <Projects />
          <Skills />
          <Education />
          <Activities />
          <Experiences />
          <Footer />
        </main>
      </div>
    </>
  );
}
