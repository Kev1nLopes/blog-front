import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import './global.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}

export default App;
