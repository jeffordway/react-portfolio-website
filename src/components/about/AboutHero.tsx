import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function AboutHero() {
  return (
    <div className="grid grid-flow-row auto-rows-auto gap-6 md:gap-8">
      <h1 className="max-w-2xl text-4xl md:text-5xl font-bold">
        Hey there! It’s me, Jeff Ordway.
      </h1>
      <div className="max-w-2xl font-light text-stone-700 dark:text-stone-300">
        <p>
          I’m a former Parks and Recreation professional turned avid developer,
          designer, and marketer. I am passionate about harnessing my
          creativity, problem-solving skills, and adventurous spirit to design
          innovative, delightful solutions that inspire hope, ignite joy, and
          empower others.
        </p>
        <br />
        <p>
          You know, I’ve often been asked if my time in the Parks and Recreation
          Department was anything like the TV show. Well, not quite. But let me
          tell you, some days would have left even Leslie Knope’s head spinning.
        </p>
        <br />
        <p>
          Consider, for example, a day I was engrossed in our marketing plan for
          the Big Bunny 5K race. A knock at my office door interrupted my focus
          as I looked up to see a lady clutching a large, very disgruntled
          goose. She’d witnessed the bird swallowing marbles and figured the
          best course of action would be to bring it straight to Parks and Rec.
          Of course, goose rescue was not in my job description, but like many
          other days, the plan quickly flew out the window.
        </p>
        <br />
        <p>
          Following a flurry of frantic phone calls, we managed to secure the
          help needed for our marble-ingesting friend. It was a wild detour from
          the day’s plan, but hey, that’s life in Parks and Rec. Unexpected
          challenges that called for creative solutions were all part of the
          day’s work.
        </p>
        <br />
        <p>
          And guess what? The same principle holds true for design, development,
          and marketing. Code can go rogue, users find novel ways to interact
          with interfaces, and campaigns that look brilliant on paper might need
          a complete overhaul in practice. But experiences like the goose
          incident have taught me the value of quick thinking, adaptability, and
          prioritizing the user (or goose).
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
