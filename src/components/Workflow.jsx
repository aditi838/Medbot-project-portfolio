import "./Workflow.css";
import { useState } from "react";

const workflows = [
  {
    intent: "medical_fact",
    color: "#60A5FA",
    icon: "📚",
    title: "WHO RAG",
    description:
      "Retrieves relevant WHO document chunks from ChromaDB and generates grounded responses using Groq-hosted Llama 3 70B.",
    chain: [
      "User Query",
      "Intent Classification",
      "Topic Extraction",
      "Vector Retrieval",
      "Groq LLM",
      "Grounded Answer",
    ],
  },

  {
    intent: "real_time",
    color: "#34D399",
    icon: "🌐",
    title: "Tavily Search",
    description:
      "Queries requiring current medical information are routed to Tavily Search before summarization with Groq.",
    chain: [
      "User Query",
      "Intent Classification",
      "Tavily Search",
      "Summarization",
      "Groq LLM",
      "Response",
    ],
  },

  {
    intent: "general_chat",
    color: "#A78BFA",
    icon: "💬",
    title: "General Chat",
    description:
      "Handles greetings and non-medical conversations while preserving conversation history.",
    chain: [
      "User Query",
      "Intent Classification",
      "Conversation Memory",
      "Groq LLM",
      "Response",
    ],
  },

  {
    intent: "vague_symptom",
    color: "#F59E0B",
    icon: "🩺",
    title: "Clarification Workflow",
    description:
      "Instead of hallucinating, MedBot asks follow-up questions to collect sufficient symptom details.",
    chain: [
      "User Query",
      "Intent Classification",
      "Clarification Prompt",
      "User Response",
      "Continue",
    ],
  },

  {
    intent: "follow_up_detail",
    color: "#EC4899",
    icon: "🧠",
    title: "Follow-up",
    description:
      "Conversation memory keeps previous medical context available for follow-up questions.",
    chain: [
      "Conversation Memory",
      "Topic Retrieval",
      "WHO Context",
      "Groq LLM",
      "Response",
    ],
  },

  {
    intent: "specific_symptom",
    color: "#38BDF8",
    icon: "🧬",
    title: "Symptom Analysis",
    description:
      "Specific symptom questions are routed directly into WHO retrieval before answer generation.",
    chain: [
      "Intent Classification",
      "Topic Extraction",
      "WHO Retrieval",
      "Groq",
      "Response",
    ],
  },
];

export default function Workflow() {
  const [active, setActive] = useState(workflows[0]);

  return (
    <section className="workflow-section" id="workflow">

      <div className="workflow-header">

        <span>INTELLIGENT ROUTING</span>

        <h2>
          Query Routing Engine
        </h2>

        <p>
          Every query follows a different execution path depending on its detected intent.
          Instead of using one fixed chain, MedBot dynamically selects the most
          appropriate workflow.
        </p>

      </div>

      <div className="intent-grid">

        {workflows.map((item) => (

          <button

            key={item.intent}

            onClick={() => setActive(item)}

            className={
              active.intent === item.intent
                ? "intent-card active"
                : "intent-card"
            }

            style={{
              borderColor:
                active.intent === item.intent
                  ? item.color
                  : "rgba(255,255,255,.08)",
            }}
          >

            <div
              className="intent-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <div>

              <h4>{item.intent}</h4>

              <small>{item.title}</small>

            </div>

          </button>

        ))}

      </div>

      <div className="workflow-view">

        <div className="workflow-info">

          <h3 style={{ color: active.color }}>
            {active.icon} {active.title}
          </h3>

          <p>{active.description}</p>

        </div>

        <div className="workflow-pipeline">

          {active.chain.map((step, index) => (

            <div key={step} className="pipe">

              <div
                className="circle"
                style={{ borderColor: active.color }}
              >
                {index + 1}
              </div>

              <div className="step">{step}</div>

              {index !== active.chain.length - 1 &&

              <div className="arrow">

                ➜

              </div>}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}