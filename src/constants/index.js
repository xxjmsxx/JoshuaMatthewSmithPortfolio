import {
  // feedback pictures
  nina,
  sebi,
  emma,
  ypfm,
  emptyprofile,

  // service icons
  mobile,
  backend,
  creator,
  web,

  // tech icons
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  python,
  rails,
  psql,
  redis,
  neo4j,

  // jobs icons
  lewagon,
  lofft,
  lfj,
  minime,

  //extras
  construction,

  // projects
  hoobank,
  FindMyMidwife,
  baseballcamp,
  endpointEngine,
  minimeProject,
  planyourplants,
  planyourplantsapi,
  Endpoint,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Innovative Problem Solving",
    icon: "/assets/creative.png",
  },
  {
    title: "Quality Assurance Excellence",
    icon: "/assets/quality.png",
  },
  {
    title: "Effective Communication",
    icon: "/assets/communication.png",
  },
  {
    title: "Adaptability and Growth",
    icon: "/assets/adaptability.png",
  },
];

const technologies = [
  { name: "Rails", icon: rails },
  { name: "React JS", icon: reactjs },
  { name: "Python", icon: python },
  { name: "Postgres", icon: psql },
  { name: "Docker", icon: docker },
  { name: "Neo4j", icon: neo4j },
  { name: "Redis", icon: redis },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
];

