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

export { menuLinks, techStacks }