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
          My fascination with technology started young, from tinkering with machines to exploring
          how things work, and my time at uni only deepened that curiosity.
        </p>
        <p className="my-4 md:motion-safe:invisible">
          During my studies, I dove into everything from algorithms to AI, and I loved every bit of
          it. Some things I&apos;ve dabbled in are web development, computing systems, software
          engineering, machine learning, and even a little bit of game development. I also completed
          an Investments minor with some accounting, which gave me a broader perspective on how tech
          connects with other industries.
        </p>
        <p className="my-4 md:motion-safe:invisible">
          Now, I&apos;m excited to put my skills into action, whether that means building intuitive
          web experiences, developing scalable software, or tackling complex challenges. I&apos;m
          eager to keep learning, collaborate with others, and make an impact in the tech world.
        </p>
        <p className="my-2 md:motion-safe:invisible">
          Outside of coding, you&apos;ll probably find me on a badminton court, watching a sunset by
          the beach, or just relaxing in a park. At home, I dive into mind-bending films like
          Inception and Interstellar, get lost in sci-fi worlds like Avatar or Pacific Rim, keep the{" "}
          <Link href="https://www.klei.com/games/oxygen-not-included">Oxygen Included</Link> for my
          dupes, or watch 20 Formula 1 cars drive around in circles for 2 hours.
        </p>
      </TagWrapper>
    </section>
  );
}
