import React from 'react';
import { mount } from 'enzyme';
import Subtitle from './index';

let wrapped;
const subtitle = 'Test Subtitle';

beforeEach(() => {
  wrapped = mount(<Subtitle>{subtitle}</Subtitle>);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Subtitle', () => {
  it('should render the Subtitle Component', () => {
    expect(wrapped.exists()).toBe(true);
  });

  it('should render the Subtitles title', () => {
    expect(wrapped.find('h3').text()).toEqual(subtitle);
  });

});