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
    "I am a Front-End Developer",
    "I am a rock climber",
    "I am a morning runner",
  ],
  paragraphs: [
    "My name is Thomas Syczyk. I am a self-thought front-end developer. Solving complex problems with clean and easy to maintain code. Utilising React Ecosystem. Passionate about building user friendly and mobile responsive applications. I strongly believe that hard work pays off, and in my case it always did.",
    "Currently learning Typescript and working remotely from Nottingham, UK.",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 2,
    image: "https://i.ibb.co/Hxf1136/Screenshot-2021-05-17-at-14-59-11.png",
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
    image: "https://i.ibb.co/mTb8k2F/Screenshot-2021-05-17-at-20-19-34.png",
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
    image: "https://i.ibb.co/1rm0nYk/Screenshot-2021-05-17-at-14-52-28.png",
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
    image: "https://i.ibb.co/cc1tk0B/Screenshot-2021-05-19-at-15-56-43.png",
    name: "SmartBrain",
    description:
      "Face detection app, utilizing Clarifai API, built wiht React, NodeJS, PostgreSQL and more...",
    techStack: ["NodeDotJs", "React", "Postgresql", "Javascript"],

    apis: ["Clarifai"],
    repoLink: "/",
    webLink: "/",
  },
  {
    id: 0,
    image: "https://i.ibb.co/RCJ5nK3/Screenshot-2021-05-19-at-14-39-56.png",
    name: "Portfolio",
    description:
      "Personal portfolio you are currently visiting. Simple and clean SPA, built with React and Context API for global state management.",
    techStack: ["React", "Sass", "Html5"],
    repoLink: "https://github.com/tomsycz/ts-portfolio",
  },

  {
    id: 5,
    image: "https://i.ibb.co/Jr1yVb4/Screenshot-2021-05-20-at-11-35-55.png",
    name: "Natours (landing)",
    description:
      "Travel agency landing page, mobile responsive, designed with Sass",
    techStack: ["Html5", "Sass", "Css3"],
    repoLink: "https://github.com/tomsycz/Natours-landing",
    webLink: "https://tomsycz.github.io/Natours-landing/",
  },
];
