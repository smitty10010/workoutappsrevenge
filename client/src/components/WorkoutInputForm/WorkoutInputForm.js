import React, { Component } from "react";
import "./WorkoutInputForm.css";


// save each exercise to state by adding to an array - that will be a submit for each exercise and add to an array of exercises for that day
// then there will a save workout button that posts that array of exercises to the workout history database
// so the state array will be saved in the wod active page and sent out from there

class WODForm extends Component {
  state = {
      name: "",
      sets: "",
      reps: "",
      weight: ""
  }
  
   handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;
    
    // Updating the input's state
      this.setState({
        [name]: value
      });
  };

  // This function actually belongs in active page
   handleFormSubmit = event => {
    event.preventDefault();
    this.props.addExercise(this.state)
  };

   render() {
     const id = "5bc27db12e7ac5f71a6387ea"
    return (
      <div>
        <form className="form">
          <label htmlFor="exercise">Name</label>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Exercise Name"
          />
          <label htmlFor="exercise">Sets</label>
          <input
            value={this.state.sets}
            name="sets"
            onChange={this.handleInputChange}
            type="text"
            placeholder="How many sets?"
          />
          <label htmlFor="exercise">Reps</label>
          <input
            value={this.state.reps}
            name="reps"
            onChange={this.handleInputChange}
            type="text"
            placeholder="How many reps"
          />
          <label htmlFor="exercise">Weight</label>
          <input
            value={this.state.weight}
            name="weight"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Weight"
          />
          <button onClick={() =>{this.handleFormSubmit(id)}}>Submit</button>
        </form>
      </div>
    );
  }
}
 export default WODForm; 