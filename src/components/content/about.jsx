import { CONTENT_SECTIONS } from "@/assets/data/constants";
import Link from "@/components/link";
import TagWrapper from "@/components/tag-wrapper";
import { SectionTitle } from "@/components/section";

export default function About() {
  return (
    <section id={CONTENT_SECTIONS.About} className="mb-16 scroll-mt-16 lg:mb-32">
      <TagWrapper className="my-4 contents" before="<h2>" after="</h2>">
        <SectionTitle>
          About <span className="inline-block first-letter:text-sky-400">Me</span>
        </SectionTitle>
      </TagWrapper>
      <TagWrapper className="my-4 leading-relaxed" before="<p>" after="</p>">
        <p className="my-2 md:motion-safe:invisible">
          Hey there! My name is Jayden and I&apos;m a computing graduate with a Bachelor&apos;s
          degree from the <Link href="https://www.unimelb.edu.au/">University of Melbourne</Link>.
          I&apos;ve always been fascinated by tech and machineries since young, and my time at uni
          only deepened that passion further.
        </p>
        <p className="my-4 md:motion-safe:invisible">
          During my studies, I dove into everything from algorithms to AI, and I loved every bit of
          it. Some things I&apos;ve dabbled in are web dev, computing systems, software dev, machine
          learning, game dev, and even had the chance to do a whole investments minor paired with
          some accounting.
        </p>
        <p className="my-4 md:motion-safe:invisible">
          Now that I&apos;m out in the real world, I&apos;m pumped to put my skills to work. Whether
          it&apos;s building cool software, coding aesthetic website, or tackling big challenges,
          I&apos;m ready to make a dent in the tech world and gain valuable experiences from
          different fields.
        </p>
        <p className="my-2 md:motion-safe:invisible">
          {/* TODO: Add free time hobbies section and easter egg for BoTW */}
          In my free time, I love playing some occasional badminton, hanging around beaches or
          parks, running around Hyrule solving <Link href="/">Shrine puzzles</Link>, or even bending
          my mind watching movies like Inception or Interstellar.
        </p>
      </TagWrapper>
    </section>
  );
}
