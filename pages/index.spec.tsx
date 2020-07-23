import { shallow } from 'enzyme';
import React from 'react';
import Home from '.';

test('index displays title', () => {
    const home = shallow(<Home />);
    expect(home.find('h1').text()).toEqual('Imran Ahmed');
});
