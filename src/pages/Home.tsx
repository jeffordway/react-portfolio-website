import React, { useContext } from "react";
import ConnectLinks from "../components/common/ConnectLinks";
import TechSkills from "../components/common/TechSkills";
import HomeHero from "../components/home/HomeHero";
import HomePhotos from "../components/home/HomePhotos";
import ProjectCards from "../components/common/ProjectCards";
import { ProjectContext } from "../contexts/ProjectContext";

function Home() {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <HomeHero />
      <HomePhotos />
      <div className="grid grid-flow-row auto-rows-auto md:grid-cols-5 gap-12 md:gap-16">
        <div className="md:row-span-3 md:col-span-3">
          <h2 className="font-bold mb-6 text-stone-700 dark:text-stone-300">
            My Recent Projects
          </h2>
          <ProjectCards
            className="grid grid-cols-1 gap-6"
            reactLink="projects/"
            projects={projects.slice(-4)}
          />
        </div>
        <div className="md:col-span-2">
          <TechSkills />
        </div>
        <div className="md:col-span-2">
          <ConnectLinks />
        </div>
      </div>
    </div>
  );
}

export default Home;
