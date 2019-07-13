import React from 'react';
import { shallow } from 'enzyme';
import Subtitle from './index';

const title = 'Test Title';
let wrapped = shallow(<Subtitle>{title}</Subtitle>); 

describe('Title', () => {
  it('should render the Subtitle Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Subtitles children', () => {
    expect(wrapped.find('h3').text()).toEqual(title);
  });
});
