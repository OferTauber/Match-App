import React, { Component } from 'react';
import Counter from './counter/counter';
import Showcase from './showcase/showcase';
import Controllers from './controllers/controllers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Showcase />
        <Controllers />
      </div>
    );
  }
}

export default App;
