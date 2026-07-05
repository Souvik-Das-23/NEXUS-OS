import { LayoutDashboard, Bot, FolderOpen, Settings } from "lucide-react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>NEXUS</h1>
        <span>AI OS</span>
      </div>

      <nav>
        <button><LayoutDashboard size={20}/> Dashboard</button>
        <button><Bot size={20}/> AI Chat</button>
        <button><FolderOpen size={20}/> Files</button>
        <button><Settings size={20}/> Settings</button>
      </nav>
    </aside>
  );
}