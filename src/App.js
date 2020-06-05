import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
