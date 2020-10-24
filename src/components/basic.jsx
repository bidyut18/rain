import React from "react";
const Basic = (props) => {
  if (!props.base) {
    return (
      <div className="card" style={{ width: 340 }}>
        <img
          className="card-img-top ml-0"
          src={require("./assets/general.jpg")}
          alt="weather here"
        />
        <div className="card-body">
          <h5 className="card-title">Get Your weather here</h5>
          <p className="card-text" style={{ fontFamily: "Noto Sans TC" }}>
            Weather is the engine that gives power to your daily life and
            navigate your day <span role="img">⛄⚡☔</span>.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card d-flex align-items-center" style={{ width: 340 }}>
        <img className="card-img-top ml-0" src={props.image} alt="Sunny" />
        <div className="card-body">
          <p className="card-text" style={{ fontFamily: "Noto Sans TC" }}>
            From {props.base} in {props.name} <br />
            {props.status} and {props.description} here <span>🌈☃</span>
            <br />
            Coordinate: {props.lat} latitude and {props.long} longitude <br />
            Temperature: {props.temp} &deg;C and Feels like {props.feels_like}{" "}
            &deg;C <br />
            Temperature max: {props.temp_max} deg and min: {props.temp_min} deg{" "}
            <br />
            Pressure: {props.pressure} mbar <br />
            Humidity: {props.humidity}% <br />
            Visibility: {props.visibility} K.m <br />
            Wind Speed : {props.wind_speed} km/h
          </p>
        </div>
      </div>
    );
  }
};

export default Basic;
