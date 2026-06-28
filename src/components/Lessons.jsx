import "../styles/Lessons.css";

const lessons = [
  {
    icon: "🔍",
    title: "Retrieval Quality > Bigger LLM",
    body: "Swapping to a larger model produced marginal gains. Fixing the chunking strategy and improving retrieval quality moved the metrics far more. The bottleneck was almost always retrieval.",
  },
  {
    icon: "✂️",
    title: "Chunking is an Engineering Decision",
    body: "Chunking strategy is not a default to set and forget. Fixed-size chunks broke sentences and degraded retrieval. Recursive chunking that respects semantic boundaries is worth the extra thought.",
  },
  {
    icon: "🧵",
    title: "Memory Fundamentally Changes UX",
    body: "Without shared memory, every follow-up question felt like starting over. Adding conversation memory turned a lookup tool into something that actually felt like a conversation.",
  },
  {
    icon: "📐",
    title: "Evaluation Infrastructure Matters",
    body: "Building the 231-question benchmark mid-project — not at the end — revealed weaker intent categories early enough to fix them. Evaluation is a development tool, not a final report.",
  },
];

export default function Lessons() {
  return (
    <section className="lessons" id="lessons">
      <div className="lessons-header">
        <p className="tag">KEY TAKEAWAYS</p>
        <h2>What This Project Taught Me</h2>
        <p>
          Lessons from building and evaluating a production-style RAG system end to end.
        </p>
      </div>

      <div className="lessons-list">
        {lessons.map((lesson, i) => (
          <div className="lesson-row" key={lesson.title}>
            <div className="lesson-index">{String(i + 1).padStart(2, "0")}</div>
            <div className="lesson-icon">{lesson.icon}</div>
            <div className="lesson-body">
              <h3>{lesson.title}</h3>
              <p>{lesson.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
