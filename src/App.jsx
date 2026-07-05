import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>NEXUS OS</h1>

        <nav>
          <button>🏠 Dashboard</button>
          <button>🤖 AI Chat</button>
          <button>📂 Files</button>
          <button>💻 Applications</button>
          <button>⚙ Settings</button>
        </nav>
      </aside>

      <main className="main">

        <header className="header">
          <h2>Welcome, Souvik 👋</h2>
          <span>System Online</span>
        </header>

        <section className="cards">

          <div className="card">
            <h3>CPU</h3>
            <p>12%</p>
          </div>

          <div className="card">
            <h3>Memory</h3>
            <p>4.2 GB / 16 GB</p>
          </div>

          <div className="card">
            <h3>Network</h3>
            <p>Connected</p>
          </div>

        </section>

        <section className="chat">

          <h2>NEXUS AI</h2>

          <div className="messages">
            <div className="ai">
              Hello Souvik.
              <br />
              I am NEXUS.
              <br />
              Ready for your command.
            </div>
          </div>

          <input
            type="text"
            placeholder="Type your command..."
          />

        </section>

      </main>
    </div>
  );
}

export default App;