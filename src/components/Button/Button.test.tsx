import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('test Button', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders Button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('renders Button inner text', () => {
    const wrapper = shallow(<Button>hehe</Button>);
    expect(wrapper.find('button').text()).toEqual('hehe');
  });
});
