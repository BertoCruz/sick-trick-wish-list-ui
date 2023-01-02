import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: "",
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  };

  submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
        id: Date.now(),
        ...this.state
    }
    this.props.addNewTrick(newTrick);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ stance: "", name: "", obstacle: "", tutorial: "" });
  };

  render() {
    return (
      <div>
        <form>
          <p>SAMPLE</p>
          <select value={this.state.stance} onChange={(event) => this.handleChange(event)}>
            <option value="">Choose your Stance</option>
            <option value="regular">Reguler</option>
            <option value="switch">Switch</option>
          </select>

          <input 
            name="name"
            onChange={event => this.handleChange(event)}    
            placeholder="Name of Trick"
            type="text" 
            value={this.sate.name}
        />

          <select value={this.state.obstacle} onChange={(event) => this.handleChange(event)}>
            <option value="">Choose your Obstacle</option>
            <option value="flat ground">Flat Ground</option>
            <option value="ledge">Ledge</option>
            <option value="rail">Rail</option>
            <option value="stairs">Stairs</option>
            <option value="pool">Pool</option>
          </select>

          <input 
          name="tutorial"
          placeholder="Link to Tutorial" 
          onChange={event => this.handleChange(event)}
          type="text"
          value={this.state.tutorial}/>

          <button onClick={this.submitTrick}> Send It!</button>
        </form>
      </div>
    );
  }
}
