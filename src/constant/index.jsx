import { FaJs, FaPhp, FaReact, FaLaravel, FaGithub, FaLinkedin } from "react-icons/fa6";
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
  `Hello, world! My name is Rizky Ramadhani. I'm a Junior Web Developer, and Computer Science Student. I live in Jombang, East Java, Indonesia.`,
  `I have experience as a Junior Web Developer. I have an interest in a career as a Full Stack Developer. I have learned a lot of new technologies in the past few years by myself on the Internet.`,
];

const educations = [
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
];

const contacts = [
  {
    icon: <FaGithub />,
    link: "https://github.com/ramadanriz",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ramadhanriz/",
  },
];

const baseUrl = "https://pinned.berrysauce.me/get/ramadanriz";

export { menuLinks, techStacks, aboutContents, educations, companies, contacts, baseUrl };
