import React from 'react';
import { mount } from 'enzyme';
import Title from './index';

let wrapped;
const title = 'Test Title';
const props = {
  className: 'title'
};

beforeEach(() => {
  wrapped = mount(<Title {...props}>{title}</Title>);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Title', () => {
  it('renders the Title Component', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('renders the Titles children', () => {
    expect(wrapped.find('h1').text()).toEqual(title);
  });

  it('renders the Class Name on Title Component', () => {
    expect(wrapped.find('h1').hasClass(props.className)).toBe(true)
  });
});

describe('Title with no ClassName', () => {
  let comp;
  beforeEach(() => {
    comp = mount(<Title>{title}</Title>);
  });
  
  afterEach(() => {
    comp.unmount();
  });
  

  it('renders the Class Name on Title Component', () => {
    expect(comp.find('h1').hasClass(props.className)).toBe(false)
  });
});