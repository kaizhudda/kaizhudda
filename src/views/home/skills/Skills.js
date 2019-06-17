import React from 'react';
import Title from '../../../sharedComponents/title';
import Skill from './skill';

import './Skills.scss';

const Skills = () => {
  return (
    <div className="Skills row center-xs" id="skills-section">
      <Title>Skills</Title>
      <Skill skills={feSkills} category="Front-End" />
      <Skill skills={beSkills} category="Back-End" />
      <Skill skills={otherSkills} category="CI/CD and other" />
    </div>
  );
}

export default Skills;

const feSkills = [
  {
    name: "React",
    experience: "3+ years"
  },
  {
    name: "Redux",
    experience: "3+ years"
  }, 
  {
    name: "JavaScript/ES6",
    experience: "6+ years"
  }, 
  {
    name: "HTML5",
    experience: "10+ years"
  }, 
  {
    name: "CSS3",
    experience: "8+ years"
  }, 
  {
    name: "SASS",
    experience: "3+ years"
  },
  {
    name: "Jest/Enzyme",
    experience: "2+ years"
  }
];

const beSkills = [
  {
    name: "Node.js",
    experience: "3+ years"
  },
  {
    name: "C#/.NET",
    experience: "2+ years"
  }, 
  {
    name: "Java",
    experience: "1 year"
  }, 
  {
    name: "SQL Server",
    experience: "2+ years"
  }, 
  {
    name: "MongoDB",
    experience: "1+ years"
  }, 
  {
    name: "Express.js",
    experience: "1+ years"
  }
];

const otherSkills = [
  {
    name: "Microsoft Azure",
    experience: "2+ years"
  },
  {
    name: "Docker",
    experience: "1+ years"
  }, 
  {
    name: "Jenkins",
    experience: "1 year"
  },
  {
    name: "Git",
    experience: "6+ years"
  }
];
