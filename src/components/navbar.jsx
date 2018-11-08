import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value !== 0).length}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
