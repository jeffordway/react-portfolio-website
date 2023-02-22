import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function AboutHero() {
  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <h1 className="max-w-2xl text-4xl md:text-5xl font-bold">
        It's me, Jeff Ordway. I'm a Full Stack Developer with an eye for design.
      </h1>
      <div className="max-w-2xl font-light text-stone-700 dark:text-stone-300">
        <p>
        My passion is creating engaging, visually appealing projects that
        entertain users and inspire hope and joy.
        </p>
        <br/>
        <p>
        I began my career in Parks and Recreation, where I organized sports
        programs and events for my community. However, my curiosity about coding
        and design led me down a new career path. I enrolled at the Bethel
        School of Technology and became proficient in JavaScript, React,
        Typescript, MySQL, MongoDB, Tailwind, Bootstrap, CSS, HTML, and Figma.
        </p>
        <br/>
        <p>
        Although the journey hasn't been easy, I'm grateful for the challenge.
        Through persistence and a commitment to excellence, I've learned never
        to let fear guide my decisions, no matter how big or small the task may
        seem.
        </p>
        <br/>
        <p>
        When I'm not busy coding, you can find me spending quality time with my
        family, playing sports with friends, or exploring the great outdoors.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
