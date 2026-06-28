import "./Hero.css";
import { useEffect, useState } from "react";

const stats = [
  { value: "31", label: "WHO Pages Indexed" },
  { value: "7503", label: "Vector Chunks" },
  { value: "231", label: "Evaluation Queries" },
  { value: "6", label: "Intent Categories" },
];

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="home" className="hero">

      <div
        className="hero-glow hero-glow-1"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      />

      <div
        className="hero-glow hero-glow-2"
        style={{
          transform: `translate(${-offset.x}px, ${-offset.y}px)`
        }}
      />

      <div className="hero-grid" />

      <div className="hero-content">

        <span className="hero-tag">
          Retrieval-Augmented Generation
        </span>

        <h1>
          MedBot
        </h1>

        <h2>
          A Context-Aware AI Healthcare Assistant
          <br />
          Grounded in WHO Knowledge
        </h2>

        <p>
          MedBot is a Retrieval-Augmented Generation (RAG) healthcare assistant that combines 
          WHO knowledge retrieval, semantic search, conversation memory, and Groq-hosted Llama 3 
          to generate grounded, context-aware medical responses while reducing hallucinations.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            <a
            href="https://github.com/aditi838/MedBot"
            target="_blank"
            rel="noreferrer"
          >Explore Architecture</a>  
            
          </button>

          <button className="secondary-btn">
            <a
            href="https://github.com/aditi838/MedBot"
            target="_blank"
            rel="noreferrer"
          >View GitHub</a>
          </button>

        </div>

        <div className="hero-stats">

          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <h3>{item.value}</h3>
              <span>{item.label}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
