import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

let wrapped = shallow(<Contact />); 

describe('Contact', () => {
  it('should render the Contact Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain a Title Component', () => {
    expect(wrapped.find('Title').exists()).toBe(true);
  });

  it('should contain an email address', () => {
    expect(wrapped.find('.email').text()).toEqual('kaiz.hudda@gmail.com');
  });
});
