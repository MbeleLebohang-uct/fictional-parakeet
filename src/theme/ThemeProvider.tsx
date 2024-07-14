import React from "react";

import { defaultTheme, localStorageKey } from "./consts";
import { DefaultTheme } from "./useTheme";
import useLocalStorage from "../hooks/useLocalStorage";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext<DefaultTheme>(defaultTheme);

const ThemeProvider = ({ children } : ThemeProviderProps) => {
  const [theme] = useLocalStorage<DefaultTheme>(localStorageKey, defaultTheme);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;