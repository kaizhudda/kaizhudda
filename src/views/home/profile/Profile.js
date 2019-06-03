import React from 'react';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';
import Experience from './experience';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="Profile row center-xs">
      <Title>Work Experience</Title>
      <Subtitle>"I am a great believer in luck, and I find the harder I work the more I have of it." - Stephen Leacock</Subtitle>
      <Experience
        title={'Front-End React Developer (Mid-Level)'}
        companyName={'Spark New Zealand'}
        period={'February 2019 - Present'}
        location={'Auckland, New Zealand'}
        companyLink={'https://spark.co.nz'}
        skills={'React, Redux, ES6/7 JavaScript, HTML5, CSS/SCSS, Jest, Enzyme, Styled components, Git, Azure DevOps'}>
        •	Developed and maintained 5 different customer facing web journeys on Sparks corporate website
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
        </Experience>
    </div>
  );
}

export default Profile;
