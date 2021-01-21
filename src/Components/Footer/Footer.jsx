import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISIT</h3>
        <p>© {new Date().getFullYear()} Alex Madrigal Alriols.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
