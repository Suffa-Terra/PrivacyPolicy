import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Privacy from "./Screens/Privacy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
