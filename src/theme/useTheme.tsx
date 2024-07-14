
import { defaultTheme, localStorageKey } from "./consts";
import useLocalStorage from "../hooks/useLocalStorage";

export type DefaultTheme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>(localStorageKey, defaultTheme);

  return {
    theme,
    setTheme
  };
};
