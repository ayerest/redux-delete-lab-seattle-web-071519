import React, { Component } from 'react';

class Band extends Component {

  handleOnDelete = (event) => {
    this.props.delete(this.props.band.id)
  }

  render() {
    console.log(this.props)
    return(
      <ul>
        <li>{this.props.band.name}</li>
        <button onClick={this.handleOnDelete}>Delete band</button>
      </ul>
    );
  }
};

export default Band;
