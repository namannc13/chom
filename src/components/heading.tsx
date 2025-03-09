import { cn } from "@/lib/utils";

function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4 className={cn("text-md font-montserrat tracking-[0.075em]", className)}>
      {children}
    </h4>
  );
}

export default Heading;
