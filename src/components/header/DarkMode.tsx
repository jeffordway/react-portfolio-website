import React, { useContext } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { DarkModeContext } from "../../contexts/DarkModeContext";

function DarkMode() {
  const { enableDarkMode, setEnableDarkMode, lightModeStyle, darkModeStyle } =
    useContext(DarkModeContext);
  const iconSize = "1.5em";

  function handleToggle() {
    enableDarkMode ? setEnableDarkMode(false) : setEnableDarkMode(true);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`${
        enableDarkMode
          ? "dark:bg-stone-600 dark:border-stone-500 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:border-stone-600 dark:hover:text-sky-600"
          : "bg-white border-stone-200 text-stone-400 hover:bg-stone-100 hover:border-stone-200 hover:text-sky-600 dark:shadow-stone-600"
      } relative -ml-px inline-flex items-center border rounded-full p-2 text-sm font-medium shadow shadow-stone-300 dark:shadow-stone-600`}
    >
      {enableDarkMode ? <HiMoon size={iconSize} /> : <HiSun size={iconSize} />}
    </button>
  );
}

export default DarkMode;
