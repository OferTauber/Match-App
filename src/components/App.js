import React, { Component } from 'react';
import Counter from './counter/counter';
import Showcase from './showcase/showcase';
import Controllers from './controllers/controllers';
import list from './assets/match_list';
import End from './end/end';

class App extends Component {
  state = {
    data: [],
    current: 0,
    counter: { like: 0, unlike: 0 },
    end: false,
  };

  componentDidMount() {
    this.setState({ data: list });
  }

  onBtnClick = (action) => {
    if (!this.state.end) {
      const counter = { ...this.state.counter };
      counter[action]++;
      const current = this.state.current + 1;
      const end = current === this.state.data.length;
      this.setState({ counter: counter, current: current, end: end });
    }
  };

  render() {
    const { current, data, counter, end } = this.state;
    return (
      <div className="App">
        <Counter counter={counter} />
        {end ? <End /> : <Showcase match={data[current]} />}
        <Controllers onBtnClick={this.onBtnClick} />
      </div>
    );
  }
}

export default App;
