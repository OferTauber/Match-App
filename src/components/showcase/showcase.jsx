import React, { Component } from 'react';
import faker from 'faker';

import './showcase.css';

class Showcase extends Component {
  render() {
    return (
      <div className="showcase">
        <img src={faker.image.animals()} alt="avatar" />
        <h4>{faker.name.findName()}</h4>
      </div>
    );
  }
}

export default Showcase;
