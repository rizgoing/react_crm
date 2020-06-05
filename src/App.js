import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </div>
    </BrowserRouter>
  );
}

export default App;
