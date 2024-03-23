import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Teacher from "./components/Teacher";
import Team from "./components/Team";
import Post from "./components/Post";
import Ai from "./components/Ai";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Teacher />} />
        <Route path="/team" element={<Team />} />
        <Route path="/post" element={<Post />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
