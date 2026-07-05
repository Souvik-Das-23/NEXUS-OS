import "./dashboard.css";
import StatusCard from "./statuscard";
import Chat from "../chat/chat";

export default function Dashboard() {
  return (
    <>
      <div className="cards">

        <StatusCard
          title="CPU Usage"
          value="12%"
        />

        <StatusCard
          title="Memory"
          value="4.3 GB"
        />

        <StatusCard
          title="Network"
          value="Online"
        />

      </div>

      <Chat />
    </>
  );
}