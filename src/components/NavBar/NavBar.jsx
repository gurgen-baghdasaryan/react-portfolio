import React from "react";
import { Person, Mail } from "@material-ui/icons";

import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="navbar" >
      <div className="wrapper">
        <div className="left">
          <a href="#home" className='logo'>gugscode</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+34 685 93 93 86</span>
          </div>
          <div  className="itemContainer">
            <Mail className="icon"/>
            <span>gugdevelop@gmail.com</span>
          </div>
        </div>

        <div className="right">
          from right
        </div>
      </div>
    </div>
  );
};

export default NavBar;
