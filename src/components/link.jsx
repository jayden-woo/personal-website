import { LINK_VARIANTS } from "@/assets/data/constants";
import { cn } from "@/libs/utils";

export default function Link({ children, variant = LINK_VARIANTS.Text, className = "", ...rest }) {
  const attributes = {
    target: "_blank",
    rel: "noopener noreferrer",
    ...rest,
  };

  switch (variant) {
    case LINK_VARIANTS.Text:
      // TODO: Choose between 3 animation options for links when hovered
      className = cn(
        // Add underline for links which thickens when hovered
        "border-b border-sky-400 font-medium text-slate-200 hover:border-b-2 focus-visible:text-sky-400",
        // Add highlighting hover animation over links
        // "relative font-medium text-slate-200 before:absolute before:inset-0 before:-z-10 before:block before:origin-bottom-right before:scale-x-0 before:bg-sky-400 before:transition-transform before:duration-300 hover:before:origin-bottom-left hover:before:scale-x-100",
        // Add underlining hover animation over links
        // "before:duration-250 relative font-medium text-slate-200 before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:rounded-sm before:bg-sky-400 before:transition-transform before:ease-in hover:before:scale-x-100",
        className
      );
      break;
    case LINK_VARIANTS.Icon:
      className = cn("fill-current hover:fill-slate-200 focus-visible:fill-slate-200", className);
      break;
    case LINK_VARIANTS.Title:
      className = cn(
        "text-lg leading-tight font-medium text-slate-200 focus-visible:text-sky-400",
        className
      );
      break;
    case LINK_VARIANTS.Footer:
      className = cn(
        "font-medium text-slate-400 hover:text-sky-400 focus-visible:text-sky-400",
        className
      );
      break;
    case LINK_VARIANTS.Skip:
      className = cn(
        "absolute top-0 left-0 -translate-x-40 rounded-sm bg-sky-400 p-3 font-medium text-slate-800 focus-visible:translate-x-0 motion-safe:transition-all",
        className
      );
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
