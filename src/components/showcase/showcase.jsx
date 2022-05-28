import React, { Component } from 'react';

import './showcase.css';

class Showcase extends Component {
  render() {
    if (!this.props.match) return;
    const { img, desc } = this.props.match;
    return (
      <div className="showcase">
        <img src={img} alt={desc} />
        <h4>{desc}</h4>
      </div>
    );
  }
}

export default Showcase;
