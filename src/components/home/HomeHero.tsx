import React, { useContext } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconsContext } from "../../contexts/IconsContext";

function HomeHero() {
  const { iconsStyle, faIconsSize } = useContext(IconsContext);

  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <img
        src="./assets/images/jeff.jpg"
        alt="Jeff Ordway Photo"
        className="hidden xs:flex w-20 rounded-full"
      />
      <h1 className="max-w-2xl text-4xl md:text-5xl font-bold">
        Full Stack Developer with an eye for design.
      </h1>
      <div className="max-w-2xl font-light text-stone-600 dark:text-stone-300">
        <p>
          I'm Jeff Ordway, a full-stack developer passionate about creating
          visually stunning and engaging coding projects that inspire a sense of
          hope and joy in every user. I believe every line of code is an
          opportunity to brighten someone's day. That's why I approach each
          project with a focus on excellence, integrity, and courage.
        </p>
      </div>
      <div className="flex space-x-2 text-stone-400">
        <a href="https://www.linkedin.com/in/jeffordway/" target="_blank">
          <FaLinkedin className={iconsStyle} size={faIconsSize} />
        </a>
        <a href="https://github.com/jeffordway" target="_blank">
          <FaGithubSquare className={iconsStyle} size={faIconsSize} />
        </a>
      </div>
    </div>
  );
}

export default HomeHero;
