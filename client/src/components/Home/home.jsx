import React from "react";
import "./home.css";
import Navbar from "../navbar/navbar";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div id="front">
            <Navbar/>
            <p className="display-1">Blogger Prince</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
