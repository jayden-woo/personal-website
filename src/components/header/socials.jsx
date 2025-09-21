import { LINK_VARIANTS } from "@/assets/data/constants";
import SOCIAL_MEDIA from "@/assets/data/social-media";
import Link from "@/components/link";

export default function Socials() {
  return (
    <ul className="mx-2 mt-8 flex items-center">
      {SOCIAL_MEDIA.map(({ name, link, Icon }, index) => (
        <li key={index} className="mr-6 md:motion-safe:invisible">
          <Link variant={LINK_VARIANTS.Icon} href={link} title={name}>
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
