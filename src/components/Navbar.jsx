import "./Navbar.css";
import { useEffect, useState } from "react";

const links = [
  { name: "Overview", id: "overview" },
  { name: "Architecture", id: "architecture" },
  { name: "Features", id: "features" },
  { name: "Evaluation", id: "evaluation" },
  { name: "Challenges", id: "challenges" },
  { name: "Lessons", id: "lessons" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
      let current = "";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        if (window.scrollY >= section.offsetTop - 150) current = link.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    sec.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="navbar-logo">
        <div className="logo-circle">M</div>
        <div className="logo-text">
          <span>MedBot</span>
          <small>AI Portfolio</small>
        </div>
      </div>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <a
          href="https://github.com/aditi838/MedBot"
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          GitHub
        </a>
        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
