import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

function Link({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={cn(
        "text-[16px] flex justify-start items-center gap-2 text-accent-foreground hover:text-foreground hover:cursor-pointer underline-offset-4 underline px-0 py-0 whitespace-nowrap transition-[color,box-shadow]",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Link;
