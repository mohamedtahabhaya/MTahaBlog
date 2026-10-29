// Portfolio Interactions & Modal System

// 1. Theme Management
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    if (activeTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}

// 2. Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category.includes(filter)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  });
});

// 3. Interactive Modals for Articles & Project Details
const modalData = {
  'art-devs': {
    title: 'WE NEED MORE DEVS! (Even With AI)',
    date: 'July 24, 2025 • Perspective & Tech Culture',
    content: `
      <p>I recently attended a Microsoft Azure tech event in Casablanca. One of the keynote speakers said something that immediately resonated with me:</p>
      <blockquote style="border-left: 3px solid var(--accent); padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: var(--text-primary);">
        “Even with AI, the world needs more developers than ever.”
      </blockquote>
      <p>At first glance, this might sound counter-intuitive in an era where LLMs can generate boilerplate in seconds. But here is the reality from someone who works with autonomous agents daily:</p>
      <h3>What AI Accelerates vs What It Cannot Replace</h3>
      <ul>
        <li><strong>Problem Formulation & Architecture:</strong> AI doesn't know what to build, how systems fail under concurrency, or how data flows across business domains.</li>
        <li><strong>System Resilience & Edge Cases:</strong> Autonomous agents hallucinate, loop infinitely without circuit breakers, and require defensive tooling and human-in-the-loop boundaries.</li>
        <li><strong>Product Thinking & Human Communication:</strong> Code is only 20% of engineering; 80% is understanding human needs, constraints, and trade-offs.</li>
      </ul>
      <h3>The Real Shift</h3>
      <p>AI is not replacing software engineers; it is raising the baseline. It eliminates repetitive scaffolding and demands that developers level up into system thinkers, architects, and product builders.</p>
      <p><strong>Bottom line:</strong> If you are passionate about computer science, you're not late. You're right on time for the most exciting era in computing history.</p>
    `
  },
  'art-graphrag': {
    title: 'Demystifying GraphRAG & LightRAG: Why Knowledge Graphs Beat Vector-Only Search',
    date: 'October 2026 • AI & Retrieval Systems',
    content: `
      <p>Standard vector RAG (chunking text, computing cosine embeddings, and retrieving top-k chunks) works decently for basic FAQ lookup. But when dealing with enterprise documents, multi-hop reasoning, or holistic queries like <em>"What are the main systemic bottlenecks across all warehouses?"</em>, naive vector RAG fails completely.</p>
      <h3>The Blind Spots of Naive Vector RAG</h3>
      <p>Vector similarity is fundamentally local. It matches semantic keywords within isolated chunks, but it completely misses global relationships between entities spread across hundreds of pages.</p>
      <h3>How GraphRAG & LightRAG Solve This</h3>
      <ul>
        <li><strong>Entity & Relation Triples Extraction:</strong> Documents are parsed (using Docling or structured LLM extraction) into discrete entities and directional relationships.</li>
        <li><strong>Knowledge Graph Construction:</strong> We build an interconnected graph (using NetworkX or Neo4j) where nodes represent concepts/people/systems and edges represent verified relationships.</li>
        <li><strong>Dual-Level Semantic Retrieval (LightRAG pattern):</strong>
          <ul>
            <li><em>Low-level specific retrieval:</em> Fetching direct 1-hop and 2-hop neighbour subgraphs for precise queries.</li>
            <li><em>High-level thematic retrieval:</em> Traversing graph community clusters to synthesize high-level summary answers without reading thousands of raw chunks.</li>
          </ul>
        </li>
      </ul>
      <p>During my work at ABA Fusion AI and my open-source project <code>lightrag_from_scratch</code>, implementing this pattern showed an unprecedented jump in answer coherence and factual groundedness.</p>
    `
  },
  'art-agents': {
    title: 'Building Resilient Multi-Agent Systems with LangGraph & Supervisor Patterns',
    date: 'August 2026 • Agentic AI Architecture',
    content: `
      <p>Moving from a single chatbot prompt to a reliable production multi-agent system requires strict architectural discipline. Here are the core architectural lessons learned from building the autonomous budget assistant at ABA Fusion AI:</p>
      <h3>1. The Supervisor Architecture</h3>
      <p>Rather than letting agents talk in an unstructured free-for-all, we route all state transitions through a designated Supervisor Agent. The supervisor acts as a state router, evaluating incoming user intent and delegating to specialized worker agents (e.g., Bank Statement Parser, Categorizer, Analytics Engine).</p>
      <h3>2. Defensive Tool Calling</h3>
      <p>LLM tool calls will fail if schemas are brittle. By enforcing Pydantic Union types, graceful type coercion, and strict error-catching wrappers around external APIs, agents recover dynamically instead of crashing the execution thread.</p>
      <h3>3. Preventing Infinite Loops</h3>
      <p>Every cyclical agent graph needs a recursion limit and an anti-loop shield. When an agent attempts the same failed tool call twice, the graph halts and gracefully requests human intervention or fallback guidance.</p>
      <h3>4. Memory Compression with State Trimming</h3>
      <p>Long conversations blow up LLM context windows and cost. Using LangGraph's <code>RemoveMessage</code> pattern, intermediate tool outputs are condensed into concise factual summaries, keeping context clean and latency low.</p>
    `
  },
  'scoreguessr': {
    title: 'ScoreGuessr — Collaborative Full-Stack Web Game',
    date: '2026 • Team Engineering Project',
    content: `
      <p><strong>ScoreGuessr</strong> is a modern interactive multiplayer score-guessing web game. Players are shown video clips of legendary football moments and must predict the exact match scoreline, feeding into an Elo rating system and global leaderboards.</p>
      <h3>Key Engineering Highlights</h3>
      <ul>
        <li><strong>Full-Stack Architecture:</strong> Built with Next.js 14 App Router, TypeScript, and Tailwind CSS for a fluid, responsive user experience.</li>
        <li><strong>Supabase Integration:</strong> Realtime database, authentication (PKCE flow), and secure row-level security (RLS) policies.</li>
        <li><strong>Python ETL Pipeline:</strong> Designed automated data scraping and consolidation scripts (<code>consolidate.py</code>, <code>match_urls.py</code>) processing over 70 years of international tournament data (1954–2022).</li>
        <li><strong>Team Collaboration:</strong> Developed collaboratively on GitHub following structured branch workflows, code reviews, and issue tracking.</li>
      </ul>
      <p><a href="https://github.com/mohamedtahabhaya" target="_blank" class="btn-primary" style="margin-top:1rem;">View on GitHub →</a></p>
    `
  },
  'siuaps': {
    title: 'SIUAPS Gym 1-Click — Automated University Sports Booking PWA',
    date: '2026 • Personal Project',
    content: `
      <p><strong>SIUAPS Gym 1-Click</strong> is an automated web and mobile Progressive Web App (PWA) designed to eliminate the daily friction of booking highly competitive university sports time-slots at Université de Rennes (SIUAPS).</p>
      <h3>Key Engineering Highlights</h3>
      <ul>
        <li><strong>Automated Authentication & Session Management:</strong> Handles University CAS / Sésame authentication flow, cookie persistence, and auto-renewal without manual re-login.</li>
        <li><strong>Real-Time Slot Monitoring:</strong> Periodic asynchronous polling daemon to track live slot openings and last-minute cancellations in real time.</li>
        <li><strong>1-Click Instant Reservation:</strong> One-tap reservation mechanism that commits bookings within milliseconds of slot release.</li>
        <li><strong>Stack & Architecture:</strong> Built with high-performance <strong>FastAPI (Python)</strong>, <strong>SQLite</strong> with SQLAlchemy ORM, and a responsive PWA frontend (HTML5/CSS3/JavaScript) with offline support and service workers.</li>
        <li><strong>Deployment:</strong> Fully containerized with Docker and deployed with automated health checks on Render.</li>
      </ul>
      <p><a href="https://github.com/mohamedtahabhaya" target="_blank" class="btn-primary" style="margin-top:1rem;">View on GitHub →</a></p>
    `
  },
  'lightrag': {
    title: 'LightRAG & RAPTOR — Graph-Based RAG Research',
    date: '2026 • ABA Fusion AI Internship Research',
    content: `
      <p>Research and implementation of next-generation Knowledge Graph RAG and recursive summarization pipelines, developed during the AI internship at <strong>ABA Fusion AI</strong> to enable self-hosted enterprise intelligence.</p>
      <h3>Key Capabilities</h3>
      <ul>
        <li><strong>Chunking & Entity Extraction:</strong> Extracts named entities, relationships, and context keywords using structured prompt schemas.</li>
        <li><strong>Graph Store & Traversal:</strong> Builds and maintains an interconnected knowledge graph using NetworkX and JSON graph storage.</li>
        <li><strong>Dual-Level Query Engine:</strong> Enables both fine-grained fact lookup (subgraph extraction) and global conceptual summarization.</li>
        <li><strong>Containerization:</strong> Fully containerized with Docker and managed with modern Python tooling (<code>uv</code>, <code>pyproject.toml</code>).</li>
      </ul>
      <p><a href="https://github.com/mohamedtahabhaya/lightrag_from_scratch" target="_blank" class="btn-primary" style="margin-top:1rem;">View Repository on GitHub →</a></p>
    `
  }
};

const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close');

function openModal(key) {
  const data = modalData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDate.textContent = data.date;
  modalBody.innerHTML = data.content;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});
