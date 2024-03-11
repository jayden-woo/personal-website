import Background from "@/components/background";
import Content from "@/components/content";
import { Intro, Nav, Socials } from "@/components/header";

export default function Page() {
  return (
    <>
      <Background />
      <div className="mx-auto flex min-h-screen max-w-screen-xl gap-x-4 px-20">
        <header className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-20">
          <div>
            <Intro />
            <Nav />
          </div>
          <Socials />
        </header>
        <Content />
      </div>
    </>
  );
}
