const left = {
  3: " before:-left-9 after:-left-9",
  2: " before:-left-6 after:-left-6",
  1: " before:-left-3 after:-left-3",
};

export default function TagWrapper({ children, depth = 1, className = "", ...rest }) {
  // Add before and after pseudo-elements and their styles
  className +=
    " before:relative before:my-1 before:text-sm before:content-[attr(before)] after:relative after:my-1 after:text-sm after:content-[attr(after)]" +
    left[depth];

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
