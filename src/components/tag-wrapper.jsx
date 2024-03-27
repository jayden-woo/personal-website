import clsx from "clsx";

export default function TagWrapper({ children, tag: Tag = "div", className = "", ...rest }) {
  return (
    <Tag
      className={clsx(
        className,
        // Add before pseudo-element and its styles
        "before:relative before:-left-1 before:my-1 before:text-sm before:content-[attr(before)] md:before:-left-3 md:motion-safe:before:opacity-0",
        // Add after pseudo-element and its styles
        "after:relative after:-left-1 after:my-1 after:text-sm after:content-[attr(after)] md:after:-left-3 md:motion-safe:after:opacity-0"
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
