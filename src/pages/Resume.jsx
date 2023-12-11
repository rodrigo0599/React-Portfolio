import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    faHtml5,
    faReact,
    faCss3Alt,
    faBootstrap,
    faNodeJs,
    faJs,
    faGithub,
    faGit,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode, faDatabase, faServer, faFileCode } from '@fortawesome/free-solid-svg-icons';
  import '../styles/Resume.css';
function Resume() {
    // Dummy data, replace with your actual data
    const FrontEnd
    = [
        // ... your FrontEnd data
        { skill: 'HTML5', icon: faHtml5 },
        { skill: 'CSS3', icon: faCss3Alt },
        { skill: 'React', icon: faReact },
        { skill: 'Bootstrap', icon: faBootstrap },
        { skill: 'Node.js', icon: faNodeJs },
        { skill: 'JavaScript', icon: faJs },
        { skill: 'Jquery', icon: faCode }
    ];
    const BackEnd = [
        // ... your BackEnd data
    { skill: 'Node.js', icon: faNodeJs },
    { skill: 'SQL', icon: faDatabase }, // Using a general database icon
    { skill: 'Sequelize', icon: faServer }, // Example, using a server icon
    { skill: 'MongoDB', icon: faDatabase }, // Using a general database icon
    { skill: 'Heroku', icon: faServer }, 
    ];
    const DevelopmentTools
    = [
         
 
        { skill: 'Github', icon: faGithub },
        { skill: 'Git', icon: faGit },
        { skill: 'Json', icon: faFileCode},
        // ... add more DevelopmentTools here
     ];
     

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Rodrigo Rivera</h1>
                    <Row>
                <Col>
                    <Button href="https://docs.google.com/document/d/1cKjfufsGhj8kWrZsMlQJP5ho3jsoPBxv7pj2u9wuSF0/edit?usp=sharing" target="_blank">Download Resume</Button>
                </Col>
            </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Front End Development
</h2>
{FrontEnd.map((skill, index) => (
  <p key={index}>
  <FontAwesomeIcon icon={skill.icon} />
  {skill.skill}
</p>
))}
                </Col>
            </Row>
            <Row>
                <Col>
                <h2>Back End Development
</h2>
{BackEnd.map((skill, index) => (
  <p key={index}>
  <FontAwesomeIcon icon={skill.icon} />
  {skill.skill}
</p>
))}
                </Col>
            </Row>
            <Row>
 <Col>
     <h2>Development Tools</h2>
     {DevelopmentTools.map((skill, index) => (
         <p key={index}>
             <FontAwesomeIcon icon={skill.icon} />
             {skill.skill}
         </p>
     ))}
 </Col>
</Row>

            
        </Container>
    );
}

export default Resume;
