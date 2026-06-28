import "../styles/TechStack.css";

const categories = [
  {
    label: "Frontend",
    color: "#60A5FA",
    items: [
      { name: "Streamlit", desc: "Chat UI & session state" },
    ],
  },
  {
    label: "Backend",
    color: "#34D399",
    items: [
      { name: "FastAPI", desc: "REST API & routing" },
      { name: "Python", desc: "Core application logic" },
    ],
  },
  {
    label: "AI & LLM",
    color: "#A78BFA",
    items: [
      { name: "Groq · Llama 3 70B", desc: "Response generation" },
      { name: "LangChain", desc: "Chain orchestration & memory" },
      { name: "SentenceTransformers", desc: "Semantic embeddings" },
    ],
  },
  {
    label: "Retrieval",
    color: "#F59E0B",
    items: [
      { name: "ChromaDB", desc: "Vector store for WHO chunks" },
      { name: "Tavily API", desc: "Real-time health search" },
      { name: "BeautifulSoup", desc: "WHO web scraping" },
    ],
  },
  {
    label: "Evaluation",
    color: "#EC4899",
    items: [
      { name: "Cosine Similarity", desc: "Semantic response scoring" },
      { name: "Keyword Overlap", desc: "Factual coverage metric" },
      { name: "Custom Pipeline", desc: "231-query benchmark" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="techstack" id="stack">
      <div className="techstack-header">
        <p className="tag">TECH STACK</p>
        <h2>Built With</h2>
        <p>
          MedBot is assembled from a focused set of open-source and API-based
          tools chosen for reliability, speed, and retrieval accuracy.
        </p>
      </div>

      <div className="techstack-grid">
        {categories.map((cat) => (
          <div className="tech-category" key={cat.label}>
            <div
              className="tech-category-label"
              style={{ color: cat.color, borderColor: cat.color + "33" }}
            >
              {cat.label}
            </div>
            <div className="tech-items">
              {cat.items.map((item) => (
                <div className="tech-item" key={item.name}>
                  <div
                    className="tech-dot"
                    style={{ background: cat.color }}
                  />
                  <div>
                    <span className="tech-name">{item.name}</span>
                    <span className="tech-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
