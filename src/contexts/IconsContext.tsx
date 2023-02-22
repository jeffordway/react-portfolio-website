import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IconContextProps {
  iconsStyle: string;
  setIconsStyle: Dispatch<SetStateAction<string>>;
  faIconsSize: string;
  setFaIconsSize: Dispatch<SetStateAction<string>>;
  badgeSize: string;
  setBadgeSize: Dispatch<SetStateAction<string>>;
}

interface IconsContextProviderProps {
  children: ReactNode;
}

export const IconsContext = createContext<IconContextProps>({
  iconsStyle: "",
  setIconsStyle: () => {},
  faIconsSize: "",
  setFaIconsSize: () => {},
  badgeSize: "",
  setBadgeSize: () => {},
});

export const IconProvider = ({ children }: IconsContextProviderProps) => {
  const [iconsStyle, setIconsStyle] = useState("flex items-center gap-x-4 mb-4 hover:text-sky-600 dark:hover:text-sky-600");
  const [faIconsSize, setFaIconsSize] = useState("1.75em");
  const [badgeSize, setBadgeSize] = useState("");

  return (
    <IconsContext.Provider
      value={{
        iconsStyle,
        setIconsStyle,
        faIconsSize,
        setFaIconsSize,
        badgeSize,
        setBadgeSize,
      }}
    >
      {children}
    </IconsContext.Provider>
  );
};
