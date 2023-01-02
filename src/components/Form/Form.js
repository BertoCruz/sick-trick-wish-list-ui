import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stance: "",
      trick: "",
      obstacle: "",
      tutorialLink: "",
    };
  }

  render() {
    return <div>Form</div>;
  }
}
