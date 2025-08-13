import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Login from "./pages/Login";

import "./css/app.css";

function App() {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
