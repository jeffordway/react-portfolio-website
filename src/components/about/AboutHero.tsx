import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function AboutHero() {
  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <h1 className="max-w-2xl text-4xl md:text-5xl font-bold">
        Hello! I'm Jeff Ordway, a full-stack developer with an eye for design.
      </h1>
      <div className="max-w-2xl font-light text-stone-700 dark:text-stone-300">
        <p>
          I'm passionate about creating visually stunning and engaging coding
          projects that inspire a sense of hope and joy in every user. However,
          my journey to becoming a developer was not a straightforward one.
        </p>
        <br />
        <p>
          I started my career in Parks and Recreation, organizing community
          sports programs and events. This experience helped me develop
          essential problem-solving and team-building skills that have proved
          invaluable in my career. However, my persistent curiosity about coding
          and design led me to open the door to becoming a full-stack developer.
        </p>
        <br />
        <p>
          Despite the challenges of transitioning to a new career, I've never
          let fear guide my decisions. So, I enrolled at the Bethel School of
          Technology, where I became proficient in JavaScript, Typescript,
          React, MySQL, MongoDB, Tailwind, Bootstrap, HTML, React, HTML, CSS,
          Ajax, JSON, and Figma.
        </p>
        <br />
        <p>
          Although this journey hasn't been easy, it has helped me grow to
          become a confident developer. I believe every line of code is an
          opportunity to brighten someone's day. That's why I approach each
          project with a focus on excellence, integrity, and courage.
        </p>
        <br />
        <p>
          When I'm not busy coding, you can find me spending quality time with
          my family, playing games and sports with friends, or exploring the
          great outdoors.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
