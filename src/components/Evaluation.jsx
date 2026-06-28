import "../styles/Evaluation.css";

const metrics = [
  {
    icon: "❓",
    title: "231",
    subtitle: "Evaluation Questions",
    desc: "Custom benchmark covering disease information, symptoms, prevention, follow-up conversations and treatment — spanning all six intent categories.",
  },
  {
    icon: "🧠",
    title: "SentenceTransformer",
    subtitle: "Semantic Similarity",
    desc: "Generated responses compared against WHO reference answers using cosine similarity to measure semantic closeness.",
  },
  {
    icon: "🔤",
    title: "Keyword Overlap",
    subtitle: "Lexical Evaluation",
    desc: "Measured factual overlap between generated and reference responses to detect missing or incorrect medical terms.",
  },
  {
    icon: "🛡️",
    title: "Grounding Check",
    subtitle: "Retrieved Context Validation",
    desc: "Verified whether generated claims were supported by retrieved WHO documents — the core measure of hallucination resistance.",
  },
];

const findings = [
  {
    icon: "🔍",
    text: "Improving retrieval quality produced larger gains than upgrading the language model.",
  },
  {
    icon: "✂️",
    text: "Recursive chunking significantly improved retrieval compared to fixed-size chunks.",
  },
  {
    icon: "📊",
    text: "The benchmark identified weaker intent categories and guided targeted improvements.",
  },
];

export default function Evaluation() {
  return (
    <section id="evaluation" className="evaluation">
      <div className="evaluation-header">
        <p className="tag">SYSTEM EVALUATION</p>
        <h2>How MedBot Was Evaluated</h2>
        <p>
          Instead of relying on an external LLM judge, MedBot was evaluated using a custom
          local framework built on semantic similarity, grounding, and factual overlap.
        </p>
      </div>

      <div className="metrics-grid">
        {metrics.map((m) => (
          <div className="metric-card" key={m.title}>
            <div className="metric-icon">{m.icon}</div>
            <h3>{m.title}</h3>
            <h4>{m.subtitle}</h4>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="evaluation-pipeline">
        <h3>Evaluation Pipeline</h3>
        <div className="pipeline">
          <div className="pipe-box"><div className="pipe-icon">❓</div><span>231 Questions</span></div>
          <div className="pipe-arrow">↓</div>
          <div className="pipe-box"><div className="pipe-icon">🤖</div><span>MedBot Responses</span></div>
          <div className="pipe-arrow">↓</div>
          <div className="pipe-box"><div className="pipe-icon">📖</div><span>WHO Reference Answers</span></div>
          <div className="pipe-arrow">↓</div>
          <div className="pipe-box"><div className="pipe-icon">🧠</div><span>SentenceTransformer</span></div>
          <div className="pipe-arrow">↓</div>
          <div className="results-grid">
            <div className="result-chip">Semantic Similarity</div>
            <div className="result-chip">Grounding Score</div>
            <div className="result-chip">Keyword Overlap</div>
          </div>
        </div>
      </div>

      <div className="findings">
        <h3>Key Findings</h3>
        <div className="findings-grid">
          {findings.map((f) => (
            <div className="finding-card" key={f.text}>
              <span>{f.icon}</span>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
