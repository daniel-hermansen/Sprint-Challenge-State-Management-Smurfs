import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addSmurf, getSmurf } from "../actions";
import SmurfForm from "./smurfsForm";


class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        update: false,
        id: ""
  };
}

  componentDidMount() {
    console.log(this.props);
    this.props.getSmurf();
  }

  render() {
    console.log(this.props.stuff);
    return (
      <div className="App">
        <h1 className="Title">SMURFS!</h1>
        <div className ="container">
          {(this.props.stuff.length ? 
          <div className = "my-smurfs">{this.props.stuff.map((smurf) => {
            console.log(this.props.stuff)
            return(
              <div className= "smurf-card" key = {smurf.id}>
                <h3>Name: {smurf.name}</h3>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
              </div>
            );
          })}
          </div>
          : <div>Smurfs</div>)}
          <div className="form-container">
            <SmurfForm add={this.props.addSmurf}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    stuff: state.stuff,
    fetchingSmurf: state.fetchingSmurf,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurf } 
)(App);

