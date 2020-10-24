import React from "react";
import "../css/Services.css";

//services images
import designService from '../images/ser1.png';
import developService from '../images/ser2.png';
import writeService from '../images/ser3.png';
import promoteService from '../images/ser4.png';

const Services = () => {
  return (
    <div className="Services section-wrapper">
      <h2 className="services-title title">Services</h2>
      <h4 className="services-subtitle subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Nam fringilla pellentesque.
      </h4>
      <div className="services-details details">
        <p className="services-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
          pellentesque ex, vitae maximus sapien molestie id. Fusce molestie
          eleifend leo, non euismod lectus dapibus id.Cras eleifend ultrices
          aliquam. Nullam eu condimentum nibh, nec varius ex. Suspendisse
          efficitur, orci ac blandit ultrices, nisl nibh aliquam lorem
        </p>
        <p className="services-text">
          Etiam luctus vel eros malesuada tempor. Nam dapibus odio et dictum
          pulvinar. Duis nisl felis, viverra dictum vehicula ac, fringilla quis
          turpis. Vivamus laoreet ligula lectus, et aliquet lacus scelerisque
          eget. Nam id leo risus.
        </p>
      </div>
      <div className="services-links" data-aos="fade-right">
        <a href="#" className="services-link">
          Download CV
        </a>
        <a href="#" className="services-link">
          My Portfolio
        </a>
      </div>
      <div className="services-grid">
        <div className="service">
        <img src={ designService } alt="designService" className="service-image"/>
          <h4 className="service-title">Design</h4>
          <p className="service-details">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="service">
        <img src={ developService } alt="developService" className="service-image"/>
          <h4 className="service-title">Develop</h4>
          <p className="service-details">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="service">
        <img src={ writeService } alt="writeService" className="service-image"/>
          <h4 className="service-title">Write</h4>
          <p className="service-details">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="service">
        <img src={ promoteService } alt="promoteService" className="service-image"/>
          <h4 className="service-title">Promote</h4>
          <p className="service-details">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
