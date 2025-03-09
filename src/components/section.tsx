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
      <Heading>{header}</Heading>
      {children}
    </div>
  );
}

export default Section;
