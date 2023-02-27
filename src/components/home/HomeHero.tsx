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
          I'm Jeff Ordway, a Full Stack Developer passionate about creating
          engaging and visually appealing projects that inspire hope and joy in
          others. Through a commitment to excellence, I've learned never to let
          fear guide my decisions, no matter how big or small. When not coding,
          I enjoy creating fun memories with my family, playing games, and
          exploring the great outdoors.
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
