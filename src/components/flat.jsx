import React, { Component } from 'react';

class Flat extends Component {
  handleClick = (event) => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`

    return(
      <img
        className="gif"
        src={src}
        alt="Image"
        onClick={this.handleClick}
      />
    );
  }
}

export default Flat;
