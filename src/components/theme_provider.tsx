import { createContext, useContext, useEffect, useState } from "react";

export const themes = ["light", "dark"] as const;

type Theme = (typeof themes)[number];

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  cycleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all possible theme classes
    themes.forEach((t) => root.classList.remove(t));

    // Add the current theme
    root.classList.add(theme);
  }, [theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;

    switch (theme) {
      case "dark":
        root.style.setProperty("--background", "oklch(0.217 0 0)");
        root.style.setProperty("--foreground", "oklch(0.985 0 0)");
        root.style.setProperty("--muted", "oklch(0.269 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.708 0 0)");
        root.style.setProperty("--accent-foreground", "#B8001F");
        root.style.setProperty("--border", "oklch(0.269 0 0)");
        break;

      case "light":
        root.style.setProperty("--background", "oklch(0.99 0.01 0.99)");
        root.style.setProperty("--foreground", "oklch(0.205 0 0)");
        root.style.setProperty("--muted", "oklch(0.97 0 0)");
        root.style.setProperty("--muted-foreground", "oklch(0.556 0 0)");
        root.style.setProperty("--accent-foreground", "#B8001F");
        root.style.setProperty("--border", "oklch(0.922 0 0)");
        break;
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  };

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    cycleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
