import { shallow } from 'enzyme';
import React from 'react';
import HeadlineTitle from './headline-title';

test('title displays text', () => {
    const title = shallow(<HeadlineTitle text="Some Text" />);
    expect(title.find('div.headline1').text()).toEqual('Some Text');
});
