import React, { Component } from "react";

class App extends Component {

  render() {
    return (
      <div>
        <h6>Hello api</h6>
        <button
          onClick={() => {
            this.getData();
          }}
        ></button>
      </div>
    );
  }
}

export default App;
