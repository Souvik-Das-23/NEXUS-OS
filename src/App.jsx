import "./App.css";

import Background from "./background/background";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <>
      <Background />

      <div className="app">

        <Sidebar />

        <main className="main">

          <Header />

          <Dashboard />

        </main>

      </div>
    </>
  );
}

export default App;