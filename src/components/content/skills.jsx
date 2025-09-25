import { CONTENT_SECTIONS } from "@/assets/data/constants";
import SKILLS_DATA from "@/assets/data/skills";
import { SectionTitle } from "@/components/section";
import SkillCategory from "@/components/section/skill-category";
import TagWrapper from "@/components/tag-wrapper";

export default function Skills() {
  return (
    <section id={CONTENT_SECTIONS.Skills} className="mb-16 scroll-mt-16 lg:mb-32">
      <TagWrapper className="my-4 contents" before="<h2>" after="</h2>">
        <SectionTitle>
          <span className="hidden md:inline">What </span>
          <span className="inline-block first-letter:text-sky-400">Skills</span> I&apos;ve Acquired
        </SectionTitle>
      </TagWrapper>
      <TagWrapper className="my-4 leading-relaxed" tag="ul" before="<ul>" after="</ul>">
        {SKILLS_DATA.map((item, index) => (
          <SkillCategory key={index} {...item} />
        ))}
      </TagWrapper>
    </section>
  );
}
