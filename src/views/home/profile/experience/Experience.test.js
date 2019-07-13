import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience';

let props = {
  title: 'Test Title',
  companyName: 'Test Company',
  period: 'Feb - Present',
  location: 'Auckland, NZ',
  companyLink: 'Link.com',
  skills: 'Jest, Enzyme'
};
const children = 'Test Bullet points';
let wrapped = shallow(<Experience  {...props}>{children}</Experience>); 

describe('Experience', () => {
  it('should render the Experience Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render the title', () => {
    expect(wrapped.find('h2').text()).toEqual(props.title);
  });

  it('should render the company Name', () => {
    expect(wrapped.find('h3').text()).toEqual(props.companyName);
  });

  it('should render the period', () => {
    expect(wrapped.find('p').first().text()).toEqual(props.period);
  });

  it('should render the children correctly', () => {
    expect(wrapped.find('.about').text()).toEqual(children);
  });

  it('should render the location correctly', () => {
    expect(wrapped.find('.location').text()).toEqual(props.location);
  });

  it('should render the company Link correctly', () => {
    expect(wrapped.find('a').getElement().props.href).toEqual(props.companyLink);
    expect(wrapped.find('a').text()).toEqual(props.companyLink);
  });

  it('should render the skills correctly', () => {
    expect(wrapped.find('.skills').text()).toEqual(`Key Technologies: ${props.skills}`);
  });

  describe('when education prop is true', () => {
    beforeEach(() => {
      props = {
        ...props,
        education: true
      }
      wrapped = shallow(<Experience  {...props}>{children}</Experience>); 

    });
    it('should not render skills when eduction flag is true', () => {
      expect(wrapped.find('.skills').exists()).toBe(false);
    });
  });
});
