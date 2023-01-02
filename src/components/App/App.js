import { Component } from "react";
import "./App.css";
import TrickList from "../TricksList/TrickList";
import { fetchTricks } from "../../api-calls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    }
  }

  componentDidMount() {
    fetchTricks()
    .then(data => {
      console.log(data)
      this.setState({tricks: data})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickList tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
