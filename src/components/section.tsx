import { cn } from "@/lib/utils";
import Heading from "./heading";

function Section({
  header,
  children,
  className,
}: {
  header: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <Heading>
        <i className="hgi hgi-stroke hgi-magic-wand-02 text-diff"></i>
        {header}
      </Heading>
      {children}
    </div>
  );
}

export default Section;
