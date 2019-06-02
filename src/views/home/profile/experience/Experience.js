import React from 'react';

import './Experience.scss';

const Experience = () => {
  return (
    <div className="Experience col-xl-5 col-lg-6 col-md-9 col-xs-12">
      <div className="company">
        <h2>Mid Level Front End Developer</h2>
        <h3>Spark New Zealand</h3>
        <p><i className="far fa-clock"></i>February 2019 - Present</p>
      </div>
      <div className="desc">
        <p className="about">
          •	Developed and maintained 5 different customer facing web journeys on Sparks corporate website using React, Redux, ES6/7 JavaScript, HTML5, CSS/SCSS, Styled components, Git
      <br />
          •	Built out Spark’s reusable React component library which heavily reduced code duplication
      <br />

          •	Wrote and refactored unit tests to improve the reliability of the code base, using Jest and Enzyme
      <br />
          •	Defined and implemented best practices and coding standards for the organization to deliver high quality code
      <br />
          •	Worked closely with UI/UX designers to ensure design is translated correctly
      <br />
          •	Worked with AEM developers to seamlessly integrate React.js and add content authoring across journey’s
      <br />
          •	Mentored 3 junior and 2 graduate developers / Pair programming
      <br />
          •	Managed 2 weekly sprints for the frontend team with Azure DevOps
      </p>
        <div className="icons">
          <span className="location"><i class="fas fa-map-marker-alt" />Auckland, New Zealand</span>
          <a href="https://spark.co.nz"> <i className="fas fa-link"></i>https://spark.co.nz </a>
        </div>
      </div>

    </div>
  );
}

export default Experience; 
