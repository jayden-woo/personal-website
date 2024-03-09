import Background from "@/components/background";
import Content from "@/components/content";
import { Footer, Intro, Nav } from "@/components/header";

export default function Page() {
  return (
    <>
      <Background />
      <div className="flex min-h-screen">
        <header className="flex w-1/2 flex-col justify-between">
          <div>
            <Intro />
            <Nav />
          </div>
          <div>
            <Footer />
          </div>
        </header>
        <Content />
      </div>
    </>
  );
}
