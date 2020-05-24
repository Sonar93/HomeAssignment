import React from "react";
import "./App.css";
import { DataProvider } from "./UserContext";
import Control from "./components/Control";

function App() {
  return (
    <div className="col-md-12">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Home Assignment by Sumit Sonar{" "}
        </span>
      </nav>
      <DataProvider>
        <Control />
      </DataProvider>
    </div>
  );
}

export default App;
