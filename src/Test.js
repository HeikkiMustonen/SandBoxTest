import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nimi: this.props.nimi,
      description: this.props.description
    };

    this.AddSomething = this.AddSomething.bind(this);
  }

  AddSomething() {
    var data = document.getElementById("testField").value;
    console.log("testfield : ", data);
  }

  render() {
    return (
      <div>
        <br />
        <h2>Testing {this.state.nimi} </h2>
        <h2>jeppis {this.state.description}</h2>
        <br />
        <input type="text" id="testField" />
        <button onClick={this.AddSomething}>testbutton</button>
      </div>
    );
  }
}

export default Test;
