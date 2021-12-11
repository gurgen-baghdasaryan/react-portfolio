import React from "react";
import './Menu.scss'

const Menu = ({menu, setMenu}) => {
  return (
    <div className={"menu " +(menu && "active")} >
      <ul onClick={()=>{setMenu(false)}}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#review">Review</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
