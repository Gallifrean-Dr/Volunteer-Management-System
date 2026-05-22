
import { useEffect, useState } from "react";
import api from "../axiosConfig";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/tasks")
      .then(res => setTasks(res.data))
      .catch(err => {
        console.error(err);
        setError("Failed to load opportunities");
      });
  }, []);

  return (
    <div>
      <h2>Volunteer Dashboard</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {tasks.length === 0 ? (
        <p>No opportunities yet.</p>
      ) : (
        <ul>
          {tasks.map(t => (
            <li key={t._id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
