import React, { Component } from 'react';
import './Wall.css';
import Profile from './Profile.js';
import drew from './img/drew.jpg';
import parham from './img/parham.jpg';
import sameer from './img/sameer.jpg';
import matt from './img/matt.jpg';
import octavian from './img/octavian.jpg';

class Wall extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <h1>Gergot Hall of Fame</h1>
        </div>
        <div className='row'>
          <Profile picture={drew} name="Drew Kim" />
          <Profile picture={parham} name="Parham Rouzbahani" />
          <Profile picture={sameer} name="Sameer Annamraju" />
          <Profile picture={matt} name="Matt Kahan" />
          <Profile picture={octavian} name="Octavian Sima" />
        </div>
        <a href="https:\/\/forms.gle\/NEyrQJGSbMRsFFFx6" target="_blank">Apply</a>
      </div>
    );
  }
}

export default Wall;
