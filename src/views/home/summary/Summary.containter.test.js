import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import Summary from './index';

let wrapped;
const mockStore = configureMockStore([thunk]);
const intitalState = {
  summary: [{ fields: { subtitle: '', description: '', location: '' } }]
}
const props = {
  summaryData: { fields: { subtitle: 'sub', description: 'desc', location: 'local' } }
}

describe('Summary', () => {
  beforeEach(() => {
    const store = mockStore(intitalState);
    wrapped = mount(<Summary store={store} {...props} />);
  });

  it('should render the Summary Container Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should contain summaryData prop', () => {
    expect(wrapped.props().summaryData).toBe(props.summaryData);
  });
});
