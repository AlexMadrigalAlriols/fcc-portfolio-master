import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://www.instagram.com/alexxmadrigal_/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link al twitter de Alex Madrigal"
      >
        {' '}
        <i className="fab fa-instagram" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/AlexMadrigalAlriols"
        target="_blank"
        rel="noopener noreferrer"
        title="Link al link del GitHub"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      <a
        href="https://codepen.io/alexmadrigalalriols"
        target="_blank"
        rel="noopener noreferrer"
        title="Link al link del CodePen"
      >
        {' '}
        <i className="fab fa-codepen" />
      </a>
    </div>
  );
};

export default SocialLinks;
