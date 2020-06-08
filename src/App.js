import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./components/users/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/:user_id" component={UserDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
