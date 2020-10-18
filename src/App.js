import React from "react";
import './css/keyframes.css';

//import components
import Intro from './components/Intro';
import SideBar from './components/SideBar';
import Services from './components/Services';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <Services />
        <AboutMe />
      </div>
      <div id="side-bar">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
