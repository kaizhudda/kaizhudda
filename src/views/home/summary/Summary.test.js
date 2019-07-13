import React from 'react';
import { mount } from 'enzyme';
import Summary from './Summary';

let props = {
  fetchSummary: jest.fn(),
  summaryData: { fields: { description: 'desc', subtitle: 'subtitle', location: 'location' }}
};
let wrapped;

describe('Summary', () => {
  beforeEach(() => {
    wrapped = mount(<Summary {...props} />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('should render the Summary Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should dispatch the `fetchSummary` action', () => {
    expect(props.fetchSummary).toHaveBeenCalled();
  });

  it('should render description correctly', () => {
    expect(wrapped.find('.description').exists()).toBe(true);
  });

  it('should render subtitle correctly', () => {
    expect(wrapped.find('Subtitle').text()).toEqual(props.summaryData.fields.subtitle);
  });

  it('should render location correctly', () => {
    expect(wrapped.find('.location').text()).toEqual(props.summaryData.fields.location);
  });
});
