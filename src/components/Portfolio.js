import React from "react";
import "../css/Portfolio.css";

//import portfolio images
import Bmw from "../images/portfolio/bmw.jpg";
import Cat from "../images/portfolio/cat.jpg";
import Xps from "../images/portfolio/dell-xps.jpg";
import Nature from "../images/portfolio/nature.jpg";

const Portfolio = () => {
  return (
    <div className="Portfolio section-wrapper">
      <h2 className="portfolio-title title">Portfolio</h2>
      <h4 className="portfolio-subtitle subtitle">
        Viverra tristique placerat massa estionos consectetur quisque nu fames
        lorem ipsum
      </h4>
      <div className="portfolio-wrapper">
        <div className="item horizontal-item">
          <img src={Nature} alt="nature" />
          <div className="details-layout">
            <h3 className="portfolio-item-title">Nature</h3>
            <h4 className="portfolio-item-type">Text</h4>
          </div>
        </div>
        <div className="item vertical-item">
          <img src={Bmw} alt="BMW" />
          <div className="details-layout">
            <h3 className="portfolio-item-title">BMW car</h3>
            <h4 className="portfolio-item-type">Video</h4>
          </div>
        </div>
        <div className="item third-item">
          <img src={Cat} alt="cat" />
          <div className="details-layout">
            <h3 className="portfolio-item-title">Persian Cat</h3>
            <h4 className="portfolio-item-type">Text</h4>
          </div>
        </div>
        <div className="item fourth-item">
          <img src={Xps} alt="xps" />
          <div className="details-layout">
            <h3 className="portfolio-item-title">Dell XPS Laptop</h3>
            <h4 className="portfolio-item-type">Text</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
