import React from "react";
import { Link } from 'react-router-dom';

import './Menu.scss'

const Menu = ({ menu, setMenu }) => {
  return (
    <div className={"menu " + (menu && "active")} >
      <ul onClick={() => { setMenu(false) }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/Works">Works</Link></li>
        <li><Link to="/Review">Review</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
