import React from "react";
import AboutHero from "../components/about/AboutHero";
import ConnectLinks from "../components/common/ConnectLinks";
import TechSkills from "../components/common/TechSkills";

function About() {
  return (
    <div className="grid grid-flow-row auto-rows-auto md:grid-cols-5 gap-12 md:gap-16">
      <div className="w-80 h-80 rotate-6 overflow-hidden rounded-2xl md:col-span-2">
        <img src="./assets/images/jeff.jpg" alt="Photo of Jeff" />
      </div>
      <div className="md:order-first md:row-span-3 md:col-span-3">
      <AboutHero />
      </div>
      <div className="md:col-span-2">
        <TechSkills />
      </div>
      <div className="md:col-span-2">
        <ConnectLinks />
      </div>
    </div>
  );
}

export default About;
