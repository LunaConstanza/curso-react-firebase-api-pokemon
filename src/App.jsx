import React from "react";
import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Routes as Switch, Route, Link, NavLink} from 'react-router-dom';


function App() {
 return (
    <Router>
        <div className="container mt-3">
          <Navbar />
          <Switch>
            <Route path="/" exact element={<Pokemones />} />
            <Route path="/login" element={<Login />} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
