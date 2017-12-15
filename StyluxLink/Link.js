import React, { Component } from 'react';
import './Link.css';

class Link extends Component {
  render() {
    return (
      <div>
        <a className="link" href={this.props.to}><h1>{this.props.children}</h1></a>
      </div>
    )
  }
}

export default Link