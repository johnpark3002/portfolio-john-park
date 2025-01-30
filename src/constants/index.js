import LeagueOfLegends from "../assets/projects/league-of-legends.jpg";
import BudgetApp from "../assets/projects/budget-management-application.jpg";
import iPhoneApp from "../assets/projects/iphone-application-development.jpg";
import PourDecisions from "../assets/projects/pourdecisions-website.png";
import LibraryApp from "../assets/projects/library-management-website.png";
import AutonomousRobot from "../assets/projects/autonomous-robot-project.png";

export const HERO_TITLE = {
  en: `Aspring Software Engineer`,
  fr: `Ingénieur logiciel en herbe`,
};

export const HERO_CONTENT = {
  en: `An aspiring Software Engineer passionate about building efficient, user-friendly solutions. Experienced in full-stack development with a focus on accessible technologies and real-world problem-solving.`,
  fr: "Un ingénieur logiciel en herbe passionné par la création de solutions efficaces et conviviales. Expérimenté en développement full-stack, avec un accent mis sur les technologies accessibles et la résolution de problèmes concrets.",
};

export const ABOUT = {
  en: `About`,
  fr: `À propos de`,
};

export const ME = {
  en: `Me`,
  fr: `moi`,
};

export const ABOUT_TEXT = {
  en: `I'm a recent Software Engineering graduate from McGill University with experience in full-stack development, specializing in React, Spring Boot, and database management. During my internship at Ciena Corporation, I developed a responsive budget management app that improved data entry efficiency by 40% and enhanced security with role-based access control. My capstone project, a vision-guided navigation app for the visually impaired, reflects my commitment to inclusive technology. I’m eager to contribute to impactful projects, optimize workflows, and grow as a software engineer within a dynamic team.`,
  fr: "Je suis un récent diplômé en génie logiciel de l'Université McGill avec une expérience en développement full-stack, spécialisé dans React, Spring Boot et la gestion de bases de données. Lors de mon stage chez Ciena Corporation, j'ai développé une application de gestion budgétaire réactive qui a amélioré l'efficacité de la saisie des données de 40 % et renforcé la sécurité grâce au contrôle d'accès basé sur les rôles. Mon projet de fin d'études, une application de navigation guidée par la vision pour les malvoyants, reflète mon engagement envers une technologie inclusive. Je suis enthousiaste à l'idée de contribuer à des projets percutants, d'optimiser les flux de travail et d'évoluer en tant qu'ingénieur logiciel au sein d'une équipe dynamique.",
};

export const DOWNLOAD_RESUME = {
  en: `Download my resume`,
  fr: `Télécharger mon CV`,
};

export const EXPERIENCE_TITLE = {
  en: `Experience`,
  fr: `Expérience`,
};

