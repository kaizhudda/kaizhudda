import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills';

let props = {};
let wrapped = shallow(<Skills {...props} />); 

describe('Skills', () => {
  it('should render the Skills Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render skill components', () => {
    expect(wrapped.find('Skill').length).toBe(3);
  });
});
