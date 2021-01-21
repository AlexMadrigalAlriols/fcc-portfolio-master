import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who I'am?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Alex Madrigal</h4>
            <p>
              I am a web & app developer from Lleida, Spain.
            </p>
            <p>
              I really enjoy solving problems and code or design websites and app. I can't stop learning new things.
              I'm so self-sufficient and I prefer work with teams and lead teams for groups and projects.
            </p>
            <p>
              You can see my projects if you want to see more.                
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
