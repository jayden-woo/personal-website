import { CONTENT_SECTIONS } from "@/lib/data";
import Link from "@/components/link";
import TagWrapper from "@/components/tag-wrapper";

export default function About() {
  return (
    <section id={CONTENT_SECTIONS.About} className="mb-32 scroll-mt-16">
      <TagWrapper className="my-4" before="<h2>" after="</h2>">
        <h2 className="py-2 text-4xl font-bold tracking-tight text-slate-200 opacity-0">
          About <span className="inline-block first-letter:text-sky-400">Me</span>
        </h2>
      </TagWrapper>
      <TagWrapper className="my-4 leading-relaxed" before="<p>" after="</p>">
        <p className="my-2 opacity-0">
          Hey there! My name is Jayden and I&apos;m a computing graduate with a Bachelor&apos;s
          degree from the{" "}
          <Link href="https://study.unimelb.edu.au/find/courses/major/computing-and-software-systems/">
            University of Melbourne
          </Link>
          . I&apos;ve always been fascinated by tech and machineries since young, and my time at uni
          only deepened that passion further.
        </p>
        <p className="my-4 opacity-0">
          During my studies, I dove into everything from algorithms to AI, and I loved every bit of
          it. Some things I&apos;ve dabbled in are web dev, computing systems, software dev, machine
          learning, game dev, and even had the chance to do a whole investments minor paired with
          some accounting.
        </p>
        <p className="my-4 opacity-0">
          Now that I&apos;m out in the real world, I&apos;m pumped to put my skills to work. Whether
          it&apos;s building cool software, coding aesthetic website, or tackling big challenges,
          I&apos;m ready to make a dent in the tech world and gain valuable experiences from
          different fields.
        </p>
        <p className="my-2 opacity-0">
          {/* TODO: Add free time hobbies section and easter egg for BoTW */}
          In my free time, I love playing some occasional badminton, hanging around beaches or
          parks, running around Hyrule solving <Link href="/">Shrine puzzles</Link>, or even bending
          my mind watching movies like Inception or Interstellar.
        </p>
      </TagWrapper>
    </section>
  );
}
