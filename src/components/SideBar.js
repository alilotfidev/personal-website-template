import React, { Component } from "react";
import '../css/SideBar.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="numbers">
          <span>01 </span>/ 07
        </div>
        <nav>
          <h3 className="side-bar-name">Anna Edmunds</h3>
            <ul className="links">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
            <ul className="social">
              <li><a href="#">TW.</a></li>
              <li><a href="#">IN.</a></li>
              <li><a href="#">FB.</a></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
