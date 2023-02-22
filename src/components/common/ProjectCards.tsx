import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { project, ProjectContext } from "../../contexts/ProjectContext";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface ProjectCardsProps {
  className: string;
  reactLink: string;
  projects: project[];
}

function ProjectCards({ className, reactLink, projects }: ProjectCardsProps) {
  const { lightModeStyle, darkModeStyle } = useContext(DarkModeContext);
  projects.sort((a, b) => b.id - a.id);

  function Card(item: project) {
    return (
      <li
        key={item.title}
        className={`${lightModeStyle} ${darkModeStyle} col-span-1 rounded-xl border shadow`}
      >
        <div className="flex w-full items-center gap-6 p-6">
          <img
            className={`w-16 h-16 rounded-full object-cover bg-sky-600`}
            src={item.thumbnailImgUrl}
            alt={item.title}
          />
          <div className="flex-row">
            <div className="text-sm font-bold text-stone-800 dark:text-stone-200">
              {item.title}
            </div>
            <div className="flex grow my-2 text-sm font-light text-stone-600 dark:text-stone-300">
              {item.tagline}
            </div>
            <div className="flex">
              <div className="mr-6">
                <Link
                  to={`${reactLink}${encodeURI(item.title)}`}
                  className="flex gap-2 justify-start items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
                >
                  <div>more details</div>
                  <HiArrowUpRight />
                </Link>
              </div>
              {item.gitHub ? (
                <a
                  href={item.gitHubOrCaseStudyLink}
                  target="_blank"
                  className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
                >
                  <span className="mr-1">view on github</span>
                  <HiArrowUpRight />
                </a>
              ) : (
                <a
                  href={item.gitHubOrCaseStudyLink}
                  download
                  className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
                >
                  <span className="mr-1">download case study</span>
                  <HiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    );
  }

  return (
    <ul role="list" className={className}>
      {projects.map((project: project) => Card(project))}
    </ul>
  );

  // return (
  //   <ul role="list" className={className}>
  //     {projects.map((project: project) => (
  //       <li
  //         key={project.title}
  //         className={`${lightModeStyle} ${darkModeStyle} col-span-1  rounded-xl border shadow`}
  //       >
  //         <div className="flex w-full items-center justify-between p-6">
  //           <img
  //             className="h-16 w-16 rounded-full bg-stone-600 hidden"
  //             src={project.thumbnailImgUrl}
  //             alt=""
  //           />
  //           <div className="flex-1">
  //             <div className="flex items-center">
  //               <h3 className="text-sm font-bold text-stone-800 dark:text-stone-200">
  //                 {project.title}
  //               </h3>
  //             </div>
  //             <p className="mt-1 text-sm font-light text-stone-600 dark:text-stone-300">
  //               {project.heading}
  //             </p>

  //             <div className="flex items-center pt-2">
  //               <Link
  //                 to={`projects/${project.id}`}
  //                 className="flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
  //               >
  //                 <div className="flex items-center m-r">
  //                   <div className="mr-1">more details</div>
  //                   <HiArrowUpRight />
  //                 </div>
  //               </Link>
  //               <a
  //                 href={``}
  //                 target="_blank"
  //                 className="flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
  //               >
  //                 <span className="mr-1">view on github</span>
  //                 <HiArrowUpRight />
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </li>
  //     ))}
  //   </ul>
  // );
}

export default ProjectCards;
