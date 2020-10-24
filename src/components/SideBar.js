import React, { Component } from "react";
import "../css/SideBar.css";

class SideBar extends Component {
  scrollTo = this.props.scrollTo;
  render() {
    return (
      <div className="SideBar">
        <div className="numbers">
          <span>01 </span>/ 07
        </div>
        <nav>
          <h3 className="side-bar-name">Anna Edmunds</h3>
          <ul className="links">
            <li
              onClick={() => {
                this.scrollTo("Intro");
              }}
              className="Intro-nav-item"
            >
              Home
            </li>
            <li
              onClick={() => {
                this.scrollTo("Services");
              }}
              className="Services-nav-item"
            >
              Services
            </li>
            <li
              onClick={() => {
                this.scrollTo("AboutMe");
              }}
              className="AboutMe-nav-item"
            >
              About
            </li>
            <li
              onClick={() => {
                this.scrollTo("Portfolio");
              }}
              className="Portfolio-nav-item"
            >
              Portfolio
            </li>
            <li
              onClick={() => {
                this.scrollTo("Blog");
              }}
              className="Blog-nav-item"
            >
              Blog
            </li>
            <li
              onClick={() => {
                this.scrollTo("Skills");
              }}
              className="Skills-nav-item"
            >
              Skills
            </li>
            <li
              onClick={() => {
                this.scrollTo("ContactMe");
              }}
              className="Contact-nav-item"
            >
              Contact
            </li>
          </ul>
          <ul className="social">
            <li>
              <a href="#">TW.</a>
            </li>
            <li>
              <a href="#">IN.</a>
            </li>
            <li>
              <a href="#">FB.</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
