import "../styles/Architecture.css";

const nodes = [
  {
    id:1,
    icon:"🖥️",
    title:"Streamlit Frontend",
    subtitle:"User Interface"
  },
  {
    id:2,
    icon:"⚙️",
    title:"FastAPI Backend",
    subtitle:"API & Routing"
  },
  {
    id:3,
    icon:"🧠",
    title:"Intent Classification",
    subtitle:"6 Intent Classes"
  },
  {
    id:4,
    icon:"📚",
    title:"WHO RAG",
    subtitle:"31 Pages • 7,503 Chunks"
  },
  {
    id:5,
    icon:"🌐",
    title:"Tavily Search",
    subtitle:"Real-time Health Information"
  },
  {
    id:6,
    icon:"🤖",
    title:"Groq · Llama 3 70B",
    subtitle:"Response Generation"
  }
];

export default function Architecture(){

return(

<section  id="architecture" className="architecture">

<div className="architecture-header">

<p className="tag">
SYSTEM ARCHITECTURE
</p>

<h2>
How MedBot Processes a Query
</h2>

<p>
A simplified view of the request pipeline from user input to grounded AI response.
</p>

</div>

<div className="architecture-grid">

<div className="node">

<div className="node-icon">

{nodes[0].icon}

</div>

<h3>

{nodes[0].title}

</h3>

<p>

{nodes[0].subtitle}

</p>

</div>
<div className="arrow">
  <div className="line"></div>

<div className="head">▼</div></div>

<div className="node">

<div className="node-icon">

{nodes[1].icon}

</div>

<h3>

{nodes[1].title}

</h3>

<p>

{nodes[1].subtitle}

</p>

</div>
<div className="arrow">
  <div className="line"></div>
  <div className="head">▼</div>
</div>
<div className="node">

<div className="node-icon">

{nodes[2].icon}

</div>

<h3>

{nodes[2].title}

</h3>

<p>

{nodes[2].subtitle}

</p>

</div>

<div className="split">

<div className="branch">

<div className="node rag">

<div className="node-icon">

{nodes[3].icon}

</div>

<h3>

{nodes[3].title}

</h3>

<p>

{nodes[3].subtitle}

</p>

</div>

</div>

<div className="branch">

<div className="node search">

<div className="node-icon">

{nodes[4].icon}

</div>

<h3>

{nodes[4].title}

</h3>

<p>

{nodes[4].subtitle}

</p>

</div>

</div>

</div>

<div className="merge">
  <div className="line"></div>
  <div className="head">▼</div>
</div>

<div className="node">

<div className="node-icon">

{nodes[5].icon}

</div>

<h3>

{nodes[5].title}

</h3>

<p>

{nodes[5].subtitle}

</p>

</div>

<div className="arrow">
  <div className="line"></div>
  <div className="head">▼</div>
</div>

<div className="response-badge">
  ✓ Grounded AI Response
</div>

</div>

</section>

)

}