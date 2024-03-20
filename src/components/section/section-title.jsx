import TagWrapper from "@/components/tag-wrapper";

export default function SectionTitle({ children, ...rest }) {
  return (
    <TagWrapper className="my-4" before="<h2>" after="</h2>" {...rest}>
      <h2 className="py-2 text-4xl font-bold tracking-tight text-slate-200 opacity-0">
        {children}
      </h2>
    </TagWrapper>
  );
}
