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
    if (typeof window !== "undefined") {
      const savedThemeId = localStorage.getItem("theme-color");
      const found = colorThemes.find((t) => t.id === savedThemeId);
      if (found) return found;
    }
    return colorThemes[0]; // mint-breeze default
  });

  const applyTheme = (theme: ColorScheme, isDark: boolean) => {
    const vars = isDark ? theme.dark : theme.light;
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
      const isDark = document.documentElement.classList.contains("dark");
      applyTheme(theme, isDark);
    }
  };

  useEffect(() => {
    // Initial application of the theme
    const isDark = document.documentElement.classList.contains("dark");
    applyTheme(currentTheme, isDark);

    // Set up MutationObserver to react to light/dark mode changes toggle on HTML element
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      applyTheme(currentTheme, isDarkNow);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [currentTheme]);

  return (
    <ThemeColorContext.Provider value={{ currentTheme, setThemeById, themes: colorThemes }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
