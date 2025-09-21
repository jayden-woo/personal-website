import { CONTENT_SECTIONS } from "@/assets/data/constants";
import TagWrapper from "@/components/tag-wrapper";
import { ProjectCard, SectionTitle } from "@/components/section";
import PROJECTS_DATA from "@/assets/data/projects";

export default function Projects() {
  return (
    <section id={CONTENT_SECTIONS.Projects} className="mb-16 scroll-mt-16 lg:mb-32">
      <TagWrapper className="my-4 contents" before="<h2>" after="</h2>">
        <SectionTitle>
          <span className="hidden md:inline">Some </span>Things I&apos;ve{" "}
          <span className="inline-block first-letter:text-sky-400">Built</span>
        </SectionTitle>
      </TagWrapper>
      <TagWrapper className="group/list my-4 leading-relaxed" tag="ul" before="<ul>" after="</ul>">
        {PROJECTS_DATA.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </TagWrapper>
    </section>
  );
}
