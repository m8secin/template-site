import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import StatsCards from "./components/StatsCards";
import RecentUpdates from "./components/RecentUpdates";
import RecentClassTable from "./components/RecentClassTable";
import TutorActivities from "./components/TutorActivities";


function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <TopBar />

        <section className="stats-section">
          <StatsCards />
          <RecentUpdates />
        </section>

        <section className="bottom-section">
          <RecentClassTable />
          <TutorActivities />
        </section>
      </main>
    </div>
  );
}

export default App;
