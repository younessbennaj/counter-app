import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  onDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  onIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.onDelete}
              onIncrement={this.onIncrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
