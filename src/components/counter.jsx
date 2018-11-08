import React, { Component } from "react";

class Counter extends Component {
  render() {
    let classes = this.getBadgeClasses();
    const { onIncrement, onDelete, counter, onDecrement } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span className={classes}>{this.formatCount()}</span>
          </div>
          <div className="col-md-11">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={counter.value === 0}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
