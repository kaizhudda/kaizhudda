import React from 'react';
import { shallow } from 'enzyme';
import SecondaryTitle from './index';

const secondaryTitle = 'Test Secondary Title';
let wrapped = shallow(<SecondaryTitle>{secondaryTitle}</SecondaryTitle>);

describe('SecondaryTitle', () => {
  it('should render the Secondary Title Component', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render the Secondary Titles title', () => {
    expect(wrapped.find('h3').text()).toEqual(secondaryTitle);
  });

});