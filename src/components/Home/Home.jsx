import React from "react";
import './Home.scss'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mynft.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'm</h2>
          <h1>Gurgen</h1>
          <h3>Full Stack <span>Web Developer</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
