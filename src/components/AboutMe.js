import React from "react";
import AnnaEdmunds2 from "../images/anna-edmunds-2.jpg";
import Signature from '../images/signature.png';
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe section-wrapper">
      <div className="about-me-text-wrapper">
        <h2 className="about-me-title title">About</h2>
        <h4 className="about-me-subtitle subtitle">
          Viverra tristique placerat massa estionos consectetur quisque nu fames
          lorem ipsum
        </h4>
        <p className="about-me-details details">
          Dolor sit amet, consectetur adipiscing elit. Viverra tristique
          placerat in massa consectetur quisque. Nunc ac fames lectus in libero
          aliquet lorem ipsum dolor sit amet enim est urus tincidunt magna ut
          turpis eu, eu enim. Nisl porttitor elit risus velit urna morbi mauris.
        </p>
      </div>
      <img
        src={AnnaEdmunds2}
        alt="anna edmunds"
        className="about-me-horizontal-image"
        data-aos="fade-right"
      />
      <div className="about-me-more-details">
        <div className="more-details-top">
          <p className="first-paragraph">
            Nam ultrices ultrices nec tortor pulvinar fermentum mi. Sociis sit
            tristique sagittis, mauris volutpat estera phasellus. Varius nec
            orci, quam augue lorem lines pellentesque non id. Tristique amet
            volutpat nunc euismod. Mauris felis at quam sollicitudin est sempe
            vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim.
            Nisl porttitor elit risus velit urna morbit mauris at proin laoreet
            lobortis urna aliquam setera fermentum sit iaculis vitae hendrerit
            et. Arcu ac est dictum lorem ispum dolor sit amet nunc usrus seio.
          </p>
          <div className="job-details" data-aos="fade-in">
            <ul className="email">
              <li className="job-details-title">Email:</li>
              <li className="job-details-content link">
                <a href="mailto:anna@example.com">anna@example.com</a>
              </li>
            </ul>
            <ul className="role">
              <li className="job-details-title">Role:</li>
              <li className="job-details-content">Front-End Developer</li>
            </ul>
            <ul className="phone">
              <li className="job-details-title">Phone:</li>
              <li className="job-details-content link">
                <a href="tel:+989331138371">(+98) 933 113 8371</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="more-details-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            tristique placerat in sat massa consectetur quisque. Nunc aces fames
            lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet
            settera aces volutpat in voltare lupar est phasellus.
          </p>
          <p>
            Faucibus sed tristique fames sed aliquet ultricies eget viverra
            arcu. Vitae faucibus diam consequat aecenas. Turpis metus sit diam
            purus leo in varius ac quam. Nunc amet sei tristique set volutpat
            vulputate est phasellus. Volutpat faucibus per praesent aced no
            nuncare voltare per settera lorem ipsum dolor loboritas prion mauris
            varius est.
          </p>
          <img className="signature" src={Signature} alt="signature"/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
