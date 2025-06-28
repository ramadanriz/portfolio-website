import { contacts } from "../constant";

const Footer = () => {
  return (
    <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
      <aside className="mx-auto items-center grid-flow-col">
        <p>© {new Date().getFullYear()} Rizky Ramadhani - Portfolio</p>
      </aside>
      <nav className="mx-auto md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          {contacts.map((contact, index) => (
            <>
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <div className="text-2xl">{contact.icon}</div>
              </a>
            </>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
