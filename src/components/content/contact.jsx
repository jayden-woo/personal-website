import { CONTENT_SECTIONS } from "@/assets/data/constants";
import Link from "@/components/link";
import { SectionTitle } from "@/components/section";
import TagWrapper from "@/components/tag-wrapper";
import { cn } from "@/libs/utils";

export default function Contact() {
  const emailClass = cn(
    "absolute left-0 px-0.5",
    // Add styles for text changing colour from left to right when hovered
    "bg-linear-0 from-slate-800 to-slate-800 bg-size-[0] bg-clip-text bg-right bg-no-repeat text-transparent transition-[background-size] duration-300 motion-safe:hover:bg-size-[100%] hover:bg-left",
    // Add styles for highlighting hover animation
    "before:absolute before:inset-x-0 before:-z-10 before:h-5 before:origin-right before:scale-x-0 before:self-center before:bg-sky-400 before:transition-transform before:duration-300 hover:before:origin-left motion-safe:hover:before:scale-x-100"
  );

  return (
    <section id={CONTENT_SECTIONS.Contact} className="mb-16 scroll-mt-16 lg:mb-32">
      <TagWrapper className="my-4 contents" before="<h2>" after="</h2>">
        <SectionTitle>
          What&apos;s <span className="inline-block first-letter:text-sky-400">Next</span>
        </SectionTitle>
      </TagWrapper>
      <TagWrapper className="my-4 leading-relaxed" before="<form>" after="</form>">
        <p className="my-3 first-letter:float-left first-letter:mr-1 first-letter:font-serif first-letter:text-6xl/[0.8] first-letter:text-white md:motion-safe:invisible">
          Want to know more about my experience, projects, and what I&apos;ve been up to? Come check
          out my <Link href="Jun Cheng Woo - CV.pdf">full resume</Link> here!
        </p>
        <p className="my-3 md:motion-safe:invisible">
          Got something cool to share or just want to say hi? Feel free to drop me an email, whether
          it&apos;s about a project, collaboration, potential opportunities, or even just a quick
          hello. I&apos;d love to hear from you.
        </p>
        <p className="my-3 md:motion-safe:invisible">
          Get in touch
          <span className="motion-safe:animate-point inline-block scale-175 pr-4 pl-5 motion-safe:pr-5 motion-safe:pl-6">
            👉
          </span>
          <Link
            href="mailto:jayden.jcwoo@gmail.com"
            className="relative px-0.5 hover:border-b motion-reduce:hover:border-b-2"
          >
            jayden.jcwoo@gmail.com
            <span className={emailClass}>jayden.jcwoo@gmail.com</span>
          </Link>
        </p>
      </TagWrapper>
    </section>
  );
}
