import React, { Component } from "react";
import Store from "./Store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Store />
        </header>
      </div>
    );
  }
}

export default App;
