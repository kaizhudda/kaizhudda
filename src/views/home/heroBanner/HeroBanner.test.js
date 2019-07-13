import React from 'react';
import { shallow } from 'enzyme';
import HeroBanner from './HeroBanner';

let wrapped = shallow(<HeroBanner />); 

describe('HeroBanner', () => {
  it('should render the HeroBanner Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain a name', () => {
    expect(wrapped.find('.name').text()).toEqual('Kaiz Hudda');
  });

  it('should contain a role', () => {
    expect(wrapped.find('.title').text()).toEqual('Front-End Developer');
  });
});
