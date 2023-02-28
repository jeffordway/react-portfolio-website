import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export interface project {
  id: number;
  title: string;
  tagline: string;
  tools: string[];
  description: string;
  thumbnailImgUrl: string;
  heroImgUrl: string;
  demo:boolean;
  demoLink: string;
  gitHub: boolean;
  gitHubOrCaseStudyLink: string;
}

interface ProjectContextProps {
  projects: project[];
  setProjects: Dispatch<SetStateAction<project[]>>;
}

interface ProjectContextProviderProps {
  children: ReactNode;
}

export const ProjectContext = createContext<ProjectContextProps>({
  projects: [
    {
      id: 0,
      title: "",
      tagline: "",
      tools: [""],
      description: "",
      thumbnailImgUrl: "",
      heroImgUrl: "",
      demo: true,
      demoLink: "",
      gitHub: true,
      gitHubOrCaseStudyLink: "",
    },
  ],
  setProjects: () => {},
});

export const ProjectProvider = ({ children }: ProjectContextProviderProps) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "GrapeLine Transit App",
      tagline:
        "Enhancing local transportation with a user-friendly mobile app for hassle-free travel on the Grapevine.",
      tools: [
        "UX Research",
        "UX Ideation",
        "UX Architecture",
        "UI Style Guide",
        "UI Design",
        "App Prototype",
        "Figma",
      ],
      description:
        "Public transportation often gets a bad rap in the US. I wanted to change that by designing an improved mobile application for the Grapeline, the local transportation network in Lodi and Woodbridge, California. The goal was to make it easy for residents to plan their trips, purchase tickets, and track bus locations all in one place. I conducted research, developed user personas, created wireframes, designed a UI style guide, and created a prototype of the application.",
      thumbnailImgUrl: "/assets/icons/grapeline-transit-app-thumbnail.svg",
      heroImgUrl: "/assets/images/grapline-transit-app-hero.jpg",
      demo: true,
      demoLink:
        "https://www.figma.com/proto/IdbIdO8dxODJmwcyP1gVhg/The-Grape-Line-App-Prototype?page-id=191%3A9981&node-id=191%3A10072&viewport=603%2C2440%2C0.25&scaling=min-zoom&starting-point-node-id=276%3A19713&show-proto-sidebar=1",
      gitHub: false,
      gitHubOrCaseStudyLink:
        "/assets/documents/grapeline-transit-app-case-study.pdf",
    },
    {
      id: 2,
      title: "Axiel Reading App",
      tagline:
        "Empowering students with dyslexia to read with confidence and ease through a multi-sensory mobile app.",
      tools: [
        "UX Research",
        "UX Ideation",
        "UX Architecture",
        "UI Style Guide",
        "UI Design",
        "App Prototype",
        "Figma",
      ],
      description:
        "Reading can be daunting for students with dyslexia, so I made it my mission to develop a tool that could help improve their reading comprehension skills. Through countless hours of research and ideation, I created a concept for a mobile application that incorporates multi-sensory reading techniques to engage and empower students with dyslexia to read with ease. The design process was extensive, and I went above and beyond to ensure that the final product would genuinely make a difference in the lives of our target audience. Overall, this project was incredibly challenging, but it was also immensely gratifying to see its potential to impact the lives of those who used it.",
      thumbnailImgUrl: "/assets/icons/axiel-reading-app-thumbnail.svg",
      heroImgUrl: "/assets/images/axiel-reading-app-hero.jpg",
      demo: true,
      demoLink:
        "https://www.figma.com/proto/qjgiCgFkUwfpOuni3iaV72/Capstone-Project-UIUX108?page-id=319%3A8651&node-id=319%3A10640&viewport=268%2C727%2C0.03&scaling=scale-down&starting-point-node-id=333%3A14175&show-proto-sidebar=1",
      gitHub: false,
      gitHubOrCaseStudyLink:
        "/assets/documents/axiel-reading-app-case-study.pdf",
    },
    {
      id: 3,
      title: "Pizza Order Form",
      tagline:
        "From dough to delivery: a fun and functional pizza ordering experience showcasing my HTML, CSS, and JavaScript skills.",
      tools: ["JavaScript", "CSS", "HTML", "Figma", "VS Code"],
      description:
        "I created a fun and engaging pizza order form for my first project on my journey to become a full-stack software developer. It is a simple but functional form where users can select their preferred crust, sauce, and toppings, and once submitted, the site will display their completed order and total cost. This project demonstrates my understanding of HTML, CSS, and JavaScript. I found it a fun and engaging process and enjoyed implementing styling with CSS to give it a unique design.",
      thumbnailImgUrl: "/assets/icons/pizza-order-form-thumbnail.svg",
      heroImgUrl: "/assets/images/pizza-order-form-hero.jpg",
      demo: true,
      demoLink: "https://obj-pizza-store-front.netlify.app",
      gitHub: true,
      gitHubOrCaseStudyLink: "https://github.com/jeffordway/pizza-order-form",
    },
    {
      id: 4,
      title: "Responsive Resume",
      tagline:
        "Showcasing my skills with Flexbox, CSS Grid, Bootstrap, and Ajax to create a beautiful responsive resume for Adventure Kyle.",
      tools: [
        "JavaScript",
        "CSS",
        "HTML",
        "Ajax",
        "Bootstrap",
        "Figma",
        "VS Code",
      ],
      description:
        "This project was about creating an exciting and unforgettable landing page for Kyle's adventurous resume. To make it stand out, we used Flexbox, CSS Grid, or Bootstrap to create an eye-catching design. But we didn't stop there! We added an extra touch of wow factor by using AJAX in JavaScript to fetch and display random advice from an API. It was an absolute blast to flex our creative muscles and ensure the page looks great on any screen. With a combination of design and functionality, Kyle's resume landing page will leave a lasting impression.",
      thumbnailImgUrl: "/assets/icons/responsive-resume-thumbnail.svg",
      heroImgUrl: "/assets/images/responsive-resume-website-hero.jpg",
      demoLink: "https://obj-responsive-resume.netlify.app",
      demo: true,
      gitHub: true,
      gitHubOrCaseStudyLink: "https://github.com/jeffordway/responsive-resume",
    },
    {
      id: 5,
      title: "React Guessing Game",
      tagline:
        "Test your luck with my fun React-based guessing game; that is a blast to play. It is tested and approved by my nieces and nephews.",
      tools: ["React", "JavaScript", "CSS", "Bootstrap", "Figma", "VS Code"],
      description:
        "I created a fun and engaging guessing game application using React that challenges users to guess a random lucky number between 1 and 100. With the help of the useState hook, I tracked the user's guess and the number of attempts made. The game interface includes a reset button that generates a new lucky number for the user to guess. To ensure a seamless user experience, I used Local Storage to store the game's progress and allow users to continue from where they left off even after refreshing the app. I utilized CSS Modules and Bootstrap components to create an interactive and visually appealing game. The best part of this project was watching my nieces and nephews enjoy playing the game and asking for more rounds.",
      thumbnailImgUrl: "/assets/icons/react-guessing-game-thumbnail.svg",
      heroImgUrl: "/assets/images/react-guessing-game-hero.jpg",
      demo: true,
      demoLink: "https://obj-react-guessing-game.netlify.app/",
      gitHub: true,
      gitHubOrCaseStudyLink:
        "https://github.com/jeffordway/react-guessing-game",
    },
    {
      id: 6,
      title: "React Store Front",
      tagline:
        "A user-friendly online storefront for the fictional Montclaire Farms built with React, CRUD functionality, search filters, and stylish CSS design.",
      tools: ["React", "JavaScript", "CSS", "Axios", "Bootstrap", "VS Code"],
      description:
        "Using React, I built a fully-functional online storefront for the fictional Montclaire Farms by designing a data model for items, creating a JSON server with mock items, and implementing advanced features such as CRUD functionality, search filters, and stylish CSS design using React Bootstrap Components, resulting in a user-friendly and polished application that was a joy to work on and see come together as the front half of a full-stack application.",
      thumbnailImgUrl: "/assets/icons/react-store-front-thumbnail.svg",
      heroImgUrl: "/assets/images/react-store-front-hero.jpg",
      demo: false,
      demoLink: "https://betheltech.net",
      gitHub: true,
      gitHubOrCaseStudyLink: "https://github.com/jeffordway/react-store-front",
    },
    {
      id: 7,
      title: "CRUD Application",
      tagline:
        "A Pet Adoption website with efficient data management, user-friendly design, and the potential to inspire adoptions.",
      tools: [
        "TypeScript",
        "MySQL",
        "Express",
        "Handlebars",
        "Morgan",
        "Sequelize",
        "VS Code",
      ],
      description:
        "A Pet Adoption website that allows users to manage pets for adoption using basic CRUD operations. To ensure my website is scalable and efficient, I used an MVC architecture and Sequelize as the ORM to a MySQL database. I also carefully designed CRUD operations and created a visually appealing and easy-to-use layout. I'm excited to show off my skills and share this website with others. It may even encourage someone to adopt a new furry friend!",
      thumbnailImgUrl: "/assets/icons/crud-application-thumbnail.svg",
      heroImgUrl: "/assets/images/crud-application-hero.jpg",
      demo: false,
      demoLink: "https://betheltech.net",
      gitHub: true,
      gitHubOrCaseStudyLink: "https://github.com/jeffordway/crud-application",
    },
    {
      id: 8,
      title: "Twitter Clone",
      tagline:
        "A secure full-stack web application for managing profiles and posts with user authentication and authorization.",
      tools: [
        "React",
        "TypeScript",
        "JavaScript",
        "MySQL",
        "Axios",
        "Bcrypt",
        "Express",
        "JsonWebToken",
        "Sequelize",
      ],
      description:
        "This project is my first shot at developing a full-stack web application that lets users manage profiles and create posts, complete with a backend that handles requests, user authentication, and authorization. I incorporated user registration and login using JWT tokens to ensure the application is secure and private. The home page showcases all authenticated users' posts, and clicking on a username redirects you to their profile page. Users can view any profile and edit their profile data, but only their posts. Building this application was a thrilling experience, and I am proud of the result.",
      thumbnailImgUrl: "/assets/icons/twitter-clone-thumbnail.svg",
      heroImgUrl: "/assets/images/twitter-clone-hero.jpg",
      demo: false,
      demoLink: "https://betheltech.net",
      gitHub: true,
      gitHubOrCaseStudyLink:
        "https://github.com/jeffordway/twitter-clone-client",
    },
    {
      id: 9,
      title: "React Portfolio Website",
      tagline:
        "Explore my full-stack developer's journey and showcase my design skills through this React-built portfolio site.",
      tools: ["React", "TypeScript", "Tailwinds"],
      description:
        "It may feel like inception, but it's the website you are viewing now. I used React to develop this portfolio site as a platform to display the projects I've completed on my journey to becoming a full-stack developer and to showcase my design skills. Moreover, this is the very first application that I have deployed after completing its development.",
      thumbnailImgUrl: "/assets/icons/react-portfolio-website-thumbnail.svg",
      heroImgUrl: "/assets/images/react-portfolio-website-hero.jpg",
      demo: true,
      demoLink: "https://www.jeffordway.com",
      gitHub: true,
      gitHubOrCaseStudyLink:
        "https://github.com/jeffordway/react-portfolio-website",
    },
  ]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
