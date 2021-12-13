import React from "react";

import './Portfolio.scss'

const Portfolio = () => {
  return (

    <div className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://www.caixabank.es/deployedfiles/particulares/Estaticos/Imagenes/Home/imaginhomebankia.jpg" 
          alt="" />
        </div>  
      </div>
    </div>
  );
};

export default Portfolio;
