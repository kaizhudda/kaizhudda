import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

let wrapped = shallow(<App />); 

describe('App', () => {
  it('should render the App Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain the Header Component', () => {
    expect(wrapped.find('Header').exists()).toBe(true);
  });

  it('should contain the Routes Component', () => {
    expect(wrapped.find('Routes').exists()).toBe(true);
  });

  it('should contain the React Helmet Component', () => {
    expect(wrapped.find('HelmetWrapper').exists()).toBe(true);
  });
});
