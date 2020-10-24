import React, { Component } from "react";
import "./css/keyframes.css";

//import components
import Intro from "./components/Intro";
import SideBar from "./components/SideBar";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import scrollToComponent from "react-scroll-to-component";
import AOS from 'aos';

class App extends Component {
  scrollTo = (ComponentName) => {
    switch (ComponentName) {
      case "AboutMe": {
        scrollToComponent(this.AboutMe, { offset: -20, align: "top" });
        break;
      }
      case "Portfolio": {
        scrollToComponent(this.Portfolio, { offset: -20, align: "top" });
        break;
      }
      case "ContactMe": {
        scrollToComponent(this.Contact, { offset: -20, align: "top" });
        break;
      }
      case "Intro": {
        scrollToComponent(this.Intro, { offset: -20, align: "top" });
        break;
      }
      case "Services": {
        scrollToComponent(this.Services, { offset: -20, align: "top" });
        break;
      }
      case "Skills": {
        scrollToComponent(this.Skills, { offset: -20, align: "top" });
        break;
      }
      case "Blog": {
        scrollToComponent(this.Blog, { offset: -20, align: "top" });
        break;
      }
      default: {
        break;
      }
    }
  };

  getScrollPosition = () => {
    const elements = document.querySelectorAll("section");
    const scrollPositions = [];
    elements.forEach((element) => {
      scrollPositions.push({
        id: element.id,
        scrollPos: element.getBoundingClientRect().top,
      });
    });
    window.addEventListener("scroll", (e) => {
      for (let i = 0; i < scrollPositions.length; i++) {
        if (
          i === scrollPositions.length - 1 &&
          window.scrollY >= scrollPositions[i].scrollPos
        ) {
          addActiveNavClass(i);
        } else {
          if (
            window.scrollY >= scrollPositions[i].scrollPos &&
            window.scrollY < scrollPositions[i + 1].scrollPos
          ) {
            addActiveNavClass(i);
          }
        }
      }
    });
    const addActiveNavClass = (i) => {
      const navElement = document.querySelector(
        `.${scrollPositions[i].id}-nav-item`
      );
      const allNavLinks = document.querySelectorAll('.SideBar > nav > ul.links > li');
      allNavLinks.forEach(element => {
        if (element !== navElement && element.classList.contains('active-nav-item')) {
          element.classList.remove('active-nav-item');
        }
      });
      if (!navElement.classList.contains("active-nav-item")) {
        navElement.classList.add("active-nav-item");
        const sectionNumber = document.querySelector('#side-bar > .SideBar > .numbers > span');
        sectionNumber.style.opacity = '0';
        sectionNumber.innerHTML = (`0${i+1} `);
        sectionNumber.style.opacity = '1';
      }
    };
  };
  componentDidMount() {
    this.getScrollPosition();
    AOS.init();
  }
  render() {
    return (
      <div className="App">
        <div id="content">
          <section
            ref={(section) => {
              this.Intro = section;
            }}
            id="Intro"
          >
            <Intro scrollTo={this.scrollTo} />
          </section>
          <section
            ref={(section) => {
              this.Services = section;
            }}
            id="Services"
          >
            <Services />
          </section>
          <section
            ref={(section) => {
              this.AboutMe = section;
            }}
            id="AboutMe"
          >
            <AboutMe />
          </section>
          <section
            ref={(section) => {
              this.Portfolio = section;
            }}
            id="Portfolio"
          >
            <Portfolio />
          </section>
          <section
            ref={(section) => {
              this.Blog = section;
            }}
            id="Blog"
          >
            <Blog />
          </section>
          <section
            ref={(section) => {
              this.Skills = section;
            }}
            id="Skills"
          >
            <Skills />
          </section>
          <section
            ref={(section) => {
              this.Contact = section;
            }}
            id="Contact"
          >
            <Contact />
          </section>
        </div>
        <div id="side-bar">
          <SideBar scrollTo={this.scrollTo} />
        </div>
      </div>
    );
  }
}

export default App;
