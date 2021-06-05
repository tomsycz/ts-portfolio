export const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    id: 1,
  },

  {
    label: "Projects",
    path: "/projects",
    id: 3,
  },
  {
    label: "cv / contact",
    path: "/cv",
    id: 4,
  },
];

export const HOME_DATA = {
  hi: "Hi! I'm",
  name: "Thomas",
  role: "I am a Front-End Developer",
  roles: [
    "I am a Front‑End Developer",
    "I am a rock climber",
    "I am a morning runner",
  ],
  paragraphs: [
    "My name is Thomas Syczyk. I am a self-taught front-end developer. Solving complex problems with clean and easy to maintain code, utilising React Ecosystem. Passionate about building user-friendly and mobile responsive applications. I firmly believe that hard work pays off, and in my case, it always did.",
    "Currently learning Typescript and working remotely from Nottingham, UK.",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 2,
    image: "https://i.ibb.co/m4WPDrW/proj1.png",
    name: "Crwn",
    description:
      "Fashoin e-commerce app built with React Ecosystem, including: Redux, Sagas, Styled Comoponents and more...",
    techStack: ["React", "Redux", "Sass", "Javascript"],
    apis: ["Stripe", "Google", "Firebase"],

    repoLink: "https://github.com/tomsycz/crwn-clothing-app",
    webLink: "https://fa-store-app.herokuapp.com/",
  },
  {
    id: 3,
    image: "https://i.ibb.co/2qCf7S1/proj2.png",
    name: "Natours",
    description:
      "Adventure holiday provider website, built with NodeJS, Express, MongoDB, Pug Templates and more...",
    techStack: ["NodeDotJs", "Mongodb", "Sass", "Javascript"],
    apis: ["Stripe", "MongoDB", "Mapbox"],
    repoLink: "https://github.com/tomsycz/natours",
    webLink: "https://natours-syczyk.herokuapp.com/",
  },
  {
    id: 1,
    image: "https://i.ibb.co/Sw0H2PK/proj3.png",
    name: "Calluna",
    description:
      "Cocktail bar fully responsive website, built using JavaScript, advanced CSS/SASS techniques and more...",
    techStack: ["Javascript", "Sass", "Html5", "Css3"],
    apis: ["Google Maps"],
    repoLink: "https://github.com/tomsycz/calluna",
    webLink: "https://calluna-nottingham.com",
  },
  {
    id: 4,
    image: "https://i.ibb.co/RSF4vDT/proj5.png",
    name: "SmartBrain",
    description:
      "Face detection app, utilizing Clarifai API, built wiht React, NodeJS, PostgreSQL and more...",
    techStack: ["NodeDotJs", "React", "Postgresql", "Javascript"],

    apis: ["Clarifai"],
    repoLink: "https://github.com/tomsycz/FaceRecognition",
    webLink: "https://face-detection-project-ts.herokuapp.com/",
  },
  {
    id: 0,
    image: "https://i.ibb.co/jHNXPR1/proj6.png",
    name: "Portfolio",
    description:
      "Personal portfolio you are currently visiting. Simple and clean SPA, built with React and Context API for global state management.",
    techStack: ["React", "Sass", "Html5"],
    repoLink: "https://github.com/tomsycz/ts-portfolio",
  },

  {
    id: 5,
    image: "https://i.ibb.co/SxBvyLK/proj4.png",
    name: "Natours (landing)",
    description:
      "Travel agency landing page, mobile responsive, designed with Sass",
    techStack: ["Html5", "Sass", "Css3"],
    repoLink: "https://github.com/tomsycz/Natours-landing",
    webLink: "https://tomsycz.github.io/Natours-landing/",
  },
];
