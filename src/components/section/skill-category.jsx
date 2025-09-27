export default function SkillCategory({ label, items }) {
  return (
    <div className="group my-5 grid grid-cols-3 gap-3 md:grid-cols-5 md:motion-safe:invisible lg:grid-cols-4">
      <h3 className="col-span-full content-center text-lg md:col-span-2 md:text-center md:text-xl md:font-medium md:duration-300 md:group-hover:text-sky-400 md:motion-safe:invisible md:motion-safe:transition-colors">
        {label}
      </h3>
      <ul className="contents">
        {items.map(({ name, Image }, index) => (
          <li key={index} className="group/logo relative size-full md:motion-safe:invisible">
            <Image
              alt={`Logo of ${name}`}
              className="size-full grayscale duration-300 hover:grayscale-0 motion-safe:transition"
            />
            <span
              role="tooltip"
              className="bg-gray-870 absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-sm border border-gray-500/20 px-2 py-1 text-xs text-nowrap opacity-0 duration-300 group-hover/logo:opacity-100 motion-safe:transition-opacity"
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
