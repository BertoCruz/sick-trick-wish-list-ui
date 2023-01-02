import { Component } from "react";
import "./App.css";
import TrickList from "../TricksList/TrickList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickList />
      </div>
    );
  }
}

export default App;
