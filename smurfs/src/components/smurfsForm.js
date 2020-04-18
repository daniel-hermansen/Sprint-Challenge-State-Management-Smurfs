import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, updateSmurf } from "../actions/dataActions";


class SmurfForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            age: "",
            height: ""
        };
}

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.value);
    };

    submit = e => {
        e.preventDefault();

          this.props.addSmurf(this.state);
        
        this.setState({ name: "", age: "", height: "" });
      };

    render() {
        return (
            <div className = "smurf-form">
                <form onSubmit={this.submit}>
                    <input 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder= "Name"
                    />
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
                    <input
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                        placeholder="Height"
                    />
                    <div className = "button-container">
                        <button type="submit">Add Smurf</button>
                        {<button onClick={this.hide}>Close Form</button>}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    { updateSmurf, addSmurf }
)(SmurfForm);  