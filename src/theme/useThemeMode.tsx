
import { useLocalStorage } from "../hooks";
import { DefaultThemeMode, defaultThemeMode, themeModeLocalStorageKey } from "./consts";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage<DefaultThemeMode>(themeModeLocalStorageKey, defaultThemeMode);

  return {
    themeMode,
    setThemeMode
  };
};

export default useThemeMode;