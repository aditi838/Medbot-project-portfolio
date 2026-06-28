import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-inner">
        <p className="footer-built">Built by Aditi Sharma</p>
        <p className="footer-stack">
          Python · RAG · LangChain · FastAPI · Streamlit
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/aditi838/MedBot"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="footer-dot">·</span>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="footer-copy">© 2026</p>
      </div>
    </footer>
  );
}
