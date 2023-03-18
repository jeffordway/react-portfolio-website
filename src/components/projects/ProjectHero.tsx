import React, { useContext } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconsContext } from "../../contexts/IconsContext";

function ProjectHero() {
  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <h1 className="max-w-2xl text-4xl md:text-5xl font-bold">
        Things I’ve made on my coding journey.
      </h1>
      <div className="max-w-2xl font-light text-stone-700 dark:text-stone-300">
        <p>
          Ever since writing my first line of code, I've persevered through
          countless hours of hard work and dedication to become a proficient
          full-stack developer. Along this journey, I have gained experience
          with various languages and frameworks, including JavaScript,
          Typescript, React, HTML, CSS, Ajax, JSON, MySQL, MongoDB, Tailwind,
          Bootstrap, and Figma.
        </p>
      </div>
    </div>
  );
}

export default ProjectHero;
