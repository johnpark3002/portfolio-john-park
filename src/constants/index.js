import LeagueOfLegends from "../assets/projects/league-of-legends.jpg";
import BudgetApp from "../assets/projects/budget-management-application.jpg";
import iPhoneApp from "../assets/projects/iphone-application-development.jpg";
import PourDecisions from "../assets/projects/pourdecisions-website.png";
import LibraryApp from "../assets/projects/library-management-website.png";
import AutonomousRobot from "../assets/projects/autonomous-robot-project.png";

export const HERO_CONTENT = `An aspiring Software Engineer passionate about building efficient, user-friendly solutions. Experienced in full-stack development with a focus on accessible technologies and real-world problem-solving.`;

export const ABOUT_TEXT = `I'm a recent Software Engineering graduate from McGill University with experience in full-stack development, specializing in React, Spring Boot, and database management. During my internship at Ciena Corporation, I developed a responsive budget management app that improved data entry efficiency by 40% and enhanced security with role-based access control. My capstone project, a vision-guided navigation app for the visually impaired, reflects my commitment to inclusive technology. I’m eager to contribute to impactful projects, optimize workflows, and grow as a software engineer within a dynamic team.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "OPS Lab Eng Stations Support",
    company: "Ciena Corporation",
    description: `Developed a budget management web applications using React.js, and Spring. Implemented RESTful APIs and integrated with Microsoft SQL Server databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Spring ", "React.js", "Java", "Microsoft SQL Server"],
  },
];

export const PROJECTS = [
  {
    title: "League of Legends eSports Prediction Model",
    image: LeagueOfLegends,
    description:
      "A machine learning model using Python and Scikit-learn to predict the outcome of League of Legends eSports matches with a precision of over 90%.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit Learn", "Random Forest Classifier"],
  },
  {
    title: "Budget Management Application",
    image: BudgetApp,
    description:
      "A web application to streamline budget management. Implemented features to optimize user experience and ensure efficient data storage.",
    technologies: ["React.js", "Spring", "Microsoft SQL Server", "KendoReact UI", "Java"],
  },
  {
    title: "Vision-guided Navigation Assistance for the Visually Impaired",
    image: iPhoneApp,
    description:
      "A smart navigation system for the visually impaired, leveraging a YOLO-based model to detect bus shelters. The solution provided audio and haptic feedback through a mobile app.",
    technologies: ["Python", "TensorFlow", "YOLO Image Classification", "Swift"],
  },
  {
    title: "PourDecisions",
    image: PourDecisions,
    description:
      "A cocktail recipe generator with an interactive user interface. Users could search for recipes by ingredients or alcohol type, powered by a backend API.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Library Management System",
    image: LibraryApp,
    description:
      "A library system allowing users to search and borrow books. Integrated a responsive interface and a robust backend to manage users and data.",
    technologies: ["Java", "Spring", "Vue.js", "Android Studio", "PostgreSQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Autonomous Robot",
    image: AutonomousRobot,
    description:
      "A virtual robot implementing control algorithms for navigation and obstacle avoidance.",
    technologies: ["Java", "Webots", "LeoCAD"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "john_park3002@hotmail.com",
};
