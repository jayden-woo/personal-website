import { cn } from "@/libs/utils";

export default function TagWrapper({ children, tag: Tag = "div", className = "", ...rest }) {
  return (
    <Tag
      className={cn(
        // Add before pseudo-element and its styles
        "before:relative before:-left-1 before:my-1 before:text-sm before:content-[attr(before)] md:before:-left-3 md:motion-safe:before:invisible",
        // Add after pseudo-element and its styles
        "after:relative after:-left-1 after:my-1 after:text-sm after:content-[attr(after)] md:after:-left-3 md:motion-safe:after:invisible",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
