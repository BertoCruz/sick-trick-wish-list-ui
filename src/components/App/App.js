import { Component } from "react";
import "./App.css";
import TrickList from "../TricksList/TrickList";
import Form from "../Form/Form";
import { fetchTricks } from "../../api-calls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    }
  }

  addNewTrick = (trick) => {
    this.setState({tricks: {...this.state.tricks, trick}})
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
        <Form addNewTrick={this.addNewTrick}/>
        <TrickList tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;
