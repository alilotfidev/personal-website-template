import React from "react";
import './css/keyframes.css';

//import components
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
      </div>
      <div id="side-bar"></div>
    </div>
  );
}

export default App;
