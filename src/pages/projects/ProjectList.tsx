import React, { useContext } from "react";
import ProjectCards from "../../components/common/ProjectCards";
import ProjectHero from "../../components/projects/ProjectHero";
import { ProjectContext } from "../../contexts/ProjectContext";

function ProjectList() {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <ProjectHero />
      <ProjectCards
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        reactLink=""
        projects={projects}
      />
    </div>
  );
}

export default ProjectList;