export const EXPERIENCES = {
  en: {
    experience: [
      {
        year: "2023 - 2024",
        role: "OPS Lab Eng Stations Support",
        company: "Ciena Corporation",
        description: `Developed a budget management web applications using React.js, and Spring. Implemented RESTful APIs and integrated with Microsoft SQL Server databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Spring ", "React.js", "Java", "Microsoft SQL Server"],
      },
    ],
  },
  fr: {
    experience: [
      {
        year: "2023 - 2024",
        role: "OPS Lab Eng Stations Support",
        company: "Ciena Corporation",
        description: `J'ai développé une application web de gestion budgétaire en utilisant React.js et Spring. J'ai implémenté des API RESTful et assuré l'intégration avec des bases de données Microsoft SQL Server. J'ai collaboré avec les parties prenantes pour définir les exigences et les délais du projet.`,
        technologies: ["Spring ", "React.js", "Java", "Microsoft SQL Server"],
      },
    ],
  },
};

export const PROJECTS_TITLE = {
  en: `Projects`,
  fr: `Projets`,
};

export const PROJECTS = {
  en: {
    projects: [
      {
        title: "League of Legends eSports Prediction Model",
        image: LeagueOfLegends,
        description:
          "A machine learning model using Python and Scikit-learn to predict the outcome of League of Legends eSports matches with a precision of over 90%.",
        technologies: [
          "Python",
          "Jupyter Notebook",
          "Pandas",
          "Scikit Learn",
          "Random Forest Classifier",
        ],
      },
      {
        title: "Budget Management Application",
        image: BudgetApp,
        description:
          "A web application to streamline budget management. Implemented features to optimize user experience and ensure efficient data storage.",
        technologies: [
          "React.js",
          "Spring",
          "Microsoft SQL Server",
          "KendoReact UI",
          "Java",
        ],
      },
      {
        title: "Vision-guided Navigation Assistance for the Visually Impaired",
        image: iPhoneApp,
        description:
          "A smart navigation system for the visually impaired, leveraging a YOLO-based model to detect bus shelters. The solution provided audio and haptic feedback through a mobile app.",
        technologies: [
          "Python",
          "TensorFlow",
          "YOLO Image Classification",
          "Swift",
        ],
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
        technologies: [
          "Java",
          "Spring",
          "Vue.js",
          "Android Studio",
          "PostgreSQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        title: "Autonomous Robot",
        image: AutonomousRobot,
        description:
          "A virtual robot implementing control algorithms for navigation and obstacle avoidance.",
        technologies: ["Java", "Webots", "LeoCAD"],
      },
    ],
  },
  fr: {
    projects: [
      {
        title: "Modèle de Prédiction pour l'eSport de League of Legends",
        image: LeagueOfLegends,
        description:
          "Un modèle d'apprentissage automatique utilisant Python et Scikit-learn pour prédire le résultat des matchs d'eSport de League of Legends avec une précision de plus de 90 %.",
        technologies: [
          "Python",
          "Jupyter Notebook",
          "Pandas",
          "Scikit Learn",
          "Classification par forêts aléatoires",
        ],
      },
      {
        title: "Application de gestion de budget",
        image: BudgetApp,
        description:
          "Une application web pour simplifier la gestion des budgets. Mise en œuvre de fonctionnalités pour optimiser l'expérience utilisateur et garantir une gestion efficace des données.",
        technologies: [
          "React.js",
          "Spring",
          "Microsoft SQL Server",
          "KendoReact UI",
          "Java",
        ],
      },
      {
        title:
          "Assistance à la navigation guidée par vision pour les malvoyants",
        image: iPhoneApp,
        description:
          "Un système de navigation intelligent pour les malvoyants, utilisant un modèle YOLO pour détecter les abribus. La solution fournit des retours audio et haptiques via une application mobile.",
        technologies: [
          "Python",
          "TensorFlow",
          "Classification d'image YOLO",
          "Swift",
        ],
      },
      {
        title: "PourDecisions",
        image: PourDecisions,
        description:
          "Un générateur de recettes de cocktails avec une interface utilisateur interactive. Les utilisateurs peuvent rechercher des recettes par ingrédient ou type d'alcool, alimenté par une API backend.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      },
      {
        title: "Site Web de gestion de bibliothèque",
        image: LibraryApp,
        description:
          "Un système de gestion de bibliothèque permettant aux utilisateurs de rechercher et d'emprunter des livres. Intégration d'une interface responsive et d'un backend robuste pour gérer les utilisateurs et les données.",
        technologies: [
          "Java",
          "Spring",
          "Vue.js",
          "Android Studio",
          "PostgreSQL",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
      {
        title: "Robot autonome",
        image: AutonomousRobot,
        description:
          "Un robot virtuel avec des algorithmes de contrôle pour la navigation et l'évitement d'obstacles.",
        technologies: ["Java", "Webots", "LeoCAD"],
      },
    ],
  },
};

export const CONTACT_TITLE = {
  en: `Get in touch`,
  fr: `Contactez-moi`,
};

export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "john_park3002@hotmail.com",
};
