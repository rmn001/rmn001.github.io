import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    netsol,
    georgiatech,
    avs,
    nts,
    plg,
    pma,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "AI/ML",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "AI/ML Intern",
      company_name: "Netsol Technologies",
      icon: netsol,
      iconBg: "#FFFFFF",
      date: "June 2024 - July 2024",
      points: [
        "•	Developed a cutting-edge resume analyzer leveraging Grok, Lang Chain, and Llama that evaluates and ranks resumes based on predefined job criteria such as skills and experience.",

        "•	Conducted rigorous testing on over 1,000 resumes, resulting in the identification of 5 top candidates, with 2 successfully hired.",

        "•	Implemented a ranking algorithm to match resumes to job descriptions, improving candidate filtering by 40%.",
        
      ],
    },
    {
      title: "Undergraduate Computer Vision Researcher",
      company_name: "Georgia Tech",
      icon: georgiatech,
      iconBg: "#FFFFFF",
      date: "Oct 2023 - Present",
      points: [
        "•	Engineered a machine vision model in Python to detect critical features at intersection crossways using supervised learning techniques, achieving a detection accuracy of  60%.",
        "•	Collaborated on enhancing OpenStreetMap data to implement advanced graphing algorithms, identifying optimal wheelchair-accessible paths within Gwinnett County, Georgia.",
        "•	Continuously refining algorithms and models, aiming to increase detection accuracy by 25% and reduce pathfinding computation time by 20%.",
        
      ],
    },
  ];
  
  const projects = [
    {
      name: "Autonomous Vehicle Simulation",
      description:
        "Developed a web-based autonomous vehicle simulation using physics-based dynamics and AI algorithms. The platform enables real-time analysis of over 50 vehicle scenarios with an intuitive interface for modifying and analyzing performance.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow.js",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: avs,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project Management Assistant",
      description:
        "An AI-powered task management platform enabling real-time collaboration, natural language task creation, and offline functionality. Integrated AI-driven insights, secure authentication, and real-time task updates for enhanced productivity.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "NLP libraries",
          color: "pink-text-gradient",
        },
      ],
      image: pma,
      source_code_link: "https://github.com/",
    },
    {
      name: "Neighborhood Tool Sharing App",
      description:
        "A cross-platform mobile app that allows local communities to lend and borrow tools, featuring location-based listings, scheduling, and real-time notifications for tool requests.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Google API",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
      ],
      image: nts,
      source_code_link: "https://github.com/",
    },
    {
      name: "Dynamic Puzzle Level Generator",
      description:
        "An App that generates unique, challenging puzzle levels, dynamically adjusting layouts based on player performance and skill progression to ensure varied and engaging gameplay.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "JSON",
          color: "pink-text-gradient",
        },
      ],
      image: plg,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };