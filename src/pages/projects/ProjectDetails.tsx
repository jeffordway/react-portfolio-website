import React, { useContext } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import TechBadges from "../../components/common/TechBadges";
import { ProjectContext } from "../../contexts/ProjectContext";
import NotFound from "../NotFound";

export interface Params {
  title: string;
}

export interface IdProfileRouteParams {
  id: string;
}
function ProjectDetails() {
  const { projects } = useContext(ProjectContext);
  const { title } = useParams<keyof Params>() as Params;

  const selectedProject = projects.find((p) => p.title === decodeURI(title));

  if (!selectedProject) return <NotFound />;

  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <img
        src={selectedProject.heroImgUrl}
        alt="Jeff Ordway Photo"
        className="max-w-2xl rounded-3xl aspect-video object-cover"
      />
      <div>
        <h1 className="max-w-2xl text-4xl md:text-5xl font-bold mb-4">
          {selectedProject.title}
        </h1>

        <div className="flex flex-wrap gap-4 max-w-2xl font-semibold">
          {selectedProject.tools.map((skill: string) => TechBadges(skill))}
        </div>
      </div>
      <div className="max-w-2xl font-light text-stone-600 dark:text-stone-300">
        <p>{selectedProject.description}</p>
      </div>

      <div className="flex items-center space-x-8 max-w-2xl">
        {selectedProject.demo && (
          <a
            href={selectedProject.demoLink}
            target="_blank"
            className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
          >
            <span className="mr-1">
              {selectedProject.gitHub ? "view demo" : "view prototype"}
            </span>
            <HiArrowUpRight />
          </a>
        )}

        {selectedProject.gitHub ? (
          <a
            href={selectedProject.gitHubOrCaseStudyLink}
            target="_blank"
            className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
          >
            <span className="mr-1">view on github</span>
            <HiArrowUpRight />
          </a>
        ) : (
          <a
            href={selectedProject.gitHubOrCaseStudyLink}
            download
            className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-sky-600 dark:text-stone-200 dark:hover:text-sky-600"
          >
            <span className="mr-1">download case study</span>
            <HiArrowUpRight />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
