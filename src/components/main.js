import React, { Component } from "react";
import Basic from "./basic";
import Navbar from "./navbar";
//The main file to convey
// i Will nest basic in api
class Main extends Component {
  state = {
    input: "",
    base: "",
    name: "",
    status: "",
    description: "",
    lat: "",
    long: "",
    temp: "",
    feels_like: "",
    temp_max: "",
    temp_min: "",
    pressure: "",
    humidity: "",
    visibility: "",
    wind_speed: "",
    image: "",
  };
  getData = () => {
    const key = process.env.REACT_APP_API_KEY;
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${key}`
    );
    xhr.responseType = "json";
    xhr.onload = () => {
      const data = xhr.response;
      const base = data.base; // base
      const name = data.name; // name
      const status = data.weather[0].main; //Status
      const description = data.weather[0].description; // description
      const lat = data.coord.lat; // lat
      const long = data.coord.lon; // long
      const temp = Math.round(data.main.temp - 273); // tempr
      const feels_like = Math.round(data.main.feels_like - 273); // feels like
      const temp_max = Math.round(data.main.temp_max - 273); // tempr max
      const temp_min = Math.round(data.main.temp_min - 273); // tempr min
      const pressure = Math.round(data.main.pressure); // pressure
      const humidity = Math.round(data.main.humidity); // Humidity
      const visibility = Math.round(data.visibility / 1000); // Visibility
      const wind_speed = data.wind.speed; // Wind speed
      //Setting state
      this.setState({ base });
      this.setState({ name });
      this.setState({ status });
      this.setState({ description });
      this.setState({ lat });
      this.setState({ long });
      this.setState({ temp });
      this.setState({ feels_like });
      this.setState({ temp_max });
      this.setState({ temp_min });
      this.setState({ pressure });
      this.setState({ humidity });
      this.setState({ visibility });
      this.setState({ wind_speed });

      if (this.state.status === "Clouds") {
        this.setState({ image: require("./assets/rain.jpg") });
      } else if (this.state.status === "Mist") {
        this.setState({ image: require("./assets/mist.jpg") });
      } else {
        this.setState({ image: require("./assets/sun.jpg") });
      }
    };
    xhr.send();
  };
  handleInput = (e) => {
    const text = e.target.value;
    this.setState({ input: text });
  };
  handleSubmit = () => {
    alert("Location: " + this.state.input);
    this.getData();
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="input">
          <div className="container vw-50 p-2 pb-1 d-flex align-items-start">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                value={this.state.input}
                onChange={this.handleInput}
              />
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handleSubmit}
              >
                Get weather
              </button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid align-items-center pt-2 pl-2">
            <Basic
              image={this.state.image}
              base={this.state.base}
              name={this.state.name}
              status={this.state.status}
              description={this.state.description}
              lat={this.state.lat}
              long={this.state.long}
              temp={this.state.temp}
              feels_like={this.state.feels_like}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              visibility={this.state.visibility}
              wind_speed={this.state.wind_speed}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
