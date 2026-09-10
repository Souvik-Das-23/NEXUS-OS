import { useEffect, useState } from "react";

import "./dashboard.css";

import StatusCard from "./statuscard";
import Chat from "../chat/chat";
import AIOrb from "../aiorb/aiorb";

const SYSTEM_STATS_URL = "http://127.0.0.1:8000/system";
const POLL_INTERVAL_MS = 3000;

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function fetchStats() {
      try {
        const res = await fetch(SYSTEM_STATS_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(`Unexpected status ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setStats(data);
          setError(false);
        }
      } catch (err) {
        if (!cancelled && err.name !== "AbortError") {
          setError(true);
        }
      }
    }

    fetchStats();
    const intervalId = setInterval(fetchStats, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      controller.abort();
      clearInterval(intervalId);
    };
  }, []);

  const cpuValue = error ? "Offline" : stats ? `${stats.cpu}%` : "Loading...";
  const memoryValue = error ? "Offline" : stats ? `${stats.ram}%` : "Loading...";

  return (
    <>

      <div className="cards">

        <StatusCard title="CPU" value={cpuValue} />
        <StatusCard title="Memory" value={memoryValue} />
        <StatusCard title="Network" value="Connected" />

      </div>

      <AIOrb />

      <Chat />

    </>
  );

}
