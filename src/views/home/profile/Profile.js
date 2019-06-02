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
        <Experience />
    </div>
  );
}

export default Profile;
