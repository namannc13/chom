import { Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./theme_provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      className="hover:cursor-pointer rounded-full flex items-center justify-center"
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <i className="hgi hgi-stroke hgi-moon h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></i>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
