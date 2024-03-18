import { CONTENT_SECTIONS } from "@/lib/data";

export default function Education() {
  return (
    <section id={CONTENT_SECTIONS.Education} className="mb-16 scroll-mt-20">
      <h2>Where I&apos;ve Studied At</h2>
      <ol>
        <li>
          <h3>University of Melbourne</h3>
          <p>Bachelor of Science</p>
          <p>Major: Computing and Software Systems</p>
        </li>
        <li>
          <h3>Sunway College</h3>
          <p>Cambridge GCE Advanced Level</p>
          <p>Subjects: Mathematics, Further Mathematics, Physics, Chemistry</p>
        </li>
      </ol>
    </section>
  );
}
