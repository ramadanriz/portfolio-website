import {
  FaJs,
  FaPhp,
  FaReact,
  FaLaravel,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const menuLinks = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Tech",
    route: "/tech",
  },
  {
    name: "Projects",
    route: "/projects",
  },
];

const techStacks = [
  {
    name: "Javascript",
    icon: <FaJs />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Laravel",
    icon: <FaLaravel />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
];

const aboutContents = [
  `Hello, world! My name is Rizky Ramadhani. A graduate of Informatics Engineering with a strong understanding of technology and programming. Skilled in troubleshooting hardware and software issues, managing computer networks, and developing web-based applications. Experienced with both Windows and Linux operating systems, and quick to adapt to new technologies.`,
];

const educations = [
  {
    title: "Dicoding",
    url: "https://www.dicoding.com/",
    role: "Studi Independen Bersertifikat Kampus Merdeka",
    skills: [
      "Building layouts and the structure of web pages.",
      "Integrating with the back-end to fetch data from the server.",
      "Developing and implementing business logic and data processing algorithms.",
      "Providing an API to communicate with the front-end.",
    ],
    period: "Februari 2022 - Agustus 2022",
  },
  {
    title: "Universitas Hasyim Asy'ari",
    url: "http://unhasy.ac.id/",
    role: "Computer Science",
    period: "2019 - 2023",
  },
  {
    title: "SMKN 3 Jombang",
    url: "https://smkn3-jbg.sch.id/Home/",
    role: "Computer Network Engineering",
    period: "2015 - 2018",
  },
];

const companies = [
  {
    title: "SMK Gajah Mada",
    role: "Guru Produktif TKJ",
    skills: [
      "Teaching Computer and Network Engineering subjects.",
      "Guiding students in computer networking practice, operating system installation, and hardware configuration.",
      "Managing maintenance of the school's computer and network laboratories.",
      "Developing syllabi, learning modules, and assessments in accordance with the applicable curriculum.",
    ],
    period: "Januari 2024 - Juni 2025",
  },
  {
    title: "CV Media Computer",
    role: "Internship IT Support",
    skills: [
      "Assembling computer units.",
      "Installing operating systems.",
      "Assisting with minor servicing such as cleaning print heads and refilling ink (infusion system or cartridges).",
      "Cleaning and replacing damaged computer components.",
    ],
    period: "Januari 2017 - April 2017",
  },
];

const contacts = [
  {
    icon: <BiLogoGmail />,
    link: "mailto:ramadhanriz57@gmail.com",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/ramadanriz",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ramadhanriz/",
  },
];

const baseUrl = "https://pinned.berrysauce.dev/get/ramadanriz";

export {
  menuLinks,
  techStacks,
  aboutContents,
  educations,
  companies,
  contacts,
  baseUrl,
};
