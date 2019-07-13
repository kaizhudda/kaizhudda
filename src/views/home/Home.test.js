import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

let wrapped = shallow(<Home />); 

describe('Home', () => {
  it('should render the Home Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render HeroBanner Components', () => {
    const heroBanner = 'HeroBanner';
    expect(wrapped.find(heroBanner).exists()).toBe(true);
  });

  it('should render HeroBanner Components', () => {
    const heroBanner = 'HeroBanner';
    expect(wrapped.find(heroBanner).exists()).toBe(true);
  });

  it('should render Summary Components', () => {
    const summary = 'Connect(Summary)';
    expect(wrapped.find(summary).exists()).toBe(true);
  });

  it('should render Profile Components', () => {
    const profile = 'Profile';
    expect(wrapped.find(profile).exists()).toBe(true);
  });

  it('should render Skills Components', () => {
    const skills = 'Skills';
    expect(wrapped.find(skills).exists()).toBe(true);
  });

  it('should render Contact Components', () => {
    const contacts = 'Contact';
    expect(wrapped.find(contacts).exists()).toBe(true);
  });

});
