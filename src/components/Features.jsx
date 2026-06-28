import { useState } from "react";
import "../styles/Features.css";

const ROUTING_DIAGRAM = (
  <div className="routing-diagram">
    <div className="routing-title">Query Routing Engine</div>
    <div className="routing-flow">
      <div className="route-node center">User Query</div>
      <div className="route-arrow-down">↓</div>
      <div className="route-node center highlight">Intent Classification</div>
      <div className="route-branches-wrap">
        <div className="route-branch-line" />
        <div className="route-branches">
          <div className="route-box">📚<br/>WHO RAG<br/><span>medical_fact</span></div>
          <div className="route-box">🌐<br/>Real-Time Search<br/><span>real_time</span></div>
          <div className="route-box">💬<br/>General Chat<br/><span>general_chat</span></div>
          <div className="route-box">🩺<br/>Clarification<br/><span>vague_symptom</span></div>
          <div className="route-box">🧠<br/>Follow-up<br/><span>follow_up_detail</span></div>
          <div className="route-box">🧬<br/>Symptom Analysis<br/><span>specific_symptom</span></div>
        </div>
      </div>
      <div className="route-arrow-down">↓</div>
      <div className="route-node center success">✓ Grounded Response</div>
    </div>
    <div className="routing-why">
      <div className="routing-why-item">
        <h5>Why six classes?</h5>
        <p>A single chain cannot efficiently handle greetings, medical queries, follow-ups, web searches, vague symptoms, and casual conversation simultaneously. Each class gets a dedicated, simpler chain.</p>
      </div>
      <div className="routing-why-item">
        <h5>Why routing at all?</h5>
        <p>Without routing, every query goes through retrieval — wasting latency on general chat, and risking hallucination when retrieval returns irrelevant chunks.</p>
      </div>
    </div>
  </div>
);

const features = [
  {
    icon: "🧠",
    title: "Intent-Aware Query Routing",
    short: "Every query is classified before any retrieval or generation occurs.",
    problem:
      "A single prompt cannot efficiently handle greetings, medical questions, follow-ups, web searches and casual conversation.",
    solution:
      "Each query is classified into one of six intent categories and routed to a dedicated LangChain workflow — reducing unnecessary retrieval, improving response quality, and keeping conversations context-aware.",
    implementation: ROUTING_DIAGRAM,
    tech: ["Intent Classification", "LangChain Routing", "FastAPI", "Groq Llama 3 70B"],
  },
  {
    icon: "📚",
    title: "WHO Knowledge Retrieval",
    short: "Retrieves trusted medical information before response generation.",
    problem: "LLMs alone cannot guarantee accurate or up-to-date medical knowledge.",
    solution:
      "WHO documents are embedded into ChromaDB and retrieved using semantic similarity search. Relevant chunks are injected into the prompt before generation.",
    implementation: [
      "31 WHO health pages scraped and cleaned.",
      "7,503 semantic chunks indexed using recursive chunking (500 chars, 50 overlap).",
      "SentenceTransformer embeddings for semantic similarity.",
      "Retrieved chunks injected into prompts before generation.",
    ],
    tech: ["BeautifulSoup", "SentenceTransformers", "ChromaDB"],
  },
  {
    icon: "🌐",
    title: "Real-Time Health Search",
    short: "Uses Tavily when WHO knowledge alone is insufficient.",
    problem: "Some questions involve recent outbreaks or newly released guidelines not covered by static WHO pages.",
    solution:
      "Queries requiring recent information are routed through Tavily search before response generation. This is triggered only when needed, avoiding unnecessary web requests.",
    implementation: [
      "Search triggered only for real_time intent class.",
      "Results summarised before passing to the LLM.",
      "Avoids unnecessary web requests for static medical facts.",
    ],
    tech: ["Tavily API", "LangChain"],
  },
  {
    icon: "🧵",
    title: "Conversation Memory",
    short: "Maintains context across multiple user interactions.",
    problem: "Users naturally ask follow-up questions without repeating context.",
    solution:
      "A single shared ConversationBufferMemory instance is passed into every workflow, so previous turns remain visible regardless of which chain handles the next query.",
    implementation: [
      "Single shared memory object across all six workflows.",
      "Supports follow-up questions without re-stating context.",
      "Maintains conversational continuity across intent switches.",
    ],
    tech: ["LangChain Memory"],
  },
  {
    icon: "🛡️",
    title: "Response Grounding",
    short: "Responses remain grounded in retrieved evidence.",
    problem: "LLMs may hallucinate when context is missing or when retrieval returns weak chunks.",
    solution:
      "Prompt instructions restrict answers to retrieved WHO or Tavily context. When retrieved context is insufficient, MedBot responds with a fallback rather than generating unsupported claims.",
    implementation: [
      "Grounding prompts constrain generation to retrieved context.",
      "Explicit fallback response when context is insufficient.",
      "Reduces hallucination risk at the prompt level.",
    ],
    tech: ["Prompt Engineering", "LangChain"],
  },
  {
    icon: "📊",
    title: "Evaluation Framework",
    short: "Measured retrieval and response quality using a custom local benchmark.",
    problem: "Project improvements require objective evaluation without an external LLM judge.",
    solution:
      "Built a lightweight local evaluation pipeline using semantic similarity, keyword overlap, and grounding score — no external API needed.",
    implementation: [
      "231 evaluation questions across all intent categories.",
      "Cosine similarity between generated and WHO reference answers.",
      "Keyword overlap for factual coverage.",
      "Grounding score — whether claims were supported by retrieved context.",
    ],
    tech: ["SentenceTransformers", "Python"],
  },
];

function FeatureCard({ feature }) {
  const [open, setOpen] = useState(false);
  const isJSX = typeof feature.implementation !== "string" && !Array.isArray(feature.implementation);

  return (
    <div className={`feature-card ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="feature-header">
        <div className="feature-left">
          <div className="feature-icon">{feature.icon}</div>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.short}</p>
          </div>
        </div>
        <div className={`chevron ${open ? "rotate" : ""}`}>▼</div>
      </div>

      <div className={`feature-content ${open ? "show" : ""}`}>
        <div className="feature-block">
          <h4>Problem</h4>
          <p>{feature.problem}</p>
        </div>
        <div className="feature-block">
          <h4>Solution</h4>
          <p>{feature.solution}</p>
        </div>
        <div className="feature-block">
          <h4>Implementation</h4>
          {isJSX ? (
            feature.implementation
          ) : (
            <ul>
              {feature.implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="feature-block">
          <h4>Technologies Used</h4>
          <div className="tech-tags">
            {feature.tech.map((t) => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-header">
        <p className="tag">KEY FEATURES</p>
        <h2>Core System Capabilities</h2>
        <p>
          MedBot combines retrieval, intelligent routing, conversation memory, and response
          grounding to deliver accurate, context-aware healthcare assistance. Expand each
          feature to explore the implementation details.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}
