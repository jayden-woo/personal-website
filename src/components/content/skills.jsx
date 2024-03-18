import { CONTENT_SECTIONS } from "@/lib/data";

export default function Skills() {
  return (
    <section id={CONTENT_SECTIONS.Skills}>
      <h2>What Skills I&apos;ve Acquired</h2>
      <ul>
        <li>Languages</li>
        <ul>
          <li>Javascript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
        <li>Libraries & Frameworks</li>
        <ul>
          <li>React</li>
          <li>Next</li>
          <li>Node</li>
          <li>Express</li>
          <li>Redux</li>
        </ul>
        <li>Tools</li>
        <ul>
          <li>Git & GitHub</li>
          <li>Postman</li>
          <li>NextJS</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </ul>
    </section>
  );
}
