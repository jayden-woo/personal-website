import Image from "next/image";
import Link from "@/components/link";
import { LINK_VARIANTS } from "@/assets/data/constants";
import { GitHub, NewTab } from "@/assets/icons";

export default function ProjectCard({ title, description, image, link, github, technologies }) {
  return (
    <div className="group my-5 flex flex-col first:mt-4 last:mb-2 md:motion-safe:invisible lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <Image
        // TODO: Decide whether to use rotate or scale for hover animation
        className="pointer-events-none origin-left select-none rounded-md border-2 border-gray-500/20 duration-200 group-hover:border-gray-400/40 md:w-9/12 md:motion-safe:invisible lg:w-10/12 lg:motion-safe:transition lg:motion-safe:group-hover:rotate-2 lg:motion-safe:group-hover:scale-105"
        // className="pointer-events-none origin-top-left select-none rounded-md border-2 border-gray-500/20 duration-200 group-hover:border-gray-400/40 md:w-9/12 lg:w-10/12 lg:motion-safe:transition lg:motion-safe:group-hover:scale-110"
        src={image}
        alt={`Demo of ${title} project`}
      />
      <div className="relative -top-6 -mb-4 self-end md:-top-16 md:-mb-14 md:w-10/12">
        <div className="border-t-1 my-2 origin-bottom-right rounded-b-md border-2 border-gray-500/20 bg-gray-870 p-3 shadow-lg shadow-gray-900/40 duration-300 group-hover:border-gray-400/40 md:rounded-md md:border-2 md:motion-safe:invisible lg:motion-safe:transition lg:motion-safe:group-hover:scale-105">
          <div className="flex justify-between">
            <Link href={link} className="group-hover:text-sky-400" variant={LINK_VARIANTS.Title}>
              <h3>{title}</h3>
              <span className="absolute inset-0" />
            </Link>
            {(link || github) && (
              <div className="flex items-center">
                {github && (
                  <Link
                    className="z-20 px-2 py-px"
                    variant={LINK_VARIANTS.Icon}
                    href={github}
                    title={title}
                  >
                    <GitHub className="size-5" />
                  </Link>
                )}
                {link && (
                  <Link
                    className="z-20 px-2 py-px"
                    variant={LINK_VARIANTS.Icon}
                    href={link}
                    title={title}
                  >
                    <NewTab className="size-5" />
                  </Link>
                )}
              </div>
            )}
          </div>
          <p className="mt-2 leading-normal sm:text-sm">{description}</p>
        </div>
        {technologies && (
          <ul className="mx-3 flex flex-wrap md:motion-safe:invisible">
            {technologies.map((item, index) => (
              <li key={index} className="mb-1 mr-3 text-sm">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
