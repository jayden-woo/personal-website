import { LINK_VARIANTS } from "@/assets/data/constants";
import SOCIAL_MEDIA from "@/assets/data/social-media";
import Link from "@/components/link";

export default function Socials() {
  return (
    <ul className="mx-2 mt-8 flex items-center">
      {SOCIAL_MEDIA.map((item) => (
        <li key={item.name} className="mr-6 md:motion-safe:invisible">
          <Link variant={LINK_VARIANTS.Icon} href={item.link} title={item.name}>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
