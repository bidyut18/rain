import React, { Component } from "react";
class Navbar extends Component {
  state = {
    text: "Starship weather",
  };
  render() {
    return (
      <div
        style={{
          fontFamily: "Noto Sans TC",
          width: "100%",
          alignItems: "center",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
          <h1 className="navbar-brand mb-2 mr-0 pb-1 align-self-center ">
            {this.state.text}
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
