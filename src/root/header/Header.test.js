import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

let wrapped = shallow(<Header />); 
const numberOfLinks = 4;

describe('Header', () => {
  it('should render the Header Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render 4 links', () => {
    expect(wrapped.find('Link').length).toEqual(numberOfLinks)
  });
});
