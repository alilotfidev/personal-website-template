import React from "react";
import '../css/Intro.css';
import PersonImage from '../images/anna-edmunds.jpg';
import DownArrow from '../images/down-arrow.svg';
const Intro = ({ scrollTo }) => {
  return (
    <div className="Intro">
        <h1 className="intro-name">Hello<br/> I’m <span>Anna Edmunds</span></h1>
        <img className="intro-image" src={PersonImage} alt="anna edmunds"/>
        <img className="arrow" src={DownArrow} alt="down arrow" onClick={() => {scrollTo('Services')}}/>
    </div>
  );
};

export default Intro;
