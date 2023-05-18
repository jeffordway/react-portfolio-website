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
      <h1 className="max-w-lg text-4xl md:text-5xl font-bold">
        Hey there! It’s me, Jeff Ordway.
      </h1>
      <div className="max-w-2xl font-light text-stone-600 dark:text-stone-300">
        <p>
          I’m a former Parks and Recreation professional turned avid developer,
          designer, and marketer. I am passionate about harnessing my
          creativity, problem-solving skills, and adventurous spirit to design
          innovative, delightful solutions that inspire hope, ignite joy, and
          empower others.
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
