import React from "react";
import Brand from "./Brand";
import DarkMode from "./DarkMode";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Brand className=" hidden xs:flex stroke-stone-600 hover:stroke-sky-600 dark:stroke-stone-200 dark:hover:stroke-sky-600" />
      <img
        src="./assets/images/jeff.jpg"
        alt="Jeff Ordway Photo"
        className="justify-self-start xs:hidden w-20 rounded-full"
      />
      <div className="flex items-center space-x-4">
        <NavBarMobile />
        <NavBarDesktop />
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
