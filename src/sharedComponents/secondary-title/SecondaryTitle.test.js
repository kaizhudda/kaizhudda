import React from 'react';
import { mount } from 'enzyme';
import SecondaryTitle from './index';

let wrapped;
const secondaryTitle = 'Test Secondary Title';

beforeEach(() => {
  wrapped = mount(<SecondaryTitle>{secondaryTitle}</SecondaryTitle>);
});

afterEach(() => {
  wrapped.unmount();
});

describe('SecondaryTitle', () => {
  it('should render the Secondary Title Component', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('should render the Secondary Titles title', () => {
    expect(wrapped.find('h3').text()).toEqual(secondaryTitle);
  });

});