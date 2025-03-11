import { cn } from "@/lib/utils";

function Heading({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "faded";
}) {
  return (
    <h4
      className={cn(
        "font-montserrat tracking-[0.075em] flex items-center gap-2 font-semibold",
        variant === "faded" ? "text-[16px]" : "text-xl",
        className
      )}
    >
      {children}
    </h4>
  );
}

export default Heading;
