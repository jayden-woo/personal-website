import { NAV_LINKS } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="my-8 hidden w-fit uppercase md:block">
      <ul>
        {NAV_LINKS.map((item) => (
          <li key={item.index}>
            <a href={item.link} className="group flex items-center py-3">
              <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16" />
              <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-slate-200">
                {`${item.index}. ${item.name}`}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
