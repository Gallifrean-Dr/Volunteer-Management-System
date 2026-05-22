
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px" }}>
        <Link to="/">User Panel</Link> |{" "}
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
