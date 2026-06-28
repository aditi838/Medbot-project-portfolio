import "../styles/Challenges.css";

const items = [
  {
    icon: "✂️",
    challenge: "Poor retrieval with fixed-size chunking.",
    decision: "Switched to recursive character chunking (500 chars, 50 overlap) to preserve sentence and paragraph boundaries.",
    outcome: "Noticeably better retrieval relevance without changing the embedding model.",
    why: "Why recursive chunking? Fixed-size splits broke medical sentences mid-thought. Recursive chunking respects semantic boundaries — the retrieval quality difference was immediate.",
  },
  {
    icon: "🎯",
    challenge: "Intent ambiguity between query types.",
    decision: "Introduced an explicit six-class intent classifier as a routing gate before any retrieval or generation.",
    outcome: "Specialised workflows per intent — cleaner chains, better responses, less wasted retrieval.",
    why: "Why routing at all? A single chain can't efficiently handle greetings, medical facts, vague symptoms, and follow-ups simultaneously. Routing made each path simpler and testable.",
  },
  {
    icon: "🧵",
    challenge: "Follow-up questions lost context across workflows.",
    decision: "Replaced isolated per-chain memory with a single shared ConversationBufferMemory instance passed into every workflow.",
    outcome: "Conversation context persists across all six chains — follow-up questions work naturally.",
    why: "Why shared memory? Multiple isolated memory objects silently break multi-turn reasoning. One source of truth fixes it cleanly.",
  },
  {
    icon: "🕸️",
    challenge: "WHO pages had inconsistent HTML structure.",
    decision: "Wrote a custom scraper and cleaner instead of relying on a generic one.",
    outcome: "Reliable ingestion pipeline across all 31 pages with consistent chunk quality.",
    why: "Why custom? Generic scrapers handled the inconsistency poorly, producing noisy chunks that degraded retrieval. A purpose-built cleaner was worth the extra effort.",
  },
  {
    icon: "🔇",
    challenge: "Voice feature couldn't be reliably deployed.",
    decision: "Removed it from the production build while keeping the architecture modular.",
    outcome: "Stable deployment. The voice path can be re-added without restructuring the backend.",
    why: "Why remove it? An unstable feature damages trust in the rest of the system. Cutting it cleanly was the right call.",
  },
];

export default function Challenges() {
  return (
    <section className="challenges" id="challenges">
      <div className="challenges-header">
        <p className="tag">CHALLENGES & DECISIONS</p>
        <h2>Real Problems, Real Fixes</h2>
        <p>
          Each challenge below includes the decision made and the reasoning behind it —
          not just what was done, but why.
        </p>
      </div>

      <div className="challenges-list">
        {items.map((item, i) => (
          <div className="challenge-row" key={item.challenge}>
            <div className="challenge-num">0{i + 1}</div>
            <div className="challenge-icon">{item.icon}</div>
            <div className="challenge-body">
              <div className="challenge-cols">
                <div className="challenge-col">
                  <span className="col-label problem">Challenge</span>
                  <p>{item.challenge}</p>
                </div>
                <div className="challenge-col">
                  <span className="col-label decision">Decision</span>
                  <p>{item.decision}</p>
                </div>
                <div className="challenge-col">
                  <span className="col-label outcome">Outcome</span>
                  <p>{item.outcome}</p>
                </div>
              </div>
              <div className="challenge-why">
                <span className="why-label">↳</span>
                <p>{item.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
