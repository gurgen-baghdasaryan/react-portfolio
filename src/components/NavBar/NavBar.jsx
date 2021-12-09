import React from "react";
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="navbar" >
      <div className="wrapper">
        <div className="left">
           <a href="#home" className='logo'>gugscode</a>

        </div>

        <div className="right">
              from right
        </div>
      </div>
    </div>
  );
};

export default NavBar;
