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
      "Documented the UI for the CAFM Pro application",
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
    timespan: "July 2020 - July 2020",
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
    name: "Safety Ambassador Program",
    type: "Web Application",
    website_url: "http://lakimapturn.pythonanywhere.com/",
    image: "/lakimapturn.github.io/images/sap.JPG",
    short_desc:
      "Safeguarding Juniors by Spreading Awareness on Staying Safe On The Internet Post-Covid",
    long_desc: [
      "<strong>Inspiration: </strong>During Covid, the entire world began relying on the internet for daily activities. This audience included young children who don't know any better. This website aimed at educating them and helping them stay safe online.",
      "Used games and modules to educate students on various topics such as Digital Safety, Digital Identity, Dealing With Inappropriate Content Online, etc.",
      "Taylored content for students of different ages.",
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
    name: "Tournament Tracker",
    type: "Web Application",
    short_desc: "Inter-School Tournament Tracker",
    url: "https://www.youtube.com/embed/KXrW5_j8mBI",
    long_desc: [
      "<strong>Inspiration: </strong>My highschool kept no record of previous years tournament winners and there was no way for participants to track their performance across tournaments to show universities.",
      "Integrated excel sheet processing so that coaches could enter an excel sheet with all participants and teams would be created automatically using given information.",
      "Created an algorithm that randomizes tournament matches and creates a single elimination tournament.",
      "Used our country's ID to track player performance and create portfolios for them.",
      "Awarded points to each team based on match outcomes and calculated winner at the end of the tournament.",
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
    ],
  },
  {
    name: "Elite English School Communicator Application",
    type: "Mobile Application",
    short_desc:
      "iOS Application To Strengthen Communication Between Parents and School Staff.",
    long_desc: [
      "Allows parents to view outstanding fee amounts, upcoming school events, subject specific conversations and circulars.",
      "Displayed test scores and end of year report cards.",
      "Tracked student attendance.",
    ],
    skills: [skills.react_native, skills.javascript, skills.php],
  },
  {
    name: "Community",
    type: "Mobile Application",
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
    ],
  },
  {
    name: "Railway Reservation",
    type: "Web Application",
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

const leadership = [
  {
    name: "Co-lead at GT Web Dev Club",
    desc: [
      "Co leading the project Fashion GPT: a full stack web application that harnesses AI to suggest clothing to users based on their input",
    ],
  },
  {
    name: "Founded Exponential Technologies Club at High School",
    desc: [
      "Hosted workshops weekly to teach students about web development.",
      "Organized hackathons and collaborative projects where passionate students could work together to solve a problem and learn.",
    ],
  },
];

// Typewriter code
const carouselText = ["Software Developer", "Innovator", "Tutor", "Learner"];

document.addEventListener("DOMContentLoaded", () => {
  const func = async () => {
    carousel(carouselText, "#feature-text");
  };
  func();
});

async function typeSentence(sentence, eleRef, delay = 100) {
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
