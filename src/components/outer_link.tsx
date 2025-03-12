import { cn } from "@/lib/utils";

function OuterLink({
  children,
  className,
  to,
  inline = false,
}: {
  children: React.ReactNode;
  to: string;
  inline?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={() => window.open(to, "_blank")}
      className={cn(
        "text-[16px] flex justify-start items-center gap-2 text-muted-foreground hover:text-accent-foreground hover:cursor-pointer underline-offset-4 underline px-0 py-0 whitespace-nowrap transition-[color,box-shadow] poppins-regular-italic",
        inline ? "inline" : "flex justify-start items-center gap-2",
        className
      )}
    >
      {children}
    </button>
  );
}

export default OuterLink;
