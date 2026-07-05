import "./chat.css";

export default function Chat() {
  return (
    <section className="chat-container">

      <div className="chat-header">
        <h2>NEXUS AI</h2>
        <span className="online">● Online</span>
      </div>

      <div className="chat-messages">

        <div className="message ai">
          👋 Hello Souvik!
        </div>

        <div className="message ai">
          I am NEXUS.
        </div>

        <div className="message ai">
          Ready for your command...
        </div>

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Type your command..."
        />

        <button>Send</button>

      </div>

    </section>
  );
}