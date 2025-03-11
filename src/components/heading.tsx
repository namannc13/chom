import { cn } from "@/lib/utils";

function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "text-16 font-montserrat tracking-[0.075em] flex items-center gap-2 font-semibold",
        className
      )}
    >
      {children}
    </h4>
  );
}

export default Heading;
