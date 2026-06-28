import "../styles/Decisions.css";

const decisions = [
  {
    icon: "🤔",
    question: "Why RAG?",
    points: [
      "LLMs hallucinate when asked medical questions.",
      "RAG grounds responses in retrieved WHO knowledge before generation.",
      "Separating retrieval from generation makes failures easier to debug.",
    ],
  },
  {
    icon: "🗄️",
    question: "Why ChromaDB?",
    points: [
      "Local vector database — no external dependency.",
      "Simple to deploy alongside FastAPI.",
      "Fast enough for a single-user assistant.",
    ],
  },
  {
    icon: "⚙️",
    question: "Why FastAPI?",
    points: [
      "Separated the Streamlit frontend from all backend logic.",
      "Reusable API endpoints — easy to swap the frontend later.",
      "Async support for concurrent requests.",
    ],
  },
  {
    icon: "⚡",
    question: "Why Groq?",
    points: [
      "Very low inference latency compared to other hosted LLMs.",
      "Enabled rapid iteration during development — fast feedback loops.",
      "Free tier sufficient for a research-scale project.",
    ],
  },
  {
    icon: "✂️",
    question: "Why Recursive Chunking?",
    points: [
      "Fixed-size chunking split medical sentences mid-thought.",
      "Recursive chunking respects paragraph and sentence boundaries.",
      "Improved retrieval quality without changing the embedding model.",
    ],
  },
  {
    icon: "🧵",
    question: "Why Conversation Memory?",
    points: [
      "Medical conversations naturally depend on previous turns.",
      "Users ask follow-up questions without restating context.",
      "A shared memory object made this work across all six workflows.",
    ],
  },
];

export default function Decisions() {
  return (
    <section className="decisions" id="decisions">
      <div className="decisions-header">
        <p className="tag">ENGINEERING DECISIONS</p>
        <h2>Why These Tools and Approaches</h2>
        <p>
          Every architecture choice was a deliberate trade-off. Here is the reasoning
          behind the key decisions in MedBot.
        </p>
      </div>

      <div className="decisions-grid">
        {decisions.map((d) => (
          <div className="decision-card" key={d.question}>
            <div className="decision-top">
              <span className="decision-icon">{d.icon}</span>
              <h3>{d.question}</h3>
            </div>
            <ul>
              {d.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
