import "./dashboard.css";

import StatusCard from "./statuscard";
import Chat from "../chat/chat";
import AIOrb from "../aiorb/aiorb";

export default function Dashboard() {

  return (
    <>

      <div className="cards">

        <StatusCard title="CPU" value="12%" />
        <StatusCard title="Memory" value="4.2 GB / 16 GB" />
        <StatusCard title="Network" value="Connected" />

      </div>

      <AIOrb />

      <Chat />

    </>
  );

}