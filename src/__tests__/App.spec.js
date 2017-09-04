import React from 'react';
import App from '../App';
import { shallow }from 'enzyme';
import { expect } from 'chai';

describe('First __tests__', () => {
  it('should render a <clock/> element', () => {
    const wrapper = shallow(<App/>);
    console.log(wrapper.debug());
    expect(wrapper.find('Clock')).to.have.length(1);
  });
});