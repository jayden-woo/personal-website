import { CONTENT_SECTIONS } from "@/assets/data/constants";

export default function Education() {
  return (
    <section id={CONTENT_SECTIONS.Education} className="mb-16 scroll-mt-20">
      <h2>Where I&apos;ve Studied At</h2>
      <ol>
        <li>
          <h3>
            <a href="https://www.unimelb.edu.au/">University of Melbourne</a>
          </h3>
          <p>
            <a href="https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-science/">
              Bachelor of Science
            </a>
          </p>
          <p>
            <a href="https://study.unimelb.edu.au/find/courses/major/computing-and-software-systems/">
              Major: Computing and Software Systems
            </a>
          </p>
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
