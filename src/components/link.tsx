import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

function Link({
  children,
  to,
  className,
  inline = false,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
  inline?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className={cn(
        "text-[16px] hover:cursor-pointer underline-offset-4 underline px-0 py-0 whitespace-nowrap transition-[color,box-shadow] text-muted-foreground hover:text-accent-foreground poppins-regular-italic",
        inline ? "inline" : "flex justify-start items-center gap-2",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Link;
