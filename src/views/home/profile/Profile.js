import React from 'react';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';
import SecondaryTitle from '../../../sharedComponents/secondary-title';
import Experience from './experience';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="Profile row center-xs">
      <Title>Work Experience</Title>
      <Subtitle>"I am a great believer in luck, and I find the harder I work the more I have of it." - Stephen Leacock</Subtitle>
      <SecondaryTitle>Career</SecondaryTitle>
      <Experience
        title={'Front-End React Developer (Mid-Level)'}
        companyName={'Spark New Zealand'}
        period={'February 2019 - Present'}
        location={'Auckland, New Zealand'}
        companyLink={'https://spark.co.nz'}
        skills={'React, Redux, ES6/7 JavaScript, HTML5, CSS3/SCSS, Node.js, Jest, Enzyme, Styled components, Git, Azure DevOps'}>
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

        <Experience
          title={'Front End Developer'}
          companyName={'Genesis Energy'}
          period={'March 2017 – February 2019 (2 years)'}
          location={'Auckland, New Zealand'}
          companyLink={'https://genesisenergy.co.nz'}
          skills={'React, Redux, ES6/7 JavaScript, HTML5, CSS3/SCSS, Jest, Enzyme, Node.js, Git, Azure DevOps'}>
            •	Developed & maintained the Energy Management and Customer Self-Service web app from scratch using React, Redux, HTML5, CSS3/SASS, and JavaScript ES6
            <br />
            •	Code reviewed other developers code to ensure code quality and standards are met
            <br />
            •	Created/maintained test scripts with Jest and Enzyme reducing future defects and bugs
            <br />
            •	Worked closely with UI/UX designers to ensure design is translated correctly
            <br />
            •	Worked with Node.js/Express.js/MongoDB backend with Docker microservices to support the Front End
            <br />
            •	Contributed to development of APIs, including, electricity/LPG/natural gas usage data and user data
            <br />
            •	Tracked and managed 2 weekly sprints with JIRA
        </Experience>

        <Experience
          title={'Microsoft Intern'}
          companyName={'Genesis Energy'}
          period={'December 2016 – February 2017 (3 months)'}
          location={'Auckland, New Zealand'}
          companyLink={'https://genesisenergy.co.nz'}
          skills={'HTML5, CSS/SCSS, C#, Visual Studio, JavaScript, VSTS, SQL, Azure'}>
          •	Developed an energy monitoring and management dashboard prototype, using HTML5, CSS3, JavaScript, C#, Visual Studio and Bootstrap
          <br />
          •	Developed an LPG monitoring prototype using Visual Studio in 3 days, saving the company $25K
          <br />
          •	Integrated .NET C# JSON APIs with the Front End
          <br />
          •	Continuously deployed web projects using Microsoft Azure
          <br />
          •	Wrote web automation test scripts in C# and conducted cross browser testing
          <br />
          •	Extracted information from SQL database, to build managerial reports on key user metrics
        </Experience>

        <Experience
          title={'Test Analyst Intern'}
          companyName={'Foster Moore'}
          period={'November 2015 – February 2016 (4 months)'}
          location={'Auckland, New Zealand'}
          companyLink={'https://fostermoore.co.nz'}
          skills={'Selenium, RobotFramework, Python, Jenkins'}>
          •	Converted legacy web automation test scripts using Robot Framework, Selenium & Python
          <br />
          •	Troubleshooted and optimised automation web tests and CI/CD pipelines
          <br />
          •	Continuously deployed test scripts with Jenkins 
          <br />
          •	Customised Jenkins to run and view test results of the latest deployment automatically
        </Experience>

        <Experience
          title={'Software Engineer Intern'}
          companyName={'Orion Health'}
          period={'November 2014 – February 2015 (4 months)'}
          location={'Auckland, New Zealand'}
          companyLink={'https://orionhealth.com'}
          skills={'HTML5, CSS3, Javascript, Cassandra (No SQL), Python3'}>
          •	Converted legacy web automation test scripts using Robot Framework, Selenium & Python
          <br />
          •	Troubleshooted and optimised automation web tests and CI/CD pipelines
          <br />
          •	Continuously deployed test scripts with Jenkins 
          <br />
          •	Customised Jenkins to run and view test results of the latest deployment automatically
        </Experience>

        <SecondaryTitle>Education</SecondaryTitle>
        <Experience
          title={'BSc Computer Science & Information Systems'}
          companyName={'University of Auckland'}
          period={'2014 – 2017'}
          location={'Auckland, New Zealand'}
          companyLink={'https://auckland.ac.nz'}
          education>
        </Experience>

    </div>
  );
}

export default Profile;
