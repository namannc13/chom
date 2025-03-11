import { useTheme } from "./theme_provider";
import { Button } from "./ui/button";

const themeIcons = {
  light: <i className="hgi hgi-stroke hgi-sun-01 h-[1.2rem] w-[1.2rem]"/>,
  dark: <i className="hgi hgi-stroke hgi-moon-01 h-[1.2rem] w-[1.2rem]"/>,
};

export function ModeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <Button
      size="icon"
      className="hover:cursor-pointer rounded-full flex items-center justify-center"
      variant="outline"
      onClick={cycleTheme}
    >
      {themeIcons[theme]}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
