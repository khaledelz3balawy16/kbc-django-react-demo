import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

function App() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/dashboard-stats/`)
      .then((response) => {
        setStats(response.data);
      })
      .catch(() => {
        setError("Could not connect to Django API");
      });
  }, []);

  if (error) {
    return (
      <main className="page">
        <div className="error-card">
          <h1>Connection Error</h1>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  if (!stats) {
    return (
      <main className="page">
        <h1>Loading dashboard...</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="badge">Django + React + Docker + Coolify</p>
        <h1>{stats.system_name}</h1>
        <p>{stats.message}</p>
      </section>

      <section className="cards">
        <div className="card">
          <span>Total Learners</span>
          <strong>{stats.total_learners}</strong>
        </div>

        <div className="card">
          <span>Attendance Rate</span>
          <strong>{stats.attendance_rate}%</strong>
        </div>

        <div className="card">
          <span>Open Tickets</span>
          <strong>{stats.open_tickets}</strong>
        </div>
      </section>
    </main>
  );
}

export default App;