
import { defaultThemeMode, themeModeLocalStorageKey } from "./consts";
import useLocalStorage from "../hooks/useLocalStorage";

export type DefaultThemeMode = "light" | "dark";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage<DefaultThemeMode>(themeModeLocalStorageKey, defaultThemeMode);

  return {
    themeMode,
    setThemeMode
  };
};
