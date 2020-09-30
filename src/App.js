import React from "react";
import './css/keyframes.css';

//import components
import Intro from './components/Intro';
import SideBar from './components/SideBar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
        <Services />
      </div>
      <div id="side-bar">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
