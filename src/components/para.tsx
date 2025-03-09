import { cn } from "@/lib/utils";

function Para({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-sm leading-7 text-muted-foreground", className)}>
      {children}
    </div>
  );
}

export default Para;
