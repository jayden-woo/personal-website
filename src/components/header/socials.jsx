import { LINK_VARIANTS, SOCIAL_MEDIA } from "@/lib/data";
import Link from "@/components/link";

export default function Socials() {
  return (
    <ul className="mx-2 mt-8 flex items-center">
      {SOCIAL_MEDIA.map((item) => (
        <li key={item.name} className="mr-6 opacity-0">
          <Link variant={LINK_VARIANTS.Icon} href={item.link} title={item.name}>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
