import React, { createContext, useContext, useEffect, useState } from "react";
import { colorThemes, ColorScheme } from "@/data/colorThemes";

interface ThemeColorContextProps {
  currentTheme: ColorScheme;
  setThemeById: (id: string) => void;
  themes: ColorScheme[];
}

const ThemeColorContext = createContext<ThemeColorContextProps | undefined>(undefined);

export const useThemeColor = () => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error("useThemeColor must be used within a ThemeColorProvider");
  }
  return context;
};

export const ThemeColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ColorScheme>(() => {
    const sapphire = colorThemes.find((t) => t.id === "royal-sapphire");
    return sapphire || colorThemes[0];
  });

  const applyTheme = (theme: ColorScheme) => {
    const vars = theme.light;
    const root = document.documentElement;
    root.style.setProperty("--primary", vars.primary);
    root.style.setProperty("--ring", vars.primary);
    root.style.setProperty("--gradient-primary", vars.gradientPrimary);
    root.style.setProperty("--accent", vars.accent);
    root.style.setProperty("--gradient-accent", vars.gradientAccent);
  };

  const setThemeById = (id: string) => {
    const theme = colorThemes.find((t) => t.id === id);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("theme-color", id);
      applyTheme(theme);
    }
  };

  useEffect(() => {
    // Explicitly remove dark class to force light mode
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    applyTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeColorContext.Provider value={{ currentTheme, setThemeById, themes: colorThemes }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
