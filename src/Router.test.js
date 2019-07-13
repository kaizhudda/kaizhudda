import React from 'react';
import { shallow } from 'enzyme';
import Router from './Router';

let wrapped = shallow(<Router />); 

describe('Router', () => {
  it('should render the Router Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain 1 Route', () => {
    expect(wrapped.find('Route').length).toBe(1);
  });
});
