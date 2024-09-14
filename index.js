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
  react: "ReactJS",
  typescript: "TypeScript",
  springboot: "Spring Boot",
  html: "HTML",
  css: "CSS",
  react_native: "React Native",
  ml: "Machine Learning",
  flutter: "Flutter",
  heroku: "Heroku",
  redux: "React Redux",
  flutter: "Flutter",
  saas: "SaaS",
  ocr: "OCR",
  openai: "OpenAI API",
  socketio: "SocketIO",
  mongodb: "MongoDB",
};

const internships = [
  {
    company: "Macs-G",
    position: "Full Stack Web & Flutter Developer",
    location: "Dubai, UAE",
    timespan: "May 2024 - August 2024",
    logo: "/images/macs-g.jpg",
    description: [
      "Integrated a SaaS multi-tenant architecture into an existing NodeJS + MySQL backend improving querying time by 35% and strengthening data security by 53%.",
      "Led development of a Construction Management software using Flutter + MySQL with room tracking via OCR and providing a seamless user experience for inspections and submitting reports.",
      "Implemented a Full Stack expense management client and admin application utilizing cloud storage, OCR features, and LLMs to process and extract data enabling automation thus reducing time spent by 32% and preventing misuse by 40%",
    ],
    skills: [
      skills.flutter,
      skills.react,
      skills.redux,
      skills.saas,
      skills.javascript,
      skills.html,
      skills.css,
      skills.ocr,
    ],
  },
  {
    company: "EmQube LLC",
    position: "Software Tester & Mobile App Developer",
    location: "Dubai, UAE",
    timespan: "June 2023 - Aug 2023",
    logo: "/images/emqube.jpeg",
    description: [
      "Tested EmQube's in-development Facility Management Software called CAFM Pro.",
      "Suggested fixes for issues found.",
      "Developed a React Native cross-platform mobile application to offer on-demand services, enhancing the accessibility of the existing system by adding a mobile client alongside the server and web clients, resulting in a 20% increase in facility management companies' satisfaction and willingness to adopt the product",
      "Documented the UI for the CAFM Pro application.",
    ],
    skills: [
      skills.react_native,
      skills.angular,
      skills.html,
      skills.css,
      skills.javascript,
      skills.redux,
    ],
  },
  {
    company: "Triway Technologies",
    position: "Software Development Intern",
    location: "Dubai, UAE",
    timespan: "July 2021 - Aug 2021",
    description: [
      "Developed a full stack application that accepts user input, updates the database using API calls.",
      "Built frontend using Angular (TypeScript) and learnt about fetch requests and observable objects.",
      "Coded backend using Spring Boot (Java) and learnt about JPARepository, SQLite, and building my own API.",
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
    timespan: "July 2020 - Aug 2020",
    logo: "/images/galaxkey.webp",
    description: [
      "Learnt about Software Security.",
      "Selected as team leader to find breaches in data protection within my high school context.",
    ],
    skills: [],
  },
];

const projects = [
  {
    name: "Eco Trek",
    type: "Mobile Application",
    short_desc:
      "An Innovative Solution to Incentivise Keeping Our Environment Clean and Solving the Common Littering Problem",
    long_desc: [
      "Used machine learning and google maps api to plot a route between any 2 points that has the most amount of trash in its route",
      "Rewards users with points based on the amount of trash picked up (this is checked by our machine learning model that analyzes trash in images and decides how dangerous it is to the environment)",
      "Added a community feature to share routes and organise community events",
    ],
    url: "https://www.youtube.com/embed/Pcv44IMOBo8",
    skills: [
      skills.ml,
      skills.flutter,
      skills.python,
      skills.django,
      skills.rest_api,
    ],
  },
  {
    name: "Tournament Tracker",
    type: "Web Application",
    short_desc: "Inter-School Tournament Tracker",
    url: "https://www.youtube.com/embed/KXrW5_j8mBI",
    long_desc: [
      "<strong>Inspiration: </strong>My highschool kept no record of previous years tournament winners and there was no way for participants to track their performance across tournaments to show universities.",
      "Developed a full stack web application using React, Django, and SQL to track inter-school racquet sport tournaments.",
      "Integrated excel sheet processing so that coaches could enter an excel sheet with all participants and teams would be created automatically using given information.",
      "Created an algorithm that randomizes tournament matches and creates a single elimination tournament.",
      "Used our country's ID to track player performance and create portfolios for them.",
      "Awarded points to each team based on match outcomes and calculated winner at the end of the tournament.",
      "<a target=\"_blank\" href='https://tournament-web-app-zeta.vercel.app/'>Frontend URL</a>",
      "<a target=\"_blank\" href='https://lakimapturn1.pythonanywhere.com/'>Backend URL</a> (username - visitor, password - admin)",
      "<i>Note: The backend & frontend fall asleep when inactive and may take a few seconds to load.<i>",
    ],
    skills: [
      skills.react,
      skills.html,
      skills.css,
      skills.javascript,
      skills.django,
      skills.python,
      skills.rest_api,
      skills.heroku,
      skills.redux,
    ],
  },
  {
    name: "Safety Ambassador Program",
    type: "Web Application",
    website_url: "http://lakimapturn.pythonanywhere.com/",
    image: "/images/sap.JPG",
    short_desc:
      "Safeguarding Juniors by Spreading Awareness on Staying Safe On The Internet Post-Covid",
    long_desc: [
      "<strong>Inspiration: </strong>During Covid, the entire world began relying on the internet for daily activities. This audience included young children who don't know any better. This website aimed at educating them and helping them stay safe online.",
      "Collaborated with the Dubai Police to develop a web application using HTML, CSS, and Django to educate students (Gr 3-8) on digital safety through games and modules.",
      "Used games and modules to educate students on various topics such as Digital Safety, Digital Identity, Dealing With Inappropriate Content Online, etc.",
      "Tailored content for students of different ages.",
      "Impacted over 1500 users with an 80% improvement rate observed through pre and post surveys",
    ],
    skills: [
      skills.python,
      skills.django,
      skills.html,
      skills.css,
      skills.heroku,
    ],
  },
  {
    name: "Paws",
    type: "Web Application",
    short_desc: "The All-In-One Solution To All Your Dog's Needs",
    url: "https://www.youtube.com/embed/Eq7m1A2JB1o",
    long_desc: [
      "Allowed scheduling of important tasks with email remainders for things like vaccinations, checkups, etc.",
      "Harnessed google maps api to display the closest vetenary clinics and closest pet adoption center for users with no dogs",
      "Used dog breed to suggest potential favourite foods along with links to buy them at the cheapest price",
      "Created a community section for users to post questions and get answers on anything related to their dog",
    ],
    skills: [
      skills.react,
      skills.html,
      skills.css,
      skills.javascript,
      skills.rest_api,
      skills.django,
      skills.python,
      skills.heroku,
      skills.redux,
    ],
  },
  // {
  //   name: "CAFM Mobile",
  //   type: "Mobile Application",
  //   short_desc: " ",
  //   long_desc: [""],
  //   skills: [skills.react_native, skills.javascript],
  // },
  {
    name: "Elite English School Communicator Application",
    type: "Mobile Application",
    image: "/images/ees.png",
    short_desc:
      "iOS Application To Strengthen Communication Between Parents and School Staff.",
    long_desc: [
      "Championed development of an iOS app using React Native to enhance communication between students, parents, and the school while facilitating convenient access to student data.",
      "Allows parents to view outstanding fee amounts, upcoming school events, subject specific conversations and circulars.",
      "Displayed test scores and end of year report cards.",
      "Tracked student attendance.",
      "Built an API using PHP to enable data flow between the legacy SQLite database and the mobile application",
      "Improved information exchange between school and 3000+ students by 63%.",
    ],
    skills: [skills.react_native, skills.javascript, skills.php, skills.redux],
  },
  {
    name: "Community",
    type: "Mobile Application",
    url: "https://www.youtube.com/embed/KXrW5_j8mBI",
    short_desc:
      "A Community Management Application To Book Amenities and Generate Requests to Fix Issues",
    long_desc: [
      "Created an application that allows users to book amenities in their community.",
      "Coded backend so that amenities could be booked from different timezones.",
      "Allowed users to take images of issues and send location using google maps api along with creating requests",
    ],
    skills: [
      skills.react_native,
      skills.django,
      skills.python,
      skills.rest_api,
      skills.javascript,
      skills.heroku,
      skills.redux,
    ],
  },
  {
    name: "Railway Reservation",
    type: "Web Application",
    url: "https://www.youtube.com/embed/RWWvPpodUHI",
    short_desc: "My Grade 11 Project",
    long_desc: [
      "<strong>Inspiration: </strong>My Computer Science teacher told me we had to improve our 10th grade projects by using only Java. She referred to using the Java GUI, but my curiosity to learn more about SpringBoot inspired me to go beyond.",
      "Created a database using MySQL to store user information.",
      "Harnessed Vaadin to create a frontend using only Java",
    ],
    skills: [skills.java, skills.springboot, skills.html, skills.css],
  },
  {
    name: "Wrecking Ball",
    type: "Desktop Game",
    short_desc: "Recreation of An Old Original Game: Brick Breaker",
    url: "https://www.youtube.com/embed/LMOVRYhkMiY",
    long_desc: [
      "Harnessed Lua and LOVE2D to recreate Brick Breaker after learning game development from Harvard's Introduction to Game Development",
    ],
    skills: [skills.lua, skills.love2d],
  },
];

const achievements = [
  {
    name: "Winner of the Software Development Challenge in the DIAByte Hackathon 2021",
    desc: "",
  },
  {
    name: "Placed 4th in the Zenith “Hello, World” Hackathon 2021",
    desc: "",
  },
];

const leadershipActivities = [
  {
    name: "Georgia Tech College of Computing",
    position: "Discrete Mathematics Teaching Assistant",
    date: "August 2024 - Present",
    desc: [
      "Tutored students in topics such as Propositional Logic, Cryptography, and Algorithms (like Greedy, Recursive, Brute Force)",
      "Hosted weekly office hours, responded to discussion boards and questions, and provided feedback on student assignments",
    ],
    skills: ["Algorithms", "Teaching", "Discrete Mathematics"],
  },
  {
    name: "GT WebDev",
    position: "Vice President & Project Manager",
    date: "August 2023 - Present",
    desc: [
      {
        title: "FinSimIQ",
        details: [
          "Led the development of FinSimIQ, a gamified platform that teaches finance and stock market concepts through interactive quizzes and real-world stock simulations",
          "Facilitated personalized learning experiences by creating dynamic quizzes with React.js and Finance APIs for real-time data.",
        ],
      },
      {
        title: "Dungeons & Dragons",
        details: [
          "Spearheaded development of an interactive and multiplayer web-based Dungeons & Dragons game using React + OpenAI API.",
          "Enabled real-time multiplayer by creating live servers with WebSocket (SocketIO) and NodeJS.",
        ],
      },
      {
        title: "FashionGPT",
        details: [
          "Co-led the project Fashion GPT: a full stack web application that harnesses AI to suggest clothing to users based on their input",
          "Used React, NodeJS, OpenAI API, and MongoDB",
        ],
      },
    ],
    skills: [
      skills.react,
      skills.javascript,
      skills.nodejs,
      skills.socketio,
      skills.openai,
      skills.mongodb,
    ],
  },
  {
    name: "iOS Club GT",
    position: "Senior Developer",
    date: "August 2023 - Present",
    desc: [
      {
        title: "Polyplay",
        details: [
          "Developed an iOS mobile application that allows people to compete against friends while learning languages through interactive multiplayer mini-games and flashcards",
          "Utilize technologies including SwiftUI, Xcode, Firebase, GameKit/MultipeerConnectivity and OpenAI API",
        ],
      },
      {
        title: "ThoughtBank",
        details: [
          "Developed an iOS mobile application that took a new innovative approach to social media.",
          "Allowed users to make friends and share their thoughts with each other at different times of the day, sort of like a combination between Twitter and BeReal.",
          "Utilized technologies including SwiftUI, Xcode, and Firebase",
        ],
      },
    ],
    skills: [
      skills.swift,
      skills.xcode,
      skills.firebase,
      "GameKit",
      "MultipeerConnectivity",
      skills.openai,
    ],
  },
  {
    name: "Exponential Technologies Club",
    position: "Founder & Mentor",
    date: "August 2021 - March 2023",
    desc: [
      "Hosted workshops weekly to teach students about web development.",
      "Organized hackathons and collaborative projects where passionate students could work together to solve a problem and learn.",
    ],
    skills: [skills.javascript, skills.html, skills.css],
  },
];

// Typewriter code
const carouselText = ["Software Developer", "Innovator", "Tutor", "Learner"];

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
  disableScroll();

  const func = async () => {
    carousel(carouselText, "#feature-text");
  };

  const introText = document.querySelectorAll(".intro-text");
  const introContainer = document.getElementById("intro-container");
  const introTextContainer = document.querySelector(".intro-text-container");
  const introImageContainer = document.querySelector(".intro-image-container");
  const introImage = document.querySelector(".intro-image");

  introText.forEach((element, idx) => {
    setTimeout(() => {
      element.classList.add("active");
    }, (idx + 1) * 800);
  });

  setTimeout(() => {
    introTextContainer.style.width = "inherit";
  }, 1500);

  setTimeout(() => {
    introImageContainer.style.scale = 1;
  }, 2000);

  setTimeout(() => {
    introContainer.style.height = "60vh";
  }, 3000);

  setTimeout(() => {
    introImage.style.opacity = 1;
  }, 3800);

  setTimeout(() => {
    enableScroll();
    func();
  }, 5000);
});

async function typeSentence(sentence, eleRef, delay = 70) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(eleRef).append(letters[i]);
    i++;
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
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Preventing Scroll Code
function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
