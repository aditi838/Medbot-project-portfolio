import "../styles/Implementation.css";

export default function Implementation() {

return (

<section className="implementation">

<div className="implementation-header">

<p className="tag">
IMPLEMENTATION WORKFLOW
</p>

<h2>
How Every Query Flows Through MedBot
</h2>

<p>
Every user message follows a deterministic pipeline before reaching the language model. This architecture combines intent routing, retrieval, memory and real-time search to generate grounded responses.
</p>

</div>

<div className="flow">

<div className="flow-node">

<div className="icon">💬</div>

<h3>User Query</h3>

<p>Question submitted from Streamlit UI</p>

</div>

<div className="flow-arrow">↓</div>

<div className="flow-node">

<div className="icon">⚙️</div>

<h3>FastAPI Backend</h3>

<p>Receives request & validates payload</p>

</div>

<div className="flow-arrow">↓</div>

<div className="flow-node">

<div className="icon">🧠</div>

<h3>Intent Classifier</h3>

<p>Selects one of six workflows</p>

</div>

<div className="branch">

<div className="branch-line"></div>

<div className="branch-grid">

<div className="flow-node rag">

<div className="icon">📚</div>

<h3>WHO RAG</h3>

<p>31 Pages • 7,503 Chunks</p>

</div>

<div className="flow-node search">

<div className="icon">🌐</div>

<h3>Tavily Search</h3>

<p>Latest health information</p>

</div>

</div>

</div>

<div className="flow-arrow">↓</div>

<div className="flow-node">

<div className="icon">🤖</div>

<h3>Groq · Llama 3 70B</h3>

<p>Grounded response generation</p>

</div>

<div className="flow-arrow">↓</div>

<div className="flow-node">

<div className="icon">🧵</div>

<h3>Conversation Memory</h3>

<p>Updates shared memory context</p>

</div>

<div className="flow-arrow">↓</div>

<div className="response">

✓ Reliable Medical Response

</div>

</div>

</section>

);

}