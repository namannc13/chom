import { cn } from "@/lib/utils";

function Link({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <a
      href={href}
      className={cn("relative text-sm poppins-regular-italic text-accent-foreground hover:text-diff", className)}
    >
      {children}
    </a>
  );
}

export default Link;
