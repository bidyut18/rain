import React from "react";
import Basic from "./basic";
import Navbar from "./navbar";
//The main file to convey
function Main() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid align-items-center pt-2 pl-2">
        <Basic />
      </div>
    </div>
  );
}

export default Main;
