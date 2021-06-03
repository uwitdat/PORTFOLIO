import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='app'>
      <nav className='nav'>
          <div id='ben'>Ben Shekhtman</div>
          <div id='abt'>About</div>
          <div id='rsm'>Resume</div>
          <div id='proj'>Projects</div>
      </nav>
        <div className='img'>
        <div className='circle'></div>
         <img id='chef' src='Chef (78).png'></img> 
        </div>
        <div className='flexlink'>

          <div><img id='link' src='gh.png'></img>
          <img id='link' src='LI-In-Bug.png'></img>
          <img id='link' src='fb.png'></img></div>

        </div>
      </div>
     
    )
  }
}

export default App;
