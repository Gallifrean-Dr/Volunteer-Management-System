
import { useState } from "react";
import api from "../axiosConfig";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await api.post("/tasks", { title });
      setTitle("");
      alert("Opportunity created");
    } catch (err) {
      console.error(err);
      setError("Failed to create opportunity");
    }
  };

  return (
    <div>
      <h2>Organisation Admin Panel</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Opportunity title"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Admin;
