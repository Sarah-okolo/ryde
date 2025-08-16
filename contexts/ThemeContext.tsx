import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { setColorScheme } = useColorScheme();
  const [theme, setThemeState] = useState<Theme>("system");

  // Load saved theme from storage on mount
  useEffect(() => {
    (async () => {
      const saved = (await AsyncStorage.getItem("theme")) as Theme | null;
      const active = saved ?? "system";
      setThemeState(active);
      setColorScheme(active);
    })();
  }, [setColorScheme]);

  // Apply theme when it changes
  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
    setColorScheme(newTheme); // reacts to system theme changes IRT
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
