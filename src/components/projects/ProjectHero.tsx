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
          Since writing my first code to print "Hello World," I've persevered
          through countless hours of hard work and dedication to become a
          proficient developer. I've gained experience with HTML, CSS,
          JavaScript, TypeScript, and React. In addition, through personal
          projects and collaborations, I've developed various skills in building
          web applications from start to finish. From front-end design to
          back-end functionality and deployment, I'm confident in my abilities
          as a junior developer and eager to continue honing my skills to build
          projects that bring hope and joy to others.
        </p>
      </div>
    </div>
  );
}

export default ProjectHero;
