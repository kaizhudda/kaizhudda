import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

let wrapped = shallow(<Profile />); 

describe('Profile', () => {
  it('should render the Profile Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render the Title Component', () => {
    expect(wrapped.find('Title').exists()).toBe(true);
  });

  it('should render the subtitle component', () => {
    expect(wrapped.find('Subtitle').exists()).toBe(true);    
  });

  it('should render the secondary Title component', () => {
    expect(wrapped.find('SecondaryTitle').exists()).toBe(true);    
  });

  it('should render the Experience component', () => {
    expect(wrapped.find('Experience').length).toBe(6);    
  });
});
