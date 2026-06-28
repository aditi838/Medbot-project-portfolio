import "./Overview.css";

const pillars = [
  {
    icon: "🧠",
    title: "Intent-first routing",
    desc: "Six intent classes gate every query before any retrieval or generation happens — ensuring the right chain handles each request.",
  },
  {
    icon: "📚",
    title: "WHO-grounded retrieval",
    desc: "31 pages, 7,503 chunks. Answers are built on retrieved evidence, not model memory.",
  },
  {
    icon: "🧵",
    title: "Shared conversation memory",
    desc: "A single memory object spans all six workflows, making follow-up questions work naturally.",
  },
  {
    icon: "📊",
    title: "Local evaluation pipeline",
    desc: "231 benchmark questions scored by semantic similarity, keyword overlap, and grounding — no external LLM judge.",
  },
];

export default function Overview() {
  return (
    <section className="overview" id="overview">

      <div className="overview-left">

        <span className="section-tag">PROJECT OVERVIEW</span>

        <h2>What makes this system interesting</h2>

        <p>
          Most RAG demos retrieve documents and call an LLM. MedBot adds two layers on top
          of that: an intent classifier that routes queries to specialised chains before
          retrieval, and a shared memory object that keeps conversation context visible
          across all six workflows.
        </p>

        <p>
          The result is a system that handles medical facts, vague symptoms, real-time
          lookups, and follow-up questions differently — rather than pushing everything
          through one generic pipeline.
        </p>

        <div className="overview-highlight">
          <h3>Core constraint</h3>
          <p>
            Every response must be grounded in retrieved WHO context or Tavily search results.
            If the context is insufficient, MedBot says so rather than generating unsupported claims.
          </p>
        </div>

      </div>

      <div className="overview-right">
        {pillars.map((p) => (
          <div className="overview-card" key={p.title}>
            <div className="overview-card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
