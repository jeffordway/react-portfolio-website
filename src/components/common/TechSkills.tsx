import React from "react";
import TechBadges from "./TechBadges";

function TechSkills() {
  const techSkills: string[] = [
    "JavaScript",
    "TypeScript",
    "React",
    "NodeJS",
    "HTML",
    "CSS",
    "Ajax",
    "Axios",
    "Bcrypt",
    "Bootstrap",
    "Chai",
    "Express",
    "Figma",
    "Handlebars",
    "JSON",
    "Jest",
    "Jsonwebtoken",
    "Mocha",
    "MongoDB",
    "Mongoose",
    "MySQL",
    "Sequalize",
    "Tailwind",
    "VS Code",
  ];

  // techSkills.sort();

  return (
    <>
      <h2 className="font-bold mb-6 text-stone-700 dark:text-stone-300">
        My Tech Skills
      </h2>
      <div className="grid justify-items-start font-semibold grid-flow-row auto-rows-max grid-cols-2 xs:grid-cols-3 gap-4">
        {techSkills.map((skill: string) => TechBadges(skill))}
      </div>
    </>
  );
}

export default TechSkills;
