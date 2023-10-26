const skills = {
  django: "Django",
  angular: "Angular",
  sql: "SQL",
  java: "Java",
  javascript: "JavaScript",
  python: "Python",
  rest_api: "Rest API",
  lua: "Lua",
  love2d: "LOVE 2D",
  php: "PHP",
  react: "reactJS",
  typescript: "TypeScript",
  springboot: "Spring Boot",
  html: "HTML",
  css: "CSS",
  react_native: "React Native",
  ml: "Machine Learning",
  flutter: "Flutter",
  heroku: "Heroku",
};

const internships = [
  {
    company: "EmQube LLC",
    position: "Software Tester & Mobile App Developer",
    location: "Dubai, UAE",
    timespan: "June 2023 - July 2023",
    logo: "/images/emqube.jpeg",
    description: [
      "Tested EmQube's in-development Facility Management Software called CAFM Pro.",
      "Suggested fixes for issues found.",
      "Developed a cross-platform mobile application using React Native. Integrated EmQube's backend and allowed users to create tickets for issues through the application.",
      "Documented the UI for the CAFM Pro application"
    ],
    skills: [
      skills.react_native,
      skills.angular,
      skills.html,
      skills.css,
      skills.javascript,
    ],
  },
  {
    company: "Triway Technologies",
    position: "Software Development Intern",
    location: "Dubai, UAE",
    timespan: "July 2021 - July 2021",
    description: [
      "Developed a full stack application that accepts user input, updates the database using API calls.",
      "Built frontend using Angular (TypeScript) and learnt about fetch requests and observable objects.",
      "Coded backend using Spring Boot (Java) and learnt about JPARepository, SQLite, and building my own API."
    ],
    logo: "/images/triway.png",
    skills: [
      skills.angular,
      skills.html,
      skills.css,
      skills.typescript,
      skills.java,
      skills.springboot,
    ],
  },
  {
    company: "Galaxkey",
    position: "Software Security Intern",
    location: "Dubai, UAE",
    timespan: "July 2020 - July 2020",
    logo: "/images/galaxkey.webp",
    description: [
      "Learnt about Software Security.",
      "Selected as team leader to find breaches in data protection within my high school context."
    ],
    skills: [],
  },
];

const projects = [
  {
    name: "Eco Trek",
    type: "Mobile Application",
    description: [],
    skills: [
      skills.ml,
      skills.flutter,
      skills.python,
      skills.django,
      skills.rest_api,
    ],
  },
  {
    name: "Paws",
    type: "Web Application",
    description: [],
    skills: [
      skills.react,
      skills.html,
      skills.css,
      skills.javascript,
      skills.rest_api,
      skills.django,
      skills.python,
      skills.heroku,
    ],
  },
  {
    name: "CAFM Mobile",
    type: "Mobile Application",
    description: [],
    skills: [skills.react_native, skills.javascript],
  },
  {
    name: "Tournament Tracker",
    type: "Web Application",
    description: [],
    skills: [
      skills.react,
      skills.html,
      skills.css,
      skills.javascript,
      skills.django,
      skills.python,
      skills.rest_api,
      skills.heroku,
    ],
  },
  {
    name: "Elite English School Communicator Application",
    type: "Mobile Application",
    description: [],
    skills: [skills.react_native, skills.javascript, skills.php],
  },
  {
    name: "Community",
    type: "Mobile Application",
    description: [],
    skills: [
      skills.react_native,
      skills.django,
      skills.python,
      skills.rest_api,
      skills.javascript,
      skills.heroku,
    ],
  },
  {
    name: "Railway Reservation",
    type: "Web Application",
    description: "",
    skills: [skills.java, skills.springboot, skills.html, skills.css],
  },
  {
    name: "Wrecking Ball",
    type: "Desktop Game",
    description: "",
    skills: [skills.lua, skills.love2d],
  },
];

// Typewriter code
const carouselText = [
  "Software Developer",
  "Innovator",
]

document.addEventListener("DOMContentLoaded", () => {
  const func = async () => {
    carousel(carouselText, "#feature-text")
  }
  func();
})

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = document.querySelector(eleRef).innerHTML;
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(eleRef).innerHTML = letters.join("");
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    await typeSentence(carouselList[i], eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) { i = 0; }
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}