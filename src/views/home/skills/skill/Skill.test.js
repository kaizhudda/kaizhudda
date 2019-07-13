import React from 'react';
import { shallow } from 'enzyme';
import Skill from './Skill';

const skills = [
  {
    name: "React",
    experience: "3+ years"
  },
  {
    name: "Redux",
    experience: "3+ years"
  },
];
let props = {
  skills,
  category: 'Test'
}
let wrapped = shallow(<Skill {...props} />); 

describe('Skill', () => {
  it('should render the Skill Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render 2 skills', () => {
    expect(wrapped.find('.skill').length).toBe(2);
  });

  it('should render Secondary Title', () => {
    expect(wrapped.find('SecondaryTitle').exists()).toBe(true);
  });
});
