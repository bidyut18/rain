import React, { Component } from "react";

class App extends Component {
  getData = () => {
    const key = "3b114d1dcc34ce34f25e3d39fb3e49c0";
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=osaka&appid=${key}`
    );
    xhr.responseType = "json";
    xhr.onload = () => {
      const data = xhr.response;
      console.log(data);
    };
    xhr.send();
  };

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
