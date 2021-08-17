import React from "react";
import RouterTask from "./routing";
import Header from "./header/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RouterTask />
      </div>
    </Router>
  );
}

export default App;
