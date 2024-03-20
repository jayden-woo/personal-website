export default function TagWrapper({ children, className = "", ...rest }) {
  // Add before pseudo-element and its styles
  className +=
    " before:opacity-0 before:relative before:-left-3 before:my-1 before:text-sm before:content-[attr(before)]";
  // Add after pseudo-element and its styles
  className +=
    " after:opacity-0 after:relative after:-left-3 after:my-1 after:text-sm after:content-[attr(after)]";

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
