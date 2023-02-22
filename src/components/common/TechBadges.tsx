import React from "react";

function TechBadges(skill: string) {
  return (
    <div key={skill} className="flex">
      <div className="items-center rounded-full bg-sky-600 shadow shadow-stone-300 dark:shadow-stone-700 px-2.5 py-1.5 text-xs text-stone-200 hover:text-stone-100 hover:bg-sky-500 dark:hover:bg-sky-700">
        {skill}
      </div>
    </div>
  );
}

export default TechBadges;
