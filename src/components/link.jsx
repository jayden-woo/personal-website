import { LINK_VARIANTS } from "@/lib/data";

export default function Link({ children, variant = LINK_VARIANTS.Text, className = "", ...rest }) {
  const attributes = {
    target: "_blank",
    rel: "noopener noreferrer",
    ...rest,
  };

  // Add a whitespace to delimit the different classes
  className += className === "" ? "" : " ";

  switch (variant) {
    case LINK_VARIANTS.Text:
      // Add underline for links which thickens when hovered
      className +=
        "border-b border-sky-400 font-medium text-slate-200 hover:border-b-2 focus-visible:text-sky-400";
      // TODO: Clean unused animations
      // Add highlighting hover animation over links
      // className +=
      //   " font-medium text-slate-200 relative before:-z-10 before:block before:absolute before:inset-0 before:bg-sky-400 before:transition-transform before:duration-300 before:scale-x-0 before:origin-bottom-right before:hover:scale-x-100 before:hover:origin-bottom-left";
      // Add underlining hover animation over links
      // className +=
      //   " font-medium text-slate-200 relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:bg-sky-400 before:rounded before:transition-transform before:ease-in before:scale-x-0 before:hover:scale-x-100 before:duration-250";
      break;
    case LINK_VARIANTS.Icon:
      className += "fill-current hover:fill-slate-200 focus-visible:fill-slate-200";
      break;
    case LINK_VARIANTS.Title:
      className += "";
      break;
    case LINK_VARIANTS.Skip:
      className +=
        "absolute left-0 top-0 -translate-x-40 rounded bg-sky-400 text-slate-800 p-3 font-medium focus-visible:translate-x-0 motion-safe:transition-all";
      // Remove the target and rel attributes
      delete attributes.target;
      delete attributes.rel;
      break;
    default:
      break;
  }

  return (
    <a className={className} {...attributes}>
      {children}
    </a>
  );
}
