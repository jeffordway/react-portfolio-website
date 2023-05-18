import React from "react";
import TechBadges from "./TechBadges";

function TechSkills() {
  const techSkills: string[] = [
    "Email Marketing",
    "A/B Testing",
    "MailChimp",
    "Constant Contact",
    "Microsoft Office 365",
    "Google Workspace",
    "Figma",
    "Visual Design",
    "User Research",
    "Wireframing",
    "Prototyping",
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwinds",
    "Bootstrap",
    "Git",
    "Trello",
    "Scrum",
    "Kanban",
  ];

  techSkills.sort();

  return (
    <>
      <h2 className="font-bold mb-6 text-stone-700 dark:text-stone-300">
        My Technical Skills
      </h2>
      <div className="grid justify-items-start font-semibold grid-flow-row auto-rows-max grid-cols-1 xs:grid-cols-2 gap-4">
        {techSkills.map((skill: string) => TechBadges(skill))}
      </div>
    </>
  );
}

export default TechSkills;
