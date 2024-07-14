
import { DefaultThemeMode, defaultThemeMode, themeModeLocalStorageKey } from "./consts";
import useLocalStorage from "../hooks/useLocalStorage";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage<DefaultThemeMode>(themeModeLocalStorageKey, defaultThemeMode);

  return {
    themeMode,
    setThemeMode
  };
};

export default useThemeMode;