import {
  // feedback pictures
  james,
  sebi,
  emptyprofile,

  // service icons
  mobile,
  backend,
  creator,
  web,

  // tech icons
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

  // jobs icons
  lewagon,
  lofft,
  lfj,

  //extras
  construction,

  // projects
  carrent,
  jobit,
  FindMyMidwife,

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Full Stack Developer",
    company_name: "Lofft",
    icon: lofft,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Extensive experience in developing frontend technologies, particularly React, React Native, and Redux, as well as developing backend APIs with Ruby on Rails (originally Firebase)",
      "Conducting thorough testing of programs and databases to identify issues early and proactively make necessary changes.",
      "Designing, developing, and implementing robust, scalable software applications for apps and websites based on carefully analyzed requirements and a deep understanding of industry-standard technical practices.",
    ],
  },
  {
    title: "Teacher/Teaching Assistant for #1 Code Bootcamp",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Led coding bootcamps in web development, database management, and user experience design at Lewagon.",
      "Strengthened my proficiency in programming languages such as Ruby, Ruby on Rails, and JavaScript while teaching others",
      "Worked in a collaborative team environment, collaborating with other instructors to develop and refine the curriculum",
      "Provided personalized feedback to students and often refactored their code, improving my ability to communicate technical concepts and solidifying my understanding of these languages",
    ],
  },
  {
    title: "(Please touch the tape to see application)",
    company_name: "⚠️Currently under construction⚠️",
    icon: lfj,
    iconBg: "#383E56",
    tape: construction,
    textColor: "#00CEA8",
    date: "As soon as possible",
    iconBg: "#383E56",
    points: [
      "I'd make a great addition to the team because I'm a hard worker who is passionate about what I do.",
      "I'm a fast learner and I'm always looking for ways to improve my skills.",
      "I'm passionate about mentoring and collaborating with teams to achieve successful outcomes. My skills in providing clear feedback and supporting my peers demonstrate my potential for continued growth within any development team.",
      "I have a habit of bringing baked goods to the office(so I might bring some to the interview!)",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "As a Fullstack Developer on our team at Lofft, Joshua consistently demonstrated strong technical capabilities and an excellent work ethic. I highly recommend him to anyone seeking a skilled and dedicated developer.",
    name: "James Hibbeard",
    designation: "Founder",
    company: "Lofft",
    image: james,
  },
  {
    testimonial:
    "Joshua showed exceptional problem solving skills and a collaborative mindset during his time at LeWagon. He would make a valuable contribution to any team",
    name: "Sebastian Remm",
    designation: "Batch Manager",
    company: "Le Wagon",
    image: sebi,
  },
  {
    testimonial:
      "An exceptional young man who I guarantee, will overcome any challenge you throw at him!",
    name: "My Mom",
    designation: "Mom",
    company: "My House",
    image: emptyprofile,
  },
];

const projects = [
  {
    name: "Find my Midwife",
    description:
      "A web-app used to simplify the process of finding midwives in d your area. This app was built using Ruby, Ruby on Rails and JavaScript. It also uses a MapboxApi for the midwives to plan their day.",
    tags: [
      {
        name: "ruby",
        color: "pink-text-gradient",
      },
      {
        name: "rails",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: FindMyMidwife,
    source_code_link: "https://github.com/xxjmsxx/find_my_midwife",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
