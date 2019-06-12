import React from 'react';
import { mount } from 'enzyme';
import Title from './index';

let wrapped;
const title = 'Test Title';

beforeEach(() => {
  wrapped = mount(<Title>{title}</Title>);
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
});