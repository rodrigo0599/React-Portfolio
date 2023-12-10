import React from "react";
import "../styles/About.css"; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
//import profileImage from '../assets/profile.jpg'; // Replace with your image path

import rod from '../assets/rod.jpg'; // Adjust the path as necessary

function About() {
  return (
    <div className="home">
      <section className="about">
        <img src={rod} alt="Profile" className="about__image"/>
        
        <p className="about__description ">
        I am a full-stack web developer with a passion for learning and
          creating. I have experience in HTML, CSS, JavaScript, React, Node.js,
          Express, MongoDB, and SQL. I am a quick learner and I am always looking
          to expand my knowledge. I am a team player and I am always willing to
          help others. I am looking for a position where I can continue to learn
          and grow as a developer.
        </p>
      </section>
    </div>
  );
}



export default About;

 

