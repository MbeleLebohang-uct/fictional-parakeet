import React from "react";

import { defaultThemeMode, themeModeLocalStorageKey, DefaultThemeMode } from "./consts";
import useLocalStorage from "../hooks/useLocalStorage";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<DefaultThemeMode>(defaultThemeMode);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children } : ThemeProviderProps) => {
  const [theme] = useLocalStorage<DefaultThemeMode>(themeModeLocalStorageKey, defaultThemeMode);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;