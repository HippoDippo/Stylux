import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div>
        <h2><a className="button" href={this.props.to}>Click Me</a></h2>
      </div>
    )
  }
}

export default Button;