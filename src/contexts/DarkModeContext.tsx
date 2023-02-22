import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface DarkModeContextProps {
  darkMode: string;
  setDarkMode: Dispatch<SetStateAction<string>>;
  enableDarkMode: boolean;
  setEnableDarkMode: Dispatch<SetStateAction<boolean>>;
  lightModeStyle: string;
  darkModeStyle: string;
}

interface DarkModeContextProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  darkMode: "",
  setDarkMode: () => {},
  enableDarkMode: false,
  setEnableDarkMode: () => {},
  lightModeStyle: "",
  darkModeStyle: "",
});

export const DarkModeProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState("");
  const [enableDarkMode, setEnableDarkMode] = useState(false);
  const lightModeStyle =
    "bg-white border-stone-200 text-stone-600 hover:bg-stone-100 hover:border-300 hover:text-sky-600";
  const darkModeStyle =
    "dark:bg-stone-600 dark:border-stone-500 dark:text-stone-200 dark:hover:bg-stone-700 dark:hover:border-stone-600 dark:hover:text-sky-500";

  useEffect(() => {
    enableDarkMode ? setDarkMode("dark") : setDarkMode("");
  }, [enableDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        enableDarkMode,
        setEnableDarkMode,
        lightModeStyle,
        darkModeStyle,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
