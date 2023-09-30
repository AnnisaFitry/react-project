import React, { Component } from 'react';

class RandomNumberButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
    };
  }
  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Random Number: ${randomNum}`);
    this.setState({ randomNumber: randomNum });
  };

  render() {
    return (
      <div>
        <button className="btn btn-outline-primary" type="button" onClick={this.generateRandomNumber}>Generate Random Number</button>
        {this.state.randomNumber !== null && ( 
          <></>
        )}
      </div>
    );
  }
}

export default RandomNumberButton;