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
import TagWrapper from "@/components/tag-wrapper";

export default function Page() {
  return (
    <>
      <Background />
      <div className="mx-auto min-h-screen max-w-screen-xl gap-x-4 px-20 lg:flex">
        <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-20">
          <div>
            <Intro />
            <Nav />
          </div>
          <Socials />
        </header>
        <main className="w-1/2 py-20">
          <TagWrapper className="hide has-[.show]:show" depth={2} before="<main>" after="</main>">
            <About />
            <Projects />
            <Skills />
            <Education />
            <Activities />
            <Experiences />
            <Footer />
          </TagWrapper>
        </main>
      </div>
    </>
  );
}
