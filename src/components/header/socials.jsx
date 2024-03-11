import { SOCIAL_MEDIA } from "@/lib/data";

export default function Socials() {
  return (
    <ul className="mx-2 flex items-center">
      {SOCIAL_MEDIA.map((item) => (
        <li key={item.name} className="mr-6">
          <a
            href={item.link}
            className="fill-current hover:fill-slate-200"
            title={item.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
