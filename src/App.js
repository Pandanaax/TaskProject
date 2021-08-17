import React from "react";
import "./App.css";
import RouterTask from "./routing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterTask />
      </div>
    </Router>
  );
}

export default App;
