import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Discover from "./Pages/Discover";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Discover" element={<Discover />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