const experiences = [
  {
    title: "Founding Engineer",
    company_name: "Endpoint",
    icon: Endpoint,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Architected and developed Endpoint Engine, a next-generation cohort retrieval and medical data analysis system, inspired by Manus and tailored to healthcare research.",
      "Designed and implemented a custom agent framework integrating Python, FastAPI, and LLM tools like Gemini for multi-step reasoning, autonomous task execution, and narrative data analysis.",
      "Built multiple subsystems, including a local synthetic data engine, knowledge graph-powered data discovery tool, and medical cohort analysis platform with step-wise task planning and automated report generation.",
      "Pioneered agentic workflows for medical data pipelines, leveraging FAISS, Neo4j, and PostgreSQL for efficient, context-aware information retrieval.",
      "Developed a real-time thread management system for task tracking, memory management, and tool execution, allowing for complex, multi-stage medical data analysis.",
      "Continuously improved the platform by integrating user feedback, optimizing query performance, and extending support for medical cohort comparisons, narrative synthesis, and exploratory data analysis.",
      "Currently extending the system to support clinical trial recruitment, real-world evidence generation, and automated medical literature review.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Minime GmbH",
    icon: minime,
    iconBg: "#383E56",
    date: "Aug 2023 - Mar 2024",
    points: [
      "Collaborated on building innovative features for a therapy modernization app, using Ruby on Rails and JavaScript for a user-friendly interface.",
      "Led feature development from idea to deployment, enhancing user experience with mobile analysis writing and improved accessibility.",
      "Worked closely with the design team to optimize user experience, incorporating feedback for the best interaction.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#383E56",
    date: "Jan 2023 - Jun 2024",
    points: [
      "Led coding bootcamps in web development, database management, and user experience design at Le Wagon.",
      "Strengthened my proficiency in programming languages such as Ruby, Ruby on Rails, and JavaScript while teaching others.",
      "Worked in a collaborative team environment, collaborating with other instructors to develop and refine the curriculum.",
      "Provided personalized feedback to students and often refactored their code, improving my ability to communicate technical concepts and solidifying my understanding of these languages.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Lofft",
    icon: lofft,
    iconBg: "#383E56",
    date: "Jan 2023 - Jul 2023",
    points: [
      "Extensive experience in developing frontend technologies, particularly React, React Native, and Redux, as well as developing backend APIs with Ruby on Rails (originally Firebase).",
      "Conducted thorough testing of programs and databases to identify issues early and proactively make necessary changes.",
      "Worked within a close-knit team to assess the next strategic steps aimed at optimizing user experience and enhancing the overall functionality of the application.",
    ],
  },
  // {
  //   title: "(Please touch the tape to see application)",
  //   company_name: "⚠️ Currently under construction ⚠️",
  //   icon: lfj,
  //   iconBg: "#383E56",
  //   tape: construction,
  //   textColor: "#00CEA8",
  //   date: "As soon as possible",
  //   iconBg: "#383E56",
  //   points: [
  //     "I'm a hard worker who is very passionate about what I do.",
  //     "I'm a fast learner and always looking for ways to improve my skills.",
  //     "My best skill is collaborating within teams to achieve successful outcomes.",
  //     "I have a habit of bringing baked goods to the office.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "It's been awesome having Josh on the minime team! He's a quick learner and a talented full-stack Ruby on Rails developer who's always up for a challenge. Josh has a knack for coming up with creative solutions and loves diving into new features and challenges. He's not only reliable and committed but also made our project better with his proactive style. Highly recommend him if you’re looking for someone who’s ready to jump in and make an immediate impact!",
    name: "Nina Hackenbroich",
    designation: "Founder",
    company: "Minime GmbH",
    image: nina,
  },
  {
    testimonial:
      "Joshua is one of the very best! Nothing short of professional, well spoken and an overachieving developer who will always try and figure out a solution. Thank you for everything you've done for us, Josh!",
    name: "Emma Anna Agneta Rünzel",
    designation: "Batch Manager",
    company: "Le Wagon",
    image: emma,
  },
  {
    testimonial:
      "Josh has effectively streamlined operations for our annual Baseballcamp by implementing multiple software solutions. This has not only alleviated workload burdens but has also facilitated the creation of fairer and more competitive teams. Additionally, it has afforded me the opportunity to redirect my focus towards more important aspects of the camp.",
    name: "Yannick Matthias",
    designation: "Camp Lead",
    company: "EFG Herford",
    image: ypfm,
  },
  {
    testimonial:
      "Joshua showed exceptional problem solving skills and a collaborative mindset during his time at LeWagon. He would make a valuable contribution to any team.",
    name: "Sebastian Remm",
    designation: "Batch Manager",
    company: "Le Wagon",
    image: sebi,
  },
];

const projects = [
  {
    name: "Minime GmbH",
    project_type: "Professional",
    description:
      "Helped create a diverse range of therapy materials, digitized and presented in a playful format within a single, collaborative app, revolutionizing therapy resources for a more engaging and effective experience.",
    tags: [
      {
        name: "rails",
        color: "pink-text-gradient",
      },
      {
        name: "heroku",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: minimeProject,
    source_code_link: "",
    page_link: "https://www.minime.health/",
  },
  {
    name: "Endpoint Engine",
    project_type: "Professional",
    description:
      "Endpoint is a next-generation cohort retrieval and medical data analysis platform, designed for real-time, multi-step reasoning, task automation, and advanced data exploration. It powers healthcare insights through a custom agent framework integrating FAISS, Neo4j, FastAPI, and Python.",
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "Neo4j",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
    ],
    image: endpointEngine,
    page_link: "",
    source_code_link: "https://github.com/xxjmsxx/EndpointEngine",
  },
  {
    name: "Plan Your Plants",
    project_type: "Personal",
    description:
      "This is a React-side of personal project I started for my Mom, she wanted something to track all of her gardening needs. It utilizes a Rails backend API and Redux Statemangement. In the future I am planning on implementing Babylon.js for a 3D animated Garden that reacts to the health/weather data of the enviroment ",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: planyourplants,
    source_code_link: "https://github.com/xxjmsxx/plan-your-plants",
    page_link: "",
  },
  {
    name: "Plan Your Plants API",
    project_type: "Personal",
    description:
      "The Rails backend of the *Plan your Plants* project manages databases, user authentication, and server-side operations. It securely handles data with JWT tokens and provides API endpoints for seamless integration with the React frontend. This setup supports CRUD functionalities for managing gardens, plants, and user accounts, ensuring efficient and secure user interactions.",
    tags: [
      {
        name: "rails",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "rspec",
        color: "blue-text-gradient",
      },
    ],
    image: planyourplantsapi,
    source_code_link: "https://github.com/xxjmsxx/plan-your-plants-api",
    page_link: "",
  },
  {
    name: "HooBank",
    project_type: "Personal",
    description:
      "Explore a modern banking experience. This project is designed mainly as a Frontend Project where the design was my main focus over the functionality. The project was built using React, Firebase and TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: hoobank,
    // source_code_link: "https://github.com/xxjmsxx/JMSBank",
    page_link: "https://jmsbank-a2012.web.app/",
  },
  {
    name: "Find my Midwife",
    project_type: "Personal",
    description:
      "My first ever project created at LeWagon. A web-app used to simplify the process of finding midwives in your area. This app was built using Ruby, Ruby on Rails and JavaScript. It also uses a MapboxApi for the midwives to plan their day.",
    tags: [
      {
        name: "rails",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: FindMyMidwife,
    source_code_link: "https://github.com/xxjmsxx/find_my_midwife",
    page_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
