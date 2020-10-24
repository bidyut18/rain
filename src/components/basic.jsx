import React from "react";
const Basic = () => {
  return (
    <div className="card" style={{ width: 340 }}>
      <img className="card-img-top ml-0" src={require("./assets/sun.jpg")} />
      <div className="card-body">
        <p className="card-text" style={{ fontFamily: "Noto Sans TC" }}>
          From : Station in name <br />
          description <br />
          Coordinate: x latitude and y longitude <br />
          Temperature: x deg and Feels like y deg <br />
          Temperature max: x deg and min: y deg <br />
          Pressure: a mbar <br />
          Humidity: 50% <br />
          Sunrise: x:yy and Sunset: g:ui <br />
          Visibility: ty K.m <br />
          Wind Speed : 50km
        </p>
      </div>
    </div>
  );
};

export default Basic;
