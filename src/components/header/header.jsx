
import "./header.css";

export default function Header() {
  const today = new Date();

  return (
    <header className="header">
      <div>
        <h2>Welcome Back, Souvik 👋</h2>
        <p>{today.toDateString()}</p>
      </div>

      <div className="status">
        <span className="dot"></span>
        <span>System Online</span>
      </div>
    </header>
  );
}