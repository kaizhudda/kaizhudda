import React from 'react';
import { mount } from 'enzyme';
import Social from './index';

let wrapped;
const props = {
  className: 'TitleClass'
};

beforeEach(() => {
  wrapped = mount(<Social {...props} />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Social', () => {
  it('renders the Social Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the p tag that holds the social media icons', () => {
    expect(wrapped.find('p').hasClass(props.className)).toBe(true);
  });

  it('renders 3 <a> tags', () => {
    expect(wrapped.find('a').length).toEqual(3);
  });

});

describe('Social with no className', () => {
  let comp;
  beforeEach(() => {
    comp = mount(<Social />);
  });
  
  afterEach(() => {
    comp.unmount();
  });

  it('renders no className when none is given', () => {
    expect(comp.find('p').hasClass(props.className)).toBe(false);
  });

});