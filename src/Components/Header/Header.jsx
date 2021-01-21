import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line glitched"><sapan className="color"><u>I'm</u></sapan> Alex Madrigal</span>
          <span className="line">&nbsp;</span>
          <span className="line">
            & <span className="color"><u>I'm</u></span> <span id="typed"></span>
          </span>
        </h1>
      </div>
    </header>

  );
};

export default Header;
