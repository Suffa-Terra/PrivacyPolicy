import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Privacy from "./Screens/Privacy";
import Terms from "./Screens/Terms";
import Navbar from './Components/Navbar';
import Developer from "./Screens/Developer";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/Developer" element={<Developer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
