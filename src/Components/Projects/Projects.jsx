import React from 'react';
import Project from './Project';
import './Projects.css';
// Acortar links de las imagenes
import EspectreImg from './Images/EspectreImg.PNG';
import PeliImg from './Images/Peliculas.png';
import MernStack from './Images/MernStack.PNG';
import TestTEI from './Images/TestTEI.PNG';
import NotesApp from './Images/NotesApp.PNG';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Projects</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. 
            All of these were built during my self-teaching and always I try to do at least 2 projects each month.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Cimex The Game"
            img={EspectreImg}
            tech="js css node bootstrap"
          >
            <small>
              Built using NodeJs, MongoDB, CSS, Express, Bootstrap.
            </small>
            <p>
              This is a full-stack website that I made for a education project.
            </p>
            <div className="buttons">
              <a href="http://cimexthegame.com/" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </Project>

          <Project
            title="LOCAL DATA BASE JSON"
            img={PeliImg}
            tech="js node css"
          >
            <small>
              Built using JS and JSON + HTML and CSS.
            </small>
            <p>
              Is a little project for learn about JSON's.
            </p>

            <div className="buttons">
              <a href="https://github.com/AlexMadrigalAlriols/BaseDeDatosLocal-Peliculas-" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-external-link-alt" />
              </a>
            </div>

          </Project>

          <Project
            title="MERN STACK"
            img={MernStack}
            tech="js css node react bootstrap"
          >
            <small>
              Built using NodeJs, MongoDB, CSS, Express, Bootstrap, React and Babel.
            </small>
            <p>
              This is a full-stack website, I just made it for learn the actual MERN stack. Is a organizer notes web.
            </p>
            <div className="buttons">
              <a href="https://github.com/AlexMadrigalAlriols/Mern-STACK-Project" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </Project>

          <Project
            title="Test TEI App"
            img={TestTEI}
            tech=""
          >
            <small>
              Built using C#, JSON and Unity.
            </small>
            <p>
              This is an app for Test TEI, I maded for learn about Unity and C#.
            </p>
            <div className="buttons">
              <a href="https://play.google.com/store/apps/details?id=com.freelance.TestTEI" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </Project>

          <Project
            title="Notes App"
            img={NotesApp}
            tech="react node css"
          >
            <small>
              Built using MongoDB, NodeJS, React, HTML and CSS.
            </small>
            <p>
              This is a full-stack website, Is a project for learn about MongoDB Atlas, NodeJS and React.
            </p>
            <div className="buttons">
              <a href="https://github.com/AlexMadrigalAlriols/Notes-App" target="_blank" rel="noopener noreferrer">
                View Project <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </Project>

        </div>
      </div>
    </section>
  );
};

export default Projects;
