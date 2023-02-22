import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

function NavBarDesktop() {
  const { lightModeStyle, darkModeStyle } = useContext(DarkModeContext);
  const btnStyle = "relative -ml-px inline-flex items-center border px-4 py-2 text-sm font-medium"

  const navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  function handleAbout() {
    navigate("/about");
  }

  function handleProjects() {
    navigate("/projects");
  }

  return (
    <span className="isolate rounded-full shadow shadow-stone-300 dark:shadow-stone-600 pointer-events-auto hidden md:inline-flex">
      <button
        type="button"
        onClick={handleHome}
        className={`${lightModeStyle} ${darkModeStyle} ${btnStyle} rounded-l-full`}
      >
        Home
      </button>
      <button
        type="button"
        onClick={handleAbout}
        className={`${lightModeStyle} ${darkModeStyle} ${btnStyle}`}
      >
        About
      </button>
      <button
        type="button"
        onClick={handleProjects}
        className={`${lightModeStyle} ${darkModeStyle} ${btnStyle} rounded-r-full`}
      >
        Projects
      </button>
    </span>
  );
}

export default NavBarDesktop;
