import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
      <aside className="mx-auto items-center grid-flow-col">
        <p>© {new Date().getFullYear()} Rizky Ramadhani - Portfolio</p>
      </aside>
      <nav className="mx-auto md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/ramadanriz/" target="_blank" rel="noreferrer">
            <GrLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/ramadanriz" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
