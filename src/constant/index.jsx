import { FaJs, FaPhp, FaReact, FaLaravel } from 'react-icons/fa6'
import { SiTailwindcss, SiMysql } from 'react-icons/si'

const menuLinks = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Tech", route: "/tech" },
    { name: "Projects", route: "/projects" },
]

const techStacks = [
    {
        name: "Javascript",
        icon: <FaJs />
    },
    {
        name: "PHP",
        icon: <FaPhp />
    },
    {
        name: "Tailwindcss",
        icon: <SiTailwindcss />
    },
    {
        name: "React",
        icon: <FaReact />
    },
    {
        name: "Laravel",
        icon: <FaLaravel />
    },
    {
        name: "MySQL",
        icon: <SiMysql />
    }
]

const aboutContents = [
    `Hello, world! My name is Rizky Ramadhani. I'm a Junior Web Developer, and Computer Science Student. I live in Jombang, East Java, Indonesia.`,
    `I have experience as a Junior Web Developer. I have an interest in a career as a Full Stack Developer. I have learned a lot of new technologies in the past few years by myself on the Internet.`,
]

export { menuLinks, techStacks, aboutContents }