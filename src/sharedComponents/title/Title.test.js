import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

const title = 'Test Title';
const props = {
  className: 'title'
};
let wrapped = shallow(<Title {...props}>{title}</Title>); 

describe('Title', () => {
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Titles children', () => {
    expect(wrapped.find('h1').text()).toEqual(title);
  });

  it('renders the Class Name on Title Component', () => {
    expect(wrapped.find('h1').hasClass(props.className)).toBe(true)
  });
});

describe('Title with no ClassName', () => {
  beforeEach(() => {
    wrapped = shallow(<Title>{title}</Title>);
  });

  it('renders the Class Name on Title Component', () => {
    expect(wrapped.find('h1').hasClass(props.className)).toBe(false)
  });
});